import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

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
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      screens: {
        sm: "640px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        lexend: ["var(--font-lexend)"],
        jakarta: ["var(--font-jakarta)"],
      },
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
        "custom-purple-50": "#DA78FF",
        "custom-purple-100": "#B180C3",
        "custom-purple-200": "#9D60B4",
        "custom-purple-300": "#9C37C2",
        "custom-purple-400": "#7F3E98",
        "custom-purple-500": "#5C2671",
        "custom-purple-600": "#321A3B",
        "custom-purple-700": "#200F26",
        "custom-emerald": "#0CD27D",
        "custom-dark": "#0B1B24",
        "custom-dark-200": "#002D44",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        navSlide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        navSlideReverse: {
          "0%": { transform: "translateX(0%)", display: "flex" },
          "100%": { transform: "translateX(100%)", display: "none" },
        },
        lineWidth: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        sidebarDropdown: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "100%", opacity: "1" },
        },
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "nav-slide": "navSlide 0.75s ease",
        "nav-slide-reverse": "navSlideReverse 0.75s ease",
        "line-width": "lineWidth 1s ease 0.25s",
        "sidebar-dropdown": "sidebarDropdown 1s ease",
        "bounce-right": "bounceRight 1s infinite",
      },
      backgroundImage: {
        "drop-pattern": "url(/drop-pattern.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "dark-radial":
          "radial-gradient(50% 50% at 50% 50%, #003149 0%, #02090D 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
