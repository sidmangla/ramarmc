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
  metadataBase: new URL("https://ramarmc.com"),
  title: "Rama RMC — Ready mix concrete, Palwal",
  description:
    "Ready mix concrete supplied to building sites and warehouse floors across Palwal, Faridabad and the Delhi NCR industrial belt.",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: {
    title: "Rama RMC — Concreting Trust",
    description:
      "Ready mix concrete for building sites and warehouse floors across Palwal, Faridabad and the Delhi NCR industrial belt.",
    siteName: "Rama RMC",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
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
