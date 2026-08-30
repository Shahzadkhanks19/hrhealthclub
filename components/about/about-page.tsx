import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Dumbbell,
  HeartPulse,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroImage } from "@/components/home/home-data";

const introPoints = ["Expert Coaches", "Modern & Premium Equipment", "Personalized Training", "Nutrition Guidance", "Supportive Community"] as const;

const pillars = [
  { icon: Target, title: "Our Mission", text: "To help every individual achieve their fitness goals with the right guidance, environment and support." },
  { icon: HeartPulse, title: "Our Vision", text: "To be Jodhpur’s trusted, result-driven fitness destination where training builds confidence and a healthier community." },
  { icon: Award, title: "Our Values", text: "Discipline, integrity, passion for fitness, respect for every member and continuous improvement." },
] as const;

const reasons = [
  { icon: Users, title: "Expert Coaches", text: "Certified and experienced coaches to guide you at every step." },
  { icon: Dumbbell, title: "Premium Equipment", text: "Modern, well-maintained and high-quality training equipment." },
  { icon: Target, title: "Personalized Training", text: "Training plans tailored to your goals, ability and needs." },
  { icon: Salad, title: "Nutrition Guidance", text: "Practical nutrition guidance to support your training journey." },
  { icon: Sparkles, title: "Supportive Community", text: "A motivating environment that pushes you to become your best." },
  { icon: ShieldCheck, title: "Hygiene & Safety", text: "A clean, safe and disciplined environment for peace of mind." },
] as const;

const stats = [["500+", "Happy Members"], ["10+", "Expert Coaches"], ["9+", "Years of Trust"]] as const;

export function AboutPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club training floor" fill priority className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 to-[#7A0008]/45" />
        <div className="relative mx-auto grid min-h-[560px] w-[min(1280px,calc(100%-2rem))] items-center gap-10 py-14 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal y={24}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/70">Home / About Us</p>
            <p className="mt-7 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/70">About Us</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[.94] sm:text-6xl lg:text-[68px]">More than a gym, <span className="text-white/55">we are a</span> <span className="text-white">community.</span></h1>
            <div className="mt-6 h-1 w-12 bg-white/80" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/78">HR Health Club is not just a gym. It is a place where discipline meets motivation and every member becomes the best version of themselves.</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">{introPoints.map((item) => <span key={item} className="flex items-center gap-3 text-sm text-white/82"><span className="flex size-5 items-center justify-center rounded-full border border-white/40 text-[10px]">✓</span>{item}</span>)}</div>
          </Reveal>

          <Reveal delay={0.08} y={20} className="relative min-h-[440px]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-black/10 shadow-2xl">
              <Image src={heroImage} alt="HR Health Club gym interior" fill className="object-cover" sizes="(min-width:1024px) 58vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/70 via-transparent to-black/10" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-[#160001]/82 p-6 backdrop-blur-sm sm:left-auto sm:max-w-[390px]">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-white/65">Our Story</p>
              <p className="mt-3 text-sm leading-7 text-white/78">Founded with a vision to transform lives, HR Health Club has been helping people train with expert guidance, modern infrastructure and a family-like environment. Fitness is not a destination; it is a lifestyle, and we are here to support every step.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] rounded-2xl border border-[#E2D6D6] bg-[#FAF8F8] p-6 sm:p-8">
          <Reveal className="text-center"><h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase sm:text-4xl">Our <span className="text-[#7A0008]">Mission, Vision & Values</span></h2></Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="group relative h-full rounded-2xl border border-[#E2D6D6] bg-white px-6 pb-7 pt-12 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#7A0008]/25 hover:shadow-xl">
                  <span className="absolute left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7A0008] text-white shadow-lg transition duration-300 group-hover:scale-110"><Icon size={27} /></span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#555555]">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-[min(1280px,calc(100%-2rem))] rounded-2xl border border-[#E2D6D6] bg-white p-6 sm:p-8">
          <Reveal className="text-center"><h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase sm:text-4xl">Why choose <span className="text-[#7A0008]">HR Health Club?</span></h2></Reveal>
          <div className="mt-9 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="group h-full border-b border-[#E2D6D6] p-5 text-center transition duration-300 hover:bg-[#FAF8F8] sm:border-r lg:border-b-0">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#F8EEEE] text-[#7A0008] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#7A0008] group-hover:text-white"><Icon size={22} /></span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-sm font-bold uppercase">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#555555]">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-7 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div className="group relative min-h-[430px] overflow-hidden rounded-2xl"><Image src={heroImage} alt="HR Health Club training space" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 46vw, 100vw" /><div className="absolute inset-0 bg-[#450004]/15" /></div>
          </Reveal>
          <Reveal delay={0.07}>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.18em] text-[#7A0008]">The Place To Progress</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight sm:text-5xl">A place to transform <span className="text-[#7A0008]">your body & life.</span></h2>
            <p className="mt-5 leading-8 text-[#555555]">Whether you want to build muscle, lose fat, improve strength or lead a healthier lifestyle, HR Health Club is the place where your journey begins and your transformation happens.</p>
            <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#E2D6D6] bg-[#FAF8F8]">
              {stats.map(([value, label]) => <div key={label} className="px-3 py-6 text-center not-last:border-r not-last:border-[#E2D6D6]"><strong className="block font-[family-name:var(--font-display)] text-3xl font-bold text-[#7A0008] sm:text-4xl">{value}</strong><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[.08em] text-[#555555]">{label}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto mb-14 w-[min(1280px,calc(100%-2rem))]">
        <section className="group grid overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[42%_58%]">
          <div className="relative min-h-[270px] overflow-hidden"><Image src={heroImage} alt="HR Health Club member" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 520px, 100vw" /><div className="absolute inset-0 bg-[#450004]/30" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Ready to become</p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight">The best version of yourself?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Join the HR family today and take the first step towards a stronger, healthier you.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/#membership" className="group/button inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE]">JOIN HR FAMILY <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></Link><a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noreferrer" className="group/button inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-[#5A0006]"><CalendarCheck size={17} />BOOK A FREE CONSULTATION <ArrowRight size={17} className="transition-transform group-hover/button:translate-x-1" /></a></div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
