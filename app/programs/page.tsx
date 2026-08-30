import type { Metadata } from "next";
import { ProgramsPage } from "@/components/programs/programs-page";

export const metadata: Metadata = {
  title: "Fitness Programs | HR Health Club Jodhpur",
  description: "Explore strength, muscle building, fat loss, functional training, cardio and mobility programs at HR Health Club Jodhpur.",
};

export default function Page() {
  return <ProgramsPage />;
}
