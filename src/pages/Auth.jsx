import { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase, cloudEnabled, SIGNUP_ACCESS_CODE } from '../lib/supabase';
import { useAuth } from '../auth/AuthProvider';

const serif = { fontFamily: "'Playfair Display', serif" };
const inputCls =
  'w-full rounded-2xl border border-[#1A2B3C]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C4704F]/60';

export default function Auth() {
  const navigate = useNavigate();
  const { session, loading: authLoading } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  // Already signed in → go to the app.
  if (!authLoading && session) return <Navigate to="/app/planner" replace />;

  if (!cloudEnabled) {
    return (
      <Shell>
        <p className="text-center text-sm text-[#1A2B3C]/70">
          Accounts aren&apos;t configured yet. Add your Supabase keys to enable logins,
          or <Link to="/app/planner" className="font-semibold text-[#C4704F]">continue locally</Link>.
        </p>
      </Shell>
    );
  }

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');

    if (mode === 'signup' && SIGNUP_ACCESS_CODE && accessCode.trim() !== SIGNUP_ACCESS_CODE) {
      setError('That access code isn\'t right. Ask whoever invited you.');
      return;
    }

    setBusy(true);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        navigate('/app/planner', { replace: true });
      } else {
        const { data, error } = await supabase.auth.signUp({ email: email.trim(), password });
        if (error) throw error;
        // If email confirmation is on, there's no session yet.
        if (!data.session) {
          setInfo('Account created! Check your email to confirm, then log in.');
          setMode('login');
        } else {
          navigate('/app/planner', { replace: true });
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Shell>
      <h1 className="text-center text-3xl font-semibold" style={serif}>
        {mode === 'login' ? 'Welcome back' : 'Create your account'}
      </h1>
      <p className="mt-1.5 text-center text-sm text-[#1A2B3C]/55">
        {mode === 'login'
          ? 'Log in to your family\'s meal plans.'
          : 'Your own private space for your baby\'s journey.'}
      </p>

      <form onSubmit={submit} className="mt-7 space-y-3">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Email</label>
          <input
            type="email" required value={email} autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com" className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Password</label>
          <input
            type="password" required value={password} minLength={6}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters" className={inputCls}
          />
        </div>
        {mode === 'signup' && SIGNUP_ACCESS_CODE && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Access code</label>
            <input
              type="text" required value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="The code you were given" className={inputCls}
            />
          </div>
        )}

        {error && <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        {info && <p className="rounded-xl bg-green-50 px-3 py-2 text-sm text-green-700">{info}</p>}

        <button
          type="submit" disabled={busy}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C4704F] py-3.5 text-base font-semibold text-white shadow-lg shadow-[#C4704F]/25 transition enabled:hover:bg-[#b06343] disabled:opacity-50"
        >
          {busy && <Loader2 size={18} className="animate-spin" />}
          {mode === 'login' ? 'Log in' : 'Sign up'}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-[#1A2B3C]/55">
        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
        <button
          onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setInfo(''); }}
          className="font-semibold text-[#C4704F] hover:underline"
        >
          {mode === 'login' ? 'Sign up' : 'Log in'}
        </button>
      </p>
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDF6EC] px-5 py-10">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold" style={serif}>
          <span>🥄</span> <span className="text-gradient">Little Spoons</span>
        </Link>
        <div className="rounded-3xl bg-white p-7 shadow-xl shadow-[#1A2B3C]/5">{children}</div>
      </div>
    </div>
  );
}
