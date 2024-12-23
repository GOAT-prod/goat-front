import { cn } from "@/utils/helpers/cn";

interface StatusBadge {
  label: string;
  className: string;
  Icon?: any;
}

export const StatusBadge = ({ label, className, Icon }: StatusBadge) => (
  <div
    className={cn(
      "rounded-lg px-2 flex gap-2 items-center h-[32px] border-2 ",
      className
    )}
  >
    {Icon && <Icon size={18} />}
    <p className="font-medium text-base">{label}</p>
  </div>
);
