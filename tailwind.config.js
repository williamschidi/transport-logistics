/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "700px",
      md: "900px",
      lg: "1024px",
    },
  },
  plugins: [],
};
