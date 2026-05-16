import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Clock, Building2, MapPin, PhoneCall, Package, Route } from "lucide-react";

const needItems = [
  "3. kat ve üzeri taşınmalarda",
  "Dar merdivenli binalarda",
  "Büyük mobilya ve beyaz eşya taşımada",
  "Bina içi hasar riskini azaltmak istendiğinde",
  "Taşıma süresini kısaltmak gerektiğinde",
];

const processSteps = [
  "Ücretsiz keşif veya telefonla bilgi alınır.",
  "Kat sayısı, eşya miktarı ve kurulum alanı değerlendirilir.",
  "Uygun mobil asansör aracı yönlendirilir.",
  "Asansör kurulumu yaklaşık 15-20 dakika içinde yapılır.",
  "Eşyalar kontrollü şekilde taşınır ve yeni adrese yerleştirilir.",
];

const advantageItems = [
  {
    title: "Daha hızlı taşıma süreci",
    text: "Eşyalar merdiven kullanılmadan bina dışından taşındığı için taşıma süresi kısalır.",
  },
  {
    title: "Bina içi hasar riskinin azalması",
    text: "Apartman merdivenleri, duvarlar ve asansör içi alanlar daha az kullanıldığı için hasar riski düşer.",
  },
  {
    title: "Büyük eşyaların kolay taşınması",
    text: "Koltuk, dolap, beyaz eşya ve ağır mobilyalar daha kontrollü şekilde taşınır.",
  },
  {
    title: "Daha güvenli ve planlı taşıma",
    text: "Kurulum alanı, kat sayısı ve eşya durumu değerlendirilerek taşıma süreci planlanır.",
  },
];

const priceFactors = [
  "Kat sayısı",
  "Eşya miktarı",
  "Taşınacak mesafe",
  "Mobil asansör kurulum alanı",
  "Paketleme ihtiyacı",
  "Şehir içi veya şehirler arası taşıma",
];

const whyUsItems = [
  {
    title: "Deneyimli Taşıma Ekibi",
    text: "Antalya’da yüksek kat taşımacılığı ve asansörlü nakliyat süreçlerinde saha deneyimine sahip ekibimizle çalışıyoruz.",
  },
  {
    title: "Mobil Asansör Destekli Güvenli Taşıma",
    text: "Eşyalarınızı merdiven kullanılmadan, bina dışından kontrollü şekilde taşıyarak hasar riskini azaltıyoruz.",
  },
  {
    title: "Sigortalı ve Kontrollü Süreç",
    text: "Taşıma sürecini planlı şekilde yönetiyor, uygun durumlarda sigortalı taşıma desteği sunuyoruz.",
  },
  {
    title: "Aynı Gün Hizmet İmkânı",
    text: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya genelinde hızlı ekip yönlendirmesi sağlıyoruz.",
  },
  {
    title: "Ücretsiz Keşif ve Net Fiyat Bilgisi",
    text: "Kat sayısı, eşya miktarı, mesafe ve mobil asansör kurulum alanına göre size özel fiyat bilgisi sunuyoruz.",
  },
];

