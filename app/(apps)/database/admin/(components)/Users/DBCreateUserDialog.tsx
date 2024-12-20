import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRegisterMutation } from "../../../(services)/requests/registerUser";
import { queryClient } from "@/utils/api/query-client";
import { Title } from "@/ui/title";

export const registerSchema = z.object({
  username: z.string().email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 8 символов" }),
  role: z.string().min(1, { message: "Выберите роль" }),
  name: z.string().min(1, { message: "Название обязательноe" }),
  address: z.string().min(1, { message: "Адрес обязателен" }),
  inn: z.string().min(1, { message: "ИНН обязателен" }),
  status: z.string(),
});

export const RegisterDialog = () => {
  const loginForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "",
      name: "",
      address: "",
      inn: "",
      status: "WaitingApprove",
    },
  });

  const { mutate, isPending, isError } = useRegisterMutation({
    onSuccess: (data) => {
      console.log("Регистрация успешна:", data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Ошибка при регистрации:", error);
    },
  });

  const onRegisterSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Добавить пользователя</Button>
      </DialogTrigger>
      <DialogContent className="bg-white p-0 max-w-[600px]">
        <Form {...loginForm}>
          <form
            className="space-y-4 w-full "
            onSubmit={loginForm.handleSubmit(onRegisterSubmit)}
          >
            <DialogHeader className="px-6 pt-6">
              <DialogTitle>Регистрация пользователя</DialogTitle>
              <DialogDescription className="text-base">
                Заполните форму, чтобы зарегистрировать пользователя
              </DialogDescription>
            </DialogHeader>
            <div className="px-6 flex flex-col gap-4">
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Введите email"
                        {...field}
                      />
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
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название организации</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Введите название организации"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={loginForm.control}
                name="name"
              />
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Адрес</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Введите адрес"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={loginForm.control}
                name="address"
              />
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ИНН</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Введите ИНН" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={loginForm.control}
                name="inn"
              />
              {isError && (
                <Title className="text-red-500" text={"Ошибка регистрации"} />
              )}
            </div>
            <DialogFooter className="bg-background p-6 rounded-b-lg border-t border-border">
              <Button type="submit">Зарегистрировать пользователя</Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Отмена
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
