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
        lightBlue:"#E4ECF7",
        softGreen:"#F0FFF7",
        lightPink:"#FFF4F4",
      },
      backgroundImage: {
        'gradient-225': 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
        "gradient-yellow":"linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
        "gradient-yellow2":"linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
        "gradient-skyblue": "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
        "gradient-pink": "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",
        "gradient-green": "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",
        "gradient-purple": "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
      },
    },
  },
  plugins: [],
}

