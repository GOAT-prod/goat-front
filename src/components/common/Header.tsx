import { cn } from "@/utils/helpers/cn";
import { Container } from "./Container";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const Header = ({ className, children }: HeaderProps) => {
  return (
    <header className={cn("h-[var(--header-height)]", className)}>
      <Container className="flex h-full border border-border bg-background-secondary">
        {children}
      </Container>
    </header>
  );
};
