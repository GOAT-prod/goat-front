import { Container } from "@/components/Container";
import { ShopHeader } from "./(shop-components)/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goat Market",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ShopHeader />
      <Container>
        <main className="flex min-h-[calc(100vh-var(--header-height))] border border-border border-t-0">
          {children}
        </main>
      </Container>
    </>
  );
}
