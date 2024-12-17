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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormContext } from "./RegisterPanel";
import { useRegister } from "@/utils/api/requests/auth/register";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { Loader } from "@/ui/loader";
import { Title } from "@/ui/title";

export const loginSchema = z.object({
  organization: z.string().min(1, { message: "Название обязательноe" }),
  adress: z.string().min(1, { message: "Адрес обязателен" }),
  inn: z.string().min(1, { message: "ИНН обязателен" }),
});

interface RegisterClientFormProps {
  setActiveForm: (value: "user" | "client") => void;
}

export const RegisterClientForm = ({
  setActiveForm,
}: RegisterClientFormProps) => {
  const { userForm, saveFormHandler } = useContext(FormContext);

  const router = useRouter();
  const { mutate: register, isPending } = useRegister();
  const [error, setError] = useState<string | null>(null);

  const registerForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      organization: userForm.client.organization,
      adress: userForm.client.adress,
      inn: userForm.client.inn,
    },
  });

  const onRegisterSubmit = (values: z.infer<typeof loginSchema>) => {
    register(
      {
        username: userForm.user.username,
        password: userForm.user.password,
        role: userForm.user.role,
        name: userForm.client.organization,
        address: userForm.client.adress,
        inn: userForm.client.inn,
      },
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

  const onBackClick = () => {
    saveFormHandler("client", registerForm.getValues());
    setActiveForm("user");
  };

  return (
    <>
      {isPending ? (
        <div className="flex h-60 w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Form {...registerForm}>
          <form
            className="space-y-4 w-full"
            onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
          >
            <FormLabel>Регистрация организации</FormLabel>
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
              control={registerForm.control}
              name="organization"
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Адрес</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Введите адрес" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={registerForm.control}
              name="adress"
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
              control={registerForm.control}
              name="inn"
            />
            {error && <Title className="text-red-500" text={error || ""} />}
            <div className="flex gap-5 items-center">
              <Button type="button" onClick={onBackClick}>
                <ArrowLeft />
              </Button>
              <Button type="submit" className="w-full">
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};
