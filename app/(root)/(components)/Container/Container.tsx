import { cn } from '@/utils/helpers/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1220px]', className)}>{children}</div>;
};
