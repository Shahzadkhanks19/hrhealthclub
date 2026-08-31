import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, Dumbbell, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { heroImage } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const plans = [
  { name: "1 MONTH", slug: "1-month", price: "₹3,500", popular: false, features: ["Gym Access", "All Equipment", "Locker Room", "Coach Floor Support"] },
  { name: "3 MONTHS", slug: "3-months", price: "₹9,000", popular: false, features: ["Everything in 1 Month", "Personal Trainer Guidance", "Member Discounts", "Quarterly Progress Review"] },
  { name: "6 MONTHS", slug: "6-months", price: "₹12,000", popular: true, features: ["Everything in 3 Months", "Nutrition Guidance", "Body Composition Analysis", "Priority Coach Support"] },
  { name: "12 MONTHS", slug: "12-months", price: "₹16,000", popular: false, features: ["Everything in 6 Months", "Priority PT Consultation", "Extended Member Discounts", "Annual Transformation Review"] },
] as const;

const comparison = [
  ["Gym Access", true, true, true, true],
  ["All Equipment", true, true, true, true],
  ["Locker Room", true, true, true, true],
  ["Personal Trainer Guidance", false, true, true, true],
  ["Nutrition Guidance", false, false, true, true],
  ["Body Composition Analysis", false, false, true, true],
  ["Priority Support", false, false, true, true],
  ["Member Discounts", false, true, true, true],
] as const;

export function MembershipPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club memberships" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/93 via-46% to-[#450004]/20" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-14"><Reveal className="max-w-2xl"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/70">Membership Plans</p><h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Choose the plan that fits <span className="text-white/55">your goals.</span></h1><div className="mt-6 h-1 w-12 bg-white"/><p className="mt-6 max-w-xl text-lg leading-8 text-white/80">Flexible plans. Premium facilities. Expert guidance. One membership, unlimited transformation.</p></Reveal></div>
      </section>

      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-14"><Reveal className="text-center"><h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Our <span className="text-[#7A0008]">Membership</span> Plans</h2><p className="mt-3 text-[#555555]">Pick a plan, stay consistent and let the results speak.</p></Reveal><div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{plans.map((plan,index)=><Reveal key={plan.name} delay={index*.05}><article className={`relative h-full rounded-xl border bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${plan.popular?"border-[#7A0008] shadow-xl":"border-[#E2D6D6]"}`}>{plan.popular&&<span className="absolute inset-x-0 top-0 rounded-t-xl bg-[#7A0008] py-2 text-center font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-wide text-white">Most Popular ★</span>}<div className={plan.popular?"pt-6":""}><p className="text-center font-[family-name:var(--font-display)] text-xl font-bold uppercase">{plan.name}</p><div className="mt-5 border-y border-[#E2D6D6] py-5 text-center"><strong className={`font-[family-name:var(--font-display)] text-4xl font-black ${plan.popular?"text-[#7A0008]":""}`}>{plan.price}</strong><span className="mt-1 block text-xs text-[#555555]">Total</span></div><div className="mt-5 grid gap-3">{plan.features.map(item=><span key={item} className="flex items-start gap-3 text-sm text-[#555555]"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008]"><Check size={12}/></span>{item}</span>)}</div><Link href={`/join?plan=${plan.slug}`} className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold transition hover:-translate-y-0.5 ${plan.popular?"bg-[#7A0008] text-white hover:bg-[#450004]":"border border-[#7A0008] text-[#7A0008] hover:bg-[#F8EEEE]"}`}>JOIN NOW <ArrowRight size={16}/></Link></div></article></Reveal>)}</div></section>

      <section className="border-y border-[#E2D6D6] bg-[#FAF8F8]"><div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] grid-cols-2 md:grid-cols-3 xl:grid-cols-6">{[[Dumbbell,"NO JOINING FEE"],[Clock3,"FLEXIBLE TIMINGS"],[ShieldCheck,"CLEAN & HYGIENIC"],[Users,"EXPERT COACHES"],[Sparkles,"MEMBER DISCOUNTS"],[Users,"SUPPORTIVE COMMUNITY"]].map(([Icon,label],i)=><Reveal key={label as string} delay={i*.03}><div className="flex min-h-28 flex-col items-center justify-center border-r border-[#E2D6D6] p-4 text-center"><Icon size={24} className="text-[#7A0008]"/><span className="mt-3 font-[family-name:var(--font-display)] text-xs font-bold uppercase">{label as string}</span></div></Reveal>)}</div></section>

      <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-6 py-14 lg:grid-cols-[1.35fr_.65fr]">
        <Reveal><div className="overflow-hidden rounded-xl border border-[#E2D6D6]"><div className="border-b border-[#E2D6D6] p-5"><h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">Plan <span className="text-[#7A0008]">Comparison</span></h2></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-sm"><thead className="bg-[#FAF8F8] text-left font-[family-name:var(--font-display)] uppercase"><tr><th className="p-4">Features</th>{plans.map(p=><th key={p.name} className="p-4 text-center">{p.name}</th>)}</tr></thead><tbody>{comparison.map(([label,...flags])=><tr key={label as string} className="border-t border-[#E2D6D6]"><td className="p-4">{label as string}</td>{flags.map((flag,i)=><td key={`${label}-${i}`} className="p-4 text-center">{flag?<Check size={18} className="mx-auto text-emerald-600"/>:<X size={18} className="mx-auto text-[#7A0008]"/>}</td>)}</tr>)}</tbody></table></div></div></Reveal>
        <Reveal delay={.06}><aside className="h-full rounded-xl border border-[#E2D6D6] bg-[#FAF8F8] p-6"><h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-[#7A0008]">Membership Guidelines</h2><div className="mt-5 grid gap-4 text-sm leading-6 text-[#555555]">{["Membership is non-transferable.","Refunds are not applicable once membership is activated.","Carry your membership card for every visit.","Proper gym attire and shoes are mandatory.","Respect the gym, equipment and fellow members.","Consult our trainers for any assistance."].map(item=><p key={item} className="flex gap-3"><Check size={16} className="mt-1 shrink-0 text-[#7A0008]"/>{item}</p>)}</div></aside></Reveal>
      </section>

      <section className="mx-auto mb-14 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]"><div className="relative min-h-60"><Image src={heroImage} alt="Join HR Health Club" fill className="object-cover" sizes="(min-width:768px) 38vw,100vw"/><div className="absolute inset-0 bg-[#450004]/30"/></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Ready to transform your life?</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Join HR Health Club today!</h2><p className="mt-3 text-sm text-white/75">Take the first step towards a stronger, healthier and better you.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/join" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">JOIN HR FAMILY <ArrowRight size={17}/></Link><Link href="/free-trial" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold ring-1 ring-white/25">BOOK A FREE CONSULTATION <ArrowRight size={17}/></Link></div></div></section>
      <SiteFooter /><FloatingActions />
    </main>
  );
}
