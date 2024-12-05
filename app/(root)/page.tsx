"use client";

import { GoatLogo } from "@/components/GoatLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  const onHandleNavigate = () => {
    router.push("/auth");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute top-10 left-10 mb-6 text-2xl">
        <GoatLogo />
      </span>
      <div className="absolute top-10 right-10">
        <ThemeSwitcher />
      </div>
      <Button onClick={onHandleNavigate}>Авторизация</Button>
    </div>
  );
}
