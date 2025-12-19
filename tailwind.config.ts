import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        "dark-blue": "hsl(var(--dark-blue))",
        lime: "hsl(var(--lime))",
        cyan: "hsl(var(--cyan))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "gradient": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "scroll-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "particle-1": {
          "0%": {
            opacity: "0",
            transform: "translate(0, 0) scale(0)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-30px, -30px) scale(1)",
          },
        },
        "particle-2": {
          "0%": {
            opacity: "0",
            transform: "translate(0, 0) scale(0)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate(30px, -30px) scale(1)",
          },
        },
        "particle-3": {
          "0%": {
            opacity: "0",
            transform: "translate(0, 0) scale(0)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-30px, 30px) scale(1)",
          },
        },
        "particle-4": {
          "0%": {
            opacity: "0",
            transform: "translate(0, 0) scale(0)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate(30px, 30px) scale(1)",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-left-bounce": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px) scale(0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "translateX(20px) scale(1.02)",
          },
          "80%": {
            transform: "translateX(-10px) scale(0.98)",
          },
          "100%": {
            transform: "translateX(0) scale(1)",
          },
        },
        "slide-in-right-bounce": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px) scale(0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "translateX(-20px) scale(1.02)",
          },
          "80%": {
            transform: "translateX(10px) scale(0.98)",
          },
          "100%": {
            transform: "translateX(0) scale(1)",
          },
        },
        "pop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0) rotate(-10deg)",
          },
          "60%": {
            transform: "scale(1.2) rotate(5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px 5px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.5)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "gradient": "gradient 3s ease infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "particle-1": "particle-1 1s ease-out forwards",
        "particle-2": "particle-2 1.2s ease-out forwards",
        "particle-3": "particle-3 1.1s ease-out forwards",
        "particle-4": "particle-4 1.3s ease-out forwards",
        "bounce-in": "bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "slide-in-left-bounce": "slide-in-left-bounce 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "slide-in-right-bounce": "slide-in-right-bounce 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "pop-in": "pop-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
