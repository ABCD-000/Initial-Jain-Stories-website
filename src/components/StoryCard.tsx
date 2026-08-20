import { Link } from 'react-router-dom';
import type { Story } from '../types/story';

interface StoryCardProps {
  story: Story;
  progressLabel?: string;
}

export default function StoryCard({ story, progressLabel }: StoryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
          {story.category}
        </span>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{story.difficulty}</span>
      </div>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{story.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{story.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>{story.estimatedMinutes} min</span>
        <span>{story.sections.reduce((total, section) => total + section.questions.length, 0)} questions</span>
      </div>

      {progressLabel && (
        <div className="mt-4 rounded-xl bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {progressLabel}
        </div>
      )}

      <Link
        to={`/story/${story.id}`}
        className="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        Read & Learn
      </Link>
    </article>
  );
}
