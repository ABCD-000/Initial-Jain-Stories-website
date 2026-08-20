/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px -20px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}