const faqItems = [
  {
    question: "Antalya asansörlü nakliyat fiyatları ne kadar?",
    answer:
      "Fiyatlar eşya miktarı, kat sayısı, mesafe ve mobil asansör kurulum alanına göre değişir. Net fiyat için ücretsiz keşif veya hızlı teklif alabilirsiniz.",
  },
  {
    question: "Mobil asansör kaçıncı kata kadar çıkar?",
    answer:
      "Mobil asansör sistemlerimiz genellikle 22. kata kadar ulaşabilmektedir. Uygunluk bina konumu ve kurulum alanına göre değerlendirilir.",
  },
  {
    question: "Asansörlü nakliyat eşyaları daha güvenli taşır mı?",
    answer:
      "Evet. Eşyalar merdiven kullanılmadan bina dışından taşındığı için çarpma, çizilme ve bina içi hasar riski azalır.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Mobil asansör kurulumu genellikle 15-20 dakika içinde tamamlanır. Süre, bina çevresi ve kurulum alanına göre değişebilir.",
  },
  {
    question: "Asansörlü nakliyat her binada yapılabilir mi?",
    answer:
      "Her bina için uygunluk kontrolü gerekir. Balkon, pencere, yol genişliği ve araç kurulum alanı değerlendirilerek işlem yapılır.",
  },
  {
    question: "Hafta sonu hizmet veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ve resmi tatillerde de hizmet veriyoruz. Yoğunluk yaşamamak için önceden randevu önerilir.",
  },
  {
    question: "Asansörlü nakliyat bina zarar verir mi?",
    answer:
      "Doğru kurulum ve kontrollü taşıma ile bina içi hasar riski azalır. Eşyalar bina dışından taşındığı için merdiven, duvar ve apartman içi alanların zarar görme ihtimali minimuma iner.",
  },
  {
    question: "Aynı gün asansörlü nakliyat hizmeti alabilir miyim?",
    answer:
      "Yoğunluğa ve konuma bağlı olarak Antalya genelinde aynı gün asansörlü nakliyat hizmeti sağlanabilir. En net bilgi için telefonla arayabilir veya WhatsApp üzerinden hızlı teklif alabilirsiniz.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Asansörlü Nakliyat Hizmeti | Azer Asansör",
  description:
    "Antalya asansörlü nakliyat hizmeti. 22. kata kadar mobil asansör, sigortalı taşıma, hızlı kurulum. Muratpaşa, Kepez, Konyaaltı, Lara ve tüm Antalya.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-asansorlu-nakliyat",
  },
};

