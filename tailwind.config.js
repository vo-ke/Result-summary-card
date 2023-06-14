/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      rare: ["Boogaloo", "cursive"],
      sans: ['Sarabun', 'sans-serif'],
    },

    extend: {
      maxWidth: {
        'stndd': '20rem',
        'lil': '22rem',
      }
  },
  plugins: [],
}
}
