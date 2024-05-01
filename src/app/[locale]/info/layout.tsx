import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Michał Haj - Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div className="h-full min-h-screen">
      <Navbar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
