# Jain Stories Learning App

A React + TypeScript + Vite app for reading Jain stories and answering multiple-choice questions based strictly on the story content. The app is designed to help learners study stories while keeping all quiz content tied to the provided text.

## Features

- Story library with search and filtering
- Section-based story reading experience
- Quiz flow with score calculation and review
- Results page with correct answers and explanations
- Local progress tracking using LocalStorage
- Dark mode toggle
- Admin page for adding custom stories
- Local sign-in gate for quizzes and saved learning progress

## Quick Start

From the project root:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local URL shown in the terminal, typically:

```text
http://localhost:5173/
```

## Production Build

```bash
npm run build
```

## Deploying the Website

This is a static Vite website. The production files are generated in `dist/`.

### Netlify

The included [netlify.toml](netlify.toml) configures the Vite build and keeps React Router routes working after deployment.

#### Netlify website dashboard

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Netlify, choose **Add new site** and **Import an existing project**.
3. Select the repository.
4. Netlify will read `netlify.toml` automatically.
5. Deploy the site.

The important settings are:

```text
Build command: npm run build
Publish directory: dist
```

#### Netlify CLI

Install the CLI and authenticate:

```bash
npm install --global netlify-cli
netlify login
```

Create or link a Netlify site:

```bash
netlify init
```

Deploy a preview:

```bash
netlify deploy
```

Deploy to production:

```bash
netlify deploy --prod
```

### Manual static hosting

Run the build, then upload the contents of `dist/` to a static host:

```bash
npm run build
```

Configure the host to serve `index.html` for unknown routes such as `/library`, `/dashboard`, and `/story/...`.

The site currently stores progress and local account data in browser LocalStorage. It does not require a backend or database, and progress remains specific to the browser and device where it was created.

## Sign-in and Access

Visitors can use the home page, browse the library, and read the full story passages without signing in. Signing in unlocks the comprehension questions, saved reading progress, quiz results, dashboard, and story authoring page.

The current sign-in flow is a local prototype using username and password. Account data and the session stay in this browser only. It is not a secure production authentication system. Replace [src/utils/auth.ts](src/utils/auth.ts) with a real authentication provider later, such as a server session, Supabase Auth, Firebase Auth, or Auth0.

## Adding Your Own Jain Stories

There are two ways to add content:

### 1. Use the Admin page

1. Start the app.
2. Open the Admin page in the site navigation.
3. Paste a story in the same shape as the existing data.
4. Save it to LocalStorage.

The app stores custom stories in browser LocalStorage, so they remain available on that browser/device until cleared.

### 2. Add a story directly in code

The sample library lives in [src/data/stories/index.ts](src/data/stories/index.ts). Add another object in the same structure used by the existing stories.

## Story Format

Use this structure for each story:

```ts
{
  id: 'story-name',
  title: 'Story Name',
  description: 'Short summary',
  category: 'Ethics',
  difficulty: 'beginner',
  estimatedMinutes: 5,
  sections: [
    {
      id: 'section-1',
      title: 'Opening',
      passage: 'Story text here. This text is the source for all quiz questions.',
      questions: [
        {
          id: 'q1',
          question: 'What happened first?',
          options: ['Correct fact from the story', 'Wrong answer 1', 'Wrong answer 2', 'Wrong answer 3'],
          correctAnswer: 0,
          marks: 1,
          difficulty: 'easy',
          explanation: 'This answer is supported directly by the story passage.'
        }
      ]
    }
  ]
}
```

## Important Content Rules

The app is intended to keep questions tied to the exact story text and to avoid invented details.

- Use only facts that appear in the provided story.
- Do not invent characters, teachings, events, or moral lessons.
- Keep answer options clear and parallel in style.
- Make explanations connect directly to the passage.

## Questions and Automatic Generation

The project includes a generator utility in [src/utils/questionGenerator.ts](src/utils/questionGenerator.ts). It is designed to produce question scaffolds from passage text while remaining grounded in the story. For best results, use it as a helper for a curated set of questions and keep the story facts explicit.

## Data and Storage

The app stores progress and attempts in LocalStorage, including:

- theme preference
- current reading progress
- completed attempts
- score summaries

## Project Structure

- [src/App.tsx](src/App.tsx) — app routing and state
- [src/pages](src/pages) — story, results, dashboard, and admin pages
- [src/data/stories/index.ts](src/data/stories/index.ts) — story library data
- [src/types/story.ts](src/types/story.ts) — shared TypeScript story model
- [src/utils](src/utils) — storage, quiz logic, and question generation helpers

## Troubleshooting

If the dev server does not start, run:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

If you see a build issue, run:

```bash
npm run build
```

Then fix the TypeScript error shown in the terminal.
