import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CoachesSection } from "./coaches-section";
import { CommunitySection } from "./community-section";
import { CtaSection } from "./cta-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ProgramsSection } from "./programs-section";
import { QuickActions } from "./quick-actions";
import { StatsStrip } from "./stats-strip";
import { TestimonialsSection } from "./testimonials-section";
import { TransformationsSection } from "./transformations-section";

export function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <StatsStrip />
      <ProgramsSection />
      <CommunitySection />
      <CoachesSection />
      <TransformationsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
      <QuickActions />
      <ScrollToTop />
    </main>
  );
}
