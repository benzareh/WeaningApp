import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { supabase, cloudEnabled } from '../lib/supabase';
import { loadFamilyData, saveFamilyData } from '../lib/sync';
import useStore, { getSyncSlice } from '../store/useStore';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // resolving session + cloud data
  const userIdRef = useRef(null);
  const syncReady = useRef(false); // gate saves until after initial hydrate
  const saveTimer = useRef(null);

  const loadState = useStore((s) => s.loadState);
  const resetAll = useStore((s) => s.resetAll);

  // When a session appears, pull this family's document into the store.
  async function hydrateForUser(userId) {
    syncReady.current = false;
    const cloud = await loadFamilyData(userId);
    if (cloud) {
      loadState(cloud);
    } else {
      // Brand-new account: start fresh and create the row.
      resetAll();
      await saveFamilyData(userId, getSyncSlice(useStore.getState()));
    }
    userIdRef.current = userId;
    syncReady.current = true;
  }

  useEffect(() => {
    if (!cloudEnabled) {
      // Local-only mode — no accounts, persisted state stays in localStorage.
      setLoading(false);
      return;
    }

    let active = true;

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      setSession(data.session);
      if (data.session?.user) await hydrateForUser(data.session.user.id);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession);
      if (event === 'SIGNED_IN' && newSession?.user) {
        if (userIdRef.current !== newSession.user.id) await hydrateForUser(newSession.user.id);
      } else if (event === 'SIGNED_OUT') {
        syncReady.current = false;
        userIdRef.current = null;
        resetAll();
      }
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced push of state changes to the cloud.
  useEffect(() => {
    if (!cloudEnabled) return;
    const unsub = useStore.subscribe((state) => {
      if (!syncReady.current || !userIdRef.current) return;
      clearTimeout(saveTimer.current);
      const slice = getSyncSlice(state);
      const uid = userIdRef.current;
      saveTimer.current = setTimeout(() => saveFamilyData(uid, slice), 800);
    });
    return () => {
      clearTimeout(saveTimer.current);
      unsub();
    };
  }, []);

  const signOut = async () => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      // Flush any pending changes before leaving.
      if (syncReady.current && userIdRef.current) {
        await saveFamilyData(userIdRef.current, getSyncSlice(useStore.getState()));
      }
    }
    await supabase?.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
