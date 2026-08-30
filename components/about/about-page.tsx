import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarCheck, Dumbbell, HeartPulse, ShieldCheck, Target, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroImage } from "@/components/home/home-data";

const values = [
  { icon: Target, title: "Purposeful Training", text: "Every session should move you closer to a measurable goal, not just leave you tired." },
  { icon: Users, title: "Coach-Led Progress", text: "Experienced coaches help members train with better form, structure and confidence." },
  { icon: ShieldCheck, title: "Standards First", text: "A clean, disciplined and supportive environment where consistency becomes a lifestyle." },
];

const journey = [
  ["01", "A stronger idea", "A fitness space in Jodhpur built around serious training, guidance and community."],
  ["02", "A complete training floor", "Strength, cardio, functional training and mobility together under one roof."],
  ["03", "A coaching culture", "Coaches who understand goals, technique and sustainable progress."],
  ["04", "A growing community", "Raising the standard as more members make fitness part of their routine."],
] as const;

const stats = [["500+", "Active Members"], ["20+", "Expert Coaches"], ["5000+", "Sq. Ft. Training Space"], ["9+", "Years of Experience"]] as const;

export function AboutPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#111111] text-white">
        <Image src="https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&q=85&w=2200" alt="HR Health Club training floor" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004]/95 via-[#450004]/65 to-black/20" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-20">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.22em] text-white/75">About HR Health Club</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.95] sm:text-6xl lg:text-7xl">Built for people who want <span className="text-white/65">more from training.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">More structure. More support. Better standards. A serious training environment and an encouraging fitness community in Jodhpur.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/#membership" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">JOIN HR FAMILY <ArrowRight size={17} /></Link><Link href="/#programs" className="rounded-md border border-white/45 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold">EXPLORE PROGRAMS</Link></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[510px] overflow-hidden rounded-2xl bg-[#F8EEEE]"><Image src="https://images.unsplash.com/photo-1704223523204-504405c9331a?auto=format&fit=crop&q=82&w=1200" alt="Strength training environment" fill className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" /><div className="absolute bottom-5 left-5 rounded-xl bg-[#7A0008] px-6 py-5 text-white shadow-xl"><strong className="block font-[family-name:var(--font-display)] text-4xl">HR</strong><span className="text-xs uppercase tracking-[.18em] text-white/75">Health Club · Jodhpur</span></div></div>
        <div><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Our Story</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Fitness is not a phase. <span className="text-[#7A0008]">It is a standard.</span></h2><p className="mt-6 leading-8 text-[#555555]">HR Health Club is designed for members who value quality training, expert guidance and a place that keeps them motivated. Whether you are starting your fitness journey or chasing your next milestone, the focus stays the same: train intelligently and progress consistently.</p><p className="mt-4 leading-8 text-[#555555]">Our training floor brings modern equipment, focused coaching and multiple styles of fitness together so members can build strength, improve conditioning, move better and create habits that last.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-5"><HeartPulse className="text-[#7A0008]" /><h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold uppercase">Our Mission</h3><p className="mt-2 text-sm leading-6 text-[#555555]">Make structured, high-quality fitness coaching accessible in a motivating environment.</p></div><div className="rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-5"><Dumbbell className="text-[#7A0008]" /><h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold uppercase">Our Vision</h3><p className="mt-2 text-sm leading-6 text-[#555555]">Build a community known for discipline, progress and lasting transformations.</p></div></div></div>
      </section>

      <section className="bg-[#FAF8F8] py-20"><div className="mx-auto w-[min(1280px,calc(100%-2rem))]"><div className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">What We Stand For</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">The HR way of training</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-[#E2D6D6] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"><span className="flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Icon size={23} /></span><h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-7 text-[#555555]">{text}</p></article>)}</div></div></section>

      <section className="bg-[#7A0008] py-10 text-white"><div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] grid-cols-2 gap-y-8 md:grid-cols-4">{stats.map(([value, label]) => <div key={label} className="px-4 text-center"><strong className="block font-[family-name:var(--font-display)] text-4xl">{value}</strong><span className="mt-1 block text-xs uppercase tracking-wider text-white/70">{label}</span></div>)}</div></section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 py-20 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Our Journey</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Built one standard at a time.</h2><p className="mt-5 leading-7 text-[#555555]">We keep evolving around one idea: give members a better place to train and better reasons to stay consistent.</p></div><div className="grid gap-4">{journey.map(([number, title, text]) => <article key={number} className="grid grid-cols-[55px_1fr] gap-5 rounded-xl border border-[#E2D6D6] p-5 transition hover:bg-[#FAF8F8]"><span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#7A0008]">{number}</span><div><h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">{title}</h3><p className="mt-2 text-sm leading-6 text-[#555555]">{text}</p></div></article>)}</div></section>

      <section className="mx-auto mb-16 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#111111] text-white lg:grid-cols-2"><div className="p-8 sm:p-12"><Award size={34} className="text-[#E2D6D6]" /><p className="mt-6 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/60">Coaching Philosophy</p><h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Your goal deserves a plan.</h2><p className="mt-5 leading-7 text-white/70">Good coaching is not about making every workout harder. It is about making every workout count. We prioritize technique, progression and consistency.</p><Link href="/#coaches" className="mt-7 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold">MEET OUR COACHES <ArrowRight size={17} /></Link></div><div className="relative min-h-[360px]"><Image src="https://images.unsplash.com/photo-1775993699105-4d18bcac7e54?auto=format&fit=crop&q=82&w=1200" alt="Fitness coaching" fill className="object-cover opacity-80" sizes="(min-width:1024px) 50vw, 100vw" /></div></section>

      <section className="mx-auto my-12 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]">
        <div className="relative min-h-56"><Image src={heroImage} alt="Premium training area at HR Health Club" fill className="object-cover" sizes="(min-width: 768px) 480px, 100vw" /><div className="absolute inset-0 bg-[#450004]/25" /></div>
        <div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase">READY TO TRANSFORM YOUR LIFE?</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">JOIN HR HEALTH CLUB TODAY!</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition hover:bg-[#F8EEEE]">JOIN HR FAMILY <ArrowRight size={17} /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20my%20free%20trial." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#5A0006]"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} /></a></div></div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
