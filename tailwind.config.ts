import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F9F9F9",
          deep: "#F2F2F2",
        },
        ink: {
          DEFAULT: "#1C1816",
          soft: "#3A3330",
          muted: "#6B625B",
        },
        brass: {
          DEFAULT: "#B08D3C",
          soft: "#C9A857",
          deep: "#8A6A22",
        },
        meric: {
          DEFAULT: "#6B7D74",
          soft: "#8F9E95",
        },
        dust: "#C9BFAF",
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
        ui: ['var(--font-ui)', 'Roboto', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        "display-tight": "-0.02em",
        "ui-wide": "0.08em",
      },
      maxWidth: {
        scene: "1440px",
        read: "68ch",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
