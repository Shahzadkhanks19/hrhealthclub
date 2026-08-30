import { SpriteAsset } from "@/components/sprite-asset";
import { ArrowRight, Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="footer">
      <div className="site-shell footer-grid">
        <div className="footer-logo">
          <SpriteAsset id="brand-mark" className="footer-mark" label="HR Health Club logo" />
          <strong>HEALTH CLUB</strong>
          <p>BUILT BY DISCIPLINE,<br/>LED BY COACHES.</p>
          <div className="footer-socials"><Instagram/><Facebook/><Youtube/></div>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <nav className="quick-links">
            {[["Home","#home"],["Gallery","#gallery"],["About Us","#about"],["Membership","#membership"],["Programs","#programs"],["Testimonials","#testimonials"],["Coaches","#coaches"],["Contact","#contact"],["Reels","#gallery"]].map(([t,h]) => <a key={t} href={h}><ArrowRight size={13}/>{t}</a>)}
          </nav>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <div className="contact-list">
            <div className="contact-item"><MapPin size={20}/><span>5th B Rd, near Plant Story Restaurant,<br/>Agarwal Ki Bageechi, Sardarpura,<br/>Jodhpur, Rajasthan 342001</span></div>
            <div className="contact-item"><Phone size={19}/><a href="tel:+918440070555">84400 70555</a></div>
            <div className="contact-item"><Mail size={19}/><a href="mailto:hrhealthclubjodhpur@gmail.com">hrhealthclubjodhpur@gmail.com</a></div>
            <div className="contact-item"><Clock3 size={19}/><span>Mon - Sat : 5:00 AM - 10:00 PM<br/>Sunday : 6:00 AM - 2:00 PM</span></div>
          </div>
        </div>
        <div className="map-card">
          <h3>GET DIRECTIONS</h3>
          <SpriteAsset id="map" className="map-image" label="Map showing HR Health Club location" />
          <a className="join-btn" href="https://www.google.com/maps/search/?api=1&query=HR+Health+Club+Jodhpur" target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS <ArrowRight size={18}/></a>
        </div>
      </div>
      <div className="copyright">© 2026 HR Health Club. All Rights Reserved.</div>
    </footer>
  );
}
