"use client";
import Link from "next/link";

import { cn } from "@/utils/helpers/cn";
import { Button } from "@/ui/button";
import { SeachInput } from "./SeachInput";
import { CartDrawer } from "./Cart/CartDrawer";
import { Container } from "@/components/Container";
import { GoatLogo } from "@/components/GoatLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

interface HeaderProps {
  className?: string;
}

export const ShopHeader = ({ className }: HeaderProps) => {
  const router = useRouter();

  const logoutHendler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    router.push("/auth");
  };

  return (
    <Header className={className}>
      <Link
        href="/shop"
        className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-6 py-5"
      >
        <span className="text-2xl">
          <GoatLogo title="market" />
        </span>
      </Link>
      <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
        <SeachInput className="flex-1" />
        <div className="flex items-center gap-2">
          <CartDrawer />
          <Link
            href="/shop/profile"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-hover border border-border h-8 w-auto px-1.5 rounded-md"
          >
            Профиль
          </Link>
          <ThemeSwitcher />
          <Button size="small" onClick={logoutHendler}>
            Выйти
          </Button>
        </div>
      </div>
    </Header>
  );
};
