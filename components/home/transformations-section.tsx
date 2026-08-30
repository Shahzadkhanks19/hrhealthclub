import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { transformations } from "./home-data";

export function TransformationsSection() {
  return (
    <section className="bg-[#FAF8F8] py-12">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            REAL PEOPLE. REAL <span className="text-[#7A0008]">RESULTS.</span>
          </h2>
          <a
            href="#testimonials"
            className="hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex"
          >
            VIEW ALL TRANSFORMATIONS <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {transformations.map((item) => (
            <article
              key={`${item.title}-${item.time}`}
              className="relative h-48 overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={`${item.title} ${item.time}`}
                fill
                unoptimized
                className="object-cover object-top"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <strong className="absolute bottom-4 left-4 font-[family-name:var(--font-display)] text-xl leading-tight text-white">
                {item.title}
                <br />
                <span className="text-sm">{item.time}</span>
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
