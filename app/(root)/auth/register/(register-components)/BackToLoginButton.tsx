import { Button } from "@/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackToLoginButton = () => {
  return (
    <Button className="w-full" variant={"secondary"}>
      <Link
        href="/auth"
        className="text-sm flex items-center justify-between w-full"
      >
        <ArrowLeft size={18} />
        Войти
        <ArrowLeft size={18} className="invisible" />
      </Link>
    </Button>
  );
};
