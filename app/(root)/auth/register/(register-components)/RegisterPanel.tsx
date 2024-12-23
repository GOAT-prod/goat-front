"use client";
import { createContext, useEffect, useState } from "react";
import { RegisterClientForm } from "./RegisterClientForm";
import { RegisterUserForm } from "./RegisterUserForm";
import { motion, AnimatePresence } from "framer-motion";

interface RegistrationForm {
  user: {
    username: string;
    password: string;
    role: string;
  };
  client: {
    organization: string;
    adress: string;
    inn: string;
  };
}

const baseForm: RegistrationForm = {
  user: {
    username: "",
    password: "",
    role: "",
  },
  client: {
    organization: "",
    adress: "",
    inn: "",
  },
};

export const FormContext = createContext({
  userForm: baseForm,
  saveFormHandler: (
    type: "client" | "user",
    formState: RegistrationForm[typeof type]
  ) => {},
});

export const RegisterPanel = () => {
  const [activeForm, setActiveForm] = useState<"client" | "user">("user");
  const [userForm, setUserForm] = useState<RegistrationForm>(baseForm);

  useEffect(() => {
    console.log(userForm);
  }, [userForm]);

  const saveFormHandler = (
    type: "client" | "user",
    formState: RegistrationForm[typeof type]
  ) => {
    setUserForm((state) => ({
      ...state,
      [type]: {
        ...formState,
      },
    }));
  };

  return (
    <div className="relative w-full">
      <FormContext.Provider value={{ userForm, saveFormHandler }}>
        <AnimatePresence mode="wait">
          {activeForm === "user" && (
            <motion.div
              key="user"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <RegisterUserForm setActiveForm={setActiveForm} />
            </motion.div>
          )}
          {activeForm === "client" && (
            <motion.div
              key="client"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <RegisterClientForm setActiveForm={setActiveForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </FormContext.Provider>
    </div>
  );
};
