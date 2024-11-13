"use client";
import React from "react";
import debounce from "lodash/debounce";

import { Pill, Input, Icon, Typography } from "@/components";

type SectionHeadProps = {
  title: string;
  description: string;
  pillTitle?: string;
};

export function SectionHead({
  title,
  description,
  pillTitle,
}: SectionHeadProps) {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {pillTitle && <Pill title={pillTitle} />}
      <div className="flex flex-col gap-8 mb-8 items-center justify-center">
        <Typography as="h1" className="text-primary-400 first-letter:uppercase">
          {title}
        </Typography>
        <Typography as="p1" className="text-primary-300 first-letter:uppercase">
          {description}
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          name="search"
          prefixComponent={
            <div className="h-full w-10 flex items-center justify-center">
              <Icon name="search" size={20} />
            </div>
          }
          placeholder="Search"
          onChange={(e) => {
            if (e.target.value) debounce(() => onSearch(e.target.value), 600);
          }}
        />
      </div>
    </div>
  );
}
