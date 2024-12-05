'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface ProviderProps {
   children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
   const [queryClient] = useState(() => new QueryClient());

   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         {children}
      </QueryClientProvider>
   );
};
