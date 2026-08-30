import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, CalendarCheck, Check, Clock3, ShieldCheck, Target } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { CoachProfile } from "./coach-data";

export function CoachDetailPage({ coach }: { coach: CoachProfile }) {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#450004] text-white">
        <Image src={coach.image} alt={`${coach.name}, ${coach.role}`} fill priority unoptimized className="object-cover object-top opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/96 via-52% to-[#450004]/22" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/40 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[570px] w-[min(1280px,calc(100%-2rem))] items-center py-14">
          <Reveal y={22} className="max-w-[620px]">
            <Link href="/coaches" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-white/65 transition hover:text-white"><ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" /> Coaches / {coach.name}</Link>
            <p className="mt-8 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">{coach.role}</p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.88] sm:text-7xl lg:text-[90px]">{coach.name}</h1>
            <div className="mt-5 h-1 w-12 bg-white/80" />
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">{coach.headline}</p>

            <div className="mt-7 grid max-w-2xl gap-0 overflow-hidden rounded-xl border border-white/15 sm:grid-cols-2">
              {[coach.experience, coach.certification, coach.specialty, `Focus: ${coach.focus}`].map((item, index) => (
                <span key={item} className={`flex min-h-14 items-start gap-2 bg-white/[.06] p-4 text-sm text-white/80 ${index % 2 === 1 ? "sm:border-l sm:border-white/15" : ""} ${index > 1 ? "border-t border-white/15" : ""}`}><Check size={15} className="mt-0.5 shrink-0" />{item}</span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3"><a href="#book-pt" className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">BOOK PT WITH {coach.name} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a><Link href="/programs" className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/[.04] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition hover:bg-white/10">VIEW PROGRAMS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#E2D6D6] bg-white">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] sm:grid-cols-2 lg:grid-cols-4">
          {[[Award,"Certified Coach"],[Target,"Goal Based"],[ShieldCheck,"Safe Technique"],[CalendarCheck,"Personal Training"]].map(([Icon,title], index) => <Reveal key={title as string} delay={index*.05}><div className="flex min-h-24 items-center gap-3 border-b border-[#E2D6D6] p-5 sm:border-r lg:border-b-0"><span className="flex size-11 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008]"><Icon size={20}/></span><span className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">{title as string}</span></div></Reveal>)}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="group relative min-h-[500px] overflow-hidden rounded-xl border border-[#E2D6D6] bg-[#F8EEEE]">
            <Image src={coach.image} alt={`${coach.name} coaching`} fill unoptimized className="object-cover object-top transition duration-700 group-hover:scale-[1.035]" sizes="(min-width:1024px) 46vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/65">{coach.role}</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">Train with {coach.name}</h2></div>
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">About {coach.name}</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">Coaching built around your next level.</h2>
          <p className="mt-5 text-base leading-8 text-[#555555]">{coach.bio}</p>

          <div className="mt-8 rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-[#7A0008]">Specialities</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{coach.specialties.map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#E2D6D6] pb-3 text-sm font-medium last:border-b-0"><Check size={16} className="text-[#7A0008]" />{item}</div>)}</div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#FAF8F8] py-14">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
          <Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Programs With {coach.name}</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Choose Your Training Direction</h2></Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{coach.programs.map((program,index) => <Reveal key={program} delay={index*.06}><Link href="/programs" className="group flex h-full items-center justify-between rounded-xl border border-[#E2D6D6] bg-white p-6 transition hover:-translate-y-1 hover:border-[#7A0008]/30 hover:shadow-lg"><div><span className="font-[family-name:var(--font-display)] text-xs font-bold text-[#7A0008]">0{index+1}</span><h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold uppercase">{program}</h3></div><ArrowRight size={20} className="text-[#7A0008] transition-transform group-hover:translate-x-1" /></Link></Reveal>)}</div>
        </div>
      </section>

      <section id="book-pt" className="mx-auto w-[min(1280px,calc(100%-2rem))] scroll-mt-28 py-16">
        <Reveal>
          <div className="grid overflow-hidden rounded-xl border border-[#E2D6D6] bg-white shadow-xl lg:grid-cols-[.86fr_1.14fr]">
            <div className="relative min-h-[390px]"><Image src={coach.image} alt={`Book personal training with ${coach.name}`} fill unoptimized className="object-cover object-top" sizes="(min-width:1024px) 43vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/70 via-transparent to-transparent" /></div>
            <div className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Personal Training</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Start Your Next Phase With {coach.name}.</h2><p className="mt-5 max-w-xl leading-7 text-[#555555]">Choose personal training when you want individual attention, technique feedback and a plan built around your current ability and target.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><span className="flex items-center gap-3 rounded-xl bg-[#F8EEEE] p-4 text-sm"><CalendarCheck size={18} className="text-[#7A0008]" />Coach selection preserved</span><span className="flex items-center gap-3 rounded-xl bg-[#F8EEEE] p-4 text-sm"><Clock3 size={18} className="text-[#7A0008]" />Choose schedule in booking</span></div><Link href={`/book-pt?coach=${coach.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#7A0008] px-6 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#450004]">BOOK PERSONAL TRAINING <ArrowRight size={17}/></Link></div>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mb-14 w-[min(1280px,calc(100%-2rem))]"><section className="grid overflow-hidden rounded-xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]"><div className="relative min-h-56"><Image src={coach.image} alt="HR Health Club coach" fill unoptimized className="object-cover object-top" sizes="(min-width:768px) 480px, 100vw" /><div className="absolute inset-0 bg-[#450004]/35" /></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">Not Sure Where To Begin?</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Meet The Team And Choose Your Coach.</h2><Link href="/coaches" className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:bg-[#F8EEEE]">VIEW ALL COACHES <ArrowRight size={17}/></Link></div></section></Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
