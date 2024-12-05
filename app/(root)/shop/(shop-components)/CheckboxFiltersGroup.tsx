"use client";
import { Input } from "@/ui/input";
import { Title } from "@/ui/title";
import { useState } from "react";
import { FilterCheckbox } from "./FilterCheckbox";

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

  //   if (loading) {
  //     return (
  //       <div className={className}>
  //         {[...new Array(limit)].map((_, index) => (
  //           <Skeleton key={index} className='mb-4 h-6 rounded-[8px]' />
  //         ))}
  //       </div>
  //     );
  //   }

  return (
    <div className={className}>
      <Title className="mb-3" size="md" text={title} />
      {showAll && (
        <div className="mb-5">
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
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-border" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-primary text-[14px]"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
