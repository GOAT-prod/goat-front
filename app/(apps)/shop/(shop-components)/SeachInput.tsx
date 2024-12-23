"use client";
import { useClickOutside } from "@siberiacancode/reactuse";
import { useState } from "react";

import { cn } from "@/utils/helpers/cn";
import { Input } from "@/ui/input";

interface SeachInputProps {
  className?: string;
}

export const SeachInput = ({ className }: SeachInputProps) => {
  const [focused, setFocused] = useState(false);

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => {
    setFocused(false);
  });

  return (
    <div
      ref={clickOutsideRef}
      className={cn(
        ""
        // ${focused ? "border-transparent" : "border-[#CBCBCB]"}`,
        // className
      )}
    >
      <label htmlFor="search-input">{/* <Icon20Search /> */}</label>
      <Input
        // TODO полностью разобраться как это сделано
        className={
          "h-8 rounded-md border bg-secondary py-[1px] pr-[6px] pl-[8px]"
        }
        id="search-input"
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        placeholder="Поиск товаров"
      />
    </div>
  );
};
