import { Container } from "@/components/Container";
import type { Metadata } from "next";
import { DatabaseHeader } from "./(database-components)/DatabaseHeader";

export const metadata: Metadata = {
  title: "Goat Database",
};

export default function DatabaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DatabaseHeader />
      <Container>
        <main className="flex h-[calc(100vh-var(--header-height))] border border-border border-t-0 border-r-0">
          {children}
        </main>
      </Container>
    </>
  );
}
