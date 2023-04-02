/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
    safelist: []
  },
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: []
};
