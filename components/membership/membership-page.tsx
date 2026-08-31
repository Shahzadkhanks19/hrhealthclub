import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const plans = [
  { name: "1 MONTH", price: "₹3,500", popular: false },
  { name: "3 MONTHS", price: "₹9,000", popular: false },
  { name: "6 MONTHS", price: "₹12,000", popular: true },
  { name: "12 MONTHS", price: "₹16,000", popular: false },
] as const;
const features = ["Gym Access", "All Equipment", "Locker Room", "Coach Support"] as const;

export function MembershipPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club memberships" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/93 via-46% to-[#450004]/25" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-14"><Reveal className="max-w-2xl"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">Membership</p><h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Choose the plan <span className="text-white/55">that fits your goals.</span></h1><div className="mt-6 h-1 w-12 bg-white"/><p className="mt-6 max-w-xl text-lg leading-8 text-white/78">Simple membership options designed to help you train consistently, access premium equipment and stay supported.</p></Reveal></div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16"><Reveal className="text-center"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Our Membership Plans</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">Find your training rhythm.</h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{plans.map((plan,index)=><Reveal key={plan.name} delay={index*.06}><article className={`relative h-full rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular?"border-[#7A0008] shadow-xl":"border-[#E2D6D6]"}`}>{plan.popular&&<span className="absolute right-4 top-4 rounded-full bg-[#7A0008] px-3 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase text-white">Most Popular</span>}<p className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-[#7A0008]">{plan.name}</p><div className="mt-5 border-y border-[#E2D6D6] py-5"><strong className="font-[family-name:var(--font-display)] text-4xl font-black">{plan.price}</strong><span className="ml-2 text-sm text-[#555555]">/ plan</span></div><div className="mt-5 grid gap-3">{features.map(item=><span key={item} className="flex items-center gap-3 text-sm text-[#555555]"><span className="flex size-6 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008]"><Check size={14}/></span>{item}</span>)}</div><Link href={`/join?plan=${encodeURIComponent(plan.name.toLowerCase().replaceAll(" ","-"))}`} className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition hover:-translate-y-0.5 ${plan.popular?"bg-[#7A0008] text-white hover:bg-[#450004]":"border border-[#7A0008] text-[#7A0008] hover:bg-[#F8EEEE]"}`}>JOIN NOW <ArrowRight size={16}/></Link></article></Reveal>)}</div></section>

      <section className="bg-[#FAF8F8] py-14"><div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><Reveal><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Included With Every Plan</p><h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Everything you need to train consistently.</h2></Reveal><Reveal delay={.08}><div className="grid gap-4 sm:grid-cols-2">{["Modern training floor","Premium equipment","Supportive coaching environment","Clean locker & training areas"].map(item=><div key={item} className="flex items-center gap-3 rounded-xl border border-[#E2D6D6] bg-white p-5"><ShieldCheck size={20} className="text-[#7A0008]"/><span className="text-sm font-medium">{item}</span></div>)}</div></Reveal></div></section>

      <section className="mx-auto my-14 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]"><div className="relative min-h-60"><Image src={heroImage} alt="Join HR Health Club" fill className="object-cover" sizes="(min-width:768px) 38vw,100vw"/><div className="absolute inset-0 bg-[#450004]/30"/></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Ready to get started?</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Join the HR family today.</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/join" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">JOIN HR FAMILY <ArrowRight size={17}/></Link><a href="https://wa.me/918440070555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold ring-1 ring-white/25">BOOK A FREE CONSULTATION <ArrowRight size={17}/></a></div></div></section>
      <SiteFooter /><FloatingActions />
    </main>
  );
}
