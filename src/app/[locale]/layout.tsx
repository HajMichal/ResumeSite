import "../../globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { Jersey_15, Kanit } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body
        className={`${jersey.variable} ${kanit.variable} text-white font-kanit bg-background overflow-x-hidden`}
      >
        <MantineProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <TransitionProvider>{children}</TransitionProvider>
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
