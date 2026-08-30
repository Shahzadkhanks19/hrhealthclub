"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Clock3, MapPin, Menu, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navItems = [["HOME", "/"], ["ABOUT", "/about"], ["PROGRAMS", "/programs"], ["COACHES", "/#coaches"], ["GALLERY", "/#gallery"], ["MEMBERSHIP", "/#membership"], ["TESTIMONIALS", "/#testimonials"], ["CONTACT", "/#contact"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <div className="relative z-40 bg-[#7A0008] text-white">
        <div className="mx-auto flex min-h-11 w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-6 text-xs lg:text-sm">
          <div className="hidden items-center gap-5 lg:flex"><span className="flex items-center gap-2"><MapPin size={16} />Jodhpur, Rajasthan</span><span className="h-5 w-px bg-white/35" /><span className="flex items-center gap-2"><Clock3 size={16} />Mon - Sat : 5:00 AM - 10:00 PM</span><span className="h-5 w-px bg-white/35" /><span className="flex items-center gap-2"><CalendarDays size={16} />Sunday : 6:00 AM - 2:00 PM</span></div>
          <div className="ml-auto flex items-center gap-4"><Link aria-label="Instagram" href="/#gallery" className="transition duration-300 hover:-translate-y-0.5 hover:text-white/70"><FaInstagram size={17} /></Link><Link aria-label="Facebook" href="/#contact" className="transition duration-300 hover:-translate-y-0.5 hover:text-white/70"><FaFacebookF size={16} /></Link><Link aria-label="YouTube" href="/#gallery" className="transition duration-300 hover:-translate-y-0.5 hover:text-white/70"><FaYoutube size={18} /></Link><span className="hidden h-5 w-px bg-white/35 sm:block" /><a className="flex items-center gap-2 font-semibold transition hover:text-white/75" href="tel:+918440070555"><Phone size={16} />84400 70555</a></div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E2D6D6] bg-white shadow-sm">
        <div className="mx-auto flex h-20 w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-6">
          <Link href="/" aria-label="HR Health Club home" className="flex items-center transition duration-300 hover:scale-[1.025]"><Image src="/images/brand-logo.svg" width={167} height={48} alt="HR Health Club logo" className="h-12 w-auto object-contain" priority unoptimized /></Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">{navItems.map(([label, href]) => { const active = isActive(href); return <Link key={label} href={href} aria-current={active ? "page" : undefined} className={`group relative py-2 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide transition duration-300 ${active ? "text-[#7A0008]" : "text-[#111111] hover:text-[#7A0008]"}`}><span>{label}</span><span className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#7A0008] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} /></Link>; })}</nav>
          <Link href="/#membership" className="hidden rounded-md bg-[#7A0008] px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#450004] hover:shadow-lg active:translate-y-0 lg:inline-flex">JOIN HR FAMILY</Link>
          <details className="relative xl:hidden"><summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-[#E2D6D6] p-2 text-[#7A0008] transition hover:bg-[#F8EEEE]" aria-label="Open menu"><Menu size={22} /></summary><nav className="absolute right-0 top-12 grid w-64 gap-1 rounded-xl border border-[#E2D6D6] bg-white p-3 shadow-xl" aria-label="Mobile navigation">{navItems.map(([label, href]) => { const active = isActive(href); return <Link key={label} href={href} aria-current={active ? "page" : undefined} className={`rounded-md px-3 py-2 font-[family-name:var(--font-display)] text-sm font-semibold transition ${active ? "bg-[#F8EEEE] text-[#7A0008]" : "hover:bg-[#F8EEEE] hover:text-[#7A0008]"}`}>{label}</Link>; })}<Link href="/#membership" className="mt-2 rounded-md bg-[#7A0008] px-3 py-3 text-center font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-[#450004]">JOIN HR FAMILY</Link></nav></details>
        </div>
      </header>
    </>
  );
}
