"use client";
import { GoatLogo } from "@/components/GoatLogo";
import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DatabaseSelectApp } from "./DatabaseSelectApp";

export const DatabaseHeader = () => {
  const router = useRouter();

  return (
    <Header>
      <div className="flex w-[var(--filters-width)] items-center gap-[10px] border-border border-r px-3 py-5">
        <DatabaseSelectApp />
      </div>
      <div className="flex flex-1 items-center justify-between py-5 pr-7 pl-6">
        <p className="text-lg">
          Приложение администратора логистического сервиса
        </p>
      </div>
    </Header>
  );
};
