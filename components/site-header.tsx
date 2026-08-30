import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Youtube,
} from "lucide-react";

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["PROGRAMS", "#programs"],
  ["COACHES", "#coaches"],
  ["REELS", "#gallery"],
  ["GALLERY", "#gallery"],
  ["MEMBERSHIP", "#membership"],
  ["TESTIMONIALS", "#testimonials"],
  ["CONTACT", "#contact"],
] as const;

export function SiteHeader() {
  return (
    <>
      <div className="bg-[#7A0008] text-white">
        <div className="mx-auto flex min-h-11 w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-6 text-xs lg:text-sm">
          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-2"><MapPin size={16} />Jodhpur, Rajasthan</span>
            <span className="h-5 w-px bg-white/35" />
            <span className="flex items-center gap-2"><Clock3 size={16} />Mon - Sat : 5:00 AM - 10:00 PM</span>
            <span className="h-5 w-px bg-white/35" />
            <span className="flex items-center gap-2"><CalendarDays size={16} />Sunday : 6:00 AM - 2:00 PM</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <a aria-label="Instagram" href="#gallery" className="transition hover:text-white/70"><Instagram size={17} /></a>
            <a aria-label="Facebook" href="#contact" className="transition hover:text-white/70"><Facebook size={17} /></a>
            <a aria-label="YouTube" href="#gallery" className="transition hover:text-white/70"><Youtube size={18} /></a>
            <span className="hidden h-5 w-px bg-white/35 sm:block" />
            <a className="flex items-center gap-2 font-semibold" href="tel:+918440070555"><Phone size={16} />84400 70555</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E2D6D6] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-6">
          <a href="#home" aria-label="HR Health Club home" className="flex items-center">
            <Image src="/images/brand-logo.svg" width={167} height={48} alt="HR Health Club logo" className="h-12 w-auto object-contain" priority unoptimized />
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} className={`font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide transition hover:text-[#7A0008] ${index === 0 ? "text-[#7A0008]" : "text-[#111111]"}`}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#membership" className="hidden rounded-md bg-[#7A0008] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-[#450004] lg:inline-flex">JOIN HR FAMILY</a>

          <details className="relative xl:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-[#E2D6D6] p-2 text-[#7A0008]" aria-label="Open menu"><Menu size={22} /></summary>
            <nav className="absolute right-0 top-12 grid w-64 gap-1 rounded-xl border border-[#E2D6D6] bg-white p-3 shadow-xl" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <a key={label} href={href} className="rounded-md px-3 py-2 font-[family-name:var(--font-display)] text-sm font-semibold hover:bg-[#F8EEEE] hover:text-[#7A0008]">{label}</a>)}
              <a href="#membership" className="mt-2 rounded-md bg-[#7A0008] px-3 py-3 text-center font-[family-name:var(--font-display)] text-sm font-semibold text-white hover:bg-[#450004]">JOIN HR FAMILY</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
