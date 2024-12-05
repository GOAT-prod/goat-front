import { ModeToggle } from "@/components/ToggleTheme";
import { AuthorizationForm } from "./(components)/AuthorizationForm/AuthorizationForm";

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute top-10 left-10 mb-6 text-2xl">
        <strong>goat</strong> <span className="font-light">logistic</span>
      </span>
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      <AuthorizationForm />
    </div>
  );
}
