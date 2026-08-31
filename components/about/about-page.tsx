import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Dumbbell, HeartPulse, Salad, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pillars = [
  [Target, "OUR MISSION", "Help every individual achieve their fitness goals with the right guidance, environment and support."],
  [HeartPulse, "OUR VISION", "Be Jodhpur's trusted, result-driven fitness destination where training builds confidence and community."],
  [Award, "OUR VALUES", "Discipline, integrity, passion for fitness, respect for every member and continuous improvement."],
] as const;
const reasons = [
  [Users,"EXPERT COACHES","Experienced coaches guiding every step."],
  [Dumbbell,"PREMIUM EQUIPMENT","Modern and well-maintained training equipment."],
  [Target,"PERSONALIZED TRAINING","Training aligned to your goal and ability."],
  [Salad,"NUTRITION GUIDANCE","Practical guidance supporting your training."],
  [Sparkles,"SUPPORTIVE COMMUNITY","A motivating environment built around progress."],
  [ShieldCheck,"HYGIENE & SAFETY","A clean, safe and disciplined training space."],
] as const;

export function AboutPage() {
  return <main className="overflow-x-clip bg-white text-[#111111]">
    <SiteHeader />

    <section className="relative isolate min-h-[590px] overflow-hidden bg-[#450004] text-white">
      <Image src={heroImage} alt="HR Health Club training floor" fill priority className="object-cover" sizes="100vw"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/94 via-46% to-[#450004]/18"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/45 via-transparent to-transparent"/>
      <div className="relative mx-auto flex min-h-[590px] w-[min(1280px,calc(100%-2rem))] items-center py-14">
        <Reveal className="max-w-[660px]">
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">HOME / ABOUT US</p>
          <h1 className="mt-7 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[.88] sm:text-7xl lg:text-[84px]">MORE THAN A GYM,<br/><span className="text-white/55">WE ARE A COMMUNITY.</span></h1>
          <div className="mt-6 h-1 w-12 bg-white"/>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">HR Health Club is where discipline meets motivation, expert guidance and a community that helps you keep moving forward.</p>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 py-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
      <Reveal><div className="relative min-h-[420px] overflow-hidden rounded-xl border border-[#E2D6D6]"><Image src={heroImage} alt="HR Health Club interior" fill className="object-cover" sizes="(min-width:1024px)48vw,100vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/45 via-transparent to-transparent"/></div></Reveal>
      <Reveal delay={.06}><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">OUR STORY</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-black uppercase sm:text-5xl">BUILT ON DISCIPLINE. GROWN THROUGH COMMUNITY.</h2><p className="mt-5 leading-8 text-[#555555]">Founded with a vision to transform lives, HR Health Club brings together expert coaching, modern infrastructure and a family-like environment. Fitness is not a destination here; it is a lifestyle supported every day.</p><div className="mt-7 grid grid-cols-3 overflow-hidden rounded-xl border border-[#E2D6D6] bg-[#FAF8F8]">{[["500+","HAPPY MEMBERS"],["10+","EXPERT COACHES"],["9+","YEARS OF TRUST"]].map(([v,l])=><div key={l} className="border-r border-[#E2D6D6] p-5 text-center last:border-r-0"><strong className="block font-[family-name:var(--font-display)] text-3xl font-black text-[#7A0008]">{v}</strong><span className="mt-1 block text-[10px] font-bold uppercase text-[#555555]">{l}</span></div>)}</div></Reveal>
    </section>

    <section className="border-y border-[#E2D6D6] bg-[#FAF8F8] py-14">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]"><Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">WHAT DRIVES US</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-black uppercase">OUR MISSION, VISION & VALUES</h2></Reveal><div className="mt-8 grid gap-4 md:grid-cols-3">{pillars.map(([Icon,title,text],i)=><Reveal key={title} delay={i*.05}><article className="group h-full rounded-xl border border-[#E2D6D6] bg-white p-7 text-center transition hover:-translate-y-1 hover:border-[#7A0008]/30 hover:shadow-xl"><span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#7A0008] text-white transition group-hover:scale-105"><Icon size={24}/></span><h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-black uppercase">{title}</h3><p className="mt-3 text-sm leading-7 text-[#555555]">{text}</p></article></Reveal>)}</div></div>
    </section>

    <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-14">
      <Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">WHY HR?</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-black uppercase">WHY CHOOSE HR HEALTH CLUB?</h2></Reveal>
      <div className="mt-8 grid overflow-hidden rounded-xl border border-[#E2D6D6] sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([Icon,title,text],i)=><Reveal key={title} delay={i*.04}><article className="group h-full border-b border-r border-[#E2D6D6] p-6 transition hover:bg-[#FAF8F8]"><span className="flex size-11 items-center justify-center rounded-lg bg-[#F8EEEE] text-[#7A0008] transition group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={20}/></span><h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-black uppercase">{title}</h3><p className="mt-2 text-sm leading-6 text-[#555555]">{text}</p></article></Reveal>)}</div>
    </section>

    <section className="mx-auto mb-14 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-xl border border-[#E2D6D6] bg-[#7A0008] text-white md:grid-cols-[40%_60%]">
      <div className="relative min-h-[300px]"><Image src={heroImage} alt="Transform at HR Health Club" fill className="object-cover" sizes="(min-width:768px)40vw,100vw"/><div className="absolute inset-0 bg-[#450004]/35"/></div>
      <Reveal className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/65">A PLACE TO TRANSFORM</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-black uppercase sm:text-5xl">YOUR BODY & LIFE.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Whether your goal is strength, fat loss, muscle building or simply becoming healthier, your next phase starts here.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/join" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">JOIN HR FAMILY <ArrowRight size={16}/></Link><Link href="/free-trial" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]">BOOK A FREE CONSULTATION <ArrowRight size={16}/></Link></div></Reveal>
    </section>

    <SiteFooter/><FloatingActions/>
  </main>;
}
