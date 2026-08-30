import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Us | HR Health Club Jodhpur",
  description: "Learn about HR Health Club, our coaching philosophy, training standards and fitness community in Jodhpur.",
};

export default function Page() {
  return <AboutPage />;
}
