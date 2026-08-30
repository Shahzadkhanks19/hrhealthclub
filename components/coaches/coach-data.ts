import { coaches } from "@/components/home/home-data";

export const coachProfiles = [
  {
    slug: "ravi",
    ...coaches[0],
    headline: "Build strength with clear technique and progression.",
    bio: "Ravi focuses on helping members train with better structure, stronger fundamentals and consistent progression across strength and muscle-building goals.",
    specialties: ["Strength Training", "Muscle Building", "Lifting Technique", "Progression Planning"],
  },
  {
    slug: "ashish",
    ...coaches[1],
    headline: "Turn your transformation goal into a sustainable training routine.",
    bio: "Ashish works with members who want a more structured transformation journey, combining consistent training, conditioning and progressive coaching support.",
    specialties: ["Fat Loss", "Body Transformation", "Conditioning", "Training Consistency"],
  },
  {
    slug: "shenoy",
    ...coaches[2],
    headline: "Build fitness habits that work beyond a single workout.",
    bio: "Shenoy helps members improve general fitness, movement quality and sustainable training habits through practical, coach-led sessions.",
    specialties: ["General Fitness", "Functional Training", "Cardio Fitness", "Mobility Support"],
  },
] as const;

export type CoachProfile = (typeof coachProfiles)[number];

export function getCoachBySlug(slug: string) {
  return coachProfiles.find((coach) => coach.slug === slug);
}
