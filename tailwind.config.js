/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '380px',
      'md': '575px',
      'lg': '768px',
      'xl': '990px',
      '2xl': '1280px',

    }
  },
  plugins: [],
}