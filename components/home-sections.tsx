import Image from "next/image";
import {
  ArrowRight,
  CalendarClock,
  Dumbbell,
  Facebook,
  Flower2,
  HeartHandshake,
  Instagram,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Target,
  Trophy,
  UserRoundCheck,
  Users,
  Youtube,
} from "lucide-react";

const programs = [
  ["MUSCLE BUILDING", "Build lean muscle and increase strength.", "/images/program-muscle.svg"],
  ["FAT LOSS", "Burn fat. Look fit. Stay in shape.", "/images/program-fatloss.svg"],
  ["STRENGTH TRAINING", "Improve performance and lift heavier.", "/images/program-strength.svg"],
  ["FUNCTIONAL TRAINING", "Build real-world strength and mobility.", "/images/program-functional.svg"],
  ["CARDIO FITNESS", "Boost endurance and heart health.", "/images/program-cardio.svg"],
  ["YOGA & MOBILITY", "Improve flexibility, posture and balance.", "/images/program-yoga.svg"],
] as const;

const benefits = [
  [UserRoundCheck, "EXPERT COACHES", "Guidance you can trust, results you can see."],
  [Dumbbell, "MODERN EQUIPMENT", "Latest machines for every workout."],
  [Target, "PERSONALIZED TRAINING", "Tailored programs for your goals."],
  [ShieldCheck, "HYGIENE FOCUS", "Clean, safe and well-maintained."],
  [CalendarClock, "FLEXIBLE TIMINGS", "Workout on your schedule."],
  [Flower2, "SUPPORTIVE COMMUNITY", "Join a family that pushes you forward."],
] as const;

const coaches = [
  ["RAVI", "Strength Coach", "Specialized in strength training and muscle building.", "/images/coach-ravi.svg"],
  ["ASHISH", "Transformation Coach", "Focused on fat loss and complete body transformation.", "/images/coach-ashish.svg"],
  ["SHENOY", "Fitness Coach", "Helps members build sustainable fitness and wellness habits.", "/images/coach-shenoy.svg"],
] as const;

const reviews = [
  ["The best gym in Jodhpur! Amazing coaches and a great environment. Helped me transform myself completely.", "Yogendra Singh"],
  ["Expert trainers, modern equipment and a positive vibe. Highly recommend HR Health Club!", "Deepak Purohit"],
  ["I joined for fat loss and got excellent results. The coaches and community keep you motivated every day.", "Harshita Rathore"],
] as const;

