

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'whitesmoke': '#F5F5F5',
        'primary': '#66613d',
        'primary-dark': '#494527',
        'accent': '#a2a785',
        'accent-dark': '#868c68',
      },
      backgroundImage: {
        'mara-bg': "url('assets/mara.jpg')",
      },
    },
  },
  plugins: [],
}
