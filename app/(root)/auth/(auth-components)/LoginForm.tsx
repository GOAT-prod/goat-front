import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { LoginFormTypes } from "./AuthPanel";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Title } from "@/ui/title";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
  onChangeForm: (formType: LoginFormTypes) => void;
  onAuth?: () => void;
}

export const loginSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 8 символов" }),
});

export const LoginForm = ({ onChangeForm, onAuth }: LoginFormProps) => {
  //   const { mutate: login } = useLogin();
  const [error, setError] = useState<string | null>(null);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    // login(
    //   { username: values.username, password: values.password },
    //   {
    //     onSuccess: (data) => {
    //       localStorage.setItem("token", data.access);
    //       setOpen(false);
    //     },
    //     onError: () => {
    //       setError("Ошибка при входе");
    //       setOpen(true);
    //     },
    //   }
    // );
  };

  return (
    <>
      {/* {isPending || isFetching ? (
        <div className="flex h-60 w-full items-center justify-center">
          <Loader />
        </div>
      ) : ( */}
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
            name="email"
          />

          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите пароль"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={loginForm.control}
            name="password"
          />
          {error && <Title className="text-red-500" text={error} />}
          <div className="flex flex-col gap-5 items-center">
            <Button
              type="submit"
              variant={"secondary"}
              // onClick={onAuth}
            >
              Войти
            </Button>
            <a
              href="#"
              className="text-sm hover:underline"
              // onClick={() => onChangeForm("register_person")}
            >
              Регистрация
            </a>
          </div>
        </form>
      </Form>
    </>
  );
};

{
  /* <InputForm name="Email" type="email" placeholder="Введите почту" />
      <InputForm
        name="Пароль"
        type="password"
        placeholder="Введите пароль"
        className="mb-5"
      />
      <div className="flex flex-col gap-5">
        <Button
          type="submit"
          variant={"secondary"}
          onClick={onAuth}
          text="Войти"
        />
        <a
          href="#"
          className="text-sm hover:underline"
          onClick={() => onChangeForm("register_person")}
        >
          Регистрация
        </a>
      </div> */
}
