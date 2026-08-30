"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-50 flex size-11 items-center justify-center rounded-full bg-[#7A0008] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#450004] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A0008]"
    >
      <ArrowUp size={20} />
    </button>
  );
}
