import { coaches } from "@/components/home/home-data";

export const coachProfiles = [
  {
    slug: "ravi",
    ...coaches[0],
    experience: "6+ Years Experience",
    certification: "Certified Strength & Conditioning Specialist",
    specialty: "Muscle Building & Powerlifting",
    focus: "Strength, Mass, Performance",
    headline: "Build strength with clear technique and progression.",
    bio: "Ravi focuses on helping members train with better structure, stronger fundamentals and consistent progression across strength and muscle-building goals.",
    specialties: ["Strength Training", "Muscle Building", "Lifting Technique", "Progression Planning"],
    programs: ["Muscle Building", "Strength Training", "Functional Training"],
  },
  {
    slug: "ashish",
    ...coaches[1],
    experience: "5+ Years Experience",
    certification: "Specialist in Fat Loss & Body Recomposition",
    specialty: "Nutrition & Lifestyle Coaching",
    focus: "Transformation, Fat Loss",
    headline: "Turn your transformation goal into a sustainable training routine.",
    bio: "Ashish works with members who want a more structured transformation journey, combining consistent training, conditioning and progressive coaching support.",
    specialties: ["Fat Loss", "Body Transformation", "Conditioning", "Training Consistency"],
    programs: ["Fat Loss", "Cardio Fitness", "Functional Training"],
  },
  {
    slug: "shenoy",
    ...coaches[2],
    experience: "5+ Years Experience",
    certification: "Certified Fitness & Nutrition Coach",
    specialty: "Functional Training",
    focus: "Fitness, Endurance, Wellness",
    headline: "Build fitness habits that work beyond a single workout.",
    bio: "Shenoy helps members improve general fitness, movement quality and sustainable training habits through practical, coach-led sessions.",
    specialties: ["General Fitness", "Functional Training", "Cardio Fitness", "Mobility Support"],
    programs: ["Functional Training", "Cardio Fitness", "Yoga & Mobility"],
  },
] as const;

export type CoachProfile = (typeof coachProfiles)[number];

export function getCoachBySlug(slug: string) {
  return coachProfiles.find((coach) => coach.slug === slug);
}
