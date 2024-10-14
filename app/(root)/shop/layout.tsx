import { Container } from '@/components/container/Container';
import { Header } from '@/components/header/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Авторизация',
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Container>
        <main className="h-[calc(100vh-var(--header-height))] border border-border border-t-0 flex">
          {children}
        </main >
      </Container>
    </div>
  );
}
