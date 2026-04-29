import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const cityLinks = [
  { label: "Antalya İstanbul Nakliyat", href: "/antalya-istanbul-nakliyat" },
  { label: "Antalya Ankara Nakliyat", href: "/antalya-ankara-nakliyat" },
  { label: "Antalya İzmir Nakliyat", href: "/antalya-izmir-nakliyat" },
  { label: "Antalya Bursa Nakliyat", href: "/antalya-bursa-nakliyat" },
  { label: "Antalya Adana Nakliyat", href: "/antalya-adana-nakliyat" },
];

const faqs = [
  { question: "Antalya şehirlerarası nakliyat fiyatları neye göre değişir?", answer: "Fiyatlar mesafe, eşya miktarı, kat sayısı, asansör ihtiyacı ve hizmet kapsamına göre belirlenir." },
  { question: "Taşıma süreci nasıl planlanır?", answer: "Ön keşif sonrası rota, yükleme planı, araç tipi ve teslim günü netleştirilerek süreç adım adım organize edilir." },
  { question: "Sigortalı taşıma hizmeti var mı?", answer: "Evet, uygun taşımalarda sigortalı taşıma desteği sunularak eşyaların güvenliği önceliklendirilir." },
  { question: "Eşyalar kaç günde teslim edilir?", answer: "Gidilecek şehre ve operasyon planına göre teslim süresi değişir; çoğu taşımada 1-3 gün aralığında planlama yapılır." },
  { question: "Asansörlü taşıma şehirlerarası nakliyatta gerekli mi?", answer: "Yüksek katlı binalarda yükleme ve boşaltma sırasında asansörlü taşıma süreci hızlandırır ve hasar riskini azaltır." },
  { question: "Hafta sonu şehirlerarası taşıma yapılıyor mu?", answer: "Yoğunluk durumuna göre hafta sonu planlama yapılabilir. Net program için önceden rezervasyon önerilir." },
];

export const metadata: Metadata = {
  title: "Antalya Şehirlerarası Nakliyat | Güvenli ve Planlı Taşıma",
  description:
    "Antalya şehirlerarası nakliyat hizmeti ile eşyalarınızı güvenli, sigortalı ve planlı şekilde Türkiye genelinde taşıyoruz.",
  alternates: { canonical: "https://www.azerasansor.com/antalya-sehirlerarasi-nakliyat" },
};

export default function SehirlerarasiNakliyatPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya Şehirlerarası Nakliyat</h1>
            <p className="text-gray-200 text-lg mb-6">Antalya’dan Türkiye’nin farklı şehirlerine güvenli, planlı ve profesyonel nakliyat hizmeti sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
            </div>
            <p className="text-sm text-gray-300 mt-4">⭐ 5.0 Google puanı</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Antalya şehirlerarası nakliyat nedir?</h2>
            <p className="text-gray-300">Şehirlerarası nakliyat, eşyaların Antalya’dan başka bir şehre planlı şekilde taşınmasıdır. Süreçte paketleme, yükleme, rota planlama ve teslim adımları birlikte yönetilir.</p>
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">En Sık Taşınan Şehirler</h2>
            <p className="text-gray-300 mb-6">
              Antalya çıkışlı şehirlerarası nakliyat hizmetimizde en çok talep gören güzergahları aşağıdan inceleyebilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityLinks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5 block hover:border-brand-yellow/40 transition"
                >
                  <h3 className="text-white font-bold text-lg mb-2">{c.label}</h3>
                  <span className="text-brand-yellow font-medium">Detayları Gör →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Süreç nasıl işler</h2>
            <p className="text-gray-300">Ön bilgi ve keşif sonrası taşıma günü planlanır, eşyalar araca güvenli şekilde yüklenir ve belirlenen adrese teslim edilir.</p>
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Fiyatlar</h2>
            <p className="text-gray-300">Fiyatlar; mesafe, eşya hacmi, kat durumu ve ek hizmet ihtiyaçlarına göre belirlenir.</p>
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Güvenlik / sigorta</h2>
            <p className="text-gray-300">Eşyalar taşıma öncesinde doğru şekilde hazırlanır; uygun operasyonlarda sigorta desteğiyle süreç daha güvenli hale getirilir.</p>
          </div>
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-4">Antalya bölgeleri</h2>
            <p className="text-gray-300">Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya genelinde hizmet veriyoruz. Şehir içi destek için <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">Antalya evden eve nakliyat</Link>, <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">Antalya asansörlü nakliyat</Link> ve <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">Antalya mobil asansör kiralama</Link> çözümlerimizi de kullanabilirsiniz.</p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-antalya-sehirlerarasi-nakliyat" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      <section className="py-12 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Şehirlerarası Nakliyat İçin Hemen Fiyat Alın</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
