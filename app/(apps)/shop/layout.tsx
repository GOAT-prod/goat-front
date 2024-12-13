import { Container } from "@/components/Container";
import { Header } from "./(shop-components)/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>
        <main className="flex min-h-[calc(100vh-var(--header-height))] border border-border border-t-0">
          {children}
        </main>
      </Container>
    </>
  );
}
