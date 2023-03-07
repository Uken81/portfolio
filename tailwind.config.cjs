/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.5: "2px",
        0.25: "1px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
