/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {

    extend: {
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
      fontSize: {
        sm: ["12px", "14px"],
        base: ['14px', '16px'],
        lg: ['16px', '24px'],
        xl: ['20px', '28px'],
        xxl: ['24px', '32px'],
      },
      borderRadius: {

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

        primary180: "var(--primary180)",
        primary170: "var(--primary170)",
        primary160: "var(--primary160)",
        primary150: "var(--primary150)",
        primary140: "var(--primary140)",
        primary130: "var(--primary130)",
        primary110: "var(--primary110)",
        primary100: "var(--primary100)",
        primary90: "var(--primary90)",
        primary80: "var(--primary80)",
        primary70: "var(--primary70)",
        primary60: "var(--primary60)",
        primary50: "var(--primary50)",
        primary40: "var(--primary40)",
        primary30: "var(--primary30)",
        primary20: "var(--primary20)",
        primary10: "var(--primary10)",
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
