import { RegisterForm } from "./(register-components)/RegistrationForm";

export default async function Register() {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-semibold text-xl">Регистрация</h2>
      </div>
      <RegisterForm />
    </>
  );
}
