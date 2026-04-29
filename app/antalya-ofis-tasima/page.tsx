import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Building2, Clock, Package, MapPin } from "lucide-react";

const scopeItems = [
  "Ofis mobilyalarının taşınması",
  "Masa, sandalye ve dolap taşıma",
  "Bilgisayar ve elektronik eşya taşıma",
  "Arşiv ve dosya taşıma",
  "Mobilya sökme ve montaj desteği",
  "Asansörlü taşıma desteği gerektiğinde",
];

const processSteps = [
  "Ücretsiz keşif veya telefonla ön bilgi alınır.",
  "Ofisteki eşya, mobilya ve ekipman miktarı belirlenir.",
  "Taşıma günü ve ekip planı oluşturulur.",
  "Mobilya, elektronik eşya ve arşivler departman bazlı düzenlenerek hazırlanır.",
  "Taşıma yapılır ve yeni ofiste yerleşim desteği sağlanır.",
];

const priceFactors = [
  "Ofis büyüklüğü",
  "Eşya ve ekipman miktarı",
  "Kat sayısı",
  "Taşınacak mesafe",
  "Asansörlü taşıma ihtiyacı",
  "Sökme ve montaj ihtiyacı",
  "Taşıma günü ve saat planı",
];

const whyUsItems = [
  {
    title: "Planlı Ofis Taşıma Ekibi",
    text: "Ofis eşyalarınızı, ekipmanlarınızı ve mobilyalarınızı taşınma günü öncesinde planlayarak süreci düzenli şekilde yönetiyoruz.",
  },
  {
    title: "Asansörlü Taşıma Desteği",
    text: "Yüksek katlı ofislerde mobil asansör desteği ile taşıma sürecini daha hızlı ve güvenli hale getiriyoruz.",
  },
  {
    title: "Sigortalı ve Kontrollü Süreç",
    text: "Taşıma sürecini dikkatli şekilde yönetiyor, uygun durumlarda sigortalı taşıma desteği sunuyoruz.",
  },
  {
    title: "Antalya Geneli Hızlı Hizmet",
    text: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya genelinde hızlı ekip yönlendirmesi sağlıyoruz.",
  },
  {
    title: "Ücretsiz Keşif ve Net Fiyat",
    text: "Ofis büyüklüğü, eşya miktarı ve mesafeye göre size özel fiyat bilgisi sunuyoruz.",
  },
];

const faqItems = [
  {
    question: "Antalya ofis taşıma fiyatları ne kadar?",
    answer:
      "Antalya ofis taşıma fiyatları; ofis büyüklüğü, eşya miktarı, kat sayısı, mesafe, asansör ihtiyacı ve sökme-montaj durumuna göre değişir. Net fiyat için ücretsiz keşif veya hızlı teklif alabilirsiniz.",
  },
  {
    question: "Ofis taşıma ne kadar sürer?",
    answer:
      "Taşıma süresi ofisin büyüklüğüne, eşya miktarına ve mesafeye göre değişir. Küçük ofis taşımaları aynı gün içinde tamamlanabilirken, daha büyük kurumsal taşımalar önceden planlanarak yapılır.",
  },
  {
    question: "Bilgisayar ve elektronik eşyalar güvenli taşınır mı?",
    answer:
      "Evet. Bilgisayar, yazıcı ve elektronik eşyalar dikkatli şekilde hazırlanır ve taşıma sırasında zarar görmemesi için kontrollü şekilde taşınır.",
  },
  {
    question: "Mobilya sökme ve montaj yapıyor musunuz?",
    answer:
      "Evet, ihtiyaç durumunda masa, dolap ve ofis mobilyaları için sökme ve montaj desteği sağlanabilir.",
  },
  {
    question: "Asansörlü ofis taşıma yapılır mı?",
    answer:
      "Evet. Yüksek katlı ofislerde veya ağır mobilyaların taşınmasında mobil asansör desteği kullanılabilir. Uygunluk bina ve kurulum alanına göre değerlendirilir.",
  },
  {
    question: "Hafta sonu ofis taşıma hizmeti veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ofis taşıma hizmeti veriyoruz. İş kaybını azaltmak için taşınma günü ve saatini önceden planlamanız önerilir.",
  },
  {
    question: "Kurumsal firmalar için taşıma yapıyor musunuz?",
    answer:
      "Evet, küçük ofislerden kurumsal firmalara kadar farklı ölçeklerde ofis taşıma ve kurumsal nakliyat hizmeti sunuyoruz.",
  },
  {
    question: "Ofis taşıma sırasında iş kesintisi yaşanır mı?",
    answer:
      "Profesyonel planlama sayesinde ofis taşıma süreci iş akışınızı minimum etkileyecek şekilde organize edilir. Taşıma saatleri, ekip planlaması ve süreç yönetimi ile iş kesintisi en aza indirilir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Ofis Taşıma ve Kurumsal Nakliyat | Azer Asansör",
  description:
    "Antalya ofis taşıma ve kurumsal nakliyat hizmeti. Planlı taşıma, sigortalı süreç, asansörlü destek. Muratpaşa, Kepez, Konyaaltı ve tüm Antalya.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-ofis-tasima",
  },
};

