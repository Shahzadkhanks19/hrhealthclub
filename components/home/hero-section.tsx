import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroImage } from "./home-data";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-[610px] overflow-hidden bg-[#450004] text-white">
      <Image src={heroImage} alt="Premium strength training area inside HR Health Club" fill loading="eager" className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 via-43% to-[#450004]/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/55 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[610px] w-[min(1280px,calc(100%-2rem))] items-center py-14">
        <div className="max-w-[650px]">
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-white/65">HR HEALTH CLUB · JODHPUR</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[.86] tracking-tight sm:text-7xl lg:text-[88px]">BUILT BY<br/>DISCIPLINE,<br/><span className="text-white/55">LED BY COACHES.</span></h1>
          <div className="mt-6 h-1 w-12 bg-white" />
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">Premium coaching. Modern equipment. Real transformations. A focused environment built to help you become stronger every day.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/join" className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase text-[#7A0008] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F8EEEE] hover:shadow-xl">JOIN HR FAMILY <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
            <Link href="/programs" className="group inline-flex items-center gap-2 rounded-md border border-white/35 bg-[#450004]/35 px-6 py-3.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10">EXPLORE PROGRAMS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>

          <div className="mt-10 grid max-w-[610px] grid-cols-2 overflow-hidden rounded-lg border border-white/15 bg-[#450004]/58 backdrop-blur-sm sm:grid-cols-4">
            {[["500+","MEMBERS"],["10+","COACHES"],["9+","YEARS"],["4.9★","GOOGLE"]].map(([value,label]) => <div key={label} className="border-r border-white/10 px-4 py-4 text-center last:border-r-0"><strong className="block font-[family-name:var(--font-display)] text-xl font-black">{value}</strong><span className="mt-1 block font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-[.12em] text-white/60">{label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
