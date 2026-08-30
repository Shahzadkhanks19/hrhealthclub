import { SpriteAsset } from "@/components/sprite-asset";
import {
  ArrowRight,
  CalendarClock,
  Dumbbell,
  Facebook,
  Flower2,
  Gift,
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
  ["MUSCLE BUILDING", "Build lean muscle and increase strength.", "program-muscle"],
  ["FAT LOSS", "Burn fat. Look fit. Stay in shape.", "program-fatloss"],
  ["STRENGTH TRAINING", "Improve performance and lift heavier.", "program-strength"],
  ["FUNCTIONAL TRAINING", "Build real-world strength and mobility.", "program-functional"],
  ["CARDIO FITNESS", "Boost endurance & heart health.", "program-cardio"],
  ["YOGA & MOBILITY", "Improve flexibility, posture & balance.", "program-yoga"],
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
  ["RAVI", "Strength Coach", "Specialized in strength training & muscle building.", "coach-ravi"],
  ["ASHISH", "Transformation Coach", "Expert in fat loss & body transformation.", "coach-ashish"],
  ["SHENOY", "Fitness Coach", "Helps members achieve overall fitness & wellness.", "coach-shenoy"],
] as const;

const transformations = [
  ["LOST 12 KG", "IN 3 MONTHS", "transform-1"],
  ["LOST 9 KG", "IN 2 MONTHS", "transform-2"],
  ["LOST 8 KG", "IN 3 MONTHS", "transform-3"],
  ["GAINED 6 KG MUSCLE", "IN 4 MONTHS", "transform-4"],
] as const;

const reviews = [
  ["The best gym in Jodhpur! Amazing coaches and great environment. Helped me transform myself completely.", "Yogendra Singh"],
  ["Expert trainers, modern equipment and a positive vibe. Highly recommend HR Health Club!", "Deepak Purohit"],
  ["I joined for fat loss and got excellent results. The coaches and community keep you motivated every day.", "Harshita Rathore"],
] as const;

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media"><SpriteAsset id="hero-gym" className="hero-image" label="HR Health Club gym interior" /></div>
      <div className="site-shell">
        <div className="hero-content">
          <div className="hero-kicker">WELCOME TO<br />HR HEALTH CLUB</div>
          <h1 className="hero-title">BUILT BY<br />DISCIPLINE,<br /><span className="brand-red">LED BY<br />COACHES.</span></h1>
          <p className="hero-copy">Premium Coaching. Modern Equipment.<br />Real Transformations.</p>
          <div className="hero-actions">
            <a className="join-btn" href="#membership">JOIN HR FAMILY</a>
            <a className="outline-btn" href="#programs">EXPLORE PROGRAMS <ArrowRight size={19} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [
    [Users, "500+", "HAPPY MEMBERS"],
    [Gift, "10+", "EXPERT COACHES"],
    [Dumbbell, "20+", "PROGRAMS"],
    [Medal, "5000+", "SQ. FT. AREA"],
    [Trophy, "9+", "YEARS OF TRUST"],
  ] as const;
  return <div className="site-shell stats-wrap"><div className="stats">{items.map(([Icon,n,l]) => <div className="stat" key={l}><Icon size={34}/><div><strong>{n}</strong><span>{l}</span></div></div>)}</div></div>;
}

export function Programs() {
  return (
    <section id="programs" className="section site-shell">
      <h2 className="section-title">TRAIN SMART. TRAIN <span className="brand-red">WITH PURPOSE.</span></h2>
      <div className="program-grid">
        {programs.map(([title, copy, img]) => <article className="program-card" key={title}><SpriteAsset id={img} className="program-image" label={title.toLowerCase()} /><div className="program-card-body"><h3>{title}</h3><p>{copy}</p></div></article>)}
      </div>
      <div className="center-action"><a className="join-btn" href="#programs">EXPLORE ALL PROGRAMS <ArrowRight size={18}/></a></div>
    </section>
  );
}

