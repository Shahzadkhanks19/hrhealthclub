import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { coaches } from "./home-data";

export function CoachesSection() {
  return (
    <section
      id="coaches"
      className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
          OUR <span className="text-[#7A0008]">EXPERT</span> COACHES
        </h2>
        <a
          href="#coaches"
          className="hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex"
        >
          VIEW ALL COACHES <ArrowRight size={17} />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {coaches.map((coach) => (
          <article
            key={coach.name}
            className="grid min-h-48 grid-cols-[1fr_42%] overflow-hidden rounded-xl border border-[#E2D6D6] bg-white"
          >
            <div className="p-5">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                {coach.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#7A0008]">
                {coach.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#555555]">
                {coach.copy}
              </p>
              <div className="mt-4 flex gap-2 text-[#7A0008]">
                <Instagram size={17} />
                <Facebook size={17} />
                <Youtube size={17} />
              </div>
            </div>

            <div className="relative bg-[#F8EEEE]">
              <Image
                src={coach.image}
                alt={`${coach.name} ${coach.role}`}
                fill
                unoptimized
                className="object-cover object-top"
                sizes="180px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
