/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(53, 53, 53)",
        text: "#edf0f1",
        primary: "rgb(255, 213, 0)",
      },
      fontFamily: {
        header: ["Mont-Heavy"],
        body: ["Bebas"],
      },
    },
  },
  plugins: [],
};
