import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const serviceCards = [
  {
    title: "Antalya Asansörlü Nakliyat",
    href: "/antalya-asansorlu-nakliyat",
    text: "Yüksek katlı binalarda eşyalarınızı daha hızlı ve güvenli taşımak için asansörlü nakliyat çözümleri sunuyoruz.",
  },
  {
    title: "Antalya Mobil Asansör Kiralama",
    href: "/antalya-mobil-asansor-kiralama",
    text: "Ev, ofis ve inşaat taşımalarında mobil asansör kurulum desteği ile kontrollü ve planlı süreç sağlıyoruz.",
  },
  {
    title: "Antalya Evden Eve Nakliyat",
    href: "/antalya-evden-eve-nakliyat",
    text: "Paketleme, taşıma ve yerleştirme adımlarını tek plan içinde yöneterek güvenli ev taşıma hizmeti veriyoruz.",
  },
  {
    title: "Antalya Ofis Taşıma",
    href: "/antalya-ofis-tasima",
    text: "İş kaybını azaltan planlı kurumsal taşıma süreci ile ofis değişimlerini düzenli şekilde tamamlıyoruz.",
  },
  {
    title: "Antalya Dış Cephe Asansörü",
    href: "/antalya-dis-cephe-asansoru",
    text: "İnşaat malzemesi, cam balkon ve büyük eşyaları dış cepheden taşıyarak zaman ve iş gücü avantajı sunuyoruz.",
  },
  {
    title: "Antalya Kiralık Asansör",
    href: "/antalya-kiralik-asansor",
    text: "Yüksek katlara hızlı erişim gereken durumlarda kiralık asansör hizmeti ile pratik çözümler üretiyoruz.",
  },
];

const faqs = [
  {
    question: "Azer Asansör hangi hizmetleri sunuyor?",
    answer:
      "Azer Asansör; Antalya’da asansörlü nakliyat, mobil asansör kiralama, evden eve nakliyat, ofis taşıma, dış cephe asansörü ve kiralık asansör hizmetleri sunar.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya genelinde hizmet veriyoruz.",
  },
  {
    question: "Mobil asansör hizmeti hangi durumlarda kullanılır?",
    answer:
      "Mobil asansör; yüksek katlı binalarda ev taşıma, ofis taşıma, mobilya, beyaz eşya, cam balkon ve inşaat malzemesi taşıma gibi durumlarda kullanılır.",
  },
  {
    question: "Fiyat bilgisi nasıl alınır?",
    answer:
      "Kat sayısı, eşya miktarı, mesafe ve kurulum alanı değerlendirilerek size özel fiyat bilgisi verilir. Hemen arayabilir veya WhatsApp üzerinden hızlı teklif alabilirsiniz.",
  },
];

export const metadata: Metadata = {
  title: "Hakkımızda | Azer Asansör Antalya",
  description:
    "Azer Asansör hakkında bilgi alın. Antalya’da asansörlü nakliyat, mobil asansör kiralama, evden eve nakliyat ve dış cephe asansörü hizmetleri sunuyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/hakkimizda",
  },
};

export default function AboutPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Azer Asansör",
    url: "https://www.azerasansor.com",
    location: "Antalya",
    areaServed: ["Antalya", "Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı"],
    serviceType: ["Asansörlü Nakliyat", "Mobil Asansör Kiralama", "Evden Eve Nakliyat", "Ofis Taşıma"],
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="localbusiness-schema-hakkimizda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda | Azer Asansör</h1>
            <p className="text-brand-yellow font-semibold text-lg mb-3">
              Antalya’da Asansörlü Nakliyat ve Mobil Asansör Uzmanı
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-7">
              Azer Asansör, Antalya’da asansörlü nakliyat, mobil asansör kiralama ve evden eve taşımacılık hizmetleri sunan yerel bir firmadır. Yüksek katlı binalarda hızlı ve güvenli taşıma çözümleri sağlayarak müşterilerimizin taşınma sürecini kolaylaştırıyoruz.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Azer Asansör Kimdir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya’da yüksek kat taşımacılığı ve mobil asansör hizmetlerine ihtiyaç duyan müşteriler için pratik ve güvenli çözümler sunuyoruz. Ev taşıma, ofis taşıma, inşaat malzemesi taşıma, cam balkon taşıma ve beyaz eşya taşıma gibi farklı ihtiyaçlarda mobil asansör desteği sağlıyoruz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Antalya asansörlü nakliyat hizmetlerinde doğru planlama, taşıma sürecinin kalitesini belirler. Bu yüzden her işte önce kat sayısı, bina erişimi ve eşya yoğunluğu analiz edilir. Mobil asansör kiralama ile yüksek katlı binalarda merdiven kaynaklı zaman kaybını azaltıyor, taşıma adımlarını daha kontrollü hale getiriyoruz. Ev değişikliği yapan aileler için evden eve nakliyat sürecinde paketleme, yükleme ve yerleştirme aşamalarını dengeli bir operasyonla yürütüyoruz. Antalya’nın farklı mahallelerinde değişen bina yapısına göre esnek çözümler üretmek, sahadaki en önemli yaklaşımımızdır. Amacımız fazla vaat vermek değil, ihtiyaç odaklı ve uygulanabilir bir taşıma planı sunmaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hangi Hizmetleri Sunuyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition"
              >
                <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.text}</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Çalışma Prensibimiz</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Önce ihtiyaç analizi yapılır</li>
              <li>• Kat sayısı ve kurulum alanı değerlendirilir</li>
              <li>• Taşıma süreci planlanır</li>
              <li>• Uygun ekip ve araç yönlendirilir</li>
              <li>• İş güvenliği ve eşya güvenliği ön planda tutulur</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden Azer Asansör?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Antalya’da Aktif Saha Deneyimi", text: "Bölgenin bina yapısını, sokak erişimini ve taşıma dinamiklerini bilen ekiplerle çalışıyoruz." },
              { title: "Mobil Asansör ile Hızlı Taşıma", text: "Yüksek katlarda mobil asansör kullanarak taşıma sürecini daha hızlı ve düzenli ilerletiyoruz." },
              { title: "Aynı Gün Hizmet İmkânı", text: "Uygunluk durumuna göre aynı gün keşif ve ekip yönlendirmesi yapabiliyoruz." },
              { title: "Şeffaf Fiyatlandırma", text: "Kat sayısı, eşya miktarı, mesafe ve kurulum alanına göre net fiyat bilgisi paylaşıyoruz." },
              { title: "Kontrollü ve Planlı Süreç", text: "İş güvenliği ve eşya güvenliğini gözeterek adım adım planlanan operasyon yönetimi uyguluyoruz." },
            ].map((card) => (
              <div key={card.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Genelinde Hizmet Veriyoruz</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya’nın çevre bölgelerinde asansörlü nakliyat ve mobil asansör kiralama hizmeti sunuyoruz.
            </p>
            <p className="mt-4">
              <Link href="/antalya-hizmet-bolgeleri" className="text-brand-yellow hover:underline font-medium">
                Antalya Hizmet Bölgeleri
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqs}
        schemaId="faq-hakkimizda"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Azer Asansör ile Güvenli Taşıma İçin Hemen İletişime Geçin
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Antalya’da asansörlü nakliyat, mobil asansör kiralama veya ev taşıma hizmeti için bugün arayın, ücretsiz keşif ve net fiyat alın.
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
