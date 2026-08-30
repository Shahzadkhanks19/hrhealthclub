import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroImage } from "./home-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-[68%] lg:block">
        <Image
          src={heroImage}
          alt="Premium strength training area inside a modern gym"
          fill
          priority
          className="object-cover object-center"
          sizes="68vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-35% to-black/10" />
      </div>

      <div className="mx-auto flex min-h-[540px] w-[min(1280px,calc(100%-2rem))] items-center py-12 lg:min-h-[590px]">
        <div className="relative z-10 max-w-xl">
          <p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase leading-tight text-[#7A0008] sm:text-2xl">
            WELCOME TO<br />HR HEALTH CLUB
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[74px]">
            BUILT BY<br />DISCIPLINE,<br />
            <span className="text-[#7A0008]">LED BY<br />COACHES.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-[#555555]">
            Premium Coaching. Modern Equipment. Real Transformations.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#membership" className="rounded-md bg-[#7A0008] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-[#450004]">
              JOIN HR FAMILY
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-md border border-[#7A0008] bg-white/80 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold backdrop-blur-sm transition hover:bg-[#F8EEEE]">
              EXPLORE PROGRAMS <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-64 lg:hidden">
        <Image
          src={heroImage}
          alt="HR Health Club gym interior"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </section>
  );
}
