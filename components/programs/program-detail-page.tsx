import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  Check,
  CircleHelp,
  Dumbbell,
  Gauge,
  Layers3,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { programDetails, type ProgramDetail } from "./program-data";

const pillars = [
  [Dumbbell, "Coach Guided", "Technique support and clear progression in every phase."],
  [Gauge, "Progressive", "Training difficulty grows as your strength and capacity improve."],
  [Target, "Goal Focused", "Every exercise has a reason and connects to your main objective."],
  [Trophy, "Trackable", "Review progress consistently and adjust the plan when needed."],
] as const;

const firstWeeks = [
  ["WEEK 01", "Assess & Learn", "Understand your starting point, movement quality, current capacity and the standards for the program."],
  ["WEEK 02", "Build Rhythm", "Settle into repeatable sessions, learn the key exercises and establish a training rhythm you can sustain."],
  ["WEEK 03", "Progress Intentionally", "Increase challenge only where technique and recovery support it, with your coach guiding the progression."],
  ["WEEK 04", "Review & Refine", "Review consistency, performance and execution, then adjust the next phase around what you have actually achieved."],
] as const;

export function ProgramDetailPage({ program }: { program: ProgramDetail }) {
  const relatedPrograms = programDetails.filter((item) => item.slug !== program.slug).slice(0, 3);
  const faqs = [
    ["Do I need prior gym experience?", "No. The program can be scaled to your current fitness level, and the coach will help you understand technique, training structure and progression."],
    ["How quickly should I expect progress?", "Progress varies by starting point, consistency, recovery and the goal itself. The focus is on measurable improvement over time rather than promising a fixed result or deadline."],
    ["Can I combine this with personal training?", `Yes. ${program.coach.name} is the recommended coach for this program, and you can use the coach profile to explore personal-training support around the same goal.`],
    ["What happens if my goal changes?", "Your training direction can be reviewed and adjusted. The program is a structured starting point, not a rigid template that ignores your progress or changing priorities."],
  ] as const;

  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#111111] text-white">
        <Image src={program.image} alt="" fill loading="eager" unoptimized className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160001] via-[#450004]/90 to-[#7A0008]/35" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(135deg,transparent_0%,rgba(122,0,8,.16)_100%)] lg:block" />

        <div className="relative mx-auto grid min-h-[560px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal y={18}>
            <Link href="/programs" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-white/65 transition hover:text-white">
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" /> Programs / {program.title}
            </Link>
            <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[.18em] text-white/75 backdrop-blur-sm">{program.eyebrow}</div>
            <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.9] sm:text-6xl lg:text-[78px]">{program.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{program.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20want%20to%20book%20a%20free%20trial%20for%20one%20of%20your%20training%20programs." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-xl active:translate-y-0">BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
              <Link href={`/coaches/${program.coach.slug}`} className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-black/10 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10">MEET {program.coach.name} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={16} className="hidden lg:block">
            <div className="relative mx-auto min-h-[390px] max-w-[500px]">
              <div className="absolute inset-8 rotate-3 rounded-[2rem] border border-white/10 bg-white/5" />
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/15 bg-black/20 shadow-2xl backdrop-blur-sm">
                <Image src={program.image} alt={`${program.title} training`} fill unoptimized className="object-cover opacity-85" sizes="500px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#450004] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white text-[#7A0008]"><Dumbbell size={22} /></div>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">Structured. Progressive. Coach-led.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#E2D6D6] bg-white">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="group flex min-h-36 items-start gap-4 border-b border-[#E2D6D6] p-6 transition duration-300 hover:bg-[#FAF8F8] sm:border-r lg:border-b-0">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={20} /></span>
                <div><h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">{title}</h2><p className="mt-1 text-xs leading-5 text-[#555555]">{text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-20">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[540px] overflow-hidden rounded-3xl bg-[#111111] shadow-xl">
              <Image src={program.image} alt={`${program.title} training at HR Health Club`} fill unoptimized className="object-cover transition duration-700 hover:scale-105" sizes="(min-width:1024px) 44vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/90 via-transparent to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">The HR Standard</span>
                <p className="mt-2 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white">Train with a plan. Progress with purpose.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-[#7A0008]">Program Overview</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Built around your goal, not random workouts.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#555555]">{program.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {program.goals.map((goal) => (
                <div key={goal} className="group flex min-h-24 items-start gap-3 rounded-2xl border border-[#E2D6D6] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7A0008]/25 hover:shadow-lg">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008] transition group-hover:bg-[#7A0008] group-hover:text-white"><Check size={16} /></span>
                  <span className="pt-1 text-sm font-medium leading-6 text-[#444444]">{goal}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#450004] py-14 text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/60">{program.coach.kicker}</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">{program.coach.heading}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{program.coach.copy} Pair the program with coach guidance so your technique, progression and training decisions stay aligned with the goal.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/coaches/${program.coach.slug}`} className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-lg">VIEW {program.coach.name}&apos;S PROFILE <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              <Link href={`/coaches/${program.coach.slug}#book-pt`} className="group inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10">BOOK WITH {program.coach.name} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Link href={`/coaches/${program.coach.slug}`} className="group relative mx-auto block min-h-[360px] max-w-[470px] overflow-hidden rounded-3xl border border-white/15 bg-black/20 shadow-2xl">
              <Image src={program.coach.image} alt={`${program.coach.name}, ${program.coach.role} at HR Health Club`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 430px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160001] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-semibold uppercase tracking-[.18em] text-white/60">Coach for {program.title}</span>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div><h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">{program.coach.name}</h3><p className="mt-1 text-sm text-white/70">{program.coach.role}</p></div>
                  <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#7A0008] transition duration-300 group-hover:translate-x-1"><ArrowRight size={19} /></span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-20">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">How It Works</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Your training blueprint.</h2>
            <p className="mt-4 leading-7 text-[#555555]">A simple progression framework that keeps your training focused and measurable.</p>
          </Reveal>

          <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#E2D6D6] lg:block" />
            {program.method.map((item, index) => (
              <Reveal key={item} delay={index * 0.07}>
                <article className="group relative h-full rounded-2xl border border-[#E2D6D6] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7A0008]/25 hover:shadow-xl">
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-[#7A0008] font-[family-name:var(--font-display)] text-xl font-bold text-white shadow-lg transition duration-300 group-hover:scale-110">0{index + 1}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold uppercase">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#555555]">Structured coaching, clear execution and progress checks keep this phase aligned with your goal.</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 py-20 lg:grid-cols-[1.08fr_.92fr]">
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl bg-[#450004] p-8 text-white sm:p-10">
            <div className="absolute -right-14 -top-14 size-48 rounded-full border border-white/10" />
            <div className="absolute -right-4 top-8 size-28 rounded-full border border-white/10" />
            <span className="flex size-12 items-center justify-center rounded-xl bg-white/10"><Users size={23} /></span>
            <p className="mt-6 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/60">Best Fit</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase sm:text-4xl">Who this program is for.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {program.suitableFor.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.06] p-4 text-sm leading-6 text-white/80"><Check size={16} className="mt-1 shrink-0 text-white" />{item}</div>)}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="group h-full overflow-hidden rounded-3xl border border-[#E2D6D6] bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Layers3 size={23} /></span>
            <p className="mt-6 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">What You Get</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">More than a workout plan.</h2>
            <div className="mt-7 space-y-4">
              {["Goal and starting-point assessment", "Coach-led training guidance", "Progression and technique support", "Routine reviews and adjustments"].map((item) => <div key={item} className="group/item flex items-center gap-4 rounded-xl border border-[#E2D6D6] p-4 transition hover:border-[#7A0008]/25 hover:bg-[#FAF8F8]"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008]"><Sparkles size={16} /></span><span className="text-sm font-medium text-[#444444]">{item}</span></div>)}
            </div>
          </article>
        </Reveal>
      </section>

      <section className="border-y border-[#E2D6D6] bg-white py-20">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
          <Reveal className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><CalendarDays size={22} /></span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Your First Month</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">What the first four weeks can look like.</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#555555]">The exact pace depends on your starting point, but the early phase follows a clear rhythm: learn, build consistency, progress and review.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {firstWeeks.map(([week, title, text], index) => (
                <Reveal key={week} delay={index * 0.05}>
                  <article className="group h-full rounded-2xl border border-[#E2D6D6] bg-[#FAF8F8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7A0008]/25 hover:bg-white hover:shadow-lg">
                    <span className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[.18em] text-[#7A0008]">{week}</span>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold uppercase">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#555555]">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <span className="flex size-12 items-center justify-center rounded-xl bg-white text-[#7A0008] shadow-sm"><CircleHelp size={22} /></span>
            <p className="mt-5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Program FAQ</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Questions before you start?</h2>
            <p className="mt-5 max-w-md leading-7 text-[#555555]">These are the common things members usually want to understand before choosing a training direction.</p>
          </Reveal>
          <div className="grid gap-3">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.05}>
                <details className="group rounded-2xl border border-[#E2D6D6] bg-white p-5 open:shadow-lg">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase marker:hidden">
                    {question}
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008] transition duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 border-t border-[#E2D6D6] pt-4 text-sm leading-7 text-[#555555]">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-20">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Keep Exploring</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Related training paths.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#555555]">Compare nearby goals before deciding which direction fits you best.</p>
          </div>
          <Link href="/programs" className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase text-[#7A0008]">VIEW ALL PROGRAMS <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedPrograms.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <Link href={`/programs/${item.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7A0008]/25 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/85 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[.14em] text-[#7A0008]">{item.eyebrow}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4"><h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">{item.title}</h3><ArrowRight size={19} className="mt-1 shrink-0 text-[#7A0008] transition-transform duration-300 group-hover:translate-x-1" /></div>
                  <p className="mt-3 text-sm leading-6 text-[#555555]">{item.intro}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-[#7A0008]">Recommended coach: {item.coach.name}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto my-12 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white shadow-sm transition duration-500 hover:shadow-xl md:grid-cols-[38%_62%]">
          <div className="relative min-h-64 overflow-hidden"><Image src={program.image} alt={`${program.title} consultation`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 480px, 100vw" /><div className="absolute inset-0 bg-[#450004]/35" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase">READY TO GET STARTED?</p><h2 className="mt-2 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase">START YOUR {program.title} JOURNEY.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Train with {program.coach.name}, understand the approach and see how coach-led progression can support your current goal.</p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/coaches/${program.coach.slug}`} className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition duration-300 hover:-translate-y-1 hover:bg-[#F8EEEE] hover:shadow-lg active:translate-y-0">MEET {program.coach.name} <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20my%20free%20trial." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white ring-1 ring-white/25 transition duration-300 hover:-translate-y-1 hover:bg-[#5A0006] hover:shadow-lg active:translate-y-0"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></a></div></div>
        </section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
