import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        kraft: {
          DEFAULT: "hsl(var(--kraft))",
          deep: "hsl(var(--kraft-deep))",
        },
        paper: "hsl(var(--paper))",
        ink: "hsl(var(--ink))",
        tape: "hsl(var(--tape))",
        marker: "hsl(var(--marker))",
        highlight: "hsl(var(--highlight))",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
        mono: ["var(--font-martian-mono)", "ui-monospace", "monospace"],
        marker: ["var(--font-permanent-marker)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        paper:
          "0 1px 0 0 hsl(var(--ink) / 0.06), 0 22px 40px -32px hsl(var(--ink) / 0.6)",
        "paper-sm":
          "0 1px 0 0 hsl(var(--ink) / 0.06), 0 12px 24px -20px hsl(var(--ink) / 0.55)",
        tape: "0 3px 8px -4px hsl(var(--ink) / 0.5)",
        stamp: "inset 0 0 0 2px hsl(var(--tape) / 0.7)",
      },
      keyframes: {
        settle: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        peel: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        stamp: {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-14deg)" },
          "60%": { opacity: "1", transform: "scale(0.96) rotate(-7deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
        checkin: {
          "0%": { opacity: "0", transform: "translateY(-4px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(-0.5deg)" },
        },
      },
      animation: {
        settle: "settle 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        peel: "peel 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        stamp: "stamp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        checkin: "checkin 0.25s ease-out both",
        sway: "sway 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
