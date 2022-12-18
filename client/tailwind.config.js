/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx','./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'roberto-color':'red',
      }
    },
  },
  plugins: [],
}
