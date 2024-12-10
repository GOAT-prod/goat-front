import { LoginForm } from "./(auth-components)/LoginForm";

export default async function Auth() {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-semibold text-xl">Вход</h2>
      </div>
      <LoginForm />
    </>
  );
}
