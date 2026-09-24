import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Reviews } from "@/components/Reviews";
import { getPlaceDetails } from "@/lib/googlePlaces";
import { Award, ShieldCheck, Clock, Check, HardHat } from "lucide-react";

const benefits = [
  { title: "Antalya'da Deneyimli Taşıma Ekibi", description: "Yüksek kat taşımacılığı, evden eve nakliyat ve mobil asansör kullanımı konusunda saha deneyimine sahip ekibimizle çalışıyoruz.", icon: Award },
  { title: "22. Kata Kadar Mobil Asansör Desteği", description: "Dar merdivenli veya yüksek katlı binalarda eşyalarınızı bina dışından, hızlı ve kontrollü şekilde taşıyoruz.", icon: HardHat },
  { title: "Sigortalı ve Kontrollü Taşıma Süreci", description: "Eşyalarınızın güvenliği için taşıma sürecini planlı şekilde yürütüyor, uygun durumlarda sigortalı taşıma desteği sunuyoruz.", icon: ShieldCheck },
  { title: "Antalya Geneli Hızlı Hizmet", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya'nın çevre bölgelerine hızlı ekip yönlendirmesi sağlıyoruz.", icon: Clock },
  { title: "Ücretsiz Keşif ve Net Fiyat Bilgisi", description: "Taşınacak eşya, kat sayısı, mesafe ve asansör kurulum alanına göre size özel fiyat bilgisi sunuyoruz.", icon: Check },
];

const faqs = [
  {
    question: "Antalya evden eve nakliyat fiyatları ne kadar?",
    answer:
      "Antalya evden eve nakliyat fiyatları; taşınacak eşya miktarı, kat sayısı, mesafe ve mobil asansör kullanımına göre değişir. Net fiyat almak için ücretsiz keşif talep edebilir veya hemen arayarak detaylı bilgi alabilirsiniz.",
  },
  {
    question: "Mobil asansör kaçıncı kata kadar çıkıyor?",
    answer:
      "Mobil asansör sistemlerimiz Antalya'da genellikle 22. kata kadar ulaşabilmektedir. Yüksek katlı binalarda eşyalar bina dışından güvenli ve hızlı şekilde taşınır.",
  },
  {
    question: "Taşıma sırasında eşyalarım sigortalı mı?",
    answer:
      "Taşıma sürecinde eşyalarınızın güvenliği ön plandadır. Uygun durumlarda sigortalı taşıma hizmeti sunulmakta olup, süreç planlı ve kontrollü şekilde yürütülmektedir.",
  },
  {
    question: "Hafta sonu hizmet veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ve resmi tatiller dahil olmak üzere hizmet veriyoruz. Yoğunluk yaşamamak için önceden rezervasyon yapmanız önerilir.",
  },
  {
    question: "Şehirler arası nakliyat yapıyor musunuz?",
    answer:
      "Evet, Antalya çıkışlı şehirler arası nakliyat hizmeti sunuyoruz. Eşyalarınız kapalı kasa araçlar ile güvenli şekilde Türkiye'nin farklı şehirlerine taşınır.",
  },
  {
    question: "Asansörlü nakliyat mı normal nakliyat mı daha avantajlı?",
    answer:
      "Asansörlü nakliyat, özellikle yüksek katlı binalarda daha hızlı ve güvenlidir. Merdiven kullanımı azalır, eşyaların zarar görme riski düşer ve taşıma süresi önemli ölçüde kısalır.",
  },
  {
    question: "Antalya'da mobil asansör kiralama ne kadar sürer?",
    answer:
      "Mobil asansör kurulumu genellikle 15–20 dakika sürer. Taşıma süresi ise eşya miktarı, kat sayısı ve kurulum alanına göre değişir.",
  },
  {
    question: "Asansör kurulumu için izin gerekiyor mu?",
    answer:
      "Bazı durumlarda bina yönetimi veya belediye izni gerekebilir. Detaylar lokasyona göre değiştiği için ekiplerimiz süreç hakkında sizi bilgilendirir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Asansörlü Nakliyat ve Evden Eve Taşıma | Azer Asansör",
  description:
    "Antalya asansörlü nakliyat ve evden eve taşıma hizmetlerinde 22. kata ulaşabilen mobil asansör kiralama. Sıfır hasar, uygun fiyat garantisiyle hemen teklif alın.",
  alternates: {
    canonical: "https://www.azerasansor.com",
  },
};

export default async function Home() {
  const { rating, reviewCount } = await getPlaceDetails();
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Azer Asansör",
        "image": "https://www.azerasansor.com/images/logo.png",
        "@id": "https://www.azerasansor.com/#localbusiness",
        "url": "https://www.azerasansor.com/",
        "telephone": "+905424669631",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antalya",
          "addressCountry": "TR"
        },
        "description": "Antalya asansörlü nakliyat ve evden eve taşıma hizmetleri. 22. kata kadar mobil asansör kiralama.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating.toFixed(1),
          "reviewCount": reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };


  return (
    <main className="min-h-screen bg-brand-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Header />
      <Hero fullHeight />
      <TrustBar />

      {/* ── LEAD CAPTURE FORM ─────────────────────────────────────────────────── */}
      <section className="bg-brand-black py-10 md:py-16 px-4" aria-label="Ücretsiz fiyat teklifi formu">
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <Reviews />

      <Services />
      <WhyUs
        title="Neden"
        highlight="Azer Asansör?"
        description="Antalya'da asansörlü nakliyat, mobil asansör kiralama ve evden eve taşıma hizmetlerinde güvenli, hızlı ve planlı çözümler sunuyoruz. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aynı gün hizmet imkanı ile taşınma sürecinizi kolaylaştırıyoruz."
        benefits={benefits}
        image="/new-image.jpg"
        imageAlt="Antalya mobil asansör kurulumu"
        ctaText="Antalya asansörlü nakliyat veya mobil asansör kiralama için hemen arayın ya da WhatsApp'tan hızlı teklif alın."
      />

      <section className="py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Geleneksel Taşıma vs. Asansörlü Sistem <br className="md:hidden" />
              <span className="text-brand-yellow text-xl md:text-2xl mt-2 block">Karşılaştırması</span>
            </h2>
            <div className="relative">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-4 text-gray-400 font-semibold">Karşılaştırma Kriteri</th>
                    <th className="py-4 px-4 text-gray-400 font-semibold">Geleneksel Taşıma</th>
                    <th className="py-4 px-4 text-brand-yellow font-bold text-lg">Azer Asansörlü Nakliyat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">Taşıma Süresi</td>
                    <td className="py-4 px-4 text-gray-300">Saatler Sürer</td>
                    <td className="py-4 px-4 text-brand-yellow font-medium">Saniyeler İçinde Çıkarılır</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">Hasar Riski</td>
                    <td className="py-4 px-4 text-gray-300">Merdivenlerde Yüksek Çizilme Riski</td>
                    <td className="py-4 px-4 text-brand-yellow font-medium">Dış Cepheden Sıfır Hasar Garantisi</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">Maksimum Yükseklik</td>
                    <td className="py-4 px-4 text-gray-300">Kat Arttıkça İmkansızlaşır</td>
                    <td className="py-4 px-4 text-brand-yellow font-medium">22. Kata Kadar Güvenli Erişim</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">İşçilik Maliyeti</td>
                    <td className="py-4 px-4 text-gray-300">Ekstra Eleman Ücreti Gerektirir</td>
                    <td className="py-4 px-4 text-brand-yellow font-medium">Sabit Fiyat, Gizli Ücret Yok</td>
                  </tr>
                </tbody>
                </table>
              </div>
              <div
                aria-hidden="true"
                className="md:hidden pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-gray-900 to-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <FAQ
        faqs={faqs}
        schemaId="faq-homepage"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Antalya asansörlü nakliyat veya mobil asansör kiralama hizmeti için hemen arayın ya da WhatsApp'tan hızlı teklif alın."
      />
      <Footer />
    </main>
  );
}
