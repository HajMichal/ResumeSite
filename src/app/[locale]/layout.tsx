import "../../globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { Jersey_15, Kanit } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import Sidebar from "@/components/Sidebar";

const jersey = Jersey_15({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Michał Haj - Resume",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body
        className={`${jersey.variable} ${kanit.variable} text-white font-kanit bg-background overflow-x-hidden`}
      >
        <MantineProvider>
          <div>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
