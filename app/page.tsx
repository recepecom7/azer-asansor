import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import {
  Truck, Building2, Armchair, Refrigerator,
  BrickWall, Award, ShieldCheck,
  Clock, Check, HardHat,
} from "lucide-react";

const services = [
  {
    title: "Antalya Evden Eve Nakliyat Hizmeti",
    description:
      "Antalya'da evden eve nakliyat hizmeti ile eşyalarınızı sigortalı ve güvenli şekilde yeni adresinize taşıyoruz. Paketleme, taşıma ve yerleştirme dahil tüm süreci profesyonel ekip ile yönetiyoruz.",
    icon: Truck,
    href: "/antalya-evden-eve-nakliyat",
  },
  {
    title: "Antalya Asansörlü Nakliyat Hizmeti",
    description:
      "Antalya asansörlü nakliyat hizmetimiz ile yüksek katlara hızlı ve güvenli taşıma sağlıyoruz. Mobil asansör sistemi sayesinde eşyalar merdiven kullanılmadan hasarsız şekilde taşınır.",
    icon: Building2,
    href: "/antalya-asansorlu-nakliyat",
    featured: true,
  },
  {
    title: "Antalya Mobil Asansör Kiralama",
    description:
      "Antalya mobil asansör kiralama hizmeti ile 22. kata kadar hızlı kurulum ve güvenli taşıma sağlanır. Dar merdivenli binalar ve yüksek kat taşımaları için ideal çözümdür.",
    icon: Armchair,
    href: "/antalya-mobil-asansor-kiralama",
    featured: true,
  },
  {
    title: "Antalya Ofis Taşıma Hizmeti",
    description:
      "Antalya ofis taşıma hizmeti ile iş kaybı yaşamadan hızlı ve planlı taşınma sağlıyoruz. Kurumsal çözümler ile süreci minimum kesinti ile yönetiyoruz.",
    icon: Clock,
    href: "/iletisim",
  },
  {
    title: "Beyaz Eşya Taşıma",
    description:
      "Buzdolabı, çamaşır makinesi gibi ağır eşyalar mobil asansör ile güvenli şekilde taşınır ve taşıma sırasında hasar riski minimuma indirilir.",
    icon: Refrigerator,
    href: "/antalya-asansorlu-tasima",
  },
  {
    title: "İnşaat Malzemesi Taşıma",
    description:
      "İnşaat ve tadilat süreçlerinde ağır malzemelerin mobil asansör ile hızlı ve güvenli şekilde taşınmasını sağlıyoruz.",
    icon: BrickWall,
    href: "/antalya-dis-cephe-asansoru",
  },
];

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

export default function Home() {
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
        "description": "Antalya asansörlü nakliyat ve evden eve taşıma hizmetleri. 22. kata kadar mobil asansör kiralama."
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
      <Hero />
      <TrustBar />

      {/* ── LEAD CAPTURE FORM ─────────────────────────────────────────────────── */}
      <section className="bg-brand-black py-10 md:py-16 px-4" aria-label="Ücretsiz fiyat teklifi formu">
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <Services
        title="Hizmetlerimiz"
        highlight=""
        services={services}
        ctaTitle="Antalya'da Asansörlü Nakliyat İçin Hemen Fiyat Alın"
        ctaDescription="Aynı gün keşif, hızlı kurulum ve sigortalı taşıma için Azer Asansör ekibiyle iletişime geçin."
      />
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
              Neden Azer Asansör? <br className="md:hidden" />
              <span className="text-brand-yellow text-xl md:text-2xl mt-2 block">(Geleneksel Taşıma vs. Asansörlü Sistem)</span>
            </h2>
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
