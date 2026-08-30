import { SpriteAsset } from "@/components/sprite-asset";
import {
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Youtube,
} from "lucide-react";

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["PROGRAMS", "#programs"],
  ["COACHES", "#coaches"],
  ["REELS", "#gallery"],
  ["GALLERY", "#gallery"],
  ["MEMBERSHIP", "#membership"],
  ["TESTIMONIALS", "#testimonials"],
  ["CONTACT", "#contact"],
] as const;

export function SiteHeader() {
  return (
    <>
      <div className="top-strip">
        <div className="site-shell top-strip-inner">
          <div className="top-strip-group">
            <div className="top-strip-item"><MapPin size={17} /> Jodhpur, Rajasthan</div>
            <span className="top-sep" />
            <div className="top-strip-item"><Clock3 size={17} /> Mon - Sat : 5:00 AM - 10:00 PM</div>
            <span className="top-sep" />
            <div className="top-strip-item"><CalendarDays size={17} /> Sunday : 6:00 AM - 2:00 PM</div>
          </div>
          <div className="top-strip-group">
            <a aria-label="Instagram" href="#gallery"><Instagram size={17} /></a>
            <a aria-label="Facebook" href="#contact"><Facebook size={17} /></a>
            <a aria-label="YouTube" href="#gallery"><Youtube size={18} /></a>
            <span className="top-strip-item"><Phone size={17} /> 84400 70555</span>
          </div>
        </div>
      </div>

      <header className="main-nav">
        <div className="site-shell main-nav-inner">
          <a href="#home" aria-label="HR Health Club home">
            <SpriteAsset id="brand-logo" className="brand-image" label="HR Health Club" />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} className={index === 0 ? "active" : undefined}>{label}</a>
            ))}
          </nav>
          <a className="join-btn" href="#membership">JOIN HR FAMILY</a>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><Menu size={22} /></summary>
            <nav className="mobile-panel" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
              <a className="join-btn" href="#membership">JOIN HR FAMILY</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
