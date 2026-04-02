/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0D1B2A',
        'navy-light': '#1B263B',
        'crimson': '#9B1C1C',
        'crimson-light': '#B91C1C',
        'gray-surface': '#F4F4F5',
        'decision-approved': '#10B981',
        'decision-restricted': '#EF4444',
        'decision-review': '#F59E0B',
      },
      fontFamily: {
        'heading': ['Rajdhani', 'sans-serif'],
        'body': ['IBM Plex Sans', 'sans-serif'],
      },
      borderWidth: {
        'left-4': '4px',
      }
    },
  },
  plugins: [],
}
