/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0a8',
          dark: '#00d494',
          light: '#33f3b9',
        },
        secondary: {
          DEFAULT: '#facc15',
          dark: '#eab308',
          light: '#fde047',
        },
        dark: {
          DEFAULT: '#0a0f1a',
          card: '#111827',
          border: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}