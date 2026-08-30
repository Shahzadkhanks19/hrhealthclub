import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "./home-data";

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-12">
      <div className="rounded-2xl border border-[#E2D6D6] bg-white p-6">
        <div className="mb-6 flex items-end justify-between gap-4"><h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">INSIDE <span className="text-[#7A0008]">HR</span> HEALTH CLUB</h2><Link href="/gallery" className="group hidden items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold transition hover:text-[#7A0008] sm:flex">VIEW FULL GALLERY <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((src, index) => <div key={`${src}-${index}`} className="group relative h-52 overflow-hidden rounded-xl border border-[#E2D6D6]"><Image src={src} alt={`HR Health Club interior ${index + 1}`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#450004]/35 to-transparent opacity-60 transition group-hover:opacity-85" /></div>)}
        </div>
      </div>
    </section>
  );
}
