import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { GoatLogo } from "../../../src/components/common/GoatLogo";
import { AuthPanel } from "./(auth-components)/AuthPanel";

export default async function Auth() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute top-10 left-10 mb-6 text-2xl">
        <GoatLogo />
      </span>
      <div className="absolute top-10 right-10">
        <ThemeSwitcher />
      </div>
      <AuthPanel />
    </div>
  );
}
