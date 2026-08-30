"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export type ProgramFaqItem = readonly [question: string, answer: string];

export function ProgramFaq({ items }: { items: readonly ProgramFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-3">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={question}
            className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${
              isOpen ? "border-[#7A0008]/30 shadow-lg" : "border-[#E2D6D6] shadow-sm hover:border-[#7A0008]/20"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              className="group flex w-full items-center justify-between gap-5 p-5 text-left font-[family-name:var(--font-display)] text-lg font-bold uppercase text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7A0008]"
            >
              <span>{question}</span>
              <span
                aria-hidden="true"
                className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F8EEEE] text-xl leading-none text-[#7A0008] transition duration-300 group-hover:bg-[#7A0008] group-hover:text-white ${isOpen ? "rotate-45 bg-[#7A0008] text-white" : ""}`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#E2D6D6] px-5 pb-5 pt-4 text-sm leading-7 text-[#555555]">
                    {answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
