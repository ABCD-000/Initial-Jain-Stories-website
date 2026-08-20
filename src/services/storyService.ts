import { allStories } from '../data/stories';
import type { Story } from '../types/story';

const CUSTOM_STORIES_KEY = 'jain-custom-stories';

export const loadCustomStories = (): Story[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_STORIES_KEY);
    return raw ? (JSON.parse(raw) as Story[]) : [];
  } catch {
    return [];
  }
};

export const saveCustomStories = (stories: Story[]) => {
  localStorage.setItem(CUSTOM_STORIES_KEY, JSON.stringify(stories));
};

export const getAllStories = (): Story[] => [...allStories, ...loadCustomStories()];

export const getStoryById = (storyId: string | undefined) =>
  getAllStories().find((story) => story.id === storyId) ?? null;
