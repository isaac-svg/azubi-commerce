import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors based on the design system
      colors: {
        // Primary colors
        primary: {
          50: "#fef7f0",
          100: "#fdede1",
          200: "#fbd8c3",
          300: "#f7b895",
          400: "#f19565",
          500: "#d87d4a", // Main orange color from design system
          600: "#c7703a",
          700: "#b93f1e",
          800: "#93351e",
          900: "#772e1c",
        },
        // Neutral colors
        neutral: {
          50: "#fafafa",
          100: "#f1f1f1", // Light gray from design system
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#101010", // Charcoal from design system
          950: "#000000", // Black from design system
        },
        // Semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Design system specific colors
        rust: "#d87d4a",
        charcoal: "#101010",
        light: "#f1f1f1",
        dark: "#000000",
        peach: "#fbaf85",
        error: "#cd2c2c",
      },
      // Typography based on Manrope font family
      fontFamily: {
        sans: ["Manrope", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        manrope: ["Manrope", "sans-serif"],
      },
      // Font sizes matching the design system
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1", fontWeight: "400" }], // 64px
        "display-2": ["3rem", { lineHeight: "1.15", fontWeight: "400" }], // 48px
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }], // 40px
        h2: ["2rem", { lineHeight: "1.25", fontWeight: "600" }], // 32px
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }], // 24px
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }], // 20px
        h5: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px
        h6: ["1rem", { lineHeight: "1.5", fontWeight: "600" }], // 16px
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }], // 12px
      },
      // Spacing system
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      // Border radius
      borderRadius: {
        button: "6px",
        card: "12px",
        input: "8px",
      },
      // Box shadows for depth
      boxShadow: {
        button: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        "button-hover":
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        card: "0 2px 4px rgba(0, 0, 0, 0.1)",
        form: "0 1px 3px rgba(0, 0, 0, 0.1)",
      },

      // Animation and transitions
      transitionDuration: {
        "250": "250ms",
      },
      // Grid and layout
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(280px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
