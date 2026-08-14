/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",

        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },

        surface: "oklch(var(--surface))",

        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
          hover: "oklch(var(--primary-hover))",
        },

        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
          soft: "oklch(var(--accent-soft))",
        },

        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },

        border: "oklch(var(--border))",
        "border-strong": "oklch(var(--border-strong))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
      },

      borderRadius: {
        sm: "10px",
        md: "12px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
        nav: "var(--shadow-nav)",
        accent: "var(--shadow-accent)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};