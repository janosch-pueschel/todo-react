/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/img/header-bg.jpg')",
        headertest:
          "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/src/img/header-bg.jpg')",
      },
      backgroundPosition: {
        header: "0% 50%",
      },
      fontFamily: {
        asap: ["Asap", "sans-serif"],
      },
    },
  },
  plugins: [],
};
