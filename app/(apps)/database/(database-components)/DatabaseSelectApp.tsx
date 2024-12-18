"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { cn } from "@/utils/helpers/cn";

const appList = [
  {
    value: "goat market",
    label: "goat market",
  },
  {
    value: "goat factory",
    label: "goat factory",
  },
  {
    value: "goat dashboard",
    label: "goat dashboard",
  },
];

export function DatabaseSelectApp() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          <p className="font-medium text-xl">
            {value ? (
              <p>
                {appList
                  .find((app) => app.value === value)
                  ?.label.split(" ")
                  .map((word, index) => (
                    <span
                      key={word}
                      className={cn(
                        index === 0 ? "font-bold" : "font-light",
                        "text-2xl"
                      )}
                    >
                      {word}{" "}
                    </span>
                  ))}
              </p>
            ) : (
              "Приложение"
            )}
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {appList.map((app) => (
                <CommandItem
                  key={app.value}
                  value={app.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {app.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === app.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
