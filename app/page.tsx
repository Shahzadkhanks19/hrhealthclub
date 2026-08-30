import { SiteHeader } from "@/components/site-header";
import {
  Coaches,
  Community,
  CtaBand,
  FloatingActions,
  Gallery,
  Hero,
  Programs,
  Stats,
  Testimonials,
  Transformations,
} from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Stats />
      <Programs />
      <Community />
      <Coaches />
      <Transformations />
      <Gallery />
      <Testimonials />
      <CtaBand />
      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
