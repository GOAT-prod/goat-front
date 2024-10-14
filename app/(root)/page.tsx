import { AuthForm } from '@/components/login-form/LoginForm';
import { ModeToggle } from '@/components/toggleTheme/ToggleTheme';

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="absolute left-10 top-10 mb-6 text-2xl">
        <strong>goat</strong> <span className="font-light">logistic</span>
      </span>
      <div className="absolute right-10 top-10">
        <ModeToggle />
      </div>
      <AuthForm />
    </div>
  );
}
