import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { heroImage } from "./home-data";

export function CtaSection() {
  return (
    <section id="membership" className="mx-auto my-12 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white md:grid-cols-[38%_62%]">
      <div className="relative min-h-56">
        <Image src={heroImage} alt="Premium training area at HR Health Club" fill className="object-cover" sizes="(min-width: 768px) 480px, 100vw" />
        <div className="absolute inset-0 bg-[#450004]/25" />
      </div>

      <div className="flex flex-col justify-center p-8">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase">READY TO TRANSFORM YOUR LIFE?</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold uppercase">JOIN HR HEALTH CLUB TODAY!</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#7A0008] transition hover:bg-[#F8EEEE]">JOIN HR FAMILY <ArrowRight size={17} /></a>
          <a id="free-trial" href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20book%20my%20free%20trial." target="_blank" rel="noreferrer" className="inline-flex scroll-mt-28 items-center gap-2 rounded-md bg-[#450004] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#5A0006]"><CalendarCheck size={17} />BOOK FREE TRIAL <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
