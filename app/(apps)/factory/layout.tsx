import { Container } from "@/components/Container";
import { Metadata } from "next";
import { FactoryHeader } from "./(factory-components)/FactoryHeader";

export const metadata: Metadata = {
  title: "Goat Factory",
};

export default function FactoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FactoryHeader />
      <Container>
        <main className="flex min-h-[calc(100vh-var(--header-height))] border border-border border-t-0">
          {children}
        </main>
      </Container>
    </>
  );
}
