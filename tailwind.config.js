/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
     inset: {
       '1/6': '3%',
    },
     maxWidth: {
       '2/3': '40%',
       'x': '700px'
      }
  },
  plugins: [],
}

