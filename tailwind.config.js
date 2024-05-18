/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pBlack': '#000319',
        'text-white': '#E4ECFF',
      }
    },
  },
  plugins: [],
}

