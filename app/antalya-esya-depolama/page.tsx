import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Lock, ThermometerSun, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Eşya Depolama Hizmeti | Azer Asansör",
  description: "Antalya sigortalı, güvenlikli ve rutubetsiz eşya depolama hizmetleri. Ev ve ofis eşyalarınız için kısa veya uzun dönem kiralık depolar.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-esya-depolama",
  },
};

export default function EsyaDepolamaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Eşya Depolama",
    provider: {
      "@type": "LocalBusiness",
      name: "Azer Asansör",
      url: "https://www.azerasansor.com",
    },
    areaServed: ["Antalya"],
    serviceType: "Eşya Depolama",
  };

  const faqItems = [
    {
      question: "Depolama fiyatları nasıl hesaplanıyor?",
      answer: "Eşya depolama fiyatları eşyanın kapladığı hacime ve depolama süresine (aylık/yıllık) göre değişiklik gösterir. Detaylı bilgi için uzman ekspertiz ekibimizle görüşebilirsiniz.",
    },
    {
      question: "Eşyalarım sigortalanıyor mu?",
      answer: "Evet, depolanan tüm eşyalarınız doğal afetler, yangın ve hırsızlığa karşı sigortalanmaktadır.",
    },
    {
      question: "Depolarda rutubet veya haşere sorunu var mı?",
      answer: "Kesinlikle hayır. Depolarımız düzenli olarak havalandırılmakta ve periyodik olarak profesyonel ilaçlama şirketleri tarafından haşerelere karşı ilaçlanmaktadır.",
    }
  ];

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-esya-depolama"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Antalya Sigortalı Eşya Depolama Hizmeti
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Ev veya ofis eşyalarınızı geçici bir süre güvende tutmanız gerekiyorsa, 7/24 güvenlik kameralı, rutubetsiz ve sigortalı depolarımızla hizmetinizdeyiz.
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>7/24 Kameralı Güvenlik</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Rutubetsiz Ortam</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Yangın ve Hırsızlık Sigortası</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Özel Paketleme Desteği</li>
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
              { icon: ShieldCheck, text: "Sigortalı" },
              { icon: Lock, text: "Güvenlikli" },
              { icon: ThermometerSun, text: "Rutubetsiz" },
              { icon: MapPin, text: "Merkezi Konum" },
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
            Güvenli Eşya Depolama
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Yeni bir eve geçmeden önce, tayin durumlarında, ofis tadilatlarında eşyalarınızı güvende tutacak bir alan arıyorsanız eşya depolarımız tam size göre. Eşyalarınız hava almayan özel ambalaj malzemeleriyle paketlenir ve zarar görmeden depolanır.
          </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-esya-depolama"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Ücretsiz keşif ve depolama fiyatları için bizimle iletişime geçin."
      />

      <Footer />
    </main>
  );
}
