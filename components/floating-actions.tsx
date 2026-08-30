"use client";

import { ArrowUp, Dumbbell } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-5">
      <a href="#membership" className="group flex h-12 items-center gap-2 rounded-full bg-[#7A0008] px-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#450004]" aria-label="Join HR Health Club">
        <Dumbbell size={19} />
        <span className="hidden font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-wide sm:inline">Join HR Health Club</span>
      </a>

      <a href="https://wa.me/918440070555?text=Hi%20HR%20Health%20Club%2C%20I%20would%20like%20to%20know%20more." target="_blank" rel="noreferrer" className="group flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-95" aria-label="Chat with HR Health Club on WhatsApp">
        <FaWhatsapp size={21} />
        <span className="hidden text-xs font-semibold sm:inline">Chat on WhatsApp</span>
      </a>

      {showTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className="flex size-12 items-center justify-center rounded-full border border-[#E2D6D6] bg-white text-[#7A0008] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F8EEEE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A0008]">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
