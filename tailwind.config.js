/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-page": "url('../img/mainphoto.png')",
      },
    },
  },
  plugins: [],
};
