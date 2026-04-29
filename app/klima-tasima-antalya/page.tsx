import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Klima taşıma neden özel planlama ister?",
    answer:
      "Klima sistemleri ağır ve hassas parçalar içerdiği için yanlış taşıma yöntemlerinde hasar riski artar. Bu yüzden kontrollü planlama gerekir.",
  },
  {
    question: "Kurulum ve taşıma ne kadar sürer?",
    answer:
      "Süre; kat sayısı, klima tipi ve kurulum alanına göre değişir. Uygun koşullarda işlem hızlı şekilde tamamlanır.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Antalya merkez ve çevre ilçelerde mobil asansör destekli klima taşıma hizmeti sunuyoruz.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Klima Taşıma | Güvenli Asansörlü Taşıma Hizmeti",
  description:
    "Antalya klima taşıma hizmeti ile ağır klima sistemlerini mobil asansör ile güvenli şekilde taşıyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/klima-tasima-antalya",
  },
};

export default function KlimaTasimaPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya Klima Taşıma Hizmeti</h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Klima sistemleri ağır ve hassas yapıya sahiptir. Antalya’da mobil asansör desteği ile klimaları güvenli şekilde taşıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button>
              </a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="w-full"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Klima Taşıma Neden Risklidir?</h2>
            <p className="text-gray-300 leading-relaxed">
              Klima üniteleri hem ağırdır hem de hassas bağlantı parçaları içerir. Dar alanlarda manuel taşıma yapılması çizilme, çarpma ve parça hasarı riskini yükseltir.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Asansörlü Taşıma Çözümü</h2>
            <p className="text-gray-300 leading-relaxed">
              Dış cepheden taşıma ile klima sistemleri daha hızlı ve kontrollü şekilde taşınır. Kurulum süresi kısa tutulur ve güvenli süreç önceliklendirilir. Bu konuda{" "}
              <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">
                Antalya mobil asansör kiralama
              </Link>{" "}
              ve{" "}
              <Link href="/antalya-dis-cephe-asansoru" className="text-brand-yellow hover:underline">
                Antalya dış cephe asansörü
              </Link>{" "}
              çözümlerimiz destek sağlar.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Ne Kadar Sürede Tamamlanır?</h2>
            <p className="text-gray-300 leading-relaxed">
              Taşıma süresi klima adedi, kat yüksekliği ve kurulum alanına göre değişir. Uygun koşullarda süreç aynı gün içinde tamamlanabilir.
            </p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-klima-tasima-antalya" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      <section className="py-12 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klima Taşıma İçin Hemen Ulaşın</h2>
          <p className="text-gray-300 mb-7">Antalya’da güvenli klima taşıma planlaması için hemen bizi arayın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
