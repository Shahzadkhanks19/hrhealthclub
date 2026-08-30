import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programs } from "./home-data";

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12"
    >
      <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
        TRAIN SMART. TRAIN <span className="text-[#7A0008]">WITH PURPOSE.</span>
      </h2>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {programs.map((program) => (
          <article
            key={program.title}
            className="group overflow-hidden rounded-lg border border-[#E2D6D6] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-32 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                unoptimized
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="220px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-[family-name:var(--font-display)] font-bold">
                {program.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-[#555555]">
                {program.copy}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="#membership"
          className="inline-flex items-center gap-2 rounded-md bg-[#7A0008] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-[#450004]"
        >
          EXPLORE ALL PROGRAMS <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
