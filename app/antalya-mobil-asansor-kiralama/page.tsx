import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, ShieldCheck, Clock, Building2, MapPin } from "lucide-react";

const useCases = [
  "3. kat ve üzeri taşınmalarda",
  "Dar merdivenli binalarda",
  "Büyük mobilya ve beyaz eşya taşımada",
  "İnşaat ve tadilat malzemesi taşımada",
  "Bina içi hasar riskini azaltmak istendiğinde",
  "Taşıma süresini kısaltmak gerektiğinde",
];

const processSteps = [
  "Ücretsiz keşif veya telefonla ön bilgi alınır.",
  "Kat sayısı, eşya türü ve kurulum alanı değerlendirilir.",
  "Uygun mobil asansör aracı yönlendirilir.",
  "Kurulum genellikle 15-20 dakika içinde yapılır.",
  "Eşyalar veya malzemeler kontrollü şekilde taşınır.",
];

const priceFactors = [
  "Kat sayısı",
  "Eşya veya yük miktarı",
  "Kurulum alanı uygunluğu",
  "Taşıma mesafesi",
  "Hizmet süresi",
  "Ev, ofis veya inşaat kullanımı",
];

const whyUsItems = [
  {
    title: "Deneyimli Mobil Asansör Ekibi",
    text: "Antalya’da yüksek kat taşımacılığı ve mobil asansör kurulumu konusunda saha deneyimine sahip ekibimizle çalışıyoruz.",
  },
  {
    title: "Hızlı Kurulum",
    text: "Uygun alanlarda mobil asansör kurulumu genellikle 15-20 dakika içinde tamamlanır.",
  },
  {
    title: "Güvenli Taşıma",
    text: "Eşya ve malzemeler kontrollü şekilde taşınarak hasar riski azaltılır.",
  },
  {
    title: "Antalya Geneli Hizmet",
    text: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya genelinde hizmet veriyoruz.",
  },
  {
    title: "Ücretsiz Keşif ve Net Fiyat",
    text: "Kat sayısı, eşya miktarı ve kurulum alanına göre size özel fiyat bilgisi sunuyoruz.",
  },
];

const faqItems = [
  {
    question: "Antalya mobil asansör kiralama fiyatları ne kadar?",
    answer:
      "Antalya mobil asansör kiralama fiyatları; kat sayısı, taşınacak eşya veya malzeme miktarı, kurulum alanı ve hizmet süresine göre değişir. Net fiyat için ücretsiz keşif veya hızlı teklif alabilirsiniz.",
  },
  {
    question: "Mobil asansör kaçıncı kata kadar çıkar?",
    answer:
      "Mobil asansör sistemlerimiz genellikle 22. kata kadar ulaşabilmektedir. Uygunluk bina konumu, yol genişliği ve kurulum alanına göre değerlendirilir.",
  },
  {
    question: "Mobil asansör kurulumu ne kadar sürer?",
    answer:
      "Kurulum genellikle 15-20 dakika içinde tamamlanır. Süre, bina çevresi ve kurulum alanının uygunluğuna göre değişebilir.",
  },
  {
    question: "Mobil asansör hangi eşyalar için kullanılır?",
    answer:
      "Mobilya, beyaz eşya, koltuk, dolap, ofis eşyası ve inşaat malzemesi gibi büyük veya ağır eşyaların taşınmasında kullanılabilir.",
  },
  {
    question: "Aynı gün mobil asansör kiralayabilir miyim?",
    answer:
      "Yoğunluğa ve konuma bağlı olarak Antalya genelinde aynı gün mobil asansör hizmeti sağlanabilir. En net bilgi için telefonla arayabilir veya WhatsApp üzerinden hızlı teklif alabilirsiniz.",
  },
  {
    question: "Mobil asansör her binada kurulabilir mi?",
    answer:
      "Her bina için uygunluk kontrolü gerekir. Yol genişliği, balkon veya pencere konumu, bina cephesi ve araç kurulum alanı değerlendirilerek işlem yapılır.",
  },
  {
    question: "Hafta sonu mobil asansör hizmeti veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ve resmi tatillerde de mobil asansör kiralama hizmeti veriyoruz. Yoğunluk yaşamamak için önceden randevu almanız önerilir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Mobil Asansör Kiralama | Azer Asansör",
  description:
    "Antalya mobil asansör kiralama hizmeti. 22. kata kadar hızlı kurulum, güvenli taşıma ve kiralık asansör çözümleri. Muratpaşa, Kepez, Konyaaltı ve tüm Antalya.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-mobil-asansor-kiralama",
  },
};

