import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Dumbbell,
  Gauge,
  Target,
  Trophy,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProgramFaq } from "./program-faq";
import { programDetails, type ProgramDetail } from "./program-data";

const pillars = [
  [Dumbbell, "Coach Guided", "Technique support and progression with a clear purpose."],
  [Gauge, "Progressive", "Difficulty increases as your capacity and confidence improve."],
  [Target, "Goal Focused", "Every phase connects directly to the result you are pursuing."],
  [Trophy, "Trackable", "Progress is reviewed so the program can evolve with you."],
] as const;

export function ProgramDetailPage({ program }: { program: ProgramDetail }) {
  const relatedPrograms = programDetails.filter((item) => item.slug !== program.slug).slice(0, 3);
  const faqs = [
    ["Do I need prior gym experience?", "No. The program can be scaled to your current fitness level, and your coach will help you understand technique, training structure and progression."],
    ["How quickly should I expect progress?", "Progress depends on your starting point, consistency, recovery and the goal itself. We focus on measurable improvement rather than fixed promises."],
    ["Can I combine this with personal training?", `Yes. ${program.coach.name} is the recommended coach for this program and can provide personal-training support around the same goal.`],
    ["What happens if my goal changes?", "Your training direction can be reviewed and adjusted. The program is a structured starting point, not a rigid template."],
  ] as const;

  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <Image src={program.image} alt={`${program.title} program`} fill priority unoptimized className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/94 to-[#7A0008]/42" />
        <div className="relative mx-auto grid min-h-[560px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-14 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal y={22}>
            <Link href="/programs" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-white/65 transition hover:text-white"><ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />Programs / {program.title}</Link>
            <p className="mt-7 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/70">{program.eyebrow}</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.92] sm:text-6xl lg:text-[72px]">{program.title}</h1>
            <div className="mt-6 h-1 w-12 bg-white/80" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/78">{program.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3"><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20a%20free%20trial." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a><Link href={`/coaches/${program.coach.slug}`} className="group inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]">MEET {program.coach.name} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-h-[430px]" y={18}>
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"><Image src={program.image} alt={`${program.title} training at HR Health Club`} fill unoptimized className="object-cover" sizes="(min-width:1024px) 58vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/82 via-transparent to-black/10" /></div>
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-[#160001]/82 p-5 backdrop-blur-sm"><span className="flex size-10 items-center justify-center rounded-full bg-white text-[#7A0008]"><Dumbbell size={18} /></span><p className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold uppercase">Structured. Progressive. Coach-led.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#E2D6D6] bg-white">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] sm:grid-cols-2 lg:grid-cols-4">{pillars.map(([Icon, title, text], index) => <Reveal key={title} delay={index * 0.05}><article className="group flex min-h-36 gap-4 border-b border-[#E2D6D6] p-6 transition hover:bg-[#FAF8F8] sm:border-r lg:border-b-0"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008] transition group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={20} /></span><div><h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">{title}</h2><p className="mt-1 text-xs leading-5 text-[#555555]">{text}</p></div></article></Reveal>)}</div>
      </section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <Reveal><div className="group relative min-h-[470px] overflow-hidden rounded-2xl"><Image src={program.image} alt={`${program.title} overview`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 46vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/75 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6"><span className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[.18em] text-white/65">The HR Standard</span><p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white">Train with a plan. Progress with purpose.</p></div></div></Reveal>
        <Reveal delay={0.07}><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Program Overview</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Built around your goal.</h2><p className="mt-5 leading-8 text-[#555555]">{program.description}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{program.goals.map((goal) => <div key={goal} className="group flex items-start gap-3 rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-4 transition hover:-translate-y-0.5 hover:border-[#7A0008]/25 hover:bg-white"><span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#7A0008] text-white"><Check size={14} /></span><span className="text-sm leading-6 text-[#444444]">{goal}</span></div>)}</div></Reveal>
      </section>

      <section className="bg-[#FAF8F8] py-16">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-6 lg:grid-cols-2">
          <Reveal><article className="h-full rounded-2xl border border-[#E2D6D6] bg-white p-7 sm:p-8"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Who This Program Is For</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">A better fit starts here.</h2><div className="mt-6 grid gap-3">{program.suitableFor.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-4 text-sm leading-6 text-[#555555]"><Check size={16} className="mt-1 shrink-0 text-[#7A0008]" />{item}</div>)}</div></article></Reveal>
          <Reveal delay={0.07}><article className="h-full rounded-2xl bg-[#450004] p-7 text-white sm:p-8"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/60">How We Approach It</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">Your training blueprint.</h2><div className="mt-6 grid gap-3">{program.method.map((item, index) => <div key={item} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.06] p-4 transition hover:bg-white/10"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">0{index + 1}</span><span className="text-sm font-medium text-white/82">{item}</span></div>)}</div></article></Reveal>
        </div>
      </section>

      <section className="bg-[#7A0008] py-14 text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/60">{program.coach.kicker}</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">{program.coach.heading}</h2><p className="mt-5 max-w-2xl leading-8 text-white/72">{program.coach.copy} Pair the program with coach guidance so technique, progression and training decisions stay aligned with the goal.</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/coaches/${program.coach.slug}`} className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">VIEW {program.coach.name}&apos;S PROFILE <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link><Link href={`/coaches/${program.coach.slug}#book-pt`} className="group inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]">BOOK WITH {program.coach.name} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div></Reveal>
          <Reveal delay={0.07}><Link href={`/coaches/${program.coach.slug}`} className="group relative mx-auto block min-h-[360px] max-w-[470px] overflow-hidden rounded-2xl border border-white/15"><Image src={program.coach.image} alt={`${program.coach.name}, ${program.coach.role}`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 430px, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004] via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-xs uppercase tracking-[.16em] text-white/60">Recommended Coach</p><h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">{program.coach.name}</h3><p className="text-sm text-white/70">{program.coach.role}</p></div></Link></Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <Reveal><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Program FAQ</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Questions before you start?</h2><p className="mt-5 max-w-md leading-7 text-[#555555]">The accordion keeps one answer open at a time and stays contained within its own column to prevent the surrounding layout from stretching sideways.</p></Reveal>
          <Reveal delay={0.06}><div className="min-h-[360px]"><ProgramFaq items={faqs} /></div></Reveal>
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-16">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]"><Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Keep Exploring</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Related training paths.</h2></div><Link href="/programs" className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase text-[#7A0008]">VIEW ALL PROGRAMS <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></Reveal><div className="mt-8 grid gap-5 md:grid-cols-3">{relatedPrograms.map((item, index) => <Reveal key={item.slug} delay={index * 0.05}><Link href={`/programs/${item.slug}`} className="group block overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-48 overflow-hidden"><Image src={item.image} alt={item.title} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/80 via-transparent to-transparent" /></div><div className="p-5"><div className="flex items-start justify-between gap-4"><h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">{item.title}</h3><ArrowRight size={18} className="mt-1 text-[#7A0008] transition-transform group-hover:translate-x-1" /></div><p className="mt-2 text-xs font-semibold uppercase tracking-[.12em] text-[#7A0008]">Coach: {item.coach.name}</p></div></Link></Reveal>)}</div></div>
      </section>

      <Reveal className="mx-auto my-12 w-[min(1280px,calc(100%-2rem))]"><section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[40%_60%]"><div className="relative min-h-64 overflow-hidden"><Image src={program.image} alt={`${program.title} consultation`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 520px, 100vw" /><div className="absolute inset-0 bg-[#450004]/30" /></div><div className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Ready to get started?</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Try the program with our team.</h2><div className="mt-6 flex flex-wrap gap-3"><Link href={`/coaches/${program.coach.slug}`} className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:bg-[#F8EEEE]">MEET YOUR COACH <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20a%20free%20trial." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-[#5A0006]"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></a></div></div></section></Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
