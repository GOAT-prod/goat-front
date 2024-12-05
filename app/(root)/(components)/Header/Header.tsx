import Link from "next/link";

import { cn } from "@/utils/helpers/cn";
import { SheetDemo } from "../../../../src/components/add-product-sheet/AddProductSheet";
import { SeachInput } from "../../../../src/components/search-input/SeachInput";
import { ModeToggle } from "../../../../src/components/common/ToggleTheme";
import { Button } from "../../../../src/components/ui/button";
import { Container } from "../Container/Container";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("h-[var(--header-height)]", className)}>
      <Container className="flex h-full border border-border bg-background-secondary">
        <Link
          href="/"
          className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-6 py-5"
        >
          <span className="text-2xl">
            <strong>goat</strong> <span className="font-light">logistic</span>
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
          <SeachInput className="flex-1" />
          <div className="flex items-center gap-2">
            <SheetDemo />
            <Button size="small" className="flex gap-[10px]">
              <p>Заказы</p>
            </Button>
            <Button
              size="small"
              variant="secondary"
              className="flex gap-[10px]"
            >
              <p>Профиль</p>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
