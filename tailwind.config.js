/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  options: { safelist: ["bg-blue-400", "bg-red-400"] },
  theme: {
    extend: {},
  },
  plugins: [],
};
