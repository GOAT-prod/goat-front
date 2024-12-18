import { cn } from "@/utils/helpers/cn";

interface InfoRowProps {
  label: string;
  value: string;
  className?: string;
}

export const InfoRow = ({ label, value, className }: InfoRowProps) => (
  <div className={cn("flex gap-2 items-center   ", className)}>
    <p className="text-[#8F8F8F]">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);
