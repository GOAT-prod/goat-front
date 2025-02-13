"use client";
import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import { DatabaseSelectApp } from "./DatabaseSelectApp";
import { UserSelect } from "./UserSelect";
import { useEffect, useState } from "react";

export const DatabaseHeader = () => {
  const [appStatus, setAppStatus] = useState({ title: "", status: "" });
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/database/admin")) {
      setAppStatus({ title: "Приложение администратора", status: "admin" });
    } else if (pathname.startsWith("/database/shop")) {
      setAppStatus({ title: "Приложение клиента-потребителя", status: "shop" });
    } else if (pathname.startsWith("/database/factory")) {
      setAppStatus({
        title: "Приложение клиента-поставщика",
        status: "factory",
      });
    }
  }, [pathname]);

  return (
    <Header>
      <div className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-3 py-5">
        <DatabaseSelectApp />
      </div>
      <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
        <p className="text-lg">{appStatus.title}</p>
        <UserSelect status={appStatus.status} />
      </div>
    </Header>
  );
};
