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
import { Loader } from "@/ui/loader";
import { useUserStore } from "@/store/userStore";

export const loginSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(5, { message: "Пароль должен быть не менее 5 символов" }),
});

export const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    login(
      { username: values.username, password: values.password },
      {
        onSuccess: (data) => {
          setError("");
          const { role } = useUserStore.getState().userInfo;

          switch (role) {
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
              router.push("/");
          }
        },
        onError: () => {
          setError("Вы ввели неверные данные");
        },
      }
    );
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
                    <Input type="text" placeholder="Введите email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={loginForm.control}
              name="username"
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Введите пароль"
                      {...field}
                      autoComplete="on"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={loginForm.control}
              name="password"
            />
            {error && <Title className="text-red-500" text={error || ""} />}
            <div className="flex flex-col gap-5 items-center">
              <Button type="submit" className="w-full">
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
