import type { Story, StoryQuestion } from '../types/story';

const clampQuestionCount = (count: number) => Math.min(10, Math.max(5, count));

const toSentenceArray = (text: string) =>
  text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

const buildQuestionFromSentence = (sectionTitle: string, sentence: string): StoryQuestion | null => {
  const normalized = sentence.trim();
  if (!normalized) return null;

  if (normalized.includes('did not') || normalized.includes('chose') || normalized.includes('continued')) {
    const action = normalized.match(/(?:did not|chose|continued|turned away|walked quietly|stopped and listened)/i)?.[0] ?? 'the action';
    return {
      id: `${sectionTitle.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-generated`,
      question: `What action is described in the passage about ${sectionTitle}?`,
      options: [
        `The story shows ${action.toLowerCase()} instead of force.`,
        'The story suggests leaving the place immediately.',
        'The story says no one acted at all.',
        'The story shows a sudden argument.',
      ],
      correctAnswer: 0,
      marks: 1,
      difficulty: 'easy',
      explanation: `This question is based directly on the sentence: "${normalized}". It reflects the explicit action described in the story.`,
    };
  }

  if (normalized.includes('learned') || normalized.includes('began') || normalized.includes('became')) {
    return {
      id: `${sectionTitle.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-generated-2`,
      question: `What change is described after the lesson in ${sectionTitle}?`,
      options: [
        'A new action or attitude is described in the story.',
        'The characters leave the setting immediately.',
        'No lesson is mentioned.',
        'The story ends with silence only.',
      ],
      correctAnswer: 0,
      marks: 2,
      difficulty: 'medium',
      explanation: `The passage explicitly states a change: "${normalized}". The answer remains strictly tied to what the story says.`,
    };
  }

  return {
    id: `${sectionTitle.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-generated-3`,
    question: `Which idea is clearly highlighted in the sentence about ${sectionTitle}?`,
    options: [
      'The idea described by the story itself.',
      'A fact not written in the passage.',
      'An unrelated event from outside the story.',
      'A claim that contradicts the text.',
    ],
    correctAnswer: 0,
    marks: 1,
    difficulty: 'easy',
    explanation: `This question is anchored to the story sentence: "${normalized}". It does not introduce any outside detail.`,
  };
};

export const autoGenerateQuestions = (story: Story): StoryQuestion[] => {
  const generated: StoryQuestion[] = [];
  const sectionPool = story.sections.flatMap((section) =>
    toSentenceArray(section.passage).map((sentence) => ({ section, sentence })),
  );

  const questionCount = clampQuestionCount(Math.min(10, Math.max(5, Math.ceil(story.sections.length * 2))));

  for (let i = 0; i < Math.min(questionCount, sectionPool.length); i += 1) {
    const candidate = buildQuestionFromSentence(sectionPool[i].section.title, sectionPool[i].sentence);
    if (candidate) generated.push(candidate);
  }

  if (generated.length === 0) {
    return [
      {
        id: `${story.id}-fallback-question`,
        question: 'What lesson is described in this story?',
        options: ['A lesson clearly stated in the story', 'A fact not mentioned in the story', 'A completely different event', 'A made-up character'],
        correctAnswer: 0,
        marks: 1,
        difficulty: 'easy',
        explanation: 'This fallback question uses only the story’s stated lesson and avoids adding new facts.',
      },
    ];
  }

  return generated;
};
