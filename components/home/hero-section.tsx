import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroImage } from "./home-data";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#450004] text-white">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Premium strength training area inside HR Health Club" fill loading="eager" className="object-cover object-center opacity-48" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 via-42% to-[#7A0008]/20" />
      </div>

      <div className="relative mx-auto grid min-h-[590px] w-[min(1280px,calc(100%-2rem))] items-center gap-8 py-14 lg:grid-cols-[.78fr_1.22fr]">
        <div className="z-10 max-w-xl">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold uppercase leading-tight text-white/70 sm:text-xl">WELCOME TO<br /><span className="text-white">HR HEALTH CLUB</span></p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-[82px]">BUILT BY<br />DISCIPLINE,<br /><span className="text-white/55">LED BY<br />COACHES.</span></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/75">Premium Coaching. Modern Equipment. Real Transformations.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#membership" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F8EEEE] hover:shadow-xl">JOIN HR FAMILY <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/programs" className="group inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/5 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10">EXPLORE PROGRAMS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-white/65"><button type="button" aria-label="Previous hero slide" className="flex size-8 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white/10"><ChevronLeft size={16}/></button><span className="h-0.5 w-12 bg-white"/><span className="font-[family-name:var(--font-display)] text-xs font-bold">01</span><span className="font-[family-name:var(--font-display)] text-xs">02</span><span className="font-[family-name:var(--font-display)] text-xs">03</span><button type="button" aria-label="Next hero slide" className="flex size-8 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white/10"><ChevronRight size={16}/></button></div>
        </div>

        <div className="relative hidden min-h-[470px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:block">
          <Image src={heroImage} alt="HR Health Club premium training floor" fill loading="eager" className="object-cover" sizes="(min-width:1024px) 58vw, 1px" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#450004]/18" />
          <div className="absolute bottom-5 right-5 rounded-xl border border-white/15 bg-[#450004]/75 px-5 py-4 backdrop-blur-sm"><span className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[.16em] text-white/65">Built by discipline</span><strong className="mt-1 block font-[family-name:var(--font-display)] text-xl uppercase">Led by coaches.</strong></div>
        </div>
      </div>
    </section>
  );
}
