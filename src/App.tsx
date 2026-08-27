import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import StoryReaderPage from './pages/StoryReaderPage';
import DashboardPage from './pages/DashboardPage';
import ResultsPage from './pages/ResultsPage';
import SignInPage from './pages/SignInPage';
import { allStories, getStoryById } from './data/stories';
import type { QuizAttempt, StoryResult } from './types/story';
import { addAttempt, completeStory, getTheme, loadStorage, saveTheme, setBestScore, updateProgress } from './utils/storage';
import { buildResult } from './utils/quiz';
import { loadAuthUser, signIn, signOut } from './utils/auth';

interface ProtectedRouteProps {
  isSignedIn: boolean;
  children: ReactNode;
}

function ProtectedRoute({ isSignedIn, children }: ProtectedRouteProps) {
  return isSignedIn ? children : <Navigate to="/signin" replace />;
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme());
  const [user, setUser] = useState(loadAuthUser());
  const [storageState, setStorageState] = useState(() => loadStorage(user?.username));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.style.background = theme === 'dark' ? '#020817' : '#f5f7f2';
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    setStorageState(loadStorage(user?.username));
  }, [theme, user]);

  const saveAttempt = (storyId: string, result: StoryResult) => {
    const attempt: QuizAttempt = {
      storyId,
      storyTitle: result.title,
      score: result.score,
      totalMarks: result.totalMarks,
      percentage: result.percentage,
      correct: result.correct,
      incorrect: result.incorrect,
      skipped: result.skipped,
      completedAt: new Date().toISOString(),
      durationSeconds: result.durationSeconds,
      answers: result.answers,
    };

    addAttempt(attempt, user?.username);
    setBestScore(storyId, result.score, user?.username);
    completeStory(storyId, user?.username);
    setStorageState(loadStorage(user?.username));
  };

  const handleSubmitQuiz = (storyId: string, answers: Record<string, number | null>, durationSeconds: number) => {
    const story = getStoryById(storyId);
    if (!story) return;

    const result = buildResult(story, answers, durationSeconds, new Date().toISOString());
    saveAttempt(storyId, result);
    updateProgress(storyId, {
      storyId,
      currentSectionIndex: story.sections.length,
      completedSections: story.sections.map((_, index) => index),
      answers,
      startedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isCompleted: true,
      score: result.score,
      totalMarks: result.totalMarks,
      percentage: result.percentage,
    }, user?.username);
  };

  return (
    <BrowserRouter>
      <Layout
        theme={theme}
        user={user}
        onSignOut={() => {
          signOut();
          setUser(null);
            setStorageState(loadStorage());
        }}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      >
        <Routes>
          <Route path="/" element={<HomePage stories={allStories} storage={storageState} isSignedIn={Boolean(user)} />} />
          <Route path="/library" element={<LibraryPage stories={allStories} storage={storageState} />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/dashboard" replace /> : <SignInPage onSignedIn={(nextUser) => { signIn(nextUser); setUser(nextUser); }} />}
          />
          <Route path="/story/:storyId" element={<StoryReaderPage stories={allStories} storage={storageState} username={user?.username} isSignedIn={Boolean(user)} onSubmitQuiz={handleSubmitQuiz} />} />
          <Route path="/results/:storyId" element={<ProtectedRoute isSignedIn={Boolean(user)}><ResultsPage stories={allStories} storage={storageState} /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute isSignedIn={Boolean(user)}><DashboardPage storage={storageState} stories={allStories} /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
