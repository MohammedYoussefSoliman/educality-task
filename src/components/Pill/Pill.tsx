import React from "react";
import { Typography } from "../Typography";

type PillProps = {
  title: string;
};
export function Pill({ title }: PillProps) {
  return (
    <div className="px-3 py-1 bg-primary-100 rounded-full fit-content">
      <Typography as="small" color="primary">
        {title}
      </Typography>
    </div>
  );
}
