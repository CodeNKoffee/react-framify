/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
    './public/index.html',
    './node_modules/react-framify/dist/**/*.js',
  ],
  safelist: [
    'fade-out',
    'preview__scroll--btn',
    // add other classes if used dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}