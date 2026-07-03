/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory base (light restaurant theme)
        cream: {
          DEFAULT: "#faf4e8", // page background
          50: "#fffdf7", // elevated cards
          100: "#ffffff",
          200: "#f3e9d5", // alternate section band
          300: "#e8dabf", // borders / hairlines
        },
        // Espresso text tones
        ink: {
          DEFAULT: "#2d2318",
          soft: "#6f5e4b",
          faint: "#a3937d",
        },
        // Deep warm brown for footer / CTA bands
        espresso: {
          DEFAULT: "#241a10",
          800: "#31251a",
          700: "#3e2f21",
        },
        // Kept for the (intentionally dark) admin CRM
        charcoal: {
          DEFAULT: "#0a0a0b",
          800: "#111113",
          700: "#17171b",
        },
        // Terracotta chili accents
        chili: {
          red: "#b93b28",
          reddk: "#992d1c",
          green: "#3e8a41",
          yellow: "#c97b12",
        },
        gold: {
          DEFAULT: "#a97e35",
          soft: "#e3c383",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(61, 42, 20, 0.18)",
        card: "0 10px 30px rgba(61, 42, 20, 0.10)",
        glow: "0 12px 30px rgba(185, 59, 40, 0.28)",
        "glow-lg": "0 16px 44px rgba(185, 59, 40, 0.34)",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "20%": { opacity: "0.5" },
          "100%": { transform: "translateY(-60px) scaleX(1.8)", opacity: "0" },
        },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
      },
      animation: {
        steam: "steam 3s ease-out infinite",
        shimmer: "shimmer 1.6s infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
