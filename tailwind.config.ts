import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
        screens: {
          "2xl": "1580px",
          xl: "1440px",
          lg: "1024px",
          md: "100%",
          sm: "100%",
        },
      },
      colors: {
        primary: "#015584",
        secondary: "#0284D0",
        white: "#ffffff",
        whiteSmoke: "#f5f5f5",
        silver: "#D2D2D2",
        black: "#01161B",
        carbon: "#333333",
        gray: "#616161",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
