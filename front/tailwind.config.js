/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          'from': { transform: "translateX(0)" },
          'to': { transform: "translateX(-100%)" },
        }
      },
      animation: {
        scroll: "scroll 80s infinite linear 0.5s both",
      },
    },
  },
  plugins: [],
}

