/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '100px',
      }
    },
  },
  darkMode: "class",
  attributify: true,
  plugins: []
}

