/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "4xl": " 1725px",
      "screen-1024": "1024px",
      "screen-1366": "1366px",
      "screen-1440": "1440px",
      "screen-1920": "1920px",
      "screen-520": "520px",
      "screen-200": "200px",
      sm: "410px",
    },
  },
  plugins: [],
};
