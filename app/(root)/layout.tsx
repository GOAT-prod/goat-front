import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
