import { GoatLogo } from "@/components/GoatLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { RedirectButton } from "./(root-components)/RedirectButton";

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute top-10 left-10 mb-6 text-2xl">
        <GoatLogo title="market" />
      </span>
      <div className="absolute top-10 right-10">
        <ThemeSwitcher />
      </div>
      <RedirectButton src="/auth" />
    </div>
  );
}
