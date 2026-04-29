import { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Antalya Azer nakliyat için nasıl iletişime geçebilirim?",
    answer:
      "Bizi telefonla arayabilir veya WhatsApp üzerinden yazarak hızlıca bilgi alabilirsiniz. Ekiplerimiz en kısa sürede dönüş yapar.",
  },
  {
    question: "Aynı gün hizmet alabilir miyim?",
    answer:
      "Yoğunluk durumuna göre Antalya genelinde aynı gün keşif ve ekip yönlendirmesi yapılabilir.",
  },
  {
    question: "WhatsApp üzerinden fiyat alabilir miyim?",
    answer:
      "Evet, kat sayısı, eşya miktarı ve konum bilgisi paylaştığınızda WhatsApp üzerinden hızlı teklif alabilirsiniz.",
  },
  {
    question: "Hizmet bölgeleriniz nereler?",
    answer:
      "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya genelinde hizmet veriyoruz.",
  },
];

export const metadata: Metadata = {
  title: "İletişim | Antalya Asansörlü Nakliyat",
  description:
    "Antalya’da asansörlü nakliyat, mobil asansör kiralama ve evden eve taşıma hizmetleri için 7/24 bize ulaşabilirsiniz.",
  alternates: { canonical: "https://www.azerasansor.com/iletisim" },
};

export default function ContactPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Azer Asansör",
    areaServed: "Antalya",
    telephone: "+90 542 466 96 31",
    serviceType: ["Asansörlü Nakliyat", "Mobil Asansör Kiralama", "Evden Eve Nakliyat"],
    url: "https://www.azerasansor.com",
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="localbusiness-schema-iletisim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim | Antalya Asansörlü Nakliyat</h1>
            <p className="text-gray-200 text-lg mb-6">
              Antalya’da asansörlü nakliyat, mobil asansör kiralama ve evden eve taşıma hizmetleri için 7/24 bize ulaşabilirsiniz.
            </p>
            <p className="text-sm text-gray-300">⭐ 5.0 Google puanı · 66+ müşteri yorumu</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 space-y-6">
              <h2 className="text-3xl font-bold">İletişim Bilgileri</h2>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-yellow mt-1" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+905424669631" className="text-brand-yellow hover:underline">
                    +90 542 466 96 31
                  </a>
                  <p className="text-gray-300 mt-1">Hemen arayın, aynı gün ücretsiz keşif ve net fiyat alın.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand-yellow mt-1" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                    WhatsApp’tan Yaz – Hızlı Teklif
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-3xl font-bold mb-3">Hizmet Verdiğimiz</h2>
              <p className="text-gray-300 mb-4">Antalya merkez ve tüm ilçelere hizmet veriyoruz.</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="Azer Asansör Konum"
                  src="https://www.google.com/maps?q=Antalya&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center gap-2 mt-4 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Antalya’da Nakliyat ve Asansör Hizmetleri</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Antalya asansörlü nakliyat süreçlerinde doğru iletişim, taşımanın sorunsuz başlaması için en önemli adımdır. Ekiplerimiz, arama veya mesaj sonrası kat sayısı, eşya yoğunluğu ve kurulum alanı gibi temel bilgileri netleştirerek size uygun bir plan oluşturur. Mobil asansör kiralama hizmeti özellikle yüksek katlı binalarda hem zaman kazandırır hem de bina içi hasar riskini azaltır. Ev değişikliği yapan müşteriler için evden eve nakliyat adımlarını da bu planın içine dahil ederek süreci daha düzenli hale getiriyoruz. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde yerel saha deneyimiyle çalışıyor; hızlı dönüş, net bilgi ve uygulanabilir çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqs}
        schemaId="faq-iletisim"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hemen Fiyat Alın</h2>
          <p className="text-gray-300 text-lg mb-8">
            Antalya’da nakliyat veya asansör kiralama hizmeti için hemen arayın veya WhatsApp’tan yazın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631">
              <Button variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp’tan Yaz
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
