import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        headerHeight: "var(--header-height)",
        mainHeight: "calc(100vh - var(--header-height))",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(180deg, hsl(var(--card-light)), hsl(var(--card-lighter)))",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        cardLight: "hsl(var(--card-light))",
        cardLighter: "hsl(var(--card-lighter))",
      },
      screens: {
        xs: "576px",
        min700: "700px",
        max700: { max: "699px" },
        min90rem: "90rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      fontSize: {
        md: "0.975rem",
      },
      gridTemplateColumns: {
        autoFill250: "repeat(auto-fill,minmax(250px,1fr))",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      center: true,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
