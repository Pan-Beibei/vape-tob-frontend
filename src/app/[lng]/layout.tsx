import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer";

import { languages } from "@/lib/i18n/settings";
import { roboto, arima, openSans, oswald } from "@/utils/fonts";
import Warning from "@/components/warning";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vape ToB",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html
      lang={lng}
      className={`${arima.variable} ${openSans.variable} ${oswald.variable} ${roboto.variable}`}
    >
      <body className={inter.className}>
        <Warning />
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
