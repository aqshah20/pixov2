/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "#3A3B7B",
        purple:"#57007B",
        lightGray:"#F7F7FA",
        lightBg:"#E7DAED",
        iceBlue:"#F1F2FF",
        softGreen:"#F0FFF7",
        lightPink:"#FFF4F4",
      },
      backgroundImage: {
        'gradient-225': 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
        "gradient-yellow":"linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
      },
    },
  },
  plugins: [],
}

