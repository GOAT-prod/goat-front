'use client';
import { useState } from 'react';
import { useClickOutside } from '@siberiacancode/reactuse';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
// import { Icon20Search } from '@vkontakte/icons';

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
        '',
        // ${focused ? "border-transparent" : "border-[#CBCBCB]"}`,
        // className
      )}
    >
      <label htmlFor="search-input">{/* <Icon20Search /> */}</label>
      <Input
        // TODO магия ебать, полностью разобраться как это сделано
        className={'h-8 rounded-md border bg-secondary py-[1px] pl-[8px] pr-[6px]'}
        placeholder="Поиск товаров"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id="search-input"
      />
    </div>
  );
};
