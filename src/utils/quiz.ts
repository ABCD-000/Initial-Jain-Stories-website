import type { Story, StoryQuestion, StoryResult } from '../types/story';

export const questionDifficultyMarks: Record<string, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const getStoryQuestionCount = (story: Story) =>
  story.sections.reduce((total, section) => total + section.questions.length, 0);

export const shuffleQuestions = <T,>(items: T[]) => {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getPerformanceLabel = (percentage: number) => {
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 80) return 'Very Good';
  if (percentage >= 70) return 'Good';
  if (percentage >= 60) return 'Needs Improvement';
  return 'Keep Practicing';
};

export const calculateScore = (questions: StoryQuestion[], answers: Record<string, number | null>) => {
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;

  questions.forEach((question) => {
    const selected = answers[question.id] ?? null;
    if (selected === null) {
      skipped += 1;
      return;
    }

    if (selected === question.correctAnswer) {
      correct += 1;
      score += question.marks;
    } else {
      incorrect += 1;
    }
  });

  const totalMarks = questions.reduce((sum, question) => sum + question.marks, 0);
  const percentage = totalMarks === 0 ? 0 : Math.round((score / totalMarks) * 100);

  return { score, totalMarks, percentage, correct, incorrect, skipped };
};

export const buildResult = (story: Story, answers: Record<string, number | null>, durationSeconds: number, completedAt: string): StoryResult => {
  const flatQuestions = story.sections.flatMap((section) => section.questions);
  const stats = calculateScore(flatQuestions, answers);
  const entries = flatQuestions.map((question) => ({
    questionId: question.id,
    selectedAnswer: answers[question.id] ?? null,
    correctAnswer: question.correctAnswer,
    isCorrect: (answers[question.id] ?? null) === question.correctAnswer,
    marks: question.marks,
    explanation: question.explanation,
    question: question.question,
    options: question.options,
  }));

  return {
    storyId: story.id,
    title: story.title,
    percentage: stats.percentage,
    score: stats.score,
    totalMarks: stats.totalMarks,
    correct: stats.correct,
    incorrect: stats.incorrect,
    skipped: stats.skipped,
    durationSeconds,
    completedAt,
    answers: entries,
  };
};
