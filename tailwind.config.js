/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-image-desktop": "url('./assets/image/mainImage_1.png')",
      },
      fontFamily: {
        heavitas: ["Heavitas", "sans-serif"],
        tomatoes: ["Tomatoes", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "root-orange": "rgb(179,75,30)",
        "second-orange": "#FC692A",
        "root-black": "#2E2E2E",
        "root-gray": "#727272",
        "second-gray": "#D9D9D9",
        "third-gray": "#CECECE",
        "fourth-gray": "#B7B7B7",
        "root-yellow": "#FFD772",
        "second-yellow": "#fffdf6",
      },
      fontSize: {
        xsm: "0.625rem",
        lsm: "0.8125rem",
        "2.25xl": "1.625rem",
      },
      spacing: {
        13: "3.25rem",
      },
      lineHeight: {
        5.5: "1.375rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
