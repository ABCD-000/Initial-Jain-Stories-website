const AUTH_STORAGE_KEY = 'jain-story-auth';

export interface AuthUser {
  username: string;
}

interface StoredAccount extends AuthUser {
  password: string;
}

const ACCOUNTS_STORAGE_KEY = 'jain-story-accounts';

const loadAccounts = (): StoredAccount[] => {
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredAccount[]) : [];
  } catch {
    return [];
  }
};

export const loadAuthUser = (): AuthUser | null => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AuthUser>;
    return typeof parsed.username === 'string' && parsed.username.trim() ? { username: parsed.username } : null;
  } catch {
    return null;
  }
};

export const signIn = (user: AuthUser) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
};

export const authenticate = (username: string, password: string): AuthUser | null => {
  const account = loadAccounts().find((item) => item.username === username.trim());
  return account && account.password === password ? { username: account.username } : null;
};

export const register = (username: string, password: string): { user?: AuthUser; error?: string } => {
  const normalizedUsername = username.trim();
  const accounts = loadAccounts();
  if (accounts.some((item) => item.username.toLowerCase() === normalizedUsername.toLowerCase())) {
    return { error: 'That username is already taken.' };
  }

  const user = { username: normalizedUsername };
  localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify([...accounts, { ...user, password }]));
  return { user };
};

export const signOut = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
