import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../container/Container';
import { SeachInput } from '../search-input/SeachInput';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ModeToggle } from '../toggleTheme/ToggleTheme';
import { SheetDemo } from '../add-product-sheet/AddProductSheet';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('h-[var(--header-height)]', className)}>
      <Container className="flex h-full border border-border bg-background-secondary">
        <Link
          href="/"
          className="flex items-center gap-[10px] border-r border-border py-5 px-6 w-[var(--filters-width)]"
        >
          <span className="text-2xl">
            <strong>goat</strong> <span className="font-light">logistic</span>
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between py-5 pl-6 pr-7">
          <SeachInput className="flex-1" />
          <div className="flex items-center gap-2">
            <SheetDemo />
            <Button size={'small'} className="flex gap-[10px]">
              <p>Заказы</p>
            </Button>
            <Button size={'small'} variant={'secondary'} className="flex gap-[10px]">
              <p>Профиль</p>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
