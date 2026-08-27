export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface StoryQuestion {
  id: string;
  question: string;
  questionHindi?: string;
  options: string[];
  optionsHindi?: string[];
  correctAnswer: number;
  marks: number;
  difficulty: QuestionDifficulty;
  explanation: string;
}

export interface StorySection {
  id: string;
  title: string;
  passage: string;
  passageHindi?: string;
  questions: StoryQuestion[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  sections: StorySection[];
}

export interface StoryProgress {
  storyId: string;
  currentSectionIndex: number;
  completedSections: number[];
  answers: Record<string, number | null>;
  startedAt: string;
  updatedAt: string;
  isCompleted: boolean;
  score: number;
  totalMarks: number;
  percentage: number;
}

export interface QuizAttempt {
  storyId: string;
  storyTitle: string;
  score: number;
  totalMarks: number;
  percentage: number;
  correct: number;
  incorrect: number;
  skipped: number;
  completedAt: string;
  durationSeconds: number;
  answers?: StoryResult['answers'];
}

export interface StoryResult {
  storyId: string;
  title: string;
  percentage: number;
  score: number;
  totalMarks: number;
  correct: number;
  incorrect: number;
  skipped: number;
  durationSeconds: number;
  completedAt: string;
  answers: Array<{
    questionId: string;
    selectedAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    marks: number;
    explanation: string;
    question: string;
    options: string[];
  }>;
}
