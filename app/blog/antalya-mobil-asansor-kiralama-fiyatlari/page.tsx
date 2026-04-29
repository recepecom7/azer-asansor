import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya Mobil Asansör Kiralama Fiyatları 2026",
  description:
    "Antalya mobil asansör kiralama fiyatlarını etkileyen faktörler, kurulum süreci ve hızlı teklif adımları.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-mobil-asansor-kiralama-fiyatlari",
  },
};

const faqs = [
  { question: "Mobil asansör kiralama fiyatları neye göre değişir?", answer: "Kat sayısı, yük miktarı, kurulum alanı ve hizmet süresi fiyatlandırmayı belirleyen ana faktörlerdir." },
  { question: "Kat sayısı ve kurulum alanı fiyatı etkiler mi?", answer: "Evet, erişim koşulları ve kurulum güvenliği planı fiyat teklifine doğrudan etki eder." },
  { question: "Aynı gün kiralama mümkün mü?", answer: "Yoğunluk ve konuma göre aynı gün planlama yapılabilir. En hızlı bilgi için telefon veya WhatsApp üzerinden ulaşabilirsiniz." },
  { question: "Net fiyat için ücretsiz keşif sunuyor musunuz?", answer: "Evet, ücretsiz keşif ile ihtiyaçlar netleştirilir ve buna göre kişiye özel teklif hazırlanır." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Antalya Mobil Asansör Kiralama Fiyatları 2026</h1>
          <p className="text-gray-300 text-lg">
            Antalya’da mobil asansör kiralama fiyatları sabit değildir. Her taşıma için kat durumu, yük türü ve kurulum alanı farklı olduğu için teklif de ihtiyaca göre belirlenir.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Mobil asansör kiralama fiyatları neye göre değişir?</h2><p className="text-gray-300">Operasyon süresi, yük hacmi ve kurulum yapılacak alanın uygunluğu fiyatlandırmayı değiştirir.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Kat sayısı ve kurulum alanı</h2><p className="text-gray-300">Yüksek katlar ve sınırlı cephe erişimi daha detaylı planlama gerektirir. Bu nedenle keşif adımı büyük önem taşır.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Eşya veya yük miktarı</h2><p className="text-gray-300">Taşınacak malzeme yoğunluğu arttıkça ekip ve süre planı değişir. Özellikle <Link href="/antalya-kiralik-asansor" className="text-brand-yellow hover:underline">Antalya kiralık asansör</Link> taleplerinde bu fark daha belirgin olur.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Aynı gün kiralama mümkün mü?</h2><p className="text-gray-300">Antalya genelinde uygunluk durumuna göre aynı gün hizmet planlanabilir. Dış cephe operasyonları için <Link href="/antalya-dis-cephe-asansoru" className="text-brand-yellow hover:underline">Antalya dış cephe asansörü</Link> detaylarını da inceleyebilirsiniz.</p></div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-3">Net fiyat için ücretsiz keşif</h2><p className="text-gray-300">En sağlıklı fiyat için keşif yapılır, ihtiyaçlar netleştirilir ve operasyon planına göre teklif hazırlanır. Hizmet detayları için <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">Antalya mobil asansör kiralama</Link> sayfasına geçebilirsiniz.</p></div>
        </div>
      </section>
      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">Antalya’da mobil asansör kiralama fiyatı için hemen arayın veya WhatsApp’tan yazın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} schemaId="faq-blog-mobil-asansor-fiyatlari" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
