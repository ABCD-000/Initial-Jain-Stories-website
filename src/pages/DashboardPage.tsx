import type { Story } from '../types/story';

interface DashboardPageProps {
  storage: any;
  stories: Story[];
}

export default function DashboardPage({ storage, stories }: DashboardPageProps) {
  const attempts = storage.attempts ?? [];
  const completedStories = Object.keys(storage.completedStories ?? {}).length;
  const totalQuestions = stories.reduce((total, story) => total + story.sections.reduce((sectionTotal, section) => sectionTotal + section.questions.length, 0), 0);
  const averageAccuracy = attempts.length
    ? Math.round(attempts.reduce((sum: number, attempt: any) => sum + attempt.percentage, 0) / attempts.length)
    : 0;
  const bestScore = attempts.length ? Math.max(...attempts.map((attempt: any) => attempt.percentage)) : 0;
  const recentAttempts = attempts.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-4">
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Stories completed</p>
          <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{completedStories}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Questions answered</p>
          <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{attempts.reduce((sum: number, attempt: any) => sum + (attempt.correct + attempt.incorrect + attempt.skipped), 0)}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Overall accuracy</p>
          <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{averageAccuracy}%</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Best score</p>
          <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{bestScore}%</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Recent attempts</h2>
          <div className="mt-5 space-y-3">
            {recentAttempts.length ? recentAttempts.map((attempt: any) => (
              <div key={`${attempt.storyId}-${attempt.completedAt}`} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                <div>
                  <div className="font-medium text-slate-800 dark:text-white">{attempt.storyTitle}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{new Date(attempt.completedAt).toLocaleDateString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-600">{attempt.percentage}%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{attempt.correct}/{attempt.correct + attempt.incorrect + attempt.skipped}</div>
                </div>
              </div>
            )) : <p className="text-slate-500 dark:text-slate-400">No attempts yet. Start with a story to build your streak.</p>}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Learning streak</h2>
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-5 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-100">Current streak</p>
            <p className="mt-3 text-5xl font-bold">{Math.min(attempts.length, 7)}</p>
            <p className="mt-2 text-emerald-100">Days of mindful learning</p>
          </div>
          <div className="mt-5 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between"><span>Total available questions</span><span>{totalQuestions}</span></div>
            <div className="mt-2 flex items-center justify-between"><span>Best score</span><span>{bestScore}%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
