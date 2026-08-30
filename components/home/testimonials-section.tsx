import { reviews } from "./home-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#FAF8F8] py-12">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            WHAT OUR MEMBERS SAY
          </h2>
          <div className="rounded-xl border border-[#E2D6D6] bg-white px-4 py-3 text-sm">
            <b className="text-[#7A0008]">Google</b>
            <b className="ml-2">4.9</b>
            <span className="ml-2 text-amber-500">★★★★★</span>
            <span className="ml-2 text-[#555555]">200+ Reviews</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map(([copy, name]) => (
            <article
              key={name}
              className="rounded-xl border border-[#E2D6D6] bg-white p-5"
            >
              <div className="text-amber-500">★★★★★</div>
              <p className="mt-4 text-sm leading-6 text-[#555555]">“{copy}”</p>
              <strong className="mt-4 block font-[family-name:var(--font-display)]">
                — {name}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
