/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html",],
  theme: {
    extend: {},
  },
  darkMode: "class",
  attributify: true,
  plugins: [nextui()]
}

