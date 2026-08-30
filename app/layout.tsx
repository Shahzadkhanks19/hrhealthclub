import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "HR Health Club | Premium Gym in Jodhpur",
  description:
    "HR Health Club Jodhpur — premium coaching, modern equipment, real transformations and a strong fitness community.",
  icons: {
    icon: "/images/brand-mark.svg",
    shortcut: "/images/brand-mark.svg",
    apple: "/images/brand-mark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} bg-white font-[family-name:var(--font-body)] text-[#111111] antialiased`}>
        {children}
      </body>
    </html>
  );
}
