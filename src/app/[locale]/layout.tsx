import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrii Shevchuk | Portfolio",
  description: "Portfolio frontend developer",
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
      <Head>
        <link rel="shortcut icon" href="/src/app/[locale]/favicon.ico" />
      </Head>
      <body className={`${montserrat.className} bg-bg-light dark:bg-bg-dark`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <main className="h-full">{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
