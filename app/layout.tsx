import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProviders';
import { cn } from '@/lib/utils';
import Provider from '@/providers/Providers';

export const metadata: Metadata = {
  title: 'goat logistic',
  description: 'idk, but it works',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
}
