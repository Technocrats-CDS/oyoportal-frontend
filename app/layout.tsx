import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OyoPortal",
    template: "%s | OyoPortal",
  },
  description: "OyoPortal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Providers>
          {children}
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="top-right"
            position="right"
          />
        </Providers>
      </body>
    </html>
  );
}
