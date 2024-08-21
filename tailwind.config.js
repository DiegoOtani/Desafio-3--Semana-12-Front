/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italic: 'Kaushan' ,
        title: 'Work Sans',
        body: 'Inter',
      },
      fontSize: {
        'h1': '56px',
        'h2': '48px',
        'h3': '40px',
        'h4': '32px',
        'h5': '24px',
        'h6': '18px',
        'subtitle': '16px',
        'body': '14px',
        'action': '15px',
        'caption': '12px',
      },
      colors: {
        brand_1: '#16377D',
        brand_2: '#FC5056',
        brand_3: '#F8D448',
        secondary: '#051036',
        'secondary-80': 'rgba(5, 16, 54, 0.8)',
        'secondary-40': 'rgba(5, 16, 54, 0.4)',
        surface: '#F7F8F9'
      },
    },
  },
  plugins: [],
}
