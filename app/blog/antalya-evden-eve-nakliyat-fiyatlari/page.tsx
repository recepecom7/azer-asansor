import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Evden Eve Nakliyat Fiyatları 2026",
  description:
    "Antalya evden eve nakliyat fiyatlarını etkileyen faktörleri öğrenin. Ücretsiz keşif ile net fiyat alın.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-evden-eve-nakliyat-fiyatlari",
  },
};

const faqs = [
  { question: "Antalya evden eve nakliyat fiyatları ne kadar?", answer: "Fiyatlar taşınacak eşya miktarı, kat sayısı, mesafe ve ek hizmetlere göre değişir. En doğru bilgi için ücretsiz keşif önerilir." },
  { question: "Net fiyat nasıl belirlenir?", answer: "Eşya yoğunluğu, bina yapısı, taşıma mesafesi ve asansör ihtiyacı birlikte değerlendirilerek net teklif hazırlanır." },
  { question: "Asansörlü taşıma fiyatı etkiler mi?", answer: "Asansörlü taşıma bazı durumlarda ek planlama gerektirir, ancak süreci hızlandırdığı için toplam operasyonu daha verimli hale getirebilir." },
  { question: "Ücretsiz keşif var mı?", answer: "Evet, ücretsiz keşif ile ihtiyaçlar belirlenir ve buna göre net fiyatlandırma yapılır." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Antalya Evden Eve Nakliyat Fiyatları 2026</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya’da evden eve nakliyat fiyatları sabit değildir. Taşınma planı her evde farklı olduğu için fiyatlandırma; eşya miktarı, kat sayısı, mesafe ve operasyon detaylarına göre şekillenir.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Antalya evden eve nakliyat fiyatları neye göre değişir?</h2><p className="text-gray-300">Fiyatı belirleyen ana unsurlar; eşya hacmi, taşınma günü planı, bina erişimi ve operasyon süresidir. Bu yüzden her taşınma için ayrı değerlendirme yapılır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Eşya miktarı fiyatı nasıl etkiler?</h2><p className="text-gray-300">Eşya arttıkça araç kapasitesi, ekip büyüklüğü ve taşıma süresi değişir. Daha yoğun taşınmalarda planlama kapsamı genişlediği için teklif buna göre güncellenir.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Kat sayısı ve asansör ihtiyacı</h2><p className="text-gray-300">Yüksek katlı veya dar merdivenli binalarda <Link className="text-brand-yellow hover:underline" href="/antalya-mobil-asansor-kiralama">Antalya mobil asansör kiralama</Link> desteği süreç güvenliği açısından önemlidir. Bu ihtiyaç fiyatlandırma kalemlerine yansıyabilir.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Paketleme hizmeti fiyatı etkiler mi?</h2><p className="text-gray-300">Evet, paketleme kapsamı hem malzeme hem de işçilik planını etkiler. Profesyonel paketleme, taşıma sırasında hasar riskini azaltır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Ücretsiz keşif ile net fiyat nasıl alınır?</h2><p className="text-gray-300">Ekip sahada veya telefon ön değerlendirmesi ile ihtiyaçları netleştirir. Ardından size özel teklif sunulur. İlgili hizmetler: <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">Antalya evden eve nakliyat</Link> ve <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">Antalya asansörlü nakliyat</Link>.</p></div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">Antalya’da ev taşıma fiyatı almak için hemen arayın veya WhatsApp’tan yazın.</p>
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
