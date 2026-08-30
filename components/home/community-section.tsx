import {
  CalendarClock,
  Dumbbell,
  Flower2,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";

const communityItems = [
  [UserRoundCheck, "EXPERT COACHES", "Guidance you can trust, results you can see."],
  [Dumbbell, "MODERN EQUIPMENT", "Latest machines for every workout."],
  [Target, "PERSONALIZED TRAINING", "Tailored programs for your goals."],
  [ShieldCheck, "HYGIENE FOCUS", "Clean, safe and well-maintained."],
  [CalendarClock, "FLEXIBLE TIMINGS", "Workout on your schedule."],
  [Flower2, "SUPPORTIVE COMMUNITY", "Join a family that pushes you forward."],
] as const;

export function CommunitySection() {
  return (
    <section id="about" className="bg-[#FAF8F8] py-12">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
          MORE THAN A GYM, WE ARE <span className="text-[#7A0008]">A COMMUNITY.</span>
        </h2>

        <div className="mt-8 grid overflow-hidden rounded-xl border border-[#E2D6D6] bg-white sm:grid-cols-2 lg:grid-cols-6">
          {communityItems.map(([Icon, title, copy]) => (
            <div
              key={title}
              className="border-b border-[#E2D6D6] p-5 text-center sm:border-r lg:border-b-0"
            >
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#F8EEEE] text-[#7A0008]">
                <Icon size={21} />
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-sm font-bold">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#555555]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
