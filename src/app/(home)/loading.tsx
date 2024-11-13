import { Typography } from "@/components";
import React from "react";

export default function loading() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Typography as="p1" color="primary">
        Loading...
      </Typography>
    </div>
  );
}
