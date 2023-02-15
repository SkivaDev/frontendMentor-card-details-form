/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main-desktop": "url('./src/assets/bg-main-desktop.png')"
      },
    }
  },
  plugins: [],
}