export default function AsansorluNakliyatPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Asansörlü Nakliyat",
    provider: {
      "@type": "LocalBusiness",
      name: "Azer Asansör",
      url: "https://www.azerasansor.com",
    },
    areaServed: [
      "Antalya",
      "Muratpaşa",
      "Kepez",
      "Konyaaltı",
      "Lara",
      "Aksu",
      "Döşemealtı",
    ],
    serviceType: "Asansörlü Nakliyat",
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-antalya-asansorlu-nakliyat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/altintas-evden-eve.jpg"
            alt="Antalya asansörlü nakliyat mobil asansör uygulaması"
            fill
            className="object-cover object-center"
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        </div>
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-[1px]">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Antalya Asansörlü Nakliyat
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Antalya&apos;da yüksek katlı binalar için hızlı, güvenli ve sigortalı asansörlü nakliyat hizmeti sunuyoruz. Mobil asansör sistemi ile eşyalarınız merdiven kullanılmadan, bina dışından kontrollü şekilde taşınır.
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>22. Kata Kadar Ulaşım</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı Taşıma</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>15-20 Dakikada Kurulum</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Antalya Geneli Hizmet</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full text-base md:text-lg px-7">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara - Ücretsiz Fiyat Al
                </Button>
              </a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Hızlı Teklif Al
                </Button>
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-5">
              ⭐ 5.0 Google puanı · 82+ yorum · Antalya geneli hizmet
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: ShieldCheck, text: "Sigortalı Taşıma" },
              { icon: Building2, text: "22. Kata Kadar" },
              { icon: Clock, text: "Aynı Gün Hizmet" },
              { icon: MapPin, text: "Antalya Geneli" },
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
            Antalya&apos;da Güvenli Asansörlü Nakliyat Hizmeti
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya asansörlü nakliyat hizmeti, özellikle yüksek katlı binalarda taşınma sürecini daha hızlı ve güvenli hale getirir. Dar merdivenler, küçük bina asansörleri ve ağır eşyalar taşıma sırasında risk oluşturabilir. Azer Asansör olarak Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde mobil asansör destekli taşıma hizmeti sunuyoruz.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-5">
            Detaylı hizmetler için{" "}
            <Link href="/antalya-mobil-asansor-kiralama" className="font-semibold text-white hover:text-brand-yellow transition-colors">
              Antalya kiralık asansör ve mobil asansör kiralama
            </Link>{" "}
            ve{" "}
            <Link href="/antalya-evden-eve-nakliyat" className="font-semibold text-white hover:text-brand-yellow transition-colors">
              Antalya evden eve nakliyat
            </Link>{" "}
            sayfalarımızı inceleyebilirsiniz.
          </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Asansörlü Nakliyatın Avantajları
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Antalya&apos;da özellikle yüksek katlı binalarda en çok tercih edilen taşıma yöntemlerinden biri asansörlü nakliyattır. Mobil asansör sistemi sayesinde taşınma süreci daha hızlı, güvenli ve planlı ilerler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantageItems.map((item) => (
                <div key={item.title} className="bg-brand-black border border-gray-800 rounded-2xl p-5">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Asansörlü Nakliyat Ne Zaman Gerekli?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {needItems.map((item) => (
              <div key={item} className="bg-brand-black border border-gray-800 rounded-2xl p-5 text-gray-300">
                {item}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Asansörlü Nakliyat Süreci Nasıl İşler?
          </h2>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step} className="bg-brand-black border border-gray-800 rounded-2xl p-5">
                <p className="text-white font-semibold mb-1">Adım {index + 1}</p>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Antalya Asansörlü Nakliyat Fiyatları Neye Göre Belirlenir?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Asansörlü nakliyat fiyatları sabit değildir. Fiyat; taşınacak eşya miktarı, kat sayısı, mesafe, asansör kurulum alanı ve taşıma süresine göre değişir. Net fiyat için Azer Asansör ile iletişime geçerek ücretsiz keşif veya hızlı teklif alabilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceFactors.map((factor, idx) => (
              <div key={factor} className="bg-brand-black border border-gray-800 rounded-2xl p-5 text-gray-300 flex items-center gap-2">
                {idx % 2 === 0 ? (
                  <Package className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                ) : (
                  <Route className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                )}
                {factor}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Antalya&apos;nın Hangi Bölgelerinde Hizmet Veriyoruz?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya&apos;nın çevre bölgelerinde asansörlü nakliyat hizmeti sunuyoruz.
          </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Neden Azer Asansör?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUsItems.map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Fiyat Rehberi</h3>
            <p className="text-gray-300">
              Detaylı fiyat rehberi için:{" "}
              <Link href="/blog/antalya-asansorlu-nakliyat-fiyatlari" className="text-brand-yellow hover:underline font-medium">
                Antalya Asansörlü Nakliyat Fiyatları 2026
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-antalya-asansorlu-nakliyat"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Antalya asansörlü nakliyat veya mobil asansör kiralama hizmeti için hemen arayın ya da WhatsApp&apos;tan hızlı teklif alın."
      />

      <section className="py-14 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benzer Hizmetler
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Asansörlü nakliyat hizmetine ek olarak Antalya&apos;da mobil asansör kiralama ve evden eve nakliyat çözümlerimizden de yararlanabilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/antalya-mobil-asansor-kiralama" className="bg-brand-black border border-gray-800 rounded-2xl p-5 block hover:border-brand-yellow/60 transition-colors">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Kiralık Asansör ve Mobil Asansör Kiralama</h3>
                <p className="text-gray-300 mb-4">Yüksek katlı binalarda eşya, mobilya ve malzeme taşımak için kiralık mobil asansör hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-evden-eve-nakliyat" className="bg-brand-black border border-gray-800 rounded-2xl p-5 block hover:border-brand-yellow/60 transition-colors">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Evden Eve Nakliyat</h3>
                <p className="text-gray-300 mb-4">Paketleme, taşıma ve yerleştirme dahil güvenli evden eve nakliyat hizmetimiz hakkında bilgi alın.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-8">
            Antalya asansörlü nakliyat hizmeti için Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere tüm bölgelerde hizmet veriyoruz. Kiralık mobil asansör ve evden eve nakliyat çözümlerimizle taşınma sürecinizi hızlı, güvenli ve planlı hale getiriyoruz.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Antalya Asansörlü Nakliyat İçin Hemen Fiyat Alın
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Hemen arayın, ücretsiz keşif ile net fiyat alın. Yüksek kat taşıma, evden eve nakliyat veya mobil asansör desteği için Azer Asansör ekibiyle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full text-base md:text-lg px-7">
                <PhoneCall className="w-5 h-5 mr-2" />
                Hemen Ara - Ücretsiz Fiyat Al
              </Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Hızlı Teklif Al
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center mt-6">
            5.0 Google puanı · 82+ yorum · Ortalama dönüş süresi: 5–10 dakika
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
