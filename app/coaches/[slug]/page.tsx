import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoachDetailPage } from "@/components/coaches/coach-detail-page";
import { coachProfiles, getCoachBySlug } from "@/components/coaches/coach-data";

export function generateStaticParams() {
  return coachProfiles.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);
  if (!coach) return {};

  return {
    title: `${coach.name} - ${coach.role} | HR Health Club`,
    description: coach.headline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);
  if (!coach) notFound();
  return <CoachDetailPage coach={coach} />;
}
