import * as React from "react";
import { cn } from "@/utils/helpers/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Иконка, которая будет отображаться внутри инпута
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex items-center h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors transition-shadow focus-within:border-border-focused focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.14)] focus-within:ring-[3px] focus-within:ring-ring",
          className
        )}
      >
        {icon && (
          <span className="absolute left-2 flex items-center justify-center">
            {icon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 h-full w-full bg-transparent px-3 py-1 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-8" : "pl-3" // Сдвиг текста вправо, если есть иконка
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InputWithIcon.displayName = "Input";

export { InputWithIcon };
