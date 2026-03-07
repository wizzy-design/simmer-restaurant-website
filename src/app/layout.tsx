import type { Metadata } from "next";
import { Playfair_Display, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Simmer Restaurant & Café | Exquisite & Serene",
  description: "A high-end sanctuary for dining, lounging, and reading in Jos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${kaushan.variable} antialiased relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
