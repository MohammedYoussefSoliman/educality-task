import Image from "next/image";
import { useMemo } from "react";

import { classNames } from "@/utils";

import { AvatarProps } from "./Avatar.types";

export function Avatar({ src, name, size = "md" }: AvatarProps) {
  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }, [name]);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const classes = classNames([
    "relative rounded-full overflow-hidden",
    sizeClasses[size],
  ]);

  return (
    <div className={classes} role="img" aria-label={name}>
      {src ? (
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-dark-100 text-dark-900 font-semibold">
          {initials}
        </div>
      )}
    </div>
  );
}
