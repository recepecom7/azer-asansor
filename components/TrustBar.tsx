import { Truck, PackageCheck, Award, Clock, LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const TRUST_ITEMS: TrustItem[] = [
  { icon: Truck, title: "Kendi asansör ve araç filomuz", sub: "Taşeron yok" },
  { icon: PackageCheck, title: "Anahtar teslim", sub: "Paketleme, demontaj, kurulum dahil" },
  { icon: Award, title: "10.000+", sub: "Taşıma ve asansör hizmeti" },
  { icon: Clock, title: "7/24 hizmet", sub: "Antalya başta olmak üzere tüm Türkiye" },
];

export function TrustBar() {
  return (
    <section
      className="bg-[#0c1424] border-t border-white/10 border-b border-white/10"
      aria-label="Güven göstergeleri"
    >
      <div className="container mx-auto px-5 md:px-7 lg:px-4 py-5 md:py-7 lg:py-8">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
            <li key={title} className="flex items-start gap-3 lg:items-center lg:gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <Icon
                className="h-8 w-8 flex-shrink-0 text-brand-yellow lg:h-9 lg:w-9"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block text-[15px] font-bold text-white md:text-base lg:text-[17px]">{title}</span>
                <span className="block text-[13px] text-gray-400 md:text-sm lg:text-sm">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
