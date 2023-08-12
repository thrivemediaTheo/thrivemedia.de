/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(53, 53, 53)",
        text: "#edf0f1",
        primary: "rgb(255, 213, 0)",
        secondary: "#2B2B2B"
      },
      fontFamily: {
        nav: ["Bebas"],
        header: ["Mont-Heavy"],
        body: ["Sans-Titre"],
      },
      boxShadow: {
        header: "0px 5px 8px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
