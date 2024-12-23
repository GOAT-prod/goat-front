import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { Provider } from "@/utils/providers/Providers";

import { cn } from "@/utils/helpers/cn";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "goat logistic",
  description: "idk, but it works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, "h-screen bg-background")}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        <Provider>{children}</Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
