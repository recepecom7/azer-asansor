import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Evden Eve Nakliyat Fiyatları 2026: 7 Kritik Etken",
  description:
    "Antalya evden eve nakliyat fiyatlarını belirleyen 7 kritik etken: eşya miktarı, kat, mesafe, paketleme ve daha fazlası. Ücretsiz keşif ile net fiyat alın.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-evden-eve-nakliyat-fiyatlari",
  },
  openGraph: {
    title: "Antalya Evden Eve Nakliyat Fiyatları Neden Değişir? 7 Kritik Etken",
    description:
      "Eşya miktarı, kat, mesafe, paketleme ve sezon: Antalya'da nakliyat fiyatını belirleyen 7 etken. Ücretsiz keşif ile net fiyat alın.",
    url: "https://www.azerasansor.com/blog/antalya-evden-eve-nakliyat-fiyatlari",
    siteName: "Azer Asansör",
    locale: "tr_TR",
    type: "article",
    images: [
      {
        url: "https://www.azerasansor.com/images/hero-real.jpg",
        width: 1200,
        height: 630,
        alt: "Antalya evden eve nakliyat - Azer Asansör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Evden Eve Nakliyat Fiyatları Neden Değişir? 7 Kritik Etken",
    description:
      "Eşya miktarı, kat, mesafe, paketleme ve sezon: Antalya'da nakliyat fiyatını belirleyen 7 etken. Ücretsiz keşif ile net fiyat alın.",
    images: ["https://www.azerasansor.com/images/hero-real.jpg"],
  },
};

const factors = [
  { title: "Eşya miktarı", text: "Eşya arttıkça araç kapasitesi, ekip büyüklüğü ve taşıma süresi değişir. Daha yoğun taşınmalarda planlama kapsamı genişlediği için teklif buna göre güncellenir." },
  { title: "Kat sayısı ve asansör ihtiyacı", text: "Yüksek katlı veya dar merdivenli binalarda mobil asansör desteği süreç güvenliği açısından önemlidir. Bu ihtiyaç fiyatlandırma kalemlerine yansıyabilir." },
  { title: "Mesafe", text: "Şehir içi kısa mesafeler ile şehirler arası uzun mesafeler farklı yakıt, araç ve iş gücü maliyeti gerektirir; bu fark doğrudan fiyata yansır." },
  { title: "Paketleme hizmeti", text: "Paketleme kapsamı hem malzeme hem de işçilik planını etkiler. Profesyonel paketleme, taşıma sırasında hasar riskini azaltır ama ek maliyet oluşturur." },
  { title: "Sigortalı taşıma", text: "Eşyaların sigorta kapsamına alınması, olası hasar durumunda güvence sağlar ve fiyata küçük bir kalem olarak eklenir." },
  { title: "Mobilya söküm-montaj", text: "Gardırop, TV ünitesi gibi büyük mobilyaların demontaj ve montajı, marangoz desteği gerektirdiği için ek ücrete tabi olabilir." },
  { title: "Taşınma günü ve sezon", text: "Yaz ayları, hafta sonları ve ay başı/sonu gibi yoğun dönemlerde talep arttığı için fiyatlar bir miktar yükselebilir." },
];

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Antalya Evden Eve Nakliyat Fiyatları Neden Değişir? 7 Kritik Etken",
  datePublished: "2026-01-15",
  dateModified: "2026-09-17",
};

const faqs = [
  {
    question: "Antalya'da evden eve nakliyat fiyatı ortalama ne kadar?",
    answer:
      "Sabit bir fiyat yoktur; eşya miktarı, kat sayısı, asansör ihtiyacı, mesafe ve ek hizmetlere göre her taşınma ayrı fiyatlandırılır. Net fiyat için WhatsApp'tan evinizin fotoğraflarını gönderebilir veya ücretsiz keşif isteyebilirsiniz.",
  },
  {
    question: "Asansörlü nakliyat ekstra ücret gerektirir mi?",
    answer:
      "Genellikle küçük bir ek ücret gerektirir, ancak süreci hızlandırıp hasar riskini azalttığı için toplamda avantajlı bir seçenektir.",
  },
  {
    question: "Yazın taşınmak neden daha pahalı?",
    answer:
      "Yaz aylarında taşınma talebi arttığı için ekip ve araç yoğunluğu yükselir, bu da fiyatları bir miktar artırabilir. Erken randevu bu farkı azaltabilir.",
  },
  {
    question: "Sigorta gerçekten gerekli mi?",
    answer:
      "Zorunlu değildir ama özellikle değerli mobilya ve eşyalarda önerilir; olası hasar durumunda maddi kaybı önler.",
  },
  {
    question: "Şehirler arası nakliyat neden bu kadar daha pahalı?",
    answer:
      "Mesafe, yakıt maliyeti, yol süresi ve gerekirse konaklama gibi ek giderler şehirler arası nakliyatın şehir içine kıyasla daha maliyetli olmasına neden olur.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-evden-eve-fiyatlari"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Antalya Evden Eve Nakliyat Fiyatları Neden Değişir? 7 Kritik Etken</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 17 Eylül 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya&apos;da{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              antalya evden eve nakliyat
            </Link>{" "}
            fiyatları sabit değildir. Taşınma planı her evde farklı olduğu için fiyatlandırma; eşya miktarı, kat sayısı, mesafe ve operasyon detaylarına göre şekillenir. Bu yazıda fiyatı belirleyen 7 kritik etkeni ve net fiyatı nasıl alabileceğinizi bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-5">Antalya Evden Eve Nakliyat Fiyatları Neye Göre Belirlenir?</h2>
            <div className="space-y-4">
              {factors.map((factor, index) => (
                <div key={factor.title} className="bg-[#111827] border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold mb-1">{index + 1}. {factor.title}</p>
                  <p className="text-gray-300">{factor.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-3">Size Özel Net Fiyat Alın</h2>
            <p className="text-gray-300 text-lg mb-5">
              Her taşınma farklıdır. Net fiyatınızı öğrenmek için WhatsApp&apos;tan evinizin fotoğraflarını gönderin veya arayın. Ücretsiz keşif, sürpriz ücret yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Fotoğraf Gönder</Button></a>
              <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
            </div>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-3">Şehirler Arası Nakliyat Neden Daha Pahalı?</h2>
            <p className="text-gray-300">
              Şehirler arası taşımalarda mesafe, yakıt maliyeti ve yol süresi şehir içi taşımaya kıyasla daha yüksek bir maliyet oluşturur. Kesin fiyat için ücretsiz keşif ya da{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-sehirlerarasi-nakliyat">
                Antalya şehirlerarası nakliyat
              </Link>{" "}
              ekibimizle görüşmenizi öneririz.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-3">Ücretsiz Keşif ile Net Fiyat Nasıl Alınır?</h2>
            <p className="text-gray-300">
              Ekip sahada veya telefon ön değerlendirmesi ile ihtiyaçları netleştirir. Ardından size özel teklif sunulur. İlgili hizmetler:{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
                Antalya evden eve nakliyat
              </Link>{" "}
              ve{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
                Antalya asansörlü nakliyat
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">Antalya&apos;da ev taşıma fiyatı almak için hemen arayın veya WhatsApp&apos;tan yazın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-blog-evden-eve-fiyatlari" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
