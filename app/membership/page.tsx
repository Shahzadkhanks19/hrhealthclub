import type { Metadata } from "next";
import { MembershipPage } from "@/components/membership/membership-page";

export const metadata: Metadata = { title: "Membership Plans | HR Health Club Jodhpur", description: "Choose the HR Health Club membership plan that fits your training goals." };
export default function Page() { return <MembershipPage />; }
