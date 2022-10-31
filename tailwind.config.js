/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        me: "url('/src/assets/me.png')",
        hand: "url('/src/assets/hand-hey.png')",
        bgFixed: "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
