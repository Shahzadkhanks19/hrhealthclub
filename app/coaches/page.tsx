import type { Metadata } from "next";
import { CoachesPage } from "@/components/coaches/coaches-page";

export const metadata: Metadata = {
  title: "Expert Coaches | HR Health Club Jodhpur",
  description: "Meet the certified and experienced coaches at HR Health Club and explore personal training support for strength, transformation and fitness goals.",
};

export default function Page() {
  return <CoachesPage />;
}
