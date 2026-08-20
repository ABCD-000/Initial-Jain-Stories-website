import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import type { Story } from '../types/story';
import { updateProgress } from '../utils/storage';

interface StoryReaderPageProps {
  stories: Story[];
  storage: any;
  isSignedIn: boolean;
  onSubmitQuiz: (storyId: string, answers: Record<string, number | null>, durationSeconds: number) => void;
}

export default function StoryReaderPage({ stories, storage, isSignedIn, onSubmitQuiz }: StoryReaderPageProps) {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const story = stories.find((item) => item.id === storyId) ?? null;
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [startedAt] = useState(Date.now());

  useEffect(() => {
    if (!story) return;
    const saved = storage.progress?.[story.id];
    if (isSignedIn && saved) {
      setCurrentSectionIndex(saved.currentSectionIndex ?? 0);
      setSelectedAnswers(saved.answers ?? {});
    }
  }, [isSignedIn, story, storage]);

  useEffect(() => {
    if (!story || !isSignedIn) return;
    updateProgress(story.id, {
      storyId: story.id,
      currentSectionIndex,
      completedSections: [currentSectionIndex],
      answers: selectedAnswers,
      startedAt: new Date(startedAt).toISOString(),
      updatedAt: new Date().toISOString(),
      isCompleted: false,
      score: 0,
      totalMarks: 0,
      percentage: 0,
    });
  }, [currentSectionIndex, isSignedIn, selectedAnswers, story, startedAt]);

  if (!story) {
    return <div className="rounded-3xl bg-white p-8 text-center dark:bg-slate-900">Story not found.</div>;
  }

  const allQuestions = story.sections.flatMap((section) => section.questions);
  const currentSection = story.sections[currentSectionIndex];
  const answeredCount = Object.values(selectedAnswers).filter((answer) => answer !== null && answer !== undefined).length;
  const percentProgress = (currentSectionIndex / story.sections.length) * 100;

  const handleOptionChange = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  };

  const handleNextSection = () => {
    if (currentSectionIndex < story.sections.length - 1) {
      setCurrentSectionIndex((index) => index + 1);
      return;
    }

    const durationSeconds = Math.max(1, Math.floor((Date.now() - startedAt) / 1000));
    onSubmitQuiz(story.id, selectedAnswers, durationSeconds);
    navigate(`/results/${story.id}`);
  };

  const currentQuestionIds = currentSection?.questions.map((q) => q.id) ?? [];
  const currentQuestionsAnswered = currentQuestionIds.filter((id) => selectedAnswers[id] !== undefined && selectedAnswers[id] !== null).length;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link to="/library" className="text-sm font-medium text-emerald-600">← Back to library</Link>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            {story.category}
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">{story.title}</h1>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span>{story.sections.length} sections</span>
          <span>{allQuestions.length} questions</span>
          <span>{answeredCount} answered</span>
        </div>
        <div className="mt-4 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${percentProgress}%` }} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">{currentSection.title}</h2>
          <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-700 dark:text-slate-200">{currentSection.passage}</p>
        </article>

        <aside className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Reading progress</h3>
          <div className="mt-4 space-y-3">
            {story.sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setCurrentSectionIndex(index)}
                className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2 text-left text-sm ${
                  index === currentSectionIndex
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200'
                    : 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{section.title}</span>
                <span>{index + 1}/{story.sections.length}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>

      {isSignedIn ? <section className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Comprehension check</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {currentQuestionsAnswered}/{currentSection.questions.length} answered in this section
          </span>
        </div>

        <div className="space-y-6">
          {currentSection.questions.map((question, questionIndex) => (
            <div key={question.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="mb-3 text-base font-medium text-slate-800 dark:text-white">
                {questionIndex + 1}. {question.question}
              </p>
              <div className="grid gap-3">
                {question.options.map((option, optionIndex) => {
                  const selected = selectedAnswers[question.id] === optionIndex;
                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-3 py-3 transition ${
                        selected
                          ? 'border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950/40'
                          : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        checked={selected}
                        onChange={() => handleOptionChange(question.id, optionIndex)}
                        className="mt-1 h-4 w-4 accent-emerald-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-200">{option}</span>
                    </label>
                  );
                })}
              </div>
              {question.explanation && (
                <div className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                  Hint: {question.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between gap-3">
          <button
            type="button"
            onClick={() => setCurrentSectionIndex((index) => Math.max(0, index - 1))}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextSection}
            className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            {currentSectionIndex === story.sections.length - 1 ? 'Submit story' : 'Continue'}
          </button>
        </div>
      </section> : (
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Sign in to continue learning</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-200">You can read this story without an account. Sign in to answer the questions, save progress, and see your results.</p>
          <Link to="/signin" className="mt-5 inline-block rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500">Sign in to take the quiz</Link>
        </section>
      )}
    </div>
  );
}
