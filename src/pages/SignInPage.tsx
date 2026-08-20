import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticate, register } from '../utils/auth';
import type { AuthUser } from '../utils/auth';

interface SignInPageProps {
  onSignedIn: (user: AuthUser) => void;
}

export default function SignInPage({ onSignedIn }: SignInPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || password.length < 4) {
      setError('Enter a username and a password with at least 4 characters.');
      return;
    }

    let user: AuthUser | null = null;
    if (mode === 'signup') {
      const result = register(username, password);
      if (result.error || !result.user) {
        setError(result.error ?? 'Unable to create the account.');
        return;
      }
      user = result.user;
    } else {
      user = authenticate(username, password);
      if (!user) {
        setError('Username or password is incorrect.');
        return;
      }
    }

    onSignedIn(user);
    const destination = new URLSearchParams(location.search).get('next') ?? '/dashboard';
    navigate(destination);
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Your learning space</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white">{mode === 'signin' ? 'Sign in to save progress' : 'Create your learner account'}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Reading is always available. Sign in to answer quizzes, save your place, view results, and track your learning.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Username
            <input
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              placeholder="jain_learner"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Password
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              placeholder="At least 4 characters"
            />
          </label>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button type="submit" className="w-full rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500">
            {mode === 'signin' ? 'Sign in' : 'Sign up'}
          </button>
        </form>

        <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">
          This local account stays in this browser until a real authentication service is connected.
        </p>
        <button
          type="button"
          onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
          className="mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
        >
          {mode === 'signin' ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}
