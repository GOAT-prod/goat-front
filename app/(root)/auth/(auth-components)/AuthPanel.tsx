"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { cn } from "@/utils/helpers/cn";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginForm } from "./LoginForm";

const authFormConfig = {
  login: {
    formTitle: "Вход",
    buttonText: "Войти",
  },
  register_person: {
    formTitle: "Регистрация пользователя",
    buttonText: "Зарегистрироваться",
  },
  register_organization: {
    formTitle: "Регистрация организации",
    buttonText: "Зарегистрироваться",
  },
};

export type LoginFormTypes =
  | "login"
  | "register_person"
  | "register_organization";

export const AuthPanel = () => {
  const [form, setForm] = useState<LoginFormTypes>("login");
  const { formTitle } = authFormConfig[form];
  const router = useRouter();

  const onChangeForm = (formType: LoginFormTypes) => {
    setForm(formType);
  };

  const onAuth = () => {
    router.push("/shop");
  };

  return (
    <div className="flex min-w-[325px] gap-4 rounded-lg border-2 border-border bg-background-secondary p-6 hover:border-border-hover">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="mb-10 flex flex-col items-center gap-3">
          <h2 className="font-semibold text-xl">{formTitle}</h2>
        </div>
        <LoginForm onChangeForm={onChangeForm} onAuth={onAuth} />
        {/* {form === "login" && (
         
        )} */}
        {/* {form === "register_person" && (
          <PersonForm onChangeForm={onChangeForm} />
        )} */}
        {/* {form === "register_organization" && (
          <OrganizationForm onChangeForm={onChangeForm} onAuth={onAuth} />
        )} */}
      </div>
    </div>
  );
};

// const PersonForm = ({ onChangeForm }: LoginFormProps) => {
//   return (
//     <>
//       <InputForm name="Email" type="email" placeholder="Введите почту" />
//       <InputForm name="Имя" type="text" placeholder="Введите имя" />
//       <InputForm
//         name="Пароль"
//         type="password"
//         placeholder="Введите пароль"
//         className="mb-5"
//       />

//       <div className="flex w-full items-center justify-between">
//         <Button
//           type="button"
//           onClick={() => onChangeForm("login")}
//           variant={"secondary"}
//         >
//           <ArrowLeft size={20} />
//         </Button>
//         <Button
//           type="button"
//           onClick={() => onChangeForm("register_organization")}
//           variant={"secondary"}
//           text="Ваша организация"
//           suffix={<ArrowRight size={20} />}
//         />
//       </div>
//     </>
//   );
// };

// const OrganizationForm = ({ onChangeForm, onAuth }: LoginFormProps) => {
//   return (
//     <>
//       <InputForm
//         name="Название организации"
//         type="email"
//         placeholder="Введите название организации"
//       />
//       <InputForm name="ИНН" type="text" placeholder="Введите ИНН организации" />
//       <InputForm
//         name="Адрес"
//         type="text"
//         placeholder="Введите адрес организации"
//         className="mb-5"
//       />

//       <div className="flex w-full items-center justify-between">
//         <Button
//           type="button"
//           onClick={() => onChangeForm("register_person")}
//           variant={"secondary"}
//         >
//           <ArrowLeft size={20} />
//         </Button>
//         <Button
//           type="button"
//           variant={"secondary"}
//           text="Зарегистрироваться"
//           onClick={onAuth}
//         />
//       </div>
//     </>
//   );
// };

// interface InputFormProps {
//   name: string;
//   type: string;
//   placeholder: string;
//   className?: string;
// }
// const InputForm = ({ name, type, placeholder, className }: InputFormProps) => {
//   return (
//     <div className={cn("grid w-full max-w-sm items-center gap-2.5", className)}>
//       <Label htmlFor={`${name}__${type}`}>{name}</Label>
//       <Input
//         type={type}
//         id={`${name}__${type}`}
//         placeholder={placeholder}
//         className="h-10 w-[300px] px-3"
//       />
//     </div>
//   );
// };