const displayFont = "font-[family-name:var(--font-display)]";
const sectionTitle = `${displayFont} text-center text-3xl font-bold uppercase tracking-tight md:text-4xl`;

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[610px] overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[70%]">
        <Image src="/images/hero-gym.svg" alt="HR Health Club gym interior" fill priority unoptimized className="object-cover object-center" sizes="(min-width:1024px) 70vw, 100vw" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/15 lg:via-white/85 lg:to-transparent" />
      <div className="mx-auto flex min-h-[610px] w-[min(1280px,calc(100%-2rem))] items-center py-16">
        <div className="max-w-2xl">
          <p className={`${displayFont} text-2xl font-bold uppercase leading-tight text-[#7A0008] md:text-3xl`}>WELCOME TO<br />HR HEALTH CLUB</p>
          <h1 className={`${displayFont} mt-3 text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]`}>
            BUILT BY<br />DISCIPLINE,<br /><span className="text-[#7A0008]">LED BY<br />COACHES.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-7 text-[#555555] sm:text-lg">Premium Coaching. Modern Equipment. Real Transformations.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#membership" className={`${displayFont} rounded-md bg-[#7A0008] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#450004]`}>JOIN HR FAMILY</a>
            <a href="#programs" className={`${displayFont} inline-flex items-center gap-2 rounded-md border border-[#7A0008] bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#F8EEEE]`}>EXPLORE PROGRAMS <ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [
    [Users, "500+", "HAPPY MEMBERS"],
    [UserRoundCheck, "10+", "EXPERT COACHES"],
    [Dumbbell, "20+", "PROGRAMS"],
    [Medal, "5000+", "SQ. FT. AREA"],
    [Trophy, "9+", "YEARS OF TRUST"],
  ] as const;

  return (
    <section className="mx-auto -mt-8 w-[min(1180px,calc(100%-2rem))] rounded-xl border border-[#E2D6D6] bg-white shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-y divide-[#E2D6D6] sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {items.map(([Icon, value, label]) => (
          <div key={label} className="flex items-center justify-center gap-3 px-4 py-6 text-center sm:text-left">
            <Icon className="shrink-0 text-[#7A0008]" size={32} />
            <div><strong className={`${displayFont} block text-2xl leading-none`}>{value}</strong><span className={`${displayFont} mt-1 block text-[11px] font-semibold`}>{label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16">
      <h2 className={sectionTitle}>TRAIN SMART. TRAIN <span className="text-[#7A0008]">WITH PURPOSE.</span></h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {programs.map(([title, copy, image]) => (
          <article key={title} className="group overflow-hidden rounded-xl border border-[#E2D6D6] bg-white transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden"><Image src={image} alt={title.toLowerCase()} fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:1280px) 16vw, (min-width:1024px) 33vw, 50vw" /></div>
            <div className="p-4"><h3 className={`${displayFont} text-base font-bold`}>{title}</h3><p className="mt-2 text-sm leading-6 text-[#555555]">{copy}</p></div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center"><a href="#membership" className={`${displayFont} inline-flex items-center gap-2 rounded-md bg-[#7A0008] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#450004]`}>EXPLORE ALL PROGRAMS <ArrowRight size={18} /></a></div>
    </section>
  );
}

export function Community() {
  return (
    <section id="about" className="bg-[#FAF8F8] py-16">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <h2 className={sectionTitle}>MORE THAN A GYM, WE ARE <span className="text-[#7A0008]">A COMMUNITY.</span></h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#E2D6D6] bg-[#E2D6D6] sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, copy]) => (
            <div key={title} className="bg-white p-7 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#F8EEEE] text-[#7A0008]"><Icon size={23} /></div>
              <h3 className={`${displayFont} mt-4 text-base font-bold`}>{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#555555]">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Coaches() {
  return (
    <section id="coaches" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className={`${displayFont} text-3xl font-bold uppercase md:text-4xl`}>OUR <span className="text-[#7A0008]">EXPERT</span> COACHES</h2>
        <a href="#coaches" className={`${displayFont} inline-flex items-center gap-2 text-sm font-semibold hover:text-[#7A0008]`}>VIEW ALL COACHES <ArrowRight size={18} /></a>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {coaches.map(([name, role, copy, image]) => (
          <article key={name} className="group overflow-hidden rounded-2xl border border-[#E2D6D6] bg-white transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-[4/3] bg-[#FAF8F8]"><Image src={image} alt={`${name} - ${role}`} fill unoptimized className="object-cover" sizes="(min-width:768px) 33vw, 100vw" /></div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4"><div><h3 className={`${displayFont} text-2xl font-bold`}>{name}</h3><p className="mt-1 font-semibold text-[#7A0008]">{role}</p></div><div className="flex gap-2 text-[#7A0008]"><Instagram size={18} /><Facebook size={18} /><Youtube size={18} /></div></div>
              <p className="mt-3 text-sm leading-6 text-[#555555]">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Transformations() {
  const cards = [
    ["LOST 12 KG", "IN 3 MONTHS", "/images/transform-1.svg"],
    ["LOST 9 KG", "IN 2 MONTHS", "/images/transform-2.svg"],
    ["LOST 8 KG", "IN 3 MONTHS", "/images/transform-3.svg"],
    ["GAINED 6 KG MUSCLE", "IN 4 MONTHS", "/images/transform-4.svg"],
  ] as const;

  return (
    <section className="bg-[#FAF8F8] py-16">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className={`${displayFont} text-3xl font-bold uppercase md:text-4xl`}>REAL PEOPLE. REAL <span className="text-[#7A0008]">RESULTS.</span></h2>
          <a href="#testimonials" className={`${displayFont} inline-flex items-center gap-2 text-sm font-semibold hover:text-[#7A0008]`}>VIEW ALL TRANSFORMATIONS <ArrowRight size={18} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, time, image]) => (
            <article key={title + time} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#111111]">
              <Image src={image} alt={`${title} ${time} transformation`} fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:1024px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <strong className={`${displayFont} absolute bottom-5 left-5 text-2xl leading-tight text-white`}>{title}<br /><span className="text-base text-white/85">{time}</span></strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = ["/images/gallery-1.svg", "/images/gallery-2.svg", "/images/gallery-3.svg", "/images/gallery-4.svg"];
  return (
    <section id="gallery" className="mx-auto w-[min(1280px,calc(100%-2rem))] py-16">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className={`${displayFont} text-3xl font-bold uppercase md:text-4xl`}>INSIDE <span className="text-[#7A0008]">HR</span> HEALTH CLUB</h2>
        <a href="#gallery" className={`${displayFont} inline-flex items-center gap-2 text-sm font-semibold hover:text-[#7A0008]`}>VIEW FULL GALLERY <ArrowRight size={18} /></a>
      </div>
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 lg:grid-cols-4">
        {images.map((src, index) => <div key={src} className={`relative overflow-hidden rounded-2xl ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}><Image src={src} alt={`HR Health Club interior ${index + 1}`} fill unoptimized className="object-cover transition duration-500 hover:scale-105" sizes="(min-width:1024px) 25vw, 50vw" /></div>)}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#FAF8F8] py-16">
      <div className="mx-auto w-[min(1280px,calc(100%-2rem))]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className={`${displayFont} text-3xl font-bold uppercase md:text-4xl`}>WHAT OUR MEMBERS SAY</h2>
          <div className="rounded-xl border border-[#E2D6D6] bg-white px-5 py-3 text-sm"><span className="font-bold text-[#7A0008]">Google</span><span className="ml-3 font-bold">4.9</span><span className="ml-2 text-amber-500">★★★★★</span><span className="ml-2 text-[#555555]">200+ Reviews</span></div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([copy, name]) => (
            <article key={name} className="rounded-2xl border border-[#E2D6D6] bg-white p-6 shadow-sm">
              <div className="text-amber-500">★★★★★</div><p className="mt-4 text-sm leading-7 text-[#555555]">“{copy}”</p><div className={`${displayFont} mt-5 font-semibold`}>— {name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section id="membership" className="mx-auto my-16 grid w-[min(1280px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-[#7A0008] text-white lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[300px]"><Image src="/images/cta-bodybuilder.svg" alt="HR Health Club athlete" fill unoptimized className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" /><div className="absolute inset-0 bg-[#450004]/20" /></div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className={`${displayFont} text-xl font-semibold uppercase`}>READY TO TRANSFORM YOUR LIFE?</p>
        <h2 className={`${displayFont} mt-2 text-4xl font-bold uppercase leading-tight sm:text-5xl`}>JOIN HR HEALTH CLUB TODAY!</h2>
        <div className="mt-7 flex flex-wrap gap-3"><a href="#contact" className={`${displayFont} inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#7A0008] transition hover:bg-[#F8EEEE]`}>JOIN HR FAMILY <ArrowRight size={18} /></a><a href="#contact" className={`${displayFont} inline-flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10`}>BOOK A FREE CONSULTATION <ArrowRight size={18} /></a></div>
      </div>
    </section>
  );
}

export function FloatingActions() {
  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden rounded-xl border border-[#E2D6D6] bg-white shadow-xl lg:block" aria-label="Quick contact">
      <a href="tel:+918440070555" className="flex w-20 flex-col items-center gap-1 border-b border-[#E2D6D6] px-2 py-4 text-xs font-medium hover:bg-[#F8EEEE]"><Phone size={23} className="text-[#7A0008]" />Call Us</a>
      <a href="https://wa.me/918440070555" target="_blank" rel="noreferrer" className="flex w-20 flex-col items-center gap-1 border-b border-[#E2D6D6] px-2 py-4 text-xs font-medium hover:bg-[#F8EEEE]"><HeartHandshake size={24} className="text-[#7A0008]" />WhatsApp</a>
      <a href="#contact" className="flex w-20 flex-col items-center gap-1 px-2 py-4 text-center text-xs font-medium hover:bg-[#F8EEEE]"><MapPin size={24} className="text-[#7A0008]" />Directions</a>
    </aside>
  );
}
