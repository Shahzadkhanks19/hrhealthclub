import { HeartHandshake, MapPin, Phone } from "lucide-react";

const actions = [
  {
    label: "Call Us",
    href: "tel:+918440070555",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918440070555",
    icon: HeartHandshake,
  },
  {
    label: "Directions",
    href: "https://www.google.com/maps/search/?api=1&query=HR+Health+Club+Jodhpur",
    icon: MapPin,
  },
] as const;

export function QuickActions() {
  return (
    <aside
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden rounded-xl border border-[#E2D6D6] bg-white shadow-xl lg:block"
      aria-label="Quick contact actions"
    >
      {actions.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="flex h-[86px] w-[88px] flex-col items-center justify-center gap-2 border-b border-[#E2D6D6] text-xs last:border-b-0 hover:bg-[#F8EEEE]"
        >
          <Icon size={24} className="text-[#7A0008]" />
          <span>{label}</span>
        </a>
      ))}
    </aside>
  );
}
