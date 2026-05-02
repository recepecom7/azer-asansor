import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Parça Eşya Taşıma | Azer Asansör",
  description: "Antalya parça eşya, öğrenci eşyası ve bekar eşyası taşıma hizmetleri. Uygun fiyatlı, hızlı ve güvenli küçük nakliye çözümleri.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-parca-esya-tasima",
  },
};

export default function ParcaEsyaTasimaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Parça Eşya Taşıma",
    provider: {
      "@type": "LocalBusiness",
      name: "Azer Asansör",
      url: "https://www.azerasansor.com",
    },
    areaServed: ["Antalya", "Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı"],
    serviceType: "Parça Eşya Taşımacılığı",
  };

  const faqItems = [
    {
      question: "Parça eşya taşıma fiyatları ne kadar?",
      answer: "Fiyatlar taşınacak eşya miktarına, mesafeye ve işçilik detaylarına göre değişir. Net fiyat almak için bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "Şehir dışına parça eşya taşıyor musunuz?",
      answer: "Evet, Antalya'dan diğer illere giden araçlarımızla veya anlaşmalı kargo yöntemleriyle şehirler arası parça eşya taşımacılığı da yapıyoruz.",
    },
    {
      question: "Beyaz eşyalarım taşınırken ambalajlanıyor mu?",
      answer: "Evet, taşıyacağımız parça eşyaları da evden eve nakliyatta olduğu gibi çizilme ve darbelere karşı özenle paketliyoruz.",
    }
  ];

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-parca-esya"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Antalya Parça Eşya ve Öğrenci Eşyası Taşıma
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Az miktardaki eşyalarınızı komple araç kiralamanıza gerek kalmadan, uygun fiyatlarla güvenli şekilde taşıyoruz. Öğrenci eşyası, bekar eşyası veya birkaç parça beyaz eşyanız için hızlı çözüm!
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Ekonomik Fiyatlar</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Aynı Gün Hizmet</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Özenli Paketleme</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Antalya İçi Dağıtım</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full text-base md:text-lg px-7">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </Button>
              </a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Teklif Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Package, text: "Az Miktarda Eşya" },
              { icon: ShieldCheck, text: "Güvenli Taşıma" },
              { icon: Clock, text: "Hızlı Teslimat" },
              { icon: MapPin, text: "Adrese Teslim" },
            ].map((item) => (
              <div key={item.text} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-2 text-gray-200">
                <item.icon className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <span className="text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Uygun Fiyatlı Parça Eşya Taşıma
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sadece birkaç parça koltuk, dolap veya çeyiz eşyası taşımanız gerektiğinde devasa nakliye araçlarına boşuna ödeme yapmayın. Antalya parça eşya nakliyat servisimiz ile az miktardaki eşyalarınızı küçük araçlarımızla uygun fiyata taşıyoruz.
          </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-parca-esya"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Fiyat teklifi almak için hemen iletişime geçin."
      />

      <Footer />
    </main>
  );
}
