/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/collections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#202040',
        secondary: '#FFE03D',
      },
      fontFamily: {
        sans: ['Chivo', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
