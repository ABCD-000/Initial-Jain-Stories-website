import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { AuthUser } from '../utils/auth';

interface LayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  user: AuthUser | null;
  onSignOut: () => void;
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/library', label: 'Library' },
  { to: '/dashboard', label: 'Dashboard' },
];

export default function Layout({ children, theme, onToggleTheme, user, onSignOut }: LayoutProps) {
  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(28,118,92,0.12),_transparent_35%),linear-gradient(180deg,#f6f7f2_0%,#eef6f1_100%)] text-slate-800 dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-50 border-b border-emerald-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-500/30">J</div>
              <div>
                <div className="text-lg font-semibold">Jain Stories</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Learning Path</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.filter((item) => item.to === '/' || item.to === '/library' || user).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-300'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {user ? (
                <button type="button" onClick={onSignOut} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-200">
                  Sign out
                </button>
              ) : (
                <Link to="/signin" className="rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500">Sign in</Link>
              )}
              <button
                type="button"
                onClick={onToggleTheme}
                className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-200"
              >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
