import { createClient } from '@supabase/supabase-js';

// Supabase credentials come from environment variables so they can differ
// between local dev and the Vercel deployment. If they're missing the app
// falls back to local-only mode (no login) so development still works.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

// Whether cloud accounts are switched on. When false the app behaves like the
// original single-device version (state lives only in localStorage).
export const cloudEnabled = Boolean(supabase);

// Shared secret required to register. Keeps strangers out during the trial.
// Note: this is a client-side gate (good enough for a private trial), not a
// hard security boundary — Row Level Security is what protects family data.
export const SIGNUP_ACCESS_CODE = import.meta.env.VITE_SIGNUP_ACCESS_CODE || '';
