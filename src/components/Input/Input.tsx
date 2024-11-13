/* eslint-disable react/display-name */
"use client";
import { forwardRef } from "react";
import { classNames } from "@/utils";
import { InputPropsType } from "./Input.types";

export default forwardRef(
  (
    {
      prefixComponent,
      suffixComponent,
      width,
      placeholder,
      className,
      ...InputProps
    }: InputPropsType,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={classNames([
          "flex flex-col gap-1 md:gap-2 w-full",
          className,
        ])}
        style={{ width }}
      >
        <div
          className={classNames([
            "input--wrapper flex justify-between items-center, relative h-11 md:h-12 w-full  bg-white rounded-md border border-dark-100 enabled:hover:bg-primary-50",
          ])}
        >
          {prefixComponent && prefixComponent}
          <input
            ref={ref}
            className={classNames([
              "outline-none px-4 py-2 flex-1 bg-transparent w-full h-full text-neutral-900 placeholder:font-light placeholder:text-neutral-400 text-md",
              Boolean(suffixComponent || prefixComponent) && "w-max-[85%]",
              prefixComponent && "ps-1",
              suffixComponent && "pe-1",
            ])}
            placeholder={placeholder}
            {...InputProps}
          />
          {suffixComponent && suffixComponent}
        </div>
      </div>
    );
  }
);
