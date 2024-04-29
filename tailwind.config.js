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
      "white": "#ffffff",
      "hero-bg": "#DEE4E7",
      "card_border": "#F0F0F0",
      "heart_outline": "#C5C5C5",
      "green_rating": "#009D2C",
      "gray_rating": "#A9A9A9",
      "button_gray": "#D9D9D9",
      "tab_unselected": "#7B7B7B",
      "line_gray": "#EBEBEB",
      "red": "#FF0000"
    }
  },
  plugins: [],
}

