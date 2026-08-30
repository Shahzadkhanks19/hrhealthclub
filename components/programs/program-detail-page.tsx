import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Dumbbell, Target, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ProgramDetail } from "./program-data";

export function ProgramDetailPage({ program }: { program: ProgramDetail }) {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <Image
          src={program.image}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/90 to-[#7A0008]/55" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-16">
          <Reveal className="max-w-3xl" y={20}>
            <Link href="/programs" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> BACK TO PROGRAMS
            </Link>
            <p className="mt-8 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-white/65">{program.eyebrow}</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.95] sm:text-6xl lg:text-7xl">{program.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{program.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20want%20to%20know%20more%20about%20your%20training%20programs." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-xl active:translate-y-0">BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-md border border-white/35 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 active:translate-y-0">TALK TO A COACH</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-12 py-20 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl bg-[#F8EEEE]">
            <Image src={program.image} alt={`${program.title} training at HR Health Club`} fill unoptimized className="object-cover transition duration-700 hover:scale-105" sizes="(min-width:1024px) 46vw, 100vw" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl bg-[#7A0008]/95 p-5 text-white backdrop-blur-sm">
              <Dumbbell size={24} />
              <p className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold uppercase">Structured. Progressive. Coach-led.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Program Overview</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">A clear plan for your goal.</h2>
          <p className="mt-6 text-base leading-8 text-[#555555]">{program.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {program.goals.map((goal) => (
              <div key={goal} className="group flex items-start gap-3 rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#7A0008]/25 hover:bg-white hover:shadow-lg">
                <Check size={18} className="mt-0.5 shrink-0 text-[#7A0008]" />
                <span className="text-sm leading-6 text-[#555555]">{goal}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#FAF8F8] py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-[#E2D6D6] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Users size={23} /></span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold uppercase">Who this program is for</h2>
              <div className="mt-5 grid gap-3">{program.suitableFor.map((item) => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#555555]"><Check size={16} className="mt-1 shrink-0 text-[#7A0008]" />{item}</div>)}</div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-[#E2D6D6] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Target size={23} /></span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold uppercase">How we approach it</h2>
              <div className="mt-5 grid gap-3">{program.method.map((item, index) => <div key={item} className="group flex items-center gap-4 rounded-xl border border-[#E2D6D6] p-4 transition duration-300 hover:border-[#7A0008]/25 hover:bg-[#FAF8F8]"><span className="font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">0{index + 1}</span><span className="text-sm text-[#555555]">{item}</span></div>)}</div>
            </article>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto my-12 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white shadow-sm transition duration-500 hover:shadow-xl md:grid-cols-[38%_62%]">
          <div className="relative min-h-56 overflow-hidden"><Image src={program.image} alt={`${program.title} consultation`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 480px, 100vw" /><div className="absolute inset-0 bg-[#450004]/30" /></div>
          <div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase">READY TO GET STARTED?</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">TRY THE PROGRAM WITH OUR TEAM.</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/#contact" className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-lg active:translate-y-0">TALK TO OUR TEAM <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20my%20free%20trial." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white ring-1 ring-white/25 transition duration-300 hover:-translate-y-1 hover:bg-[#5A0006] hover:shadow-lg active:translate-y-0"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></a></div></div>
        </section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
