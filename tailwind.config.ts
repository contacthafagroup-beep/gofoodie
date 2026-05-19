import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#FF6B35",
          50: "#FFF4EE",
          100: "#FFE8D5",
          200: "#FFD0AA",
          300: "#FFB07A",
          400: "#FF8C42",
          500: "#FF6B35",
          600: "#E55A25",
          700: "#C44A18",
          800: "#A33C14",
          900: "#7A2D0F",
        },
        cream: "#FFF4E8",
        charcoal: "#1E1E1E",
        espresso: "#5C4033",
        brand: {
          green: "#6BA368",
          gray: "#B0B0B0",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "orange-sm": "0 4px 14px rgba(255, 107, 53, 0.15)",
        "orange-md": "0 8px 24px rgba(255, 107, 53, 0.25)",
        "orange-lg": "0 16px 40px rgba(255, 107, 53, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
