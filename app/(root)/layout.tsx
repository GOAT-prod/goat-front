import { GoatLogo } from "@/components/GoatLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute top-10 left-10 mb-6 text-2xl">
        <GoatLogo />
      </span>
      <div className="absolute top-10 right-10">
        <ThemeSwitcher />
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <div className="flex min-w-[325px] gap-4 rounded-lg border-2 border-border bg-background-secondary p-6 hover:border-border-hover">
          <div className="flex w-full flex-col items-center justify-center gap-5">
            {children}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
