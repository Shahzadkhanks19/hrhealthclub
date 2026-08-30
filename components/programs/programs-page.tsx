import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Dumbbell } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage, programs } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const slugs = ["muscle-building", "fat-loss", "strength-training", "functional-training", "cardio-conditioning", "yoga-mobility"] as const;
const benefits = ["Goal-focused training structure", "Coach-led technique and progression", "Scalable for your current fitness level"];
const process = [["01", "Choose Your Goal", "Tell us what you want to improve and where you are starting from."], ["02", "Train With Structure", "Follow a clear direction with the right exercises, intensity and progression."], ["03", "Track Your Progress", "Stay consistent, review progress and keep raising the standard over time."]] as const;

export function ProgramsPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <div className="absolute inset-0 opacity-20"><Image src={heroImage} alt="" fill priority className="object-cover" sizes="100vw" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/95 to-[#7A0008]/70" />
        <div className="relative mx-auto grid min-h-[460px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="max-w-3xl" y={20}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-white/70">Training Programs</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.95] sm:text-6xl lg:text-7xl">Train smart. <span className="text-white/60">Train with purpose.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Choose a training direction built around what you want to achieve. Every program combines structure, progression and the support to keep moving forward.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#free-trial" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-xl active:translate-y-0">BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
              <Link href="#all-programs" className="group inline-flex items-center gap-2 rounded-md border border-white/35 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 active:translate-y-0">EXPLORE PROGRAMS <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>
          <Reveal className="relative hidden min-h-[320px] lg:block" delay={0.12} y={16}>
            <div className="absolute inset-8 rotate-6 rounded-[2.5rem] border border-white/15 bg-white/5" />
            <div className="absolute inset-14 -rotate-3 rounded-[2rem] border border-white/10" />
            <span className="absolute bottom-10 right-10 font-[family-name:var(--font-display)] text-8xl font-black text-white/[.06]">HR</span>
          </Reveal>
        </div>
      </section>

      <section id="all-programs" className="mx-auto w-[min(1280px,calc(100%-2rem))] scroll-mt-28 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Find Your Focus</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">A program for every goal.</h2>
          <p className="mt-4 leading-7 text-[#555555]">From building strength to improving mobility, choose the path that matches your goal and explore how we approach the training.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#7A0008]/30 hover:shadow-2xl">
                <Link href={`/programs/${slugs[index]}`} className="block h-full">
                  <div className="relative h-64 overflow-hidden"><Image src={program.image} alt={program.title} fill unoptimized className="object-cover transition duration-700 ease-out group-hover:scale-110" sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/75 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" /><span className="absolute bottom-5 left-5 flex size-11 items-center justify-center rounded-full bg-white text-[#7A0008] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#7A0008] group-hover:text-white"><Dumbbell size={20} /></span></div>
                  <div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase transition-colors duration-300 group-hover:text-[#7A0008]">{program.title}</h3><ArrowRight size={20} className="mt-1 shrink-0 text-[#7A0008] transition-transform duration-300 group-hover:translate-x-1.5" /></div><p className="mt-3 leading-7 text-[#555555]">{program.copy}</p><div className="mt-5 space-y-2 border-t border-[#E2D6D6] pt-5">{benefits.map((benefit) => <span key={benefit} className="flex items-center gap-2 text-sm text-[#555555]"><Check size={15} className="text-[#7A0008]" />{benefit}</span>)}</div><span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">VIEW PROGRAM <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" /></span></div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 lg:grid-cols-3">
          {process.map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-[#E2D6D6] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#7A0008]/25 hover:shadow-xl"><span className="font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition duration-300 group-hover:tracking-[.08em]">{number}</span><h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase transition-colors duration-300 group-hover:text-[#7A0008]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#555555]">{text}</p></article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto my-12 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white shadow-sm transition duration-500 hover:shadow-xl md:grid-cols-[38%_62%]"><div className="relative min-h-56 overflow-hidden"><Image src={heroImage} alt="HR Health Club training floor" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 480px, 100vw" /><div className="absolute inset-0 bg-[#450004]/25" /></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase">NOT SURE WHICH PROGRAM FITS YOU?</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">START WITH A FREE TRIAL.</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/#contact" className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-lg active:translate-y-0">TALK TO OUR TEAM <ArrowRight size={17} className="transition-transform duration-300 group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20my%20free%20trial." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white ring-1 ring-white/25 transition duration-300 hover:-translate-y-1 hover:bg-[#5A0006] hover:shadow-lg active:translate-y-0"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform duration-300 group-hover/button:translate-x-1" /></a></div></div></section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
