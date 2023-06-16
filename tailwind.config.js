/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

