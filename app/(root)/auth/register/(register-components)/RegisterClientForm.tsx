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
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
  organization: z.string(),
  adress: z.string(),
  inn: z.string(),
});

interface RegisterClientFormProps {
  setActiveForm: (value: "user" | "client") => void;
}

export const RegisterClientForm = ({
  setActiveForm,
}: RegisterClientFormProps) => {
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      organization: "",
      adress: "",
      inn: "",
    },
  });

  const onRegisterSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...loginForm}>
        <form
          className="space-y-4 w-full"
          onSubmit={loginForm.handleSubmit(onRegisterSubmit)}
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
            control={loginForm.control}
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
            control={loginForm.control}
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
            control={loginForm.control}
            name="inn"
          />
          <div className="flex gap-5 items-center">
            <Button type="button" onClick={() => setActiveForm("user")}>
              <ArrowLeft />
            </Button>
            <Button
              type="submit"
              className="w-full"
              // onClick={onAuth}
            >
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
