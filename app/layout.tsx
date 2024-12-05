import type { Metadata } from 'next';

import { GeistSans } from 'geist/font/sans';

import { Provider } from '@/utils/providers/Providers';

import { cn } from '@/utils/helpers/cn';
import './globals.css';

export const metadata: Metadata = {
  title: 'goat logistic',
  description: 'idk, but it works',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, 'h-screen bg-background')}>
        {/* Из-за провайдера происходит ошибка Warning: Extra attributes from the server*/}
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        <Provider>{children}</Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};
