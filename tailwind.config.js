/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontSize: {
          "4-xl":"40px",
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