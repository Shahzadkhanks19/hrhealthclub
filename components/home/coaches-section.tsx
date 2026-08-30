import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { coaches } from "./home-data";

const slugs = ["ravi", "ashish", "shenoy"] as const;

export function CoachesSection() {
  return (
    <section id="coaches" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Meet Our Team</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">OUR <span className="text-[#7A0008]">EXPERT</span> COACHES</h2></div>
        <Link href="/coaches" className="group hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex">VIEW ALL COACHES <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {coaches.map((coach, index) => (
          <Link key={coach.name} href={`/coaches/${slugs[index]}`} className="group grid min-h-56 grid-cols-[1fr_42%] overflow-hidden rounded-xl border border-[#E2D6D6] bg-white transition duration-300 hover:-translate-y-1.5 hover:border-[#7A0008]/30 hover:shadow-xl">
            <div className="p-5"><h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase transition group-hover:text-[#7A0008]">{coach.name}</h3><p className="mt-1 text-sm font-semibold text-[#7A0008]">{coach.role}</p><p className="mt-3 text-sm leading-6 text-[#555555]">{coach.copy}</p><div className="mt-4 flex gap-2 text-[#7A0008]"><span className="grid size-7 place-items-center rounded-full border border-[#E2D6D6]"><FaInstagram size={13}/></span><span className="grid size-7 place-items-center rounded-full border border-[#E2D6D6]"><FaFacebookF size={12}/></span><span className="grid size-7 place-items-center rounded-full border border-[#E2D6D6]"><FaYoutube size={13}/></span></div><span className="mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase text-[#7A0008]">VIEW PROFILE <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></div>
            <div className="relative overflow-hidden bg-[#F8EEEE]"><Image src={coach.image} alt={`${coach.name} ${coach.role}`} fill unoptimized className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="180px" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/35 to-transparent" /></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
