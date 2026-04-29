import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Cam balkon taşıma sırasında kırılma riski nasıl azaltılır?",
    answer:
      "Cam panellerin uygun ambalajlanması ve dış cepheden kontrollü taşıma yapılması kırılma riskini önemli ölçüde azaltır.",
  },
  {
    question: "Cam balkon taşıma ne kadar sürer?",
    answer:
      "Süre; kat sayısı, panel adedi ve kurulum alanına göre değişir. Uygun koşullarda süreç hızlı şekilde tamamlanır.",
  },
  {
    question: "Antalya genelinde hizmet veriyor musunuz?",
    answer:
      "Evet, Antalya merkez ve çevre ilçelerde cam balkon taşıma için mobil asansör destekli hizmet sunuyoruz.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Cam Balkon Taşıma | Güvenli Asansörlü Taşıma",
  description:
    "Antalya cam balkon taşıma hizmeti ile ağır ve hassas cam sistemleri güvenli şekilde taşınır. Mobil asansör ile hızlı ve hasarsız çözüm.",
  alternates: {
    canonical: "https://www.azerasansor.com/cam-balkon-tasima-antalya",
  },
};

export default function CamBalkonTasimaPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya Cam Balkon Taşıma Hizmeti</h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Cam balkon ve büyük cam panellerin taşınması özel dikkat gerektirir. Antalya’da mobil asansör desteği ile cam balkon sistemlerini güvenli şekilde taşıyoruz.
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
            <h2 className="text-3xl font-bold mb-4">Cam Balkon Taşıma Neden Zor?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cam balkon sistemleri hassas yapıdadır ve yanlış taşıma yöntemlerinde kırılma riski yüksektir. Dar merdivenler, dönüş alanlarının yetersiz olması ve panel boyutları süreci daha zor hale getirir.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Asansörlü Taşıma Avantajı</h2>
            <p className="text-gray-300 leading-relaxed">
              Dış cepheden taşıma yöntemi ile paneller merdiven kullanılmadan kontrollü şekilde indirilir veya çıkarılır. Bu yaklaşım hasar riskini azaltır ve süreci daha hızlı hale getirir. Detaylı çözüm için{" "}
              <Link href="/antalya-dis-cephe-asansoru" className="text-brand-yellow hover:underline">
                Antalya dış cephe asansörü
              </Link>{" "}
              hizmetimizi inceleyebilirsiniz.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Nasıl Çalışıyoruz?</h2>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Telefonla ön bilgi ve kısa keşif planlaması yapılır.</li>
              <li>Kurulum alanı ve kat bilgisi değerlendirilir.</li>
              <li>Mobil asansör kurulur ve taşıma kontrollü şekilde tamamlanır.</li>
            </ol>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-cam-balkon-tasima-antalya" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      <section className="py-12 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cam Balkon Taşıma İçin Hemen Ulaşın</h2>
          <p className="text-gray-300 mb-7">Antalya’da hızlı planlama ve güvenli taşıma için ekibimizle hemen iletişime geçin.</p>
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
