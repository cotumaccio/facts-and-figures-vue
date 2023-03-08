/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      myriad: ["myriad-pro", "sans-serif"]
    },
    extend: {
      colors: {
        default: "#5075BA",
        snapshot: "#5075BA",
        trends: "#C45131",
        structure: "#FC4062",
        neutral: "#395577"
      }
    },
  },
  plugins: [],
}
