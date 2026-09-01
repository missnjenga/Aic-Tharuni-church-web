/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A46",
          light: "#28395C",
          dark: "#111B30",
        },
        gold: {
          DEFAULT: "#C7A24C",
          light: "#DDC078",
          dark: "#9C7E37",
        },
        sage: {
          DEFAULT: "#4B6A55",
          light: "#6B8F71",
        },
        cream: "#FAF8F3",
        charcoal: "#2B2620",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
