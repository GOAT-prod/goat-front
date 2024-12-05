import Link from "next/link";

import { cn } from "@/utils/helpers/cn";
import { Container } from "./Container";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/ui/button";
import { SheetDemo } from "./AddProductSheet";
import { GoatLogo } from "./GoatLogo";
import { SeachInput } from "../../../app/(root)/shop/(shop-components)/SeachInput";

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
            <GoatLogo />
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
          <SeachInput className="flex-1" />
          <div className="flex items-center gap-2">
            <SheetDemo />
            <Button size="small" className="flex gap-[10px]">
              Заказы
            </Button>
            <Button
              size="small"
              variant="secondary"
              className="flex gap-[10px]"
            >
              Профиль
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};
