"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Lonely Soul",
    meta: "3 reviews · 2 months ago",
    copy: "The atmosphere is excellent, and the staff are friendly, professional, and always willing to help. The gym is well-maintained and offers great facilities and equipment. Overall, it's a fantastic place to work out and definitely worth the membership.",
  },
  {
    name: "Neetu Kachchhwaha",
    meta: "4 reviews · 2 months ago",
    copy: "An excellent gym with a professional and motivating atmosphere. The facility is clean, well-maintained, and equipped with quality machines. The trainers are knowledgeable, supportive, and truly dedicated to helping members achieve their fitness goals.",
  },
  {
    name: "Neeraj Gurjar",
    meta: "2 reviews · 5 months ago",
    copy: "Great equipment, super clean, great music, highly affordable, and lovely staff. It's never overcrowded and the atmosphere is welcoming and motivating.",
  },
  {
    name: "Gaurav Solanki",
    meta: "3 reviews · 5 months ago",
    copy: "Newly opened gym in the area with a classy ambience and something new to experience. The trainers are friendly and knowledgeable, and the machines are very good.",
  },
  {
    name: "Baldev Beniwal",
    meta: "5 reviews · 5 photos · 2 months ago",
    copy: "HR Health Club is one of the best fitness centers in Jodhpur. The gym offers modern equipment, a clean and hygienic environment, experienced trainers, and a motivating atmosphere.",
  },
  {
    name: "Jeevraj Singh",
    meta: "2 reviews · 1 month ago",
    copy: "One of the best fitness centers I've visited. Great management, quality equipment and an energetic atmosphere. Highly recommended.",
  },
] as const;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  useEffect(() => {
    const sync = () => setVisibleCount(getVisibleCount());
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), 5000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, total]);

  const visibleReviews = useMemo(
    () => Array.from({ length: visibleCount }, (_, offset) => reviews[(index + offset) % total]),
    [index, visibleCount, total],
  );

  const previous = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <section id="testimonials" className="bg-[#FAF8F8] py-14 sm:py-16">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[.2em] text-[#7A0008]">Google Reviews</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">WHAT OUR MEMBERS SAY</h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://maps.app.goo.gl/Yq61MGA1KXpoK991A"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#E2D6D6] bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#7A0008]/30 hover:shadow-md"
              aria-label="Open HR Health Club reviews on Google Maps"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#F8EEEE] text-[#7A0008] transition group-hover:scale-105">
                <FaGoogle size={18} />
              </span>
              <span>
                <span className="flex items-center gap-2 text-sm font-semibold text-[#111111]"><span>Google</span><strong>4.9</strong></span>
                <span className="mt-0.5 flex items-center gap-1 text-xs text-[#555555]"><span className="flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}</span><span>200+ reviews</span></span>
              </span>
            </a>

            <div className="flex gap-2">
              <button type="button" onClick={previous} aria-label="Previous reviews" className="flex size-11 items-center justify-center rounded-full border border-[#E2D6D6] bg-white text-[#7A0008] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#7A0008] hover:bg-[#7A0008] hover:text-white active:translate-y-0"><ChevronLeft size={20} /></button>
              <button type="button" onClick={next} aria-label="Next reviews" className="flex size-11 items-center justify-center rounded-full bg-[#7A0008] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#450004] hover:shadow-md active:translate-y-0"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <motion.div
            key={`${index}-${visibleCount}`}
            className={`grid gap-4 ${visibleCount === 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-2" : "grid-cols-3"}`}
            drag={visibleCount === 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              setPaused(false);
              if (info.offset.x < -55 || info.velocity.x < -450) next();
              if (info.offset.x > 55 || info.velocity.x > 450) previous();
            }}
            style={{ touchAction: visibleCount === 1 ? "pan-y" : undefined }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleReviews.map((review, offset) => (
                <motion.article
                  key={`${review.name}-${index}-${offset}`}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -28 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex min-h-[285px] flex-col rounded-2xl border border-[#E2D6D6] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7A0008]/25 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-full bg-[#7A0008] font-[family-name:var(--font-display)] text-sm font-bold text-white shadow-sm">
                        {review.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <strong className="block text-sm text-[#111111]">{review.name}</strong>
                        <span className="mt-0.5 block text-xs text-[#777777]">{review.meta}</span>
                      </div>
                    </div>
                    <FaGoogle size={18} className="shrink-0 text-[#7A0008]" aria-hidden="true" />
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <div className="flex text-amber-500" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}</div>
                    <span className="text-xs font-semibold text-[#555555]">5.0</span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">“{review.copy}”</p>

                  <div className="mt-5 flex items-center gap-2 border-t border-[#E2D6D6] pt-4 text-xs font-medium text-[#555555]">
                    <CheckCircle2 size={15} className="text-[#7A0008]" />
                    <span>Google Maps review</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Review slider pagination">
          {reviews.map((review, dotIndex) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show review ${dotIndex + 1}`}
              aria-current={index === dotIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === dotIndex ? "w-8 bg-[#7A0008]" : "w-2.5 bg-[#E2D6D6] hover:bg-[#7A0008]/50"}`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#777777] sm:hidden">Swipe left or right to browse reviews</p>
      </div>
    </section>
  );
}
