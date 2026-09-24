import Link from "next/link";
import { Home, ArrowUp, Truck, MapPin, Building2, PackageCheck, LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Home,
    title: "Evden Eve Nakliyat",
    description: "Tüm eşyalarınızı paketleyip güvenle yeni adresinize taşıyoruz.",
    href: "/antalya-evden-eve-nakliyat",
  },
  {
    icon: ArrowUp,
    title: "Asansörlü Nakliyat",
    description: "22. kata kadar mobil asansörle hasarsız taşıma.",
    href: "/antalya-asansorlu-nakliyat",
  },
  {
    icon: Truck,
    title: "Kiralık Asansör",
    description: "Sadece asansör mü lazım? Saatlik kiralama hizmeti sunuyoruz.",
    href: "/antalya-kiralik-asansor",
  },
  {
    icon: MapPin,
    title: "Şehirlerarası Taşıma",
    description: "Antalya'dan Türkiye'nin her iline güvenli nakliyat.",
    href: "/antalya-sehirlerarasi-nakliyat",
  },
  {
    icon: Building2,
    title: "Ofis Taşıma",
    description: "Kurumsal taşımalarda hızlı, planlı ve kesintisiz hizmet.",
    href: "/antalya-ofis-tasima",
  },
  {
    icon: PackageCheck,
    title: "Anahtar Teslim Paket",
    description: "Paketleme, demontaj, taşıma ve kurulum tek ekipten.",
    href: "/antalya-anahtar-teslim-paket",
  },
];

export function Services() {
  return (
    <section className="bg-[#0a0f1a]" aria-label="Hizmetlerimiz">
      <div className="container mx-auto px-5 pt-9 pb-20 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Hizmetlerimiz
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Nasıl Yardımcı Olabiliriz?</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#0d1420] p-5 transition-colors hover:border-white/20"
            >
              <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
              <p className="mt-2 text-[15px] font-bold text-white md:text-[17px]">{title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                {description}
              </p>
              <span className="mt-3 inline-block text-[13px] text-brand-yellow group-hover:underline">
                Detaylar →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
