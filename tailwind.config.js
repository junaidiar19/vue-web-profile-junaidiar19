/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
