/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // important for your dark mode toggle
  plugins: [
    require('@tailwindcss/line-clamp'), // for `line-clamp-3` in projects
  ],
}
