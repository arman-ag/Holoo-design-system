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

    padding: {
      2: "0.125rem",
      12: "0.75rem",
      16: "1rem",
      8: ".5rem",
      24: "1.5rem"
    },
    margin: {

      2: "0.125rem",
      12: "0.75rem",
      8: ".5rem",
      16: "1rem",
      24: "1.5rem"

    },

    extend: {
      fontSize: {
        sm: ["12px", "14px"],
        base: ['14px', '16px'],
        lg: ['16px', '24px'],
        xl: ['20px', '28px'],
        xxl: ['24px', '32px'],
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        16: "1rem",
        8: ".5rem"
      },
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
        32: "2rem",


      },

      colors: {

        light: {
          secondary: {
            10: "#E8F4FB",
            20: "#D1E9F7",
            40: "#A3D2F0",
            50: "#8CC7EC",
            80: "#48A5E1",
            90: "#319ADD",
            100: "#1A8FD9",
            120: "#1572AE",
            130: "#126498",

          },
          error: {
            120: "#B9172B",
            100: "#E71D36",
            80: "#EC4A5E",

          },
          gray: {
            secondarytext: "#52575C",
            text: "#F4F4F4",
            line: "#E0E0E0",
            inactivestates: "#A0A4A8",
            textfield: "#CACCCF",
            disable: "#EFEFEF"

          },
        },
        dark: {
          secondary: {
            2: "#192025",
            70: "#5FB1E4",
            60: "#76BCE8",
            50: "#8CC7EC",
            160: "#0A3957",
            130: "#126498",
          },
          error: {
            100: "#EC4A5E",

          },
          gray: {
            text: "#191919",
            inactivestates: "#939698",
            secondarytext: "#C3C5C6"
          }
        },
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
        yekan: 'Yekan',
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
