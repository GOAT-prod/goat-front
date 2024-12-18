interface CardWrapperProps {
  children: React.ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => (
  <div className="bg-white px-4 py-3 rounded-lg shadow flex flex-col gap-3 justify-center flex-1">
    {children}
  </div>
);
