/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{php,js}"],
  theme: {
    extend: {
      colors:{
        subColor: '#191B1D',

      },
      fontFamily: {
        mainfont: ['Inter']
      }
    },
  },
  plugins: [],
}

