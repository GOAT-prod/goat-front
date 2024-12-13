"use client";
import { useState } from "react";
import { RegisterClientForm } from "./RegisterClientForm";
import { RegisterUserForm } from "./RegisterUserForm";
import { motion, AnimatePresence } from "framer-motion";

export const RegisterPanel = () => {
  const [activeForm, setActiveForm] = useState<"client" | "user">("user");

  return (
    <div className="relative w-full">
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
    </div>
  );
};
