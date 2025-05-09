/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0aff9d", // Fosfor yeşili
        secondary: "#00cc7a", // Fosfor yeşilinin koyu tonu
        dark: "#111111", // Koyu siyah
        "dark-gray": "#222222", // Koyu gri (vurgular için)
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
