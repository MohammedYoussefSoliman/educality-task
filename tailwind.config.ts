import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F9F5FF",
          100: "#EDE2FF",
          200: "#D6BBFB",
          300: "#6941C6",
          400: "#42307D",
        },
        dark: {
          100: "#D0D5DD",
          200: "#667085",
          900: "#101828",
        },
      },
      boxShadow: {
        card: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
    },
  },
  plugins: [],
} satisfies Config;
