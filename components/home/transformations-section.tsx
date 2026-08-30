import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { transformations } from "./home-data";

export function TransformationsSection() {
  return (
    <section className="bg-[#FAF8F8] py-12">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))] rounded-2xl border border-[#E2D6D6] bg-white p-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">REAL PEOPLE. REAL <span className="text-[#7A0008]">RESULTS.</span></h2>
          <Link href="/transformations" className="group hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex">VIEW ALL TRANSFORMATIONS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {transformations.slice(0, 3).map((item) => (
            <article key={`${item.title}-${item.time}`} className="group relative h-56 overflow-hidden rounded-xl border border-[#E2D6D6]">
              <Image src={item.image} alt={`${item.title} ${item.time}`} fill unoptimized className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#450004]/90 via-[#450004]/10 to-transparent" />
              <div className="absolute inset-x-0 top-3 flex justify-center gap-2"><span className="rounded-md bg-white/90 px-3 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase text-[#7A0008]">Before</span><span className="rounded-md bg-[#7A0008] px-3 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase text-white">After</span></div>
              <strong className="absolute bottom-4 left-4 right-4 text-center font-[family-name:var(--font-display)] text-xl leading-tight text-white">{item.title}<br /><span className="text-sm text-white/70">{item.time}</span></strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
