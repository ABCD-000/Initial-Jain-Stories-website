const STORAGE_KEY = 'jain-story-learning';

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

export const loadStorage = (): AppStorage => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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

export const saveStorage = (data: Partial<AppStorage>) => {
  const current = loadStorage();
  const next = { ...current, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const saveTheme = (theme: ThemeMode) => {
  saveStorage({ theme });
};

export const getTheme = (): ThemeMode => loadStorage().theme;

export const updateProgress = (storyId: string, progress: Record<string, any>) => {
  const storage = loadStorage();
  storage.progress[storyId] = progress;
  saveStorage({ progress: storage.progress });
};

export const completeStory = (storyId: string) => {
  const storage = loadStorage();
  storage.completedStories[storyId] = true;
  saveStorage({ completedStories: storage.completedStories });
};

export const addAttempt = (attempt: any) => {
  const storage = loadStorage();
  const nextAttempts = [attempt, ...storage.attempts].slice(0, 20);
  saveStorage({ attempts: nextAttempts });
};

export const setBestScore = (storyId: string, score: number) => {
  const storage = loadStorage();
  const currentBest = storage.bestScores[storyId] ?? 0;
  if (score > currentBest) {
    storage.bestScores[storyId] = score;
    saveStorage({ bestScores: storage.bestScores });
  }
};
