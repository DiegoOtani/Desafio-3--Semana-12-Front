/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_1: '#16377D',
        brand_2: '#FC5056',
        brand_3: '#F8D448',
        secondary: '#051036',
        surface: '#F7F8F9'
      },
    },
  },
  plugins: [],
}
