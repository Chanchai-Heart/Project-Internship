/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Thai", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sarabun: ["Sarabun", "sans-serif"],
      },
      animation: {
        'gradient-limited': 'gradient-limited 3s ease-in-out 1', // วิ่ง 2 ครั้ง
      },
      keyframes: {
        'gradient-limited': {
          '0%': { 'background-position': '0% 50%', color: 'transparent' },
          '50%': { 'background-position': '100% 50%', color: 'transparent' },
          '100%': { 'background-position': '0% 50%', color: 'black' }, // เปลี่ยนเป็นสีดำ
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-textshadow')
  ],
  daisyui: {
    themes: ["forest"],
  },
};
