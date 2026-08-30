import Image from "next/image";
import { ArrowRight, Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const links = [["Home", "#home"], ["Gallery", "#gallery"], ["About Us", "#about"], ["Membership", "#membership"], ["Programs", "#programs"], ["Testimonials", "#testimonials"], ["Coaches", "#coaches"], ["Contact", "#contact"]] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#450004] text-white">
      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 py-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-white px-4 py-3">
            <Image src="/images/brand-logo.svg" width={167} height={48} alt="HR Health Club logo" className="h-11 w-auto" />
          </div>
          <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold uppercase leading-7">BUILT BY DISCIPLINE,<br />LED BY COACHES.</p>
          <div className="mt-4 flex gap-4 text-[#E2D6D6]"><Instagram size={19} /><Facebook size={19} /><Youtube size={20} /></div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">QUICK LINKS</h3>
          <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/80">
            {links.map(([label, href]) => <a key={label} href={href} className="flex items-center gap-2 transition hover:text-white"><ArrowRight size={12} className="text-[#E2D6D6]" />{label}</a>)}
          </nav>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">CONTACT US</h3>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-white/80">
            <div className="flex gap-3"><MapPin size={19} className="mt-1 shrink-0 text-[#E2D6D6]" /><span>5th B Rd, near Plant Story Restaurant, Agarwal Ki Bageechi, Sardarpura, Jodhpur, Rajasthan 342001</span></div>
            <a href="tel:+918440070555" className="flex items-center gap-3 hover:text-white"><Phone size={18} className="text-[#E2D6D6]" />84400 70555</a>
            <a href="mailto:hrhealthclubjodhpur@gmail.com" className="flex items-center gap-3 break-all hover:text-white"><Mail size={18} className="shrink-0 text-[#E2D6D6]" />hrhealthclubjodhpur@gmail.com</a>
            <div className="flex gap-3"><Clock3 size={18} className="mt-1 shrink-0 text-[#E2D6D6]" /><span>Mon - Sat: 5:00 AM - 10:00 PM<br />Sunday: 6:00 AM - 2:00 PM</span></div>
          </div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">GET DIRECTIONS</h3>
          <div className="mt-4 rounded-xl border border-white/10 bg-[#5A0006] p-5">
            <MapPin size={30} className="text-[#E2D6D6]" />
            <p className="mt-3 text-sm leading-6 text-white/80">Sardarpura, Jodhpur<br />Rajasthan 342001</p>
            <a href="https://www.google.com/maps/search/?api=1&query=HR+Health+Club+Jodhpur" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#7A0008] px-4 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition hover:bg-white hover:text-[#7A0008]">OPEN IN GOOGLE MAPS <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-[#5A0006]">
        <div className="mx-auto flex w-[min(1280px,calc(100%-2rem))] flex-col items-center justify-between gap-2 py-4 text-center text-xs text-white/70 sm:flex-row sm:text-left">
          <span>© 2026 HR Health Club. All Rights Reserved.</span>
          <span>
            Designed &amp; Developed by{" "}
            <a href="https://builtbyshahzad.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-[#E2D6D6] hover:underline">
              Shahzad Khan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
