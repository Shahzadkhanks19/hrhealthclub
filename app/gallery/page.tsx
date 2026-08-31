import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/gallery-page";

export const metadata: Metadata = { title: "Gallery | HR Health Club Jodhpur", description: "Explore the gym floor, equipment, members, workouts and events at HR Health Club." };
export default function Page() { return <GalleryPage />; }
