import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "HR Health Club | Premium Gym in Jodhpur",
  description: "HR Health Club Jodhpur — premium coaching, modern equipment and real transformations.",
  icons: { icon: "/images/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--font-body)] text-[#111111] antialiased`}>
        {children}
      </body>
    </html>
  );
}
