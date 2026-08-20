import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import StoryCard from '../components/StoryCard';
import type { Story } from '../types/story';

interface HomePageProps {
  stories: Story[];
  storage: any;
  isSignedIn: boolean;
}

export default function HomePage({ stories, storage, isSignedIn }: HomePageProps) {
  const completedCount = Object.keys(storage.completedStories ?? {}).length;
  const inProgress = Object.keys(storage.progress ?? {}).length;
  const featured = stories.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 p-8 text-white shadow-2xl shadow-emerald-500/20 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">Jain wisdom in motion</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Learn compassion through stories.</h1>
            <p className="mt-4 max-w-xl text-base text-emerald-50 md:text-lg">
              Read Jain tales, reflect on each lesson, and test your understanding with thoughtful multiple-choice questions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/library"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Start Learning
              </Link>
              <Link
                to="/dashboard"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                View Progress
              </Link>
            </div>
          </div>
          {isSignedIn && <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-emerald-100">Learning summary</span>
              <span className="rounded-full bg-white/15 px-2 py-1 text-xs font-medium">Live</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-emerald-100">Stories explored</p>
                <p className="mt-1 text-4xl font-bold">{completedCount}</p>
              </div>
              <div>
                <p className="text-sm text-emerald-100">In progress</p>
                <p className="mt-1 text-4xl font-bold">{inProgress}</p>
              </div>
            </div>
          </div>}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Featured stories</h2>
          <Link to="/library" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
            Explore all stories
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              progressLabel={isSignedIn && storage.completedStories?.[story.id] ? 'Completed' : isSignedIn && storage.progress?.[story.id] ? 'Resume' : 'New'}
            />
          ))}
        </div>
      </section>

      {isSignedIn && <section className="grid gap-5 md:grid-cols-3">
        <StatCard label="Stories completed" value={String(completedCount)} accent="emerald" />
        <StatCard label="Saved progress" value={String(inProgress)} accent="amber" />
        <StatCard label="Available stories" value={String(stories.length)} accent="sky" />
      </section>}
    </div>
  );
}
