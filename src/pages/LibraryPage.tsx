import { useMemo, useState } from 'react';
import StoryCard from '../components/StoryCard';
import type { Story } from '../types/story';

interface LibraryPageProps {
  stories: Story[];
  storage: any;
}

export default function LibraryPage({ stories, storage }: LibraryPageProps) {
  const allCategories = ['All', ...Array.from(new Set(stories.map((story: Story) => story.category)))];
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesSearch = story.title.toLowerCase().includes(query.toLowerCase()) || story.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || story.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [query, selectedCategory, selectedDifficulty, stories]);

  const getProgressLabel = (storyId: string) => {
    if (storage.completedStories?.[storyId]) return 'Completed';
    if (storage.progress?.[storyId]) return 'In Progress';
    return 'Not Started';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Story library</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">Browse and continue your learning</h1>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{filteredStories.length} stories</div>
      </div>

      <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[2fr_1fr_1fr]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search stories and topics"
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          {allCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(event) => setSelectedDifficulty(event.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} progressLabel={getProgressLabel(story.id)} />
        ))}
      </div>
    </div>
  );
}
