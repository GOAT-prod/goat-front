"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Title } from "@/ui/title";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/utils/api/requests/auth/login";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "@/ui/loader";

export const loginSchema = z.object({
  name: z.enum(["shop", "admin", "factory", "other"]),
  // email: z.string().email({ message: "Некорректный email" }),
  // password: z
  //   .string()
  //   .min(6, { message: "Пароль должен быть не менее 8 символов" }),
});

export const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "other",
      // password: "",
    },
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    switch (values.name) {
      case "shop":
        router.push("/shop");
        break;
      case "admin":
        router.push("/admin");
        break;
      case "factory":
        router.push("/factory");
        break;
      default:
    }
    // login(
    //   { email: values.email, password: values.password },
    //   {
    //     onSuccess: (data) => {
    //       localStorage.setItem("token", data.access);
    //       setError("");
    //     },
    //     onError: () => {
    //       setError("Вы ввели неверные данные");
    //     },
    //   }
    // );
  };

  const redirectToRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/auth/register");
  };

  return (
    <>
      {isPending ? (
        <div className="flex h-60 w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Form {...loginForm}>
          <form
            className="space-y-4 w-full"
            onSubmit={loginForm.handleSubmit(onLoginSubmit)}
          >
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={loginForm.control}
              name="name"
            />
            {error && <Title className="text-red-500" text={error || ""} />}
            <div className="flex flex-col gap-5 items-center">
              <Button
                type="submit"
                className="w-full"
                // onClick={onAuth}
              >
                Войти
              </Button>
              <Button
                variant={"secondary"}
                className="w-full flex items-center justify-between"
                onClick={(event) => redirectToRegister(event)}
              >
                <ArrowRight size={18} className="invisible" />
                Регистрация
                <ArrowRight size={18} />
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};
