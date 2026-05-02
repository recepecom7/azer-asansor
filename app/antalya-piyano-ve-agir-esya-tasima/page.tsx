import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Box, Route, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Piyano ve Ağır Eşya Taşıma | Azer Asansör",
  description: "Antalya piyano, çelik kasa ve ağır eşya taşımacılığı. Özel ekipmanlar ve uzman kadromuzla eşyalarınızı sıfır hasar garantisiyle taşıyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-piyano-ve-agir-esya-tasima",
  },
};

export default function PiyanoVeAgirEsyaTasimaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Piyano ve Ağır Eşya Taşıma",
    provider: {
      "@type": "LocalBusiness",
      name: "Azer Asansör",
      url: "https://www.azerasansor.com",
    },
    areaServed: ["Antalya"],
    serviceType: "Ağır Eşya Taşımacılığı",
  };

  const faqItems = [
    {
      question: "Kuyruklu piyano taşıyor musunuz?",
      answer: "Evet, her türlü duvar piyanosu, dijital piyano ve kuyruklu piyanonun taşımacılığını uzman ekibimiz ve özel kızaklı ekipmanlarımızla sorunsuz gerçekleştiriyoruz.",
    },
    {
      question: "Çelik kasalar vinçle mi taşınıyor?",
      answer: "Bulunduğu kat ve fiziki şartlara göre mobil asansör, vinç veya özel insan gücü + palet sistemleriyle taşıma yapmaktayız.",
    },
    {
      question: "Ağır eşya taşımada sigorta geçerli mi?",
      answer: "Evet, taşınan piyano ve çelik kasalarınız gibi yüksek maddi değere sahip ağır eşyalarınız poliçelendirilerek sigorta kapsamına alınmaktadır.",
    }
  ];

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-piyano"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Antalya Piyano ve Ağır Eşya Taşımacılığı
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Standart taşımacılık yöntemleriyle taşınması imkansız olan piyano, çelik kasa, tıbbi cihaz ve ağır makinelerinizi profesyonel ekipmanlarla sıfır hasar riskiyle taşıyoruz.
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Uzman Kadro</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Özel Kızak ve Askı Sistemleri</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Tam Kapsamlı Sigorta</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Asansör Desteği</li>
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
              { icon: HardHat, text: "Uzman Ekip" },
              { icon: Box, text: "Özel Ambalaj" },
              { icon: Route, text: "Hasarsız Taşıma" },
              { icon: ShieldCheck, text: "Garantili" },
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
            Piyano ve Çelik Kasa Nakliyesi
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hassasiyet gerektiren piyano taşıma işlemlerinde cihazın akordunun bozulmaması ve çizilmemesi için özel teknikler uygularız. Benzer şekilde, yüzlerce kilo ağırlığındaki çelik kasalar için zemin korumalı tekerlekli aparatlar veya askılı mobil asansör sistemleri kullanarak binaya da eşyaya da zarar vermeden işlemi tamamlarız.
          </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-piyano-tasima"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Hassas eşyalarınız için uzman çözümler. Hemen arayın."
      />

      <Footer />
    </main>
  );
}
