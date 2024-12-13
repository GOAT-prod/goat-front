import { cn } from "@/utils/helpers/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#3b454e]/30", className)}
      {...props}
    />
  );
}

export { Skeleton };
