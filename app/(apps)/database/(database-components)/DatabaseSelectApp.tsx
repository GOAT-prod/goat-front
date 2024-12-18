"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MapPinCheckInside } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { cn } from "@/utils/helpers/cn";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const appList = [
  {
    value: "goat market",
    label: "goat market",
    service: "shop",
  },
  {
    value: "goat factory",
    label: "goat factory",
    service: "factory",
  },
  {
    value: "goat dashboard",
    label: "goat dashboard",
    service: "admin",
  },
];

export function DatabaseSelectApp() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const defaultApp = appList.find((app) => pathname.includes(app.service));
    setValue(defaultApp?.value || "");
  }, [pathname]);

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
                    if (currentValue !== value) {
                      setValue(currentValue);
                      setOpen(false);
                      router.push("/database/" + app.service);
                    }
                  }}
                  disabled={app.value === value}
                >
                  {app.label}

                  <MapPinCheckInside
                    className={cn(
                      "ml-auto",
                      value === app.value ? "opacity-100" : "opacity-0"
                    )}
                    size={16}
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
