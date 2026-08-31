import type { Metadata } from "next";
import { TransformationsPage } from "@/components/transformations/transformations-page";

export const metadata: Metadata = { title: "Transformations | HR Health Club Jodhpur", description: "Real member transformation stories from HR Health Club." };
export default function Page() { return <TransformationsPage />; }
