/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Poppins","sans-serif"],
      abc1: ["Roboto Mono","monospace"]
    },
    colors: {
      "black": "#32324D",
      "dark-gray": "#666687",
      "primary-color": "#022C49",
      "border-color": "#DCDCE4",
      "white": "#ffffff"
    }
  },
  plugins: [],
}

