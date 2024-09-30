/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      animation: {
      'spin-slow': 'spin 5s linear infinite',
      'spin-fast': 'spin 1s linear infinite',
    },
    fontFamily: {
      Volkhov: ['Volkhov', 'serif'],
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}