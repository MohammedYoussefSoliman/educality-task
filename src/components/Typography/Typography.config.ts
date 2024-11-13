import { cva } from "class-variance-authority";

const config = cva(["font-normal"], {
  variants: {
    as: {
      p1: ["text-base", "md:text-lg"],
      p2: ["text-base"],
      h1: ["text-4xl", "md:text-5xl", "font-bold"],
      h2: ["text-xl", "md:text-2xl", "font-bold"],
      small: ["text-[0.625rem]", "md:text-[0.875rem]"],
    },
    color: {
      base: ["text-dark-900"],
      primary: ["text-primary-300"],
      secondary: ["text-dark-200"],
    },
  },
  defaultVariants: {
    as: "p1",
    color: "base",
  },
});

export default config;
