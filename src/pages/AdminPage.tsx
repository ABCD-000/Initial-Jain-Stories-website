import { useState } from 'react';
import type { Story } from '../types/story';
import { loadCustomStories, saveCustomStories } from '../services/storyService';

interface AdminPageProps {
  stories: Story[];
}

const emptyStory: Story = {
  id: 'custom-story',
  title: 'New Jain Story',
  description: 'Add a new story to expand the learning library.',
  category: 'Values',
  difficulty: 'beginner',
  estimatedMinutes: 5,
  sections: [
    {
      id: 'section-1',
      title: 'Section 1',
      passage: 'Write a story passage here.',
      questions: [
        {
          id: 'question-1',
          question: 'What is the key lesson?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 0,
          marks: 1,
          difficulty: 'easy',
          explanation: 'Explain why the correct answer fits the story.',
        },
      ],
    },
  ],
};

export default function AdminPage(_: AdminPageProps) {
  const [draft, setDraft] = useState<Story>(emptyStory);
  const [message, setMessage] = useState('');

  const addStory = () => {
    const custom = loadCustomStories();
    const next = [...custom, { ...draft, id: draft.id || `story-${Date.now()}` }];
    saveCustomStories(next);
    setMessage('Story saved in LocalStorage. Refresh the library to see it.');
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Admin: add or edit stories</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Use this lightweight editor to add new stories and question sets without a backend.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Story title
              <input
                value={draft.title}
                onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Description
              <textarea
                value={draft.description}
                onChange={(event) => setDraft({ ...draft, description: event.target.value })}
                className="mt-1 min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Category
                <input
                  value={draft.category}
                  onChange={(event) => setDraft({ ...draft, category: event.target.value })}
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Difficulty
                <select
                  value={draft.difficulty}
                  onChange={(event) => setDraft({ ...draft, difficulty: event.target.value as Story['difficulty'] })}
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Content manager</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This is designed so you can expand story data and keep questions aligned to each passage.</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Add story metadata, sections, and passages.</li>
            <li>• Create 4-answer MCQs with explanations.</li>
            <li>• Keep the question content anchored to what is explicitly stated in the story.</li>
            <li>• Store everything in LocalStorage for easy editing.</li>
          </ul>

          <button
            type="button"
            onClick={addStory}
            className="mt-6 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Save story to LocalStorage
          </button>
          {message && <p className="mt-4 text-sm text-emerald-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
