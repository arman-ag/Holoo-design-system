/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },

    colors: {
      light: {
        secondary: {
          10: "#E8F4FB",
          20: "#D1E9F7",
          40: "#A3D2F0",
          50: "#8CC7EC",
          90: "#319ADD",
          100: "#1A8FD9",
          120: "#1572AE",
          130: "#126498",

        },
        gray: {
          text: "#F4F4F4"
        },
      },
      dark: {
        secondary: {
          70: "#5FB1E4",
          60: "#76BCE8",
          50: "#8CC7EC",
        },
        gray: {
          text: "#191919"
        }
      }


    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      16: "1rem",
    },
    extend: {
      spacing: {
        335: '20.938rem',
        48: '3rem',
        95: '5.938rem',
        22: '1.375rem',
        104: "6.5rem",
        28: "1.75rem",
        160: "10rem",
        40: "2.5rem",
        225: "14.063rem",
        44: "2.75rem",

      },
      padding: {
        2: "0.125rem",
        12: "0.75rem",
        16: "1rem",
        8: ".5rem",
        24: "1.5rem"
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
      },

      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
};
