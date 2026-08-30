import {
  Dumbbell,
  Medal,
  Trophy,
  UserRoundCheck,
  Users,
} from "lucide-react";

const stats = [
  [Users, "500+", "HAPPY MEMBERS"],
  [UserRoundCheck, "10+", "EXPERT COACHES"],
  [Dumbbell, "20+", "PROGRAMS"],
  [Medal, "5000+", "SQ. FT. AREA"],
  [Trophy, "9+", "YEARS OF TRUST"],
] as const;

export function StatsStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-7 w-[min(1180px,calc(100%-2rem))] rounded-xl border border-[#E2D6D6] bg-white shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(([Icon, value, label], index) => (
          <div
            key={label}
            className={`flex min-w-0 items-center justify-center gap-3 px-3 py-5 sm:px-4 ${
              index < 4 ? "lg:border-r lg:border-[#E2D6D6]" : ""
            }`}
          >
            <Icon size={30} className="shrink-0 text-[#7A0008]" />
            <div className="min-w-0">
              <strong className="block whitespace-nowrap font-[family-name:var(--font-display)] text-2xl leading-none">
                {value}
              </strong>
              <span className="block whitespace-nowrap font-[family-name:var(--font-display)] text-[10px] font-semibold sm:text-[11px]">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
