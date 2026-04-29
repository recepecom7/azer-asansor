import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Asansörlü Nakliyat Fiyatları 2026",
  description:
    "Antalya asansörlü nakliyat fiyatlarını etkileyen temel unsurları öğrenin ve ücretsiz keşif ile net teklif alın.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-asansorlu-nakliyat-fiyatlari",
  },
};

const faqs = [
  { question: "Asansörlü nakliyat fiyatları neye göre belirlenir?", answer: "Kat sayısı, eşya yoğunluğu, kurulum alanı ve operasyon süresi gibi kriterler birlikte değerlendirilir." },
  { question: "Kat sayısı fiyatı etkiler mi?", answer: "Evet, kat arttıkça taşıma planı ve kurulum gereksinimi değişebilir. Bu durum teklifin kapsamını etkiler." },
  { question: "Mobil asansör kurulumu fiyatı etkiler mi?", answer: "Kurulum alanının uygunluğu ve operasyon süresi fiyatlandırmada değerlendirilir." },
  { question: "Ücretsiz keşif ile net fiyat alabilir miyim?", answer: "Evet, ücretsiz keşif veya ön değerlendirme sonrası size özel net teklif paylaşılır." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Antalya Asansörlü Nakliyat Fiyatları 2026</h1>
          <p className="text-gray-300 text-lg">
            Antalya’da asansörlü nakliyat fiyatları, taşımanın teknik detaylarına göre değişir. Amaç, süreci güvenli ve hızlı hale getirirken size net ve şeffaf bir teklif sunmaktır.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Asansörlü nakliyat fiyatları neye göre belirlenir?</h2><p className="text-gray-300">Taşınacak eşyanın niteliği, kat durumu, kurulum güvenliği ve ekip planı gibi unsurlar birlikte ele alınır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Kat sayısı fiyatı etkiler mi?</h2><p className="text-gray-300">Yüksek katlı yapılarda planlama hassaslaşır. Özellikle erişim ve operasyon süresi kat sayısına göre farklılaşır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Mobil asansör kurulumu fiyatı etkiler mi?</h2><p className="text-gray-300">Kurulum alanının uygunluğu değerlendirilir. Bu nedenle her bina için <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">Antalya mobil asansör kiralama</Link> planı özel hazırlanır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Asansörlü taşıma neden avantajlıdır?</h2><p className="text-gray-300">Merdiven kullanımı azalır, süreç hızlanır ve hasar riski düşer. Bu yaklaşım özellikle <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">Antalya evden eve nakliyat</Link> operasyonlarında ciddi kolaylık sağlar.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Ücretsiz keşif ile net fiyat alın</h2><p className="text-gray-300">Telefonla ön bilgilendirme sonrası keşif planlanır ve ihtiyacınıza göre teklif hazırlanır. Detaylar için <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">Antalya asansörlü nakliyat</Link> sayfamızı da inceleyebilirsiniz.</p></div>
        </div>
      </section>
      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">Antalya’da asansörlü nakliyat fiyatı için hemen arayın veya WhatsApp’tan yazın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} schemaId="faq-blog-asansorlu-fiyatlari" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
