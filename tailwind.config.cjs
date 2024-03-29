/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.5: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("daisyui")],
};
