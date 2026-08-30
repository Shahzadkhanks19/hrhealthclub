import { coaches, programs } from "@/components/home/home-data";

export const programDetails = [
  {
    slug: "muscle-building",
    title: programs[0].title,
    image: programs[0].image,
    eyebrow: "Build Size & Strength",
    intro: "A structured hypertrophy-focused plan built around progressive overload, sound technique and consistent recovery.",
    description: "Muscle building at HR Health Club combines compound lifts, targeted accessory work and coach-led progression so every session has a clear purpose.",
    goals: ["Increase lean muscle mass", "Improve strength and lifting technique", "Build a balanced physique", "Create a repeatable training routine"],
    suitableFor: ["Beginners learning resistance training", "Intermediate lifters who need more structure", "Members returning after a break", "Anyone focused on measurable strength and size progress"],
    method: ["Assessment and goal setting", "Progressive resistance training", "Technique and form coaching", "Regular progress reviews"],
    coach: { slug: "ravi", ...coaches[0], kicker: "Recommended Coach", heading: "Build your strongest foundation with Ravi." },
  },
  {
    slug: "fat-loss",
    title: programs[1].title,
    image: programs[1].image,
    eyebrow: "Train Leaner",
    intro: "A sustainable fat-loss approach combining resistance training, conditioning and consistent activity rather than short-term extremes.",
    description: "The focus is to improve fitness, preserve strength and create a training routine you can maintain while working toward a leaner body composition.",
    goals: ["Reduce body fat", "Improve conditioning and stamina", "Maintain or improve strength", "Build consistent training habits"],
    suitableFor: ["Members beginning a weight-loss journey", "People who want structured gym guidance", "Members returning to regular exercise", "Anyone looking for sustainable conditioning work"],
    method: ["Starting-point assessment", "Strength and conditioning sessions", "Progressive cardio work", "Routine and progress reviews"],
    coach: { slug: "ashish", ...coaches[1], kicker: "Transformation Coach", heading: "Start your fat-loss journey with Ashish." },
  },
  {
    slug: "strength-training",
    title: programs[2].title,
    image: programs[2].image,
    eyebrow: "Lift With Intent",
    intro: "Develop stronger movement patterns and measurable performance through progressive, coach-guided strength work.",
    description: "This program emphasizes quality execution, controlled progression and the key lifts that help you become stronger without sacrificing movement quality.",
    goals: ["Increase overall strength", "Improve lifting mechanics", "Develop power and confidence", "Track measurable performance progress"],
    suitableFor: ["Members who want to lift heavier", "Intermediate trainees seeking structure", "Athletes building general strength", "Beginners who want to learn the fundamentals correctly"],
    method: ["Movement assessment", "Main lift progression", "Accessory strength work", "Performance tracking"],
    coach: { slug: "ravi", ...coaches[0], kicker: "Strength Coach", heading: "Lift with more confidence under Ravi's guidance." },
  },
  {
    slug: "functional-training",
    title: programs[3].title,
    image: programs[3].image,
    eyebrow: "Move Better",
    intro: "Train strength, stability, coordination and work capacity with movements that transfer beyond a single machine or exercise.",
    description: "Functional training blends multi-joint strength work, carries, core training and conditioning to help you move with more control and confidence.",
    goals: ["Improve full-body strength", "Build stability and coordination", "Increase work capacity", "Move more confidently in everyday activity"],
    suitableFor: ["Members who enjoy varied sessions", "People focused on general athleticism", "Beginners wanting practical movement skills", "Experienced members adding variety to training"],
    method: ["Movement preparation", "Multi-joint strength work", "Core and stability training", "Conditioning finishers"],
    coach: { slug: "shenoy", ...coaches[2], kicker: "Fitness Coach", heading: "Move better and train consistently with Shenoy." },
  },
  {
    slug: "cardio-conditioning",
    title: programs[4].title,
    image: programs[4].image,
    eyebrow: "Build Your Engine",
    intro: "Improve endurance, heart health and training capacity through progressive cardio sessions matched to your current fitness level.",
    description: "Rather than doing random cardio, sessions are structured around intensity, duration and progression so conditioning improves in a measurable way.",
    goals: ["Improve cardiovascular endurance", "Increase stamina", "Support overall fitness goals", "Build confidence with cardio training"],
    suitableFor: ["Beginners building basic endurance", "Members supporting fat-loss goals", "Lifters improving work capacity", "Anyone wanting better general conditioning"],
    method: ["Baseline conditioning check", "Steady-state and interval work", "Gradual intensity progression", "Recovery-aware scheduling"],
    coach: { slug: "shenoy", ...coaches[2], kicker: "Fitness Coach", heading: "Build sustainable conditioning with Shenoy." },
  },
  {
    slug: "yoga-mobility",
    title: programs[5].title,
    image: programs[5].image,
    eyebrow: "Move Freely",
    intro: "Improve mobility, flexibility, posture and body awareness with controlled sessions that complement strength and cardio training.",
    description: "Mobility work helps you access better positions, recover from demanding training and move more comfortably through everyday life.",
    goals: ["Improve mobility and flexibility", "Support better posture", "Increase movement control", "Complement strength and conditioning work"],
    suitableFor: ["Members who feel stiff from regular training", "Beginners improving movement confidence", "Strength trainees working on range of motion", "Anyone wanting a lower-impact training option"],
    method: ["Mobility screening", "Controlled range-of-motion work", "Breathing and recovery practice", "Progressive flexibility training"],
    coach: { slug: "shenoy", ...coaches[2], kicker: "Fitness Coach", heading: "Build better movement habits with Shenoy." },
  },
] as const;

export type ProgramDetail = (typeof programDetails)[number];

export function getProgramBySlug(slug: string) {
  return programDetails.find((program) => program.slug === slug);
}
