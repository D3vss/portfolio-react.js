/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        me: "url('/src/assets/me.png')",
      },
    },
  },
  plugins: [],
};
