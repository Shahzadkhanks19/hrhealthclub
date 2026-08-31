"use client";

import Link from "next/link";
import { ArrowUp, CalendarCheck, Dumbbell } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const actionClass = "group relative flex size-12 items-center justify-center rounded-full shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";
const labelClass = "pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-[#111111] px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-md transition group-hover:opacity-100 group-focus-visible:opacity-100";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => { const onScroll = () => setShowTop(window.scrollY > 500); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-2.5 sm:right-5">
    <Link href="/join" className={`${actionClass} bg-[#7A0008] text-white hover:bg-[#450004] focus-visible:outline-[#7A0008]`} aria-label="Join HR Health Club"><Dumbbell size={20}/><span className={labelClass}>Join HR Health Club</span></Link>
    <Link href="/free-trial" className={`${actionClass} bg-[#F8EEEE] text-[#7A0008] ring-1 ring-[#E2D6D6] hover:bg-white focus-visible:outline-[#7A0008]`} aria-label="Book a free trial"><CalendarCheck size={20}/><span className={labelClass}>Book Free Trial</span></Link>
    <a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20know%20more." target="_blank" rel="noreferrer" className={`${actionClass} bg-[#25D366] text-white hover:brightness-95 focus-visible:outline-[#25D366]`} aria-label="Chat with HR Health Club on WhatsApp"><FaWhatsapp size={22}/><span className={labelClass}>Chat on WhatsApp</span></a>
    {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className="group relative flex size-12 items-center justify-center rounded-full border border-[#E2D6D6] bg-[#111111] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#450004] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A0008]"><ArrowUp size={20}/><span className={labelClass}>Back to Top</span></button>}
  </div>;
}