export function Community() {
  return (
    <section id="about" className="section site-shell" style={{paddingTop:0}}>
      <h2 className="section-title">MORE THAN A GYM, WE ARE <span className="brand-red">A COMMUNITY.</span></h2>
      <div className="benefit-grid">
        {benefits.map(([Icon,title,copy]) => <div className="benefit" key={title}><div className="benefit-icon"><Icon size={22}/></div><h3>{title}</h3><p>{copy}</p></div>)}
      </div>
    </section>
  );
}

export function Coaches() {
  return (
    <section id="coaches" className="site-shell section-card module-card">
      <div className="module-head"><h2>OUR <span className="brand-red">EXPERT</span> COACHES</h2><a className="module-link" href="#coaches">VIEW ALL COACHES <ArrowRight size={18}/></a></div>
      <div className="coach-grid">{coaches.map(([name,role,copy,img]) => <article className="coach-card" key={name}><div className="coach-copy"><h3>{name}</h3><div className="coach-role">{role}</div><p>{copy}</p><div className="coach-socials"><Instagram size={18}/><Facebook size={18}/><Youtube size={18}/></div></div><SpriteAsset id={img} className="coach-image" label={`${name} - ${role}`} /></article>)}</div>
    </section>
  );
}

export function Transformations() {
  return (
    <section className="site-shell section-card module-card" style={{marginTop:16}}>
      <div className="module-head"><h2>REAL PEOPLE. REAL <span className="brand-red">RESULTS.</span></h2><a className="module-link" href="#testimonials">VIEW ALL TRANSFORMATIONS <ArrowRight size={18}/></a></div>
      <div className="transform-grid">{transformations.map(([a,b,img]) => <article className="transform-card" key={a+b}><SpriteAsset id={img} className="transform-image" label={`${a} ${b} transformation`} /><strong>{a}<br />{b}</strong></article>)}</div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="site-shell section-card module-card" style={{marginTop:16}}>
      <div className="module-head"><h2>INSIDE <span className="brand-red">HR</span> HEALTH CLUB</h2><a className="module-link" href="#gallery">VIEW FULL GALLERY <ArrowRight size={18}/></a></div>
      <div className="gallery-grid">{[1,2,3,4].map((n)=><SpriteAsset key={n} id={`gallery-${n}`} className="gallery-image" label={`HR Health Club interior ${n}`} />)}</div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="site-shell section-card module-card" style={{marginTop:16}}>
      <div className="review-top"><h2 className="module-head" style={{margin:0}}><span className="display" style={{fontSize:26,fontWeight:700}}>WHAT OUR MEMBERS SAY</span></h2><div className="google-rating"><span className="google-word">Google</span><span>4.9</span><span className="stars">★★★★★</span><small>(200+ Reviews)</small></div></div>
      <div className="review-grid">{reviews.map(([copy,name]) => <article className="review" key={name}><div className="stars">★★★★★</div><p>“{copy}”</p><div className="review-user"><span className="review-avatar"/>– {name}</div></article>)}</div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section id="membership" className="site-shell cta-band">
      <SpriteAsset id="cta-bodybuilder" className="cta-image" label="HR Health Club athlete" />
      <div className="cta-copy"><span>READY TO TRANSFORM YOUR LIFE?</span><strong>JOIN HR HEALTH CLUB TODAY!</strong></div>
      <div className="cta-actions"><a href="#contact">JOIN HR FAMILY <ArrowRight size={19}/></a><a href="#contact">BOOK A FREE CONSULTATION <ArrowRight size={19}/></a></div>
    </section>
  );
}

export function FloatingActions() {
  return <aside className="floating-actions" aria-label="Quick contact"><a href="tel:+918440070555"><Phone size={25}/><span>Call Us</span></a><a href="https://wa.me/918440070555" target="_blank" rel="noreferrer"><HeartHandshake size={27}/><span>WhatsApp</span></a><a href="#contact"><MapPin size={27}/><span>Get<br/>Directions</span></a></aside>;
}
