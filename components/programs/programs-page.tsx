import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Dumbbell, Target, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage, programs } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { programDetails } from "./program-data";

const slugs = ["muscle-building", "fat-loss", "strength-training", "functional-training", "cardio-conditioning", "yoga-mobility"] as const;

const highlights = [
  [Dumbbell, "Structured Training", "Clear exercise direction and purposeful progression."],
  [Users, "Coach Guided", "Support from coaches who understand the goal behind the program."],
  [Target, "Goal Focused", "A training path built around the result you want to pursue."],
] as const;

export function ProgramsPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club training programs" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 to-[#7A0008]/40" />
        <div className="relative mx-auto grid min-h-[520px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-14 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal y={22}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/70">Home / Programs</p>
            <p className="mt-7 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-white/70">Our Programs</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.94] sm:text-6xl lg:text-[70px]">Train smart. <span className="text-white/55">Train with</span> purpose.</h1>
            <div className="mt-6 h-1 w-12 bg-white/80" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/78">From muscle building and fat loss to strength, cardio and mobility, choose the direction that matches your goal and train with structure.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="#all-programs" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">EXPLORE PROGRAMS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20help%20choosing%20a%20training%20program." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]">TALK TO OUR TEAM <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a></div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-h-[410px]" y={18}>
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"><Image src={heroImage} alt="HR Health Club gym interior" fill className="object-cover" sizes="(min-width:1024px) 58vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/75 via-transparent to-black/10" /></div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 overflow-hidden rounded-xl border border-white/15 bg-[#160001]/80 backdrop-blur-sm">
              {highlights.map(([Icon, title]) => <div key={title} className="flex flex-col items-center gap-2 border-r border-white/10 p-4 text-center last:border-r-0"><Icon size={20} /><span className="font-[family-name:var(--font-display)] text-xs font-bold uppercase">{title}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="all-programs" className="mx-auto w-[min(1280px,calc(100%-2rem))] scroll-mt-28 py-16">
        <Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Choose Your Goal</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Our training programs</h2><p className="mx-auto mt-4 max-w-3xl leading-7 text-[#555555]">Each path combines a clear training focus with coach support so you know what you are working toward and who can help you get there.</p></Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const detail = programDetails.find((item) => item.slug === slugs[index]);
            if (!detail) return null;

            return (
              <Reveal key={program.title} delay={index * 0.05}>
                <article className="group h-full overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white shadow-sm transition duration-400 hover:-translate-y-1.5 hover:border-[#7A0008]/25 hover:shadow-xl">
                  <Link href={`/programs/${detail.slug}`} className="block">
                    <div className="relative h-56 overflow-hidden"><Image src={program.image} alt={program.title} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/85 via-transparent to-transparent" /><span className="absolute left-4 top-4 rounded-md bg-[#7A0008] px-3 py-1.5 font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[.12em] text-white">{detail.eyebrow}</span><span className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-full bg-white text-[#7A0008]"><Dumbbell size={18} /></span></div>
                    <div className="p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">{program.title}</h3><p className="mt-2 text-sm leading-6 text-[#555555]">{program.copy}</p></div><ArrowRight size={19} className="mt-1 shrink-0 text-[#7A0008] transition-transform group-hover:translate-x-1" /></div><div className="mt-4 grid gap-2 border-t border-[#E2D6D6] pt-4">{detail.goals.slice(0, 2).map((goal) => <span key={goal} className="flex items-center gap-2 text-xs text-[#555555]"><Check size={14} className="shrink-0 text-[#7A0008]" />{goal}</span>)}</div></div>
                  </Link>

                  <div className="border-t border-[#E2D6D6] bg-[#FAF8F8] p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-[#F8EEEE]"><Image src={detail.coach.image} alt={`${detail.coach.name}, ${detail.coach.role}`} fill unoptimized className="object-cover" sizes="56px" /></div>
                      <div className="min-w-0 flex-1"><p className="font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-[.12em] text-[#7A0008]">Recommended Coach</p><h4 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">{detail.coach.name}</h4><p className="truncate text-xs text-[#555555]">{detail.coach.role}</p></div>
                      <Link href={`/coaches/${detail.coach.slug}`} aria-label={`View ${detail.coach.name} coach profile`} className="group/coach flex size-10 shrink-0 items-center justify-center rounded-full bg-[#7A0008] text-white transition hover:-translate-y-0.5 hover:bg-[#450004]"><ArrowRight size={17} className="transition-transform group-hover/coach:translate-x-0.5" /></Link>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-[#555555]">Start your {program.title.toLowerCase()} journey with {detail.coach.name} and get guidance aligned with this program.</p>
                    <div className="mt-3 grid grid-cols-2 gap-2"><Link href={`/coaches/${detail.coach.slug}`} className="rounded-md border border-[#E2D6D6] bg-white px-3 py-2 text-center font-[family-name:var(--font-display)] text-xs font-bold uppercase text-[#7A0008] transition hover:border-[#7A0008]/30 hover:bg-[#F8EEEE]">VIEW COACH</Link><Link href={`/coaches/${detail.coach.slug}#book-pt`} className="rounded-md bg-[#7A0008] px-3 py-2 text-center font-[family-name:var(--font-display)] text-xs font-bold uppercase text-white transition hover:bg-[#450004]">BOOK PT</Link></div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-14">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] rounded-2xl border border-[#E2D6D6] bg-white p-6 sm:p-8">
          <Reveal className="text-center"><h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase sm:text-4xl">Why train with <span className="text-[#7A0008]">a clear program?</span></h2></Reveal>
          <div className="mt-8 grid gap-0 md:grid-cols-3">{highlights.map(([Icon, title, text], index) => <Reveal key={title} delay={index * 0.06}><article className="group h-full border-b border-[#E2D6D6] p-6 text-center transition hover:bg-[#FAF8F8] md:border-b-0 md:border-r md:last:border-r-0"><span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008] transition group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={22} /></span><h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase">{title}</h3><p className="mt-2 text-sm leading-6 text-[#555555]">{text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <Reveal className="mx-auto my-12 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[40%_60%]"><div className="relative min-h-64 overflow-hidden"><Image src={heroImage} alt="HR Health Club training floor" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 520px, 100vw" /><div className="absolute inset-0 bg-[#450004]/30" /></div><div className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Not sure which program fits you?</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Start with a free consultation.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Tell us your goal and we will help you choose the right training path and the coach best suited to guide it.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/#contact" className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">TALK TO OUR TEAM <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]"><CalendarCheck size={17} />BOOK FREE CONSULTATION <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></a></div></div></section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
