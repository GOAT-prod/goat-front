"use client";

import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";

interface RedirectButtonProps {
  src?: string;
}

export const RedirectButton = ({ src = "/" }: RedirectButtonProps) => {
  const router = useRouter();

  const onHandleNavigate = () => {
    router.push(src);
  };

  const onHandleNavigateToDB = () => {
    router.push("/database");
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={onHandleNavigate}>Войти в систему</Button>
      <Button variant="secondary" onClick={onHandleNavigateToDB}>
        Тестировать базу данных
      </Button>
    </div>
  );
};
