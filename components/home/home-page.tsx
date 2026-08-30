import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CoachesSection } from "./coaches-section";
import { CommunitySection } from "./community-section";
import { CtaSection } from "./cta-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ProgramsSection } from "./programs-section";
import { StatsStrip } from "./stats-strip";
import { TestimonialsSection } from "./testimonials-section";
import { TransformationsSection } from "./transformations-section";

export function HomePage() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />
      <HeroSection />
      <Reveal y={18}><StatsStrip /></Reveal>
      <Reveal><ProgramsSection /></Reveal>
      <Reveal><CommunitySection /></Reveal>
      <Reveal><CoachesSection /></Reveal>
      <Reveal><TransformationsSection /></Reveal>
      <Reveal><GallerySection /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal y={18}><CtaSection /></Reveal>
      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
