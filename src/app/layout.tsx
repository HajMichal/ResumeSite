import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michał Haj - Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
