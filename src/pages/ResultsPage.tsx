import { Link, useParams } from 'react-router-dom';
import { getPerformanceLabel } from '../utils/quiz';

interface ResultsPageProps {
  stories: any[];
  storage: any;
}

export default function ResultsPage({ stories, storage }: ResultsPageProps) {
  const { storyId } = useParams();
  const story = stories.find((item) => item.id === storyId) ?? null;
  const attempts = storage.attempts ?? [];
  const latestAttempt = attempts.find((attempt: any) => attempt.storyId === storyId) ?? null;
  const reviewMap = Object.fromEntries((latestAttempt?.answers ?? []).map((entry: any) => [entry.questionId, entry]));

  if (!story || !latestAttempt) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">No result yet</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Complete a story to see your score and review.</p>
        <Link to="/library" className="mt-5 inline-block rounded-2xl bg-emerald-600 px-5 py-3 text-white">Browse stories</Link>
      </div>
    );
  }

  const performance = getPerformanceLabel(latestAttempt.percentage);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Results</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{story.title}</h1>
          </div>
          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            {performance}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Score</p>
            <p className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">{latestAttempt.score}/{latestAttempt.totalMarks}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Percentage</p>
            <p className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">{latestAttempt.percentage}%</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Correct</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">{latestAttempt.correct}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Incorrect</p>
            <p className="mt-2 text-2xl font-bold text-rose-500">{latestAttempt.incorrect}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Skipped</p>
            <p className="mt-2 text-2xl font-bold text-amber-500">{latestAttempt.skipped}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Question review</h2>
        <div className="mt-5 space-y-4">
          {story.sections.flatMap((section: any) => section.questions).map((question: any, index: number) => {
            const review = reviewMap[question.id];
            const selected = review?.selectedAnswer ?? null;
            const isCorrect = review?.isCorrect ?? false;
            return (
              <div key={question.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-800 dark:text-white">{index + 1}. {question.question}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {isCorrect ? 'Correct' : 'Review'}
                  </span>
                </div>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>Your answer: {selected === null ? 'No answer selected' : question.options[selected]}</p>
                  <p className="mt-1">Correct answer: {question.options[question.correctAnswer]}</p>
                  <p className="mt-3 text-emerald-700 dark:text-emerald-300">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/library" className="rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white">Explore more stories</Link>
        <Link to={`/story/${story.id}`} className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">Retake story</Link>
      </div>
    </div>
  );
}
