import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Trophy, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage, transformations } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const stories = [
  { ...transformations[0], quote: "I became stronger, more consistent and more confident with the right guidance." },
  { ...transformations[1], quote: "The coaches helped me stay accountable and make training part of my routine." },
  { ...transformations[2], quote: "A structured plan made the biggest difference to my progress." },
  { ...transformations[3], quote: "Technique, patience and progression helped me build lasting results." },
  { ...transformations[1], title: "LOST 10 KG", time: "IN 4 MONTHS", quote: "Small weekly improvements added up to a major transformation." },
  { ...transformations[0], title: "GAINED STRENGTH", time: "IN 12 WEEKS", quote: "I stopped guessing and started training with purpose." },
] as const;

export function TransformationsPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club transformations" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/94 via-46% to-[#450004]/25" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-14"><Reveal className="max-w-2xl"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">Transformations</p><h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Real people. Real results. <span className="text-white/55">Real transformations.</span></h1><div className="mt-6 h-1 w-12 bg-white"/><p className="mt-6 max-w-xl text-lg leading-8 text-white/78">Progress built through consistency, coaching and dedication.</p></Reveal></div>
      </section>

      <section className="border-b border-[#E2D6D6] bg-white"><div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] grid-cols-2 lg:grid-cols-4">{[["500+","TRANSFORMATIONS"],["100%","DEDICATION"],["REAL PEOPLE","REAL STORIES"],["LASTING","RESULTS"]].map(([value,label],index)=><Reveal key={label} delay={index*.05}><div className="border-r border-[#E2D6D6] px-4 py-7 text-center"><strong className="font-[family-name:var(--font-display)] text-3xl font-black text-[#7A0008]">{value}</strong><span className="mt-1 block font-[family-name:var(--font-display)] text-[11px] font-bold uppercase text-[#555555]">{label}</span></div></Reveal>)}</div></section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16"><Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Transformation Stories</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Proof that consistency changes everything.</h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{stories.map((story,index)=><Reveal key={`${story.title}-${index}`} delay={index*.04}><article className="group overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"><div className="relative h-72 overflow-hidden"><Image src={story.image} alt={`${story.title} transformation`} fill unoptimized className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="(min-width:1280px) 33vw,50vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/90 via-transparent to-transparent"/><div className="absolute left-4 top-4 flex gap-2"><span className="rounded bg-white px-3 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase text-[#7A0008]">Before</span><span className="rounded bg-[#7A0008] px-3 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase text-white">After</span></div><div className="absolute bottom-5 left-5 right-5 text-white"><h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">{story.title}</h3><p className="font-[family-name:var(--font-display)] text-sm font-bold text-white/70">{story.time}</p></div></div><div className="p-6"><p className="text-sm leading-7 text-[#555555]">“{story.quote}”</p><div className="mt-5 flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase text-[#7A0008]"><Check size={15}/>Real member story</div></div></article></Reveal>)}</div></section>

      <section className="bg-[#FAF8F8] py-14"><div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-5 md:grid-cols-3">{[[Users,"REAL PEOPLE","Every result starts with a real person and a real goal."],[Trophy,"COACH-LED PROGRESS","Structure and accountability make progress easier to sustain."],[Check,"CONSISTENCY WINS","Long-term habits matter more than short-term extremes."]].map(([Icon,title,text],index)=><Reveal key={title as string} delay={index*.06}><article className="h-full rounded-2xl border border-[#E2D6D6] bg-white p-6 text-center"><span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Icon size={22}/></span><h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#555555]">{text as string}</p></article></Reveal>)}</div></section>

      <section className="mx-auto my-14 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]"><div className="relative min-h-60"><Image src={transformations[3].image} alt="Start your transformation" fill unoptimized className="object-cover" sizes="(min-width:768px)38vw,100vw"/><div className="absolute inset-0 bg-[#450004]/30"/></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Your story could be next.</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Start your transformation today.</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/membership" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">JOIN HR FAMILY <ArrowRight size={17}/></Link><a href="https://wa.me/918440070555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold ring-1 ring-white/25">BOOK A FREE CONSULTATION <ArrowRight size={17}/></a></div></div></section>
      <SiteFooter /><FloatingActions />
    </main>
  );
}
