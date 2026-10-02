import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rama RMC — Ready mix concrete, Palwal",
  description:
    "Ready mix concrete supplied to building sites and warehouse floors across Palwal, Faridabad and the Delhi NCR industrial belt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
