import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransformationDetailPage } from "@/components/transformations/transformation-detail-page";
import { getTransformationBySlug, transformationStories } from "@/components/transformations/transformation-data";

export function generateStaticParams() { return transformationStories.map((story) => ({ slug: story.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getTransformationBySlug(slug);
  if (!story) return { title: "Transformation | HR Health Club" };
  return { title: `${story.name} Transformation | HR Health Club`, description: `${story.result} in ${story.time} - ${story.category} transformation at HR Health Club.` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getTransformationBySlug(slug);
  if (!story) notFound();
  return <TransformationDetailPage story={story} />;
}