export default function MobileElevatorPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Mobil Asansör Kiralama",
    provider: {
      "@type": "LocalBusiness",
      name: "Azer Asansör",
      url: "https://www.azerasansor.com",
    },
    areaServed: ["Antalya", "Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı"],
    serviceType: "Mobil Asansör Kiralama",
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-antalya-mobil-asansor-kiralama"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Antalya Mobil Asansör Kiralama</h1>
            <p className="text-brand-yellow font-semibold text-lg mb-3">
              Yüksek Katlar İçin Hızlı ve Güvenli Kiralık Asansör Çözümü
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-7">
              Antalya’da mobil asansör kiralama hizmeti ile ev taşıma, ofis taşıma, mobilya, beyaz eşya ve inşaat malzemelerini yüksek katlara güvenli şekilde taşıyoruz. 22. kata kadar ulaşan mobil asansör sistemimizle taşıma sürecini daha hızlı ve kontrollü hale getiriyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>22. Kata Kadar Ulaşım</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>15-20 Dakikada Kurulum</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı Taşıma Desteği</li>
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
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya’da Mobil Asansör Kiralama Hizmeti</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mobil asansör kiralama, yüksek katlı binalarda eşya ve malzeme taşımayı kolaylaştıran pratik bir çözümdür. Dar merdivenler, küçük bina asansörleri ve ağır eşyalar taşıma sürecini zorlaştırabilir. Azer Asansör olarak Antalya’da kiralık asansör ve mobil asansör kiralama hizmeti ile taşıma sürecinizi daha güvenli ve hızlı hale getiriyoruz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aktif hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Mobil Asansör Nedir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mobil asansör, bina dışına kurulan ve eşyaların balkon, pencere veya uygun cephe alanından taşınmasını sağlayan araç üstü asansör sistemidir.{" "}
              <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">
                Antalya evden eve nakliyat
              </Link>
              ,{" "}
              <Link href="/antalya-ofis-tasima" className="text-brand-yellow hover:underline">
                Antalya ofis taşıma
              </Link>{" "}
              ve{" "}
              <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">
                Antalya asansörlü nakliyat
              </Link>{" "}
              süreçlerinde; beyaz eşya taşıma, mobilya taşıma ve inşaat malzemesi taşımada aktif kullanılır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobil Asansör Hangi Durumlarda Gerekli?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Mobil Asansör Kiralamanın Avantajları</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Antalya mobil asansör kiralama hizmeti, özellikle yüksek katlı binalarda hem zaman kazandırır hem de taşıma güvenliğini artırır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Daha Hızlı Taşıma</h3>
                <p className="text-gray-300">Eşyalar merdiven kullanılmadan bina dışından taşındığı için süreç daha kısa sürede tamamlanır.</p>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Daha Güvenli Süreç</h3>
                <p className="text-gray-300">Ağır ve büyük eşyalar kontrollü şekilde taşınır, çarpma ve çizilme riski azalır.</p>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Bina İçi Hasar Riskini Azaltır</h3>
                <p className="text-gray-300">Merdiven, duvar ve bina asansörü daha az kullanıldığı için bina içi zarar ihtimali düşer.</p>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">Ağır Yükler İçin Uygundur</h3>
                <p className="text-gray-300">Mobilya, beyaz eşya ve inşaat malzemeleri için pratik taşıma desteği sağlar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobil Asansör Kiralama Süreci Nasıl İşler?</h2>
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div key={step} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-1">Adım {idx + 1}</p>
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

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Mobil Asansör Kiralama Fiyatları</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Mobil asansör kiralama fiyatları sabit değildir. Fiyat; kat sayısı, taşınacak eşya veya malzeme miktarı, mesafe, kurulum alanı ve hizmet süresine göre değişir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {priceFactors.map((factor) => (
                <div key={factor} className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex items-center gap-2 text-gray-300">
                  <Building2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {factor}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg mt-7">Net fiyat için ücretsiz keşif ile aynı gün teklif alabilirsiniz.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Kiralık Asansör ve Mobil Asansör Hakkında Detaylı Bilgi</h2>
            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Antalya’da yüksek katlı binaların artmasıyla birlikte Antalya kiralık asansör ihtiyacı her geçen yıl daha görünür hale geliyor. Özellikle şehir merkezindeki apartmanlarda dar merdivenler ve küçük bina asansörleri, taşınma sırasında ciddi zorluklar yaratabiliyor. Bu nedenle Antalya asansör kiralama hizmeti, sadece büyük taşınmalarda değil, günlük eşya hareketlerinde de pratik bir çözüm olarak öne çıkıyor. Mobil asansör kiralama Antalya genelinde yaygınlaştıkça, taşınma süreçleri daha planlı ve daha az riskli hale geliyor.
              </p>
              <p>
                Ev taşıma, ofis taşıma ve inşaat malzemesi taşıma gibi farklı ihtiyaçlarda eşya taşıma asansörü kullanımı zaman kazandırıyor. Merdivenlerden defalarca inip çıkmak yerine eşyaların doğrudan dış cepheden taşınması, hem ekip verimini artırıyor hem de taşıma süresini kısaltıyor. Özellikle koltuk, dolap, beyaz eşya gibi hacimli parçalar için bu yöntem daha güvenli bir akış sağlıyor. Yük asansörü kiralama desteği, inşaat ve tadilat süreçlerinde ağır malzeme transferini de kolaylaştırıyor.
              </p>
              <p>
                Antalya kiralık asansör hizmetinin bir diğer kritik avantajı güvenliktir. Kontrolsüz taşımalarda yaşanabilen çarpma, çizilme ve bina içi hasar riski, profesyonel planlama ile önemli ölçüde azaltılır. Kurulum alanının doğru belirlenmesi, kat mesafesinin doğru hesaplanması ve ekip koordinasyonu sürecin temelini oluşturur. Bu yüzden mobil asansör kiralama hizmetinde sadece araç değil, deneyimli kurulum ve taşıma ekibi de büyük fark yaratır.
              </p>
              <p>
                Antalya asansör kiralama çözümleri, Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı gibi farklı bölgelerde benzer ihtiyaçlara cevap verirken, her bina için uygunluk kontrolü ayrı yapılmalıdır. Yol genişliği, cephe erişimi ve güvenli kurulum noktası değerlendirildiğinde süreç çok daha sorunsuz ilerler. Kısacası doğru planlanan bir mobil asansör kiralama hizmeti, zamandan tasarruf sağlarken güvenli taşıma standardını da yükseltir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya’nın Hangi Bölgelerinde Mobil Asansör Hizmeti Veriyoruz?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya genelinde mobil asansör kiralama hizmeti sunuyoruz. Uygun kurulum alanı olan bölgelerde aynı gün ekip yönlendirmesi yapılabilir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden Azer Asansör?</h2>
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

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Fiyat Rehberi</h3>
            <p className="text-gray-300">
              Detaylı fiyat rehberi için:{" "}
              <Link href="/blog/antalya-mobil-asansor-kiralama-fiyatlari" className="text-brand-yellow hover:underline font-medium">
                Antalya Mobil Asansör Kiralama Fiyatları 2026
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-antalya-mobil-asansor-kiralama"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benzer Hizmetler</h2>
            <p className="text-gray-300 text-lg mb-8">
              Mobil asansör kiralama hizmetine ek olarak Antalya’da asansörlü nakliyat, evden eve nakliyat ve ofis taşıma çözümlerimizden de yararlanabilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/antalya-asansorlu-nakliyat" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Asansörlü Nakliyat</h3>
                <p className="text-gray-300 mb-4">Yüksek katlı binalarda mobil asansör destekli güvenli taşıma hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-evden-eve-nakliyat" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Evden Eve Nakliyat</h3>
                <p className="text-gray-300 mb-4">Paketleme, taşıma ve yerleştirme dahil güvenli evden eve nakliyat hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-ofis-tasima" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Ofis Taşıma</h3>
                <p className="text-gray-300 mb-4">İş kaybını azaltan planlı ofis taşıma ve kurumsal nakliyat hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-kiralik-asansor" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Kiralık Asansör</h3>
                <p className="text-gray-300 mb-4">Yüksek katlara hızlı ve güvenli taşıma için kiralık asansör hizmetimizi inceleyin.</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Antalya Mobil Asansör Kiralama İçin Hemen Fiyat Alın</h2>
          <p className="text-gray-300 text-lg mb-8">
            Bugün arayın, yüksek kat taşıma ve kiralık asansör ihtiyacınız için ücretsiz keşif ve net fiyat alın.
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
          <p className="text-sm text-gray-400 mt-6">5.0 Google puanı · 82+ yorum · Antalya geneli hizmet</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
