import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const districts = [
  { name: "Muratpaşa", href: "/muratpasa-asansorlu-nakliyat" },
  { name: "Kepez", href: "/kepez-asansorlu-nakliyat" },
  { name: "Konyaaltı", href: "/konyaalti-asansorlu-nakliyat" },
  { name: "Lara", href: "/lara-asansorlu-nakliyat" },
  { name: "Aksu", href: "/aksu-asansorlu-nakliyat" },
  { name: "Döşemealtı", href: "/dosemealti-asansorlu-nakliyat" },
];

export const metadata: Metadata = {
  title: "Antalya Hizmet Bölgeleri | Asansörlü Nakliyat",
  description:
    "Antalya genelinde Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde asansörlü nakliyat ve mobil asansör hizmeti sunuyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-hizmet-bolgeleri",
  },
};

export default function AntalyaHizmetBolgeleriPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya Hizmet Bölgeleri</h1>
            <p className="text-gray-200 text-lg mb-6">
              Antalya’nın tüm ilçelerinde asansörlü nakliyat, evden eve taşıma ve mobil asansör kiralama hizmeti sunuyoruz. Aşağıdan bulunduğunuz bölgeye özel hizmet detaylarını inceleyebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {districts.map((d) => (
              <Link key={d.href} href={d.href} className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h2 className="text-white text-2xl font-bold mb-2">{d.name}</h2>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            ))}
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 text-gray-300 leading-relaxed">
            Antalya asansörlü nakliyat hizmetinde lokasyon bilgisi, planlama hızını ve taşıma verimini doğrudan etkiler. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde farklı bina tiplerine uygun operasyon planı oluşturuyoruz. Yüksek katlı yapılarda mobil asansör kiralama ile taşıma süresini kısaltıyor, dar merdiven kaynaklı riskleri azaltıyoruz. Ev değişikliği yapan aileler için evden eve nakliyat süreçlerini, ofis ve ticari alanlar için daha düzenli taşıma modeliyle destekliyoruz. Her bölgede keşif, kurulum ve taşıma adımlarını yerel koşullara göre planlayarak daha güvenli ve hızlı bir hizmet sunuyoruz.
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
