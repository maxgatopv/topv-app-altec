import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003a76",
        primaryDark: "#012143",
        dark: "#141416",
        "theme-container": "#f7f7f7",
      },
      fontFamily: {
        sukhumvit: ["Sukhumvit", "sans-serif"], // Define the custom font
      },
    },
    keyframes: {
      slideUp: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideDown: {
        "0%": { transform: "translateY(-20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      bgLeft: {
        "0%": { backgroundPosition: "center" },
        "100%": { backgroundPosition: "right" },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-10%)",
          animationTimingFunction: "cubic-bezier(0, 0, 0, 0)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0, 0)",
        },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },
    },
    animation: {
      slideUp: "slideUp 0.5s ease-in-out forwards",
      slideDown: "slideDown 1s ease-in-out forwards",
      bgLeft: "bgLeft 0.5s ease-in-out forwards",
      bounce: "bounce 3s infinite",
      spin: "spin 1s linear infinite",
      ping: "ping 1s ease-out infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.5, 2) infinite",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: any) {
      const headings = {
        h1: "4xl",
        h2: "3xl",
        h3: "2xl",
        h4: "xl",
        h5: "lg",
      };

      addBase(
        Object.fromEntries(
          Object.entries(headings).map(([tag, size]) => [
            tag,
            {
              fontSize: theme(`fontSize.${size}`),
              fontWeight: theme("fontWeight.bold"),
            },
          ])
        )
      );
    }),
  ],
};
export default config;
