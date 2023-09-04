/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter"]
      },
      colors: {
        'p': '#6C63FF',
        's': '#c9b7eb',
      },
    },
  },
  plugins: [],
}

