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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormContext } from "./RegisterPanel";

export const loginSchema = z.object({
  username: z.string().email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 8 символов" }),
  role: z.string().min(1, { message: "Выберите роль" }),
});

interface RegisterUserFormProps {
  setActiveForm: (value: "user" | "client") => void;
}

export const RegisterUserForm = ({ setActiveForm }: RegisterUserFormProps) => {
  const { userForm, saveFormHandler } = useContext(FormContext);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: userForm.user.username,
      password: userForm.user.password,
      role: userForm.user.role,
    },
  });

  const onRegisterSubmit = (values: z.infer<typeof loginSchema>) => {
    saveFormHandler("user", values);
    setActiveForm("client");
  };

  return (
    <>
      <Form {...loginForm}>
        <form
          className="space-y-4 w-full"
          onSubmit={loginForm.handleSubmit(onRegisterSubmit)}
        >
          <FormLabel>Регистрация пользователя</FormLabel>
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Введите email" {...field} />
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
                    autoComplete="on"
                    {...field}
                  />
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
                      <SelectTrigger className="h-9">
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
          <div className="flex flex-col gap-5 items-center">
            <Button
              type="submit"
              className="w-full"
              // onClick={onAuth}
            >
              Регистрация организации
              <ArrowRight size={18} className="ml-auto" />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
