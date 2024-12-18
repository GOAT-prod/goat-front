"use client";
import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import { DatabaseSelectApp } from "./DatabaseSelectApp";

export const DatabaseHeader = () => {
  const pathname = usePathname();

  const getAppTitle = () => {
    if (pathname.startsWith("/database/admin")) {
      return "Приложение администратора";
    } else if (pathname.startsWith("/database/shop")) {
      return "Приложение клиента-потребителя";
    } else if (pathname.startsWith("/database/factory")) {
      return "Приложение клиента-поставщика";
    }
    return "Выберите приложение";
  };

  return (
    <Header>
      <div className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-3 py-5">
        <DatabaseSelectApp />
      </div>
      <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
        <p className="text-lg">{getAppTitle()}</p>
      </div>
    </Header>
  );
};
