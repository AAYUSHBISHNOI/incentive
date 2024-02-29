/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2sm": "576px",
        "2lg": "1200px",
        "3xl": "1320px",
        "4xl": "1920px",
        "5xl": "1924px",
      },
      fontSize: {
          md:"40px",
          xxl:"26px",
      },
      fontFamily: {
        circular: ["circular"],
      },
      colors:{
        darkblue:"#5271FF",
        lightblue:"#F2F6FD",
      }
    },
  },
  plugins: [],
}