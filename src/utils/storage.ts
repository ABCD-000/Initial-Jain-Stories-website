const STORAGE_KEY = 'jain-story-learning';

const getStorageKey = (username?: string) => username ? `${STORAGE_KEY}:${encodeURIComponent(username.trim().toLowerCase())}` : STORAGE_KEY;

export type ThemeMode = 'light' | 'dark';

export interface AppStorage {
  theme: ThemeMode;
  progress: Record<string, any>;
  completedStories: Record<string, boolean>;
  attempts: any[];
  bestScores: Record<string, number>;
}

const defaultStorage: AppStorage = {
  theme: 'light',
  progress: {},
  completedStories: {},
  attempts: [],
  bestScores: {},
};

export const loadStorage = (username?: string): AppStorage => {
  const storageKey = getStorageKey(username);
  try {
    let raw = localStorage.getItem(storageKey);
    if (!raw && username) {
      raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        localStorage.setItem(storageKey, raw);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    if (!raw) return defaultStorage;
    const parsed = JSON.parse(raw) as Partial<AppStorage>;
    return {
      ...defaultStorage,
      ...parsed,
      progress: parsed.progress ?? {},
      completedStories: parsed.completedStories ?? {},
      attempts: parsed.attempts ?? [],
      bestScores: parsed.bestScores ?? {},
    };
  } catch {
    return defaultStorage;
  }
};

export const saveStorage = (data: Partial<AppStorage>, username?: string) => {
  const current = loadStorage(username);
  const next = { ...current, ...data };
  localStorage.setItem(getStorageKey(username), JSON.stringify(next));
  return next;
};

export const saveTheme = (theme: ThemeMode) => {
  saveStorage({ theme });
};

export const getTheme = (): ThemeMode => loadStorage().theme;

export const updateProgress = (storyId: string, progress: Record<string, any>, username?: string) => {
  const storage = loadStorage(username);
  storage.progress[storyId] = progress;
  saveStorage({ progress: storage.progress }, username);
};

export const completeStory = (storyId: string, username?: string) => {
  const storage = loadStorage(username);
  storage.completedStories[storyId] = true;
  saveStorage({ completedStories: storage.completedStories }, username);
};

export const addAttempt = (attempt: any, username?: string) => {
  const storage = loadStorage(username);
  const nextAttempts = [attempt, ...storage.attempts].slice(0, 20);
  saveStorage({ attempts: nextAttempts }, username);
};

export const setBestScore = (storyId: string, score: number, username?: string) => {
  const storage = loadStorage(username);
  const currentBest = storage.bestScores[storyId] ?? 0;
  if (score > currentBest) {
    storage.bestScores[storyId] = score;
    saveStorage({ bestScores: storage.bestScores }, username);
  }
};
