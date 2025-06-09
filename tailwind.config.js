/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#9d8cff",
          DEFAULT: "#7c4dff",
          dark: "#6039e4",
        },
        accent: {
          light: "#64ffda",
          DEFAULT: "#00e5b0",
          dark: "#00b894",
        },
        dark: {
          lightest: "#2d3748",
          lighter: "#1f2937",
          DEFAULT: "#111827",
          darker: "#0f172a",
          darkest: "#030712",
        },
        darkText: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          muted: "#64748b",
        },
        surface: {
          light: "#2d3748",
          DEFAULT: "#1f2937",
          dark: "#111827",
        },
        primary: "#646cff",
        "primary-dark": "#535bf2",
        accent: "#ff7e5f",
        dark: "#242424",
        "darkText-primary": "#ffffff",
        "darkText-secondary": "#888888",
        "dark-darker": "#1a1a1a",
        "dark-lightest": "#2a2a2a",
        surface: "#f9f9f9",
        "bg-transparent-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "ui-serif", "serif"],
        mono: ["SFMono-Regular", "ui-monospace", "monospace"],
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
      boxShadow: {
        "dark-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.45)",
        dark: "0 1px 3px 0 rgba(0, 0, 0, 0.45), 0 1px 2px 0 rgba(0, 0, 0, 0.55)",
        "dark-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.6)",
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.6)",
        "dark-glow": "0 0 15px 2px rgba(124, 77, 255, 0.2)",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(to bottom, #111827, #1f2937)",
        "dark-radial": "radial-gradient(ellipse at center, #1f2937, #111827)",
        "dark-shine":
          "linear-gradient(45deg, transparent, rgba(124, 77, 255, 0.1), transparent)",
      },
    },
  },
  plugins: [],
};
