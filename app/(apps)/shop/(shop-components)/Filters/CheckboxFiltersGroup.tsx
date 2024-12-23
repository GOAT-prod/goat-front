"use client";
import { Input } from "@/ui/input";
import { Title } from "@/ui/title";
import { useState } from "react";
import { FilterCheckbox } from "./FilterCheckbox";
import { Skeleton } from "@/ui/skeleton";

interface CheckboxFiltersGroupProps {
  title: string;
  items: any[];
  defaultItems?: any[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск",
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}: CheckboxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [term, setTeam] = useState("");

  const list = showAll
    ? items.filter(({ text }) => text.toLowerCase().includes(term))
    : (defaultItems || items)?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(e.target.value.toLowerCase());
  };

  if (loading) {
    return (
      <div className={className}>
        <Title className="font-medium mb-3" size="md" text={title} />
        {[...new Array(limit)].map((_, index) => (
          <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Title className="font-medium" size="md" text={title} />
      {showAll && (
        <div>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary text-xs"
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
