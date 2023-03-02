/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '5rem',
        subhead: '1.8rem'
      },
      borderRadius: {
        'btn': '2em'
      },
      colors: {
        primary: '#356967'
      }
    },
  },
  plugins: [],
}
