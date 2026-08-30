import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "./home-data";

const slugs = ["muscle-building", "fat-loss", "strength-training", "functional-training", "cardio-conditioning", "yoga-mobility"] as const;

export function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Our Programs</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">TRAIN SMART. TRAIN <span className="text-[#7A0008]">WITH PURPOSE.</span></h2>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {programs.map((program, index) => (
          <Link key={program.title} href={`/programs/${slugs[index]}`} className="group overflow-hidden rounded-lg border border-[#E2D6D6] bg-white transition duration-300 hover:-translate-y-1.5 hover:border-[#7A0008]/30 hover:shadow-xl">
            <div className="relative h-36 overflow-hidden">
              <Image src={program.image} alt={program.title} fill unoptimized className="object-cover transition duration-700 group-hover:scale-110" sizes="220px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
            </div>
            <div className="p-4"><h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase transition group-hover:text-[#7A0008]">{program.title}</h3><p className="mt-2 text-xs leading-5 text-[#555555]">{program.copy}</p></div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center"><Link href="/programs" className="group inline-flex items-center gap-2 rounded-md border border-[#7A0008] bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7A0008] hover:text-white hover:shadow-lg">EXPLORE ALL PROGRAMS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
    </section>
  );
}
