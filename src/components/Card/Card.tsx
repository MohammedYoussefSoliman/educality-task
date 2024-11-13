import React from "react";
import Image from "next/image";

import { CardProps } from "./Card.types";

export function Card({ cover, children }: CardProps) {
  return (
    <div className="p-6 flex flex-col gap-8 shadow-card min-w[320px] bg-white">
      <Image
        width={340}
        height={300}
        src={cover || "/placerholder.png"}
        alt="blog-bg"
        className="w-full h-[200px] md:h-[240px] object-cover"
      />

      {children}
    </div>
  );
}
