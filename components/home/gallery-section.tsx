import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "./home-data";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
          INSIDE <span className="text-[#7A0008]">HR</span> HEALTH CLUB
        </h2>
        <a
          href="#gallery"
          className="hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex"
        >
          VIEW FULL GALLERY <ArrowRight size={17} />
        </a>
      </div>

      <div className="grid auto-rows-[190px] gap-3 md:grid-cols-4">
        {galleryImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`relative overflow-hidden rounded-xl ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={`HR Health Club interior ${index + 1}`}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
