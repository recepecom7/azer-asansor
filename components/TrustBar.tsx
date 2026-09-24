import { Truck, PackageCheck, BadgeCheck, Clock, LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const TRUST_ITEMS: TrustItem[] = [
  { icon: Truck, title: "Kendi asansör ve araç filomuz", sub: "Taşeron yok" },
  { icon: PackageCheck, title: "Anahtar teslim", sub: "Paketleme, demontaj, kurulum dahil" },
  { icon: BadgeCheck, title: "10.000+", sub: "Taşıma ve asansör hizmeti" },
  { icon: Clock, title: "7/24 hizmet", sub: "Antalya'nın 7 ilçesinde" },
];

export function TrustBar() {
  return (
    <section
      className="bg-[#0c1424] border-t border-white/10 border-b border-white/10"
      aria-label="Güven göstergeleri"
    >
      <div className="container mx-auto px-5 md:px-4 py-6 md:py-7">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
            <li
              key={title}
              className="flex flex-col items-start gap-2 text-left md:flex-row md:items-center md:gap-4 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 md:h-12 md:w-12">
                <Icon className="h-5 w-5 text-brand-yellow md:h-6 md:w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-base font-bold text-white md:text-[17px]">{title}</span>
                <span className="block text-[13px] text-gray-400 md:text-sm">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
