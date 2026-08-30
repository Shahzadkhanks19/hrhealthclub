import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check, Dumbbell, ShieldCheck, Target, Trophy, UserRoundCheck, Users } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { coachProfiles } from "./coach-data";

const benefits = [
  [Target, "Goal-Oriented", "Every plan is tailored to your personal goals."],
  [Trophy, "Result Driven", "Progressive methods built around measurable improvement."],
  [UserRoundCheck, "Personal Attention", "Individual coaching to help you perform your best."],
  [Users, "Continuous Support", "Guidance through every step of your training journey."],
  [ShieldCheck, "Safe & Effective", "Train with proper technique, structure and safety."],
] as const;

export function CoachesPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club coaching floor" fill priority className="object-cover opacity-38" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 to-[#7A0008]/35" />
        <div className="relative mx-auto grid min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-14 lg:grid-cols-[.78fr_1.22fr]">
          <Reveal y={22}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/65">Home / Coaches</p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.88] sm:text-7xl lg:text-[82px]">Our expert <span className="block text-white/55">coaches.</span></h1>
            <div className="mt-6 h-1 w-12 bg-white/80" />
            <p className="mt-6 max-w-md text-lg leading-8 text-white/80">Learn from the best. Train with the best. Be your best.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {[[Users,"Expert Coaches"],[Award,"Certified Professionals"],[Trophy,"Result Driven"],[Target,"Personalized Attention"]].map(([Icon,label]) => <div key={label as string} className="border-l border-white/20 pl-4"><Icon size={23} className="text-white" /><span className="mt-2 block font-[family-name:var(--font-display)] text-xs font-bold uppercase leading-5 text-white/75">{label as string}</span></div>)}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image src={heroImage} alt="HR Health Club gym interior" fill className="object-cover" sizes="(min-width:1024px) 58vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#450004]/20 to-transparent" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16">
        <Reveal className="text-center">
          <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Meet Our</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Certified & experienced coaches</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#555555]">Our coaches are more than trainers. They guide, motivate and help you train with more clarity and confidence.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {coachProfiles.map((coach, index) => (
            <Reveal key={coach.slug} delay={index * 0.07}>
              <article className="group h-full overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#7A0008]/30 hover:shadow-2xl">
                <Link href={`/coaches/${coach.slug}`} className="block">
                  <div className="relative h-[420px] overflow-hidden bg-[#F8EEEE]">
                    <Image src={coach.image} alt={`${coach.name}, ${coach.role}`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/85 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-md bg-[#7A0008] px-3 py-2 font-[family-name:var(--font-display)] text-xs font-bold uppercase text-white">{coach.role}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase">{coach.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-white/80">{coach.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-7 text-[#555555]">{coach.copy}</p>
                    <div className="mt-5 grid gap-2 border-t border-[#E2D6D6] pt-5 text-sm text-[#555555]">
                      {[coach.experience, coach.certification, coach.specialty, `Focus: ${coach.focus}`].map((item) => <span key={item} className="flex items-start gap-2"><Check size={15} className="mt-1 shrink-0 text-[#7A0008]" />{item}</span>)}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase text-[#7A0008]">VIEW COACH PROFILE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF8F8] py-12">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))] rounded-2xl border border-[#E2D6D6] bg-white p-7">
          <Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Certified. Trained. Trusted.</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">Our coaching standard</h2></Reveal>
          <div className="mt-7 grid grid-cols-2 gap-4 text-center sm:grid-cols-5">{["ACE","NASM","ISSA","K11","FITTR"].map((item) => <div key={item} className="rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] px-3 py-5 font-[family-name:var(--font-display)] text-2xl font-black tracking-wide text-[#7A0008]">{item}</div>)}</div>
        </div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16">
        <Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">Why Train With Our Coaches?</p></Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(([Icon,title,text], index) => <Reveal key={title} delay={index*.05}><article className="group h-full rounded-2xl border border-[#E2D6D6] bg-white p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#7A0008]/30 hover:shadow-xl"><span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008] transition group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={22}/></span><h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-[#555555]">{text}</p></article></Reveal>)}
        </div>
      </section>

      <Reveal className="mx-auto mb-14 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[40%_60%]">
          <div className="relative min-h-64 overflow-hidden"><Image src={heroImage} alt="HR Health Club personal training" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 500px, 100vw" /><div className="absolute inset-0 bg-[#450004]/35" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-10"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Ready to transform</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Your body & life?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Our coaches are ready to guide you toward a stronger, healthier and more confident version of yourself.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/#membership" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">JOIN HR FAMILY <ArrowRight size={17}/></Link><Link href="/coaches/ravi#book-pt" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]">BOOK PERSONAL TRAINING <ArrowRight size={17}/></Link></div></div>
        </section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
