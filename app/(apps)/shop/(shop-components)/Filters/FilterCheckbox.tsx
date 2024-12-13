"use client";

import { Checkbox } from "@/ui/checkbox";
import React from "react";

export interface FilterChecboxProps {
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox = ({
  text,
  value,
  onCheckedChange,
  checked,
  name,
}: FilterChecboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded flex items-center justify-center"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="flex-1 cursor-pointer leading-none text-[14px]"
      >
        {text}
      </label>
    </div>
  );
};
