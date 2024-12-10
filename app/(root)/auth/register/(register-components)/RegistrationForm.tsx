"use client";
import { Button } from "@/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Title } from "@/ui/title";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 8 символов" }),
  role: z.string({ required_error: "Выберите роль для регистрации" }),
});

export const RegisterForm = () => {
  //   const { mutate: login, isPending } = useLogin();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const onRegisterSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);

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

  return (
    <>
      <Form {...loginForm}>
        <form
          className="space-y-4 w-full"
          onSubmit={loginForm.handleSubmit(onRegisterSubmit)}
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
            name="email"
          />
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input placeholder="Введите пароль" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={loginForm.control}
            name="password"
          />
          <FormField
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Ваша роль</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите роль вашего сервиса" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="shop">Магазин</SelectItem>
                      <SelectItem value="factory">Завод</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
            control={loginForm.control}
            name="role"
          />
          {error && <Title className="text-red-500" text={error || ""} />}
          <div className="flex flex-col gap-5 items-center">
            <Button
              type="submit"
              className="w-full"
              // onClick={onAuth}
            >
              Зарегистрироваться
            </Button>
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
          </div>
        </form>
      </Form>
    </>
  );
};
