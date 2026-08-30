import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetailPage } from "@/components/programs/program-detail-page";
import { getProgramBySlug, programDetails } from "@/components/programs/program-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programDetails.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found | HR Health Club" };
  }

  return {
    title: `${program.title} | HR Health Club Jodhpur`,
    description: program.intro,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  return <ProgramDetailPage program={program} />;
}
