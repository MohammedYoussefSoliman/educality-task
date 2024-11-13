"use client";
import { useMemo } from "react";
import { classNames } from "@/utils";
import { TypographyProps } from "./Typography.types";
import tailwindConfig from "./Typography.config";

const typographyTagGenerator = (tag: string): keyof JSX.IntrinsicElements => {
  const paragraphRegex = /^p[1-3]$/;
  const validParagraph = paragraphRegex.test(tag);
  if (validParagraph) return "p";
  return tag as keyof JSX.IntrinsicElements;
};

export function Typography({
  children,
  as,
  color,
  truncationWidth,
  uppercase,
  className,
}: TypographyProps) {
  // text configuration classes based on design system
  const configClasses = tailwindConfig({ as, color });
  // build the typography tag
  const Tag = useMemo(() => typographyTagGenerator(as || "p1"), [as]);

  // build classes
  const classes = classNames(configClasses, [
    truncationWidth && ["truncate", `w-[${truncationWidth}px]`, "block"],
    uppercase && "uppercase",
    className,
  ]);

  return <Tag className={classes}>{children}</Tag>;
}
