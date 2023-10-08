/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppin: "Poppin"
      },
      screen: {
        max: {
          main: "320px"
        },
        max: {
          medium: "690px"
        }
      }
    },
  },
  plugins: [],
};
