import Image from "next/image";
import { ArrowRight, Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#111111] text-white">
      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <Image src="/images/brand-logo.svg" width={167} height={48} alt="HR Health Club logo" className="h-14 w-auto brightness-0 invert" unoptimized />
          <p className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold uppercase leading-7">BUILT BY DISCIPLINE,<br />LED BY COACHES.</p>
          <div className="mt-5 flex gap-3 text-[#D7A1A4]"><Instagram /><Facebook /><Youtube /></div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">QUICK LINKS</h3>
          <nav className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/75">
            {[["Home","#home"],["Gallery","#gallery"],["About Us","#about"],["Membership","#membership"],["Programs","#programs"],["Testimonials","#testimonials"],["Coaches","#coaches"],["Contact","#contact"]].map(([label, href]) => <a key={label} href={href} className="flex items-center gap-2 transition hover:text-white"><ArrowRight size={13} className="text-[#D7A1A4]" />{label}</a>)}
          </nav>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">CONTACT US</h3>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/75">
            <div className="flex gap-3"><MapPin size={20} className="mt-1 shrink-0 text-[#D7A1A4]" /><span>5th B Rd, near Plant Story Restaurant, Agarwal Ki Bageechi, Sardarpura, Jodhpur, Rajasthan 342001</span></div>
            <a href="tel:+918440070555" className="flex items-center gap-3 hover:text-white"><Phone size={19} className="text-[#D7A1A4]" />84400 70555</a>
            <a href="mailto:hrhealthclubjodhpur@gmail.com" className="flex items-center gap-3 break-all hover:text-white"><Mail size={19} className="shrink-0 text-[#D7A1A4]" />hrhealthclubjodhpur@gmail.com</a>
            <div className="flex gap-3"><Clock3 size={19} className="mt-1 shrink-0 text-[#D7A1A4]" /><span>Mon - Sat : 5:00 AM - 10:00 PM<br />Sunday : 6:00 AM - 2:00 PM</span></div>
          </div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">GET DIRECTIONS</h3>
          <div className="mt-5 rounded-xl bg-white/5 p-5">
            <MapPin size={34} className="text-[#D7A1A4]" />
            <p className="mt-3 text-sm leading-6 text-white/75">Sardarpura, Jodhpur<br />Rajasthan 342001</p>
            <a href="https://www.google.com/maps/search/?api=1&query=HR+Health+Club+Jodhpur" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#7A0008] px-4 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-[#5A0006]">OPEN IN GOOGLE MAPS <ArrowRight size={17} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© 2026 HR Health Club. All Rights Reserved.</div>
    </footer>
  );
}
