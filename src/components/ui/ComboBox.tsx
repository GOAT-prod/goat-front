"use client";

import { ChevronsUpDown, Command } from "lucide-react";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CommandList, CommandEmpty, CommandGroup, CommandItem } from "cmdk";
import { Button } from "./button";

const frameworks = [
  {
    value: "next.js",
    label: "Лучшее совпадение",
  },
  {
    value: "sveltekit",
    label: "Сначала недорогие",
  },
  {
    value: "nuxt.js",
    label: "Сначала дорогие",
  },
  {
    value: "remix",
    label: "Высокий рейтинг",
  },
  {
    value: "astro",
    label: "Новинки",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-[32px] w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Лучшее совпадение"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
