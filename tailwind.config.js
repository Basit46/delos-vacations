/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "450px",
        xmd: "800px",
      },
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "saans-serif"],
      },
    },
  },
  plugins: [],
};
