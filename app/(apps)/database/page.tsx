import { GoatLogo } from "@/components/GoatLogo";

export default async function Database() {
  return (
    <div className="flex h-full flex-col items-center justify-center flex-1 border-r border-border gap-6">
      <h1 className="text-4xl font-semibold">Базы и хранилища данных</h1>
      <h2 className="text-2xl">
        Предметная области: <strong>Логистический сервис</strong>
      </h2>
      <div className="flex gap-2 text-2xl">
        <GoatLogo title="logistic" />
      </div>
    </div>
  );
}
