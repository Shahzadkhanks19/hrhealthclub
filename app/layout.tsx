import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HR Health Club | Premium Gym in Jodhpur",
  description:
    "HR Health Club Jodhpur — premium coaching, modern equipment and a community built around discipline and results.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
