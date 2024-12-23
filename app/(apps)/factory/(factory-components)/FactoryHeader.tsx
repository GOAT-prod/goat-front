"use client";
import { GoatLogo } from "@/components/GoatLogo";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SeachInput } from "../../shop/(shop-components)/SeachInput";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { CreateProductDialog } from "./CreateProductDialog";
import { Button } from "@/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface FactoryHeaderProps {
  className?: string;
}

export const FactoryHeader = ({ className }: FactoryHeaderProps) => {
  const router = useRouter();

  const logoutHendler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    router.push("/auth");
  };

  return (
    <Header className={className}>
      <Link
        href="/factory"
        className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-6 py-5"
      >
        <span className="text-2xl">
          <GoatLogo title="factory" />
        </span>
      </Link>
      <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
        <div className="flex items-center justify-end gap-2 flex-1 ">
          <Link
            href="/factory/profile"
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
