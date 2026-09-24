import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ, FAQItem } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Breadcrumb, BreadcrumbItem } from "@/components/Breadcrumb";
import { PlaceReview } from "@/lib/googlePlaces";
import {
  Phone,
  MessageCircle,
  Truck,
  ArrowUpCircle,
  Package,
  Briefcase,
  Users,
  ShieldCheck,
  Wallet,
  ClipboardCheck,
  MapPin,
  Star,
} from "lucide-react";

const services = [
  { label: "Evden Eve Nakliyat", href: "/antalya-evden-eve-nakliyat", icon: Truck },
  { label: "Asansörlü Taşıma", href: "/antalya-asansorlu-nakliyat", icon: ArrowUpCircle },
  { label: "Paketleme & Montaj", href: "/antalya-evden-eve-nakliyat#paketleme", icon: Package },
  { label: "Ofis Taşıma", href: "/antalya-ofis-tasima", icon: Briefcase },
];

const whyUs = [
  { label: "Deneyimli Ekip", icon: Users },
  { label: "Sigortalı Taşıma", icon: ShieldCheck },
  { label: "Şeffaf Fiyat", icon: Wallet },
  { label: "Ücretsiz Keşif", icon: ClipboardCheck },
];

const priceFactors = ["Eşya miktarı", "Kat sayısı", "Mesafe", "Asansör ihtiyacı"];

export interface DistrictEvdenEveNakliyatProps {
  district: string;
  slug: string;
  heroParagraph: string;
  neighborhoods: string[];
  faqs: FAQItem[];
  rating: number;
  reviewCount: number;
  reviews: PlaceReview[];
}

export function DistrictEvdenEveNakliyat({
  district,
  slug,
  heroParagraph,
  neighborhoods,
  faqs,
  rating,
  reviewCount,
  reviews,
}: DistrictEvdenEveNakliyatProps) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Anasayfa", href: "/" },
    { label: "Evden Eve Nakliyat", href: "/antalya-evden-eve-nakliyat" },
    { label: district, href: `/${slug}` },
  ];

  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <Breadcrumb items={breadcrumbItems} schemaId={`breadcrumb-schema-${slug}`} />

      {/* HERO */}
      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{district} Evden Eve Nakliyat</h1>
            <p className="text-brand-yellow font-semibold mb-3">Sigortalı &amp; Asansörlü Taşıma</p>
            <p className="text-gray-200 text-lg mb-6">{heroParagraph}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a data-cta-location="hero" href="tel:+905424669631">
                <Button variant="primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </Button>
              </a>
              <a data-cta-location="hero" href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yaz
                </Button>
              </a>
            </div>
            <p className="text-sm text-gray-300">
              ⭐ {rating.toFixed(1)} Google puanı · {reviewCount}+ müşteri yorumu
            </p>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-gray-900 border border-white/10 rounded-2xl p-6 hover:border-brand-yellow/40 transition"
              >
                <service.icon className="w-6 h-6 text-brand-yellow mb-3" />
                <p className="text-white font-semibold">{service.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN AZER? */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Neden Azer Asansör?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <div key={item.label} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center">
                <item.icon className="w-6 h-6 text-brand-yellow mb-3 mx-auto" />
                <p className="text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÖLGELER */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{district}&apos;da Hizmet Verdiğimiz Mahalleler</h2>
            <div className="flex flex-wrap gap-3">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-flex items-center gap-2 bg-[#111827] border border-white/10 rounded-full px-4 py-2 text-gray-300"
                >
                  <MapPin className="w-4 h-4 text-brand-yellow" />
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="py-10 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.slice(0, 4).map((review) => (
              <div key={review.author} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 text-brand-yellow mb-3" aria-label="5 yıldız değerlendirme">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                <p className="text-white font-semibold">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİYAT */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Fiyat Nasıl Belirlenir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {district}&apos;da evden eve nakliyat fiyatları sabit değildir. Aşağıdaki faktörler fiyatı doğrudan etkiler:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 mb-8">
              {priceFactors.map((factor) => (
                <li key={factor}>✓ {factor}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a data-cta-location="pricing_cta" href="tel:+905424669631">
                <Button variant="primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Ücretsiz Keşif Al
                </Button>
              </a>
              <a data-cta-location="pricing_cta" href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yaz
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} schemaId={`faq-${slug}`} title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      {/* ALT CTA */}
      <section className="py-12 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{district}&apos;da Evden Eve Nakliyat İçin Hemen Fiyat Alın</h2>
          <p className="text-gray-300 mb-6">Hemen arayın, aynı gün keşif ve net fiyat alın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a data-cta-location="final_cta" href="tel:+905424669631">
              <Button variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a data-cta-location="final_cta" href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Yaz
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
