import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Hangi inşaat malzemeleri taşınabilir?",
    answer:
      "Tuğla, seramik, alçı, demir ve benzeri ağır malzemeler mobil yük asansörü ile kontrollü şekilde taşınabilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Kurulum çoğu adreste 15-20 dakika içinde tamamlanır. Kurulum alanının uygunluğu süreyi etkileyebilir.",
  },
  {
    question: "Aynı gün hizmet alabilir miyim?",
    answer:
      "Müsaitlik durumuna göre Antalya’da aynı gün ekip yönlendirmesi yapılabilir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya İnşaat Malzemesi Taşıma | Yük Asansörü Hizmeti",
  description:
    "Antalya inşaat malzemesi taşıma hizmeti ile ağır yükleri mobil asansör ile hızlı ve güvenli şekilde taşıyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/insaat-malzemesi-tasima-antalya",
  },
};

export default function InsaatMalzemesiTasimaPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya İnşaat Malzemesi Taşıma Hizmeti</h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              İnşaat ve tadilat süreçlerinde ağır malzemelerin taşınması zaman ve iş gücü gerektirir. Antalya’da mobil yük asansörü ile bu süreci hızlandırıyoruz.
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
            <h2 className="text-3xl font-bold mb-4">Hangi Malzemeler Taşınır?</h2>
            <p className="text-gray-300 leading-relaxed">
              Tuğla, seramik, alçı, demir, çimento torbaları ve benzeri inşaat ürünleri mobil asansör desteği ile üst katlara güvenli şekilde taşınabilir.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Neden Asansör Kullanılır?</h2>
            <p className="text-gray-300 leading-relaxed">
              Asansör kullanımı taşıma hızını artırır, iş gücü yükünü azaltır ve güvenlik seviyesini yükseltir. Antalya’da{" "}
              <Link href="/antalya-kiralik-asansor" className="text-brand-yellow hover:underline">
                Antalya kiralık asansör
              </Link>{" "}
              ve{" "}
              <Link href="/antalya-dis-cephe-asansoru" className="text-brand-yellow hover:underline">
                Antalya dış cephe asansörü
              </Link>{" "}
              çözümleri bu nedenle yoğun tercih edilir.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Hizmet Süreci</h2>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Kısa keşif ve yük bilgisi alınır.</li>
              <li>Kurulum alanı değerlendirilir.</li>
              <li>Mobil asansör kurularak taşıma tamamlanır.</li>
            </ol>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-insaat-malzemesi-tasima-antalya" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      <section className="py-12 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">İnşaat Malzemesi Taşıma İçin Hemen Ulaşın</h2>
          <p className="text-gray-300 mb-7">Antalya’da yük asansörü planlaması için bizi arayın veya WhatsApp’tan yazın.</p>
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
