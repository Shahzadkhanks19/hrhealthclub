import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { galleryImages, heroImage, transformations } from "@/components/home/home-data";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const categories = ["ALL GALLERY", "GYM INTERIOR", "EQUIPMENT", "MEMBERS", "WORKOUTS", "EVENTS"] as const;
const rows = [
  ["GYM INTERIOR", galleryImages],
  ["EQUIPMENT", [galleryImages[1], transformations[3].image, galleryImages[2], galleryImages[3]]],
  ["MEMBERS", [transformations[0].image, transformations[1].image, transformations[2].image, galleryImages[0]]],
  ["WORKOUTS", [transformations[3].image, transformations[1].image, transformations[0].image, galleryImages[1]]],
  ["EVENTS", [galleryImages[0], galleryImages[2], galleryImages[1], galleryImages[3]]],
] as const;

export function GalleryPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#111111]">
      <SiteHeader />
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#450004] text-white">
        <Image src={heroImage} alt="HR Health Club gallery" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450004] via-[#450004]/92 via-45% to-[#450004]/25" />
        <div className="relative mx-auto flex min-h-[500px] w-[min(1280px,calc(100%-2rem))] items-center py-14"><Reveal className="max-w-xl"><p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-white/65">Gallery</p><h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[.9] sm:text-7xl">A glimpse of <span className="text-white/55">our world.</span></h1><div className="mt-6 h-1 w-12 bg-white"/><p className="mt-6 max-w-md text-lg leading-8 text-white/78">Explore our space, community and the energy that drives transformation every day.</p></Reveal></div>
      </section>
      <section className="mx-auto w-[min(1280px,calc(100%-2rem))] py-10"><Reveal><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{categories.map((item,index)=><button key={item} type="button" className={`rounded-md border px-4 py-3 font-[family-name:var(--font-display)] text-xs font-bold uppercase transition hover:-translate-y-0.5 ${index===0?"border-[#7A0008] bg-[#7A0008] text-white":"border-[#E2D6D6] bg-white text-[#111111] hover:border-[#7A0008] hover:text-[#7A0008]"}`}>{item}</button>)}</div></Reveal><div className="mt-10 space-y-10">{rows.map(([title,images],rowIndex)=><Reveal key={title} delay={rowIndex*.04}><section><div className="mb-4 flex items-center justify-between"><h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">{title}</h2><span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#7A0008]">VIEW ALL <ArrowRight size={15}/></span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{images.map((src,index)=><div key={`${title}-${index}`} className="group relative h-48 overflow-hidden rounded-xl border border-[#E2D6D6]"><Image src={src} alt={`${title} at HR Health Club`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 25vw, 50vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/35 to-transparent opacity-0 transition group-hover:opacity-100"/></div>)}</div></section></Reveal>)}</div></section>
      <section className="mx-auto mb-14 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]"><div className="relative min-h-60"><Image src={transformations[3].image} alt="Join HR Health Club" fill unoptimized className="object-cover" sizes="(min-width:768px) 38vw, 100vw"/><div className="absolute inset-0 bg-[#450004]/30"/></div><div className="flex flex-col justify-center p-8"><p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase">Be part of something stronger.</p><h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">Join HR Health Club today!</h2><div className="mt-6 flex flex-wrap gap-3"><Link href="/membership" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold text-[#7A0008]">JOIN HR FAMILY <ArrowRight size={17}/></Link><a href="https://wa.me/918440070555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold ring-1 ring-white/25">BOOK A FREE CONSULTATION <ArrowRight size={17}/></a></div></div></section>
      <SiteFooter /><FloatingActions />
    </main>
  );
}
