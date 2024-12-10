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

  return <Button onClick={onHandleNavigate}>Войти в систему</Button>;
};