export default function OfisTasimaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Ofis Taşıma ve Kurumsal Nakliyat",
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
    serviceType: "Ofis Taşıma",
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-antalya-ofis-tasima"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Antalya Ofis Taşıma ve Kurumsal Nakliyat
            </h1>
            <p className="text-brand-yellow font-semibold mb-3">
              İş Kaybını Minimuma İndiren Hızlı ve Planlı Ofis Taşıma
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Antalya&apos;da ofis taşıma hizmeti ile iş yerinizi hızlı, güvenli ve planlı şekilde yeni adresinize taşıyoruz. Masa, sandalye, arşiv, elektronik eşya ve ofis mobilyalarını profesyonel ekip ile dikkatli şekilde taşıyoruz.
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Planlı Taşıma Süreci</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı Taşıma Desteği</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Asansörlü Taşıma Seçeneği</li>
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
            <p className="text-sm text-gray-300 mt-5">⭐ 5.0 Google puanı · 66+ müşteri yorumu</p>
            <p className="text-sm text-gray-400 mt-2">
              Kurumsal firmalar ve küçük işletmeler için profesyonel ofis taşıma çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Antalya&apos;da Güvenilir Ofis Taşıma Hizmeti
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ofis taşıma süreci, ev taşımaya göre daha fazla planlama gerektirir. Bilgisayarlar, masa düzeni, dosyalar, arşivler ve ofis mobilyaları dikkatli şekilde paketlenmeli ve yeni adrese düzenli olarak taşınmalıdır. Taşıma sürecini iş akışınızı minimum etkileyecek şekilde planlıyoruz. Azer Asansör olarak Antalya&apos;da ofis taşıma ve Antalya kurumsal nakliyat süreçlerini planlı şekilde yönetiyoruz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aktif hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ofis Taşıma Hizmetine Neler Dahil?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ofis taşıma sürecinde ekipmanlarınızı, mobilyalarınızı ve çalışma alanınızı düzenli şekilde yeni adresinize taşıyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scopeItems.map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300 flex items-center gap-2">
                  <Package className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Antalya&apos;da Neden Profesyonel Ofis Taşıma Tercih Etmelisiniz?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Plansız yapılan ofis taşımaları iş kaybına, ekipman karışıklığına ve zaman kaybına yol açabilir. Profesyonel ofis taşıma hizmeti sayesinde taşınma süreci önceden planlanır, eşyalar kategorilere ayrılır ve yeni adrese daha düzenli şekilde taşınır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">İş Kaybını Azaltır</h3>
                <p className="text-gray-300">Planlı taşıma sayesinde ofisinizin yeni adrese geçiş süreci daha hızlı ilerler.</p>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Ekipman Güvenliğini Artırır</h3>
                <p className="text-gray-300">Bilgisayar, yazıcı ve elektronik eşyalar dikkatli şekilde taşınır.</p>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Daha Düzenli Yerleşim Sağlar</h3>
                <p className="text-gray-300">Mobilya, arşiv ve ekipmanlar yeni ofis düzenine göre taşınır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Asansörlü Ofis Taşıma Desteği
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Yüksek katlı iş merkezleri ve apartman ofislerinde taşıma sürecini hızlandırmak için mobil asansör desteği kullanılabilir. Bu yöntem, ağır ofis mobilyalarının bina içinde zarar oluşturmadan daha kontrollü şekilde taşınmasına yardımcı olur.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Link href="/antalya-mobil-asansor-kiralama" className="inline-flex items-center gap-2 text-brand-yellow hover:underline font-semibold">
                Antalya kiralık asansör ve mobil asansör kiralama
              </Link>
              <Link href="/antalya-asansorlu-nakliyat" className="inline-flex items-center gap-2 text-brand-yellow hover:underline font-semibold">
                Antalya asansörlü nakliyat hizmetimiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ofis Taşıma Süreci Nasıl İşler?
            </h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
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

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Antalya Ofis Taşıma Fiyatları
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ofis taşıma fiyatları sabit değildir. Fiyat; taşınacak eşya miktarı, ofisin bulunduğu kat, mesafe, asansör ihtiyacı, mobilya sökme-montaj durumu ve taşıma zamanına göre değişir.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-7">
              Hafta sonu ve mesai saatleri dışında taşıma planlaması yapılabilir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {priceFactors.map((factor) => (
                <div key={factor} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {factor}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mt-7">
              Net fiyat için ücretsiz keşif ile aynı gün teklif alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Hangi Bölgelerde Ofis Taşıma Hizmeti Veriyoruz?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya genelinde ofis taşıma ve Antalya kurumsal nakliyat hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Neden Azer Asansör?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUsItems.map((item) => (
              <div key={item.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-antalya-ofis-tasima"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-10 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benzer Hizmetler
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ofis taşıma hizmetine ek olarak Antalya&apos;da evden eve nakliyat, asansörlü nakliyat ve mobil asansör kiralama çözümlerimizden de yararlanabilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/antalya-evden-eve-nakliyat" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Evden Eve Nakliyat</h3>
                <p className="text-gray-300 mb-4">Paketleme, taşıma ve yerleştirme dahil güvenli evden eve nakliyat hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-asansorlu-nakliyat" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Asansörlü Nakliyat</h3>
                <p className="text-gray-300 mb-4">Yüksek katlı binalarda mobil asansör destekli taşıma hizmetimiz hakkında bilgi alın.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-mobil-asansor-kiralama" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Kiralık Asansör ve Mobil Asansör Kiralama</h3>
                <p className="text-gray-300 mb-4">Yüksek katlı ofis ve bina taşımaları için kiralık mobil asansör hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Antalya Ofis Taşıma İçin Hemen Fiyat Alın
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Bugün arayın, iş kaybı yaşamadan ofis taşıma sürecinizi planlayalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          <p className="text-sm text-gray-400 mt-6">5.0 Google puanı · 66+ yorum · Antalya geneli hizmet</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
