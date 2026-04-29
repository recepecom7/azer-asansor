import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const faqs = [
  { question: "Antalya İstanbul nakliyat fiyatı ne kadar?", answer: "Fiyat; eşya miktarı, kat sayısı, asansör ihtiyacı ve teslim planına göre değişir." },
  { question: "Kaç gün sürer?", answer: "Operasyon planına göre taşıma ve teslim süreci genellikle 1-3 gün aralığında tamamlanır." },
  { question: "Sigorta var mı?", answer: "Uygun taşımalarda sigortalı taşıma desteği sunuyoruz." },
  { question: "Eşyalar zarar görür mü?", answer: "Doğru paketleme ve profesyonel yükleme ile hasar riski minimum seviyeye indirilir." },
  { question: "Hangi araçlar kullanılır?", answer: "Eşya hacmine uygun kapalı kasa şehirlerarası nakliye araçları kullanılır." },
];

export const metadata: Metadata = {
  title: "Antalya İstanbul Nakliyat | Şehirlerarası Ev Taşıma",
  description: "Antalya İstanbul nakliyat hizmeti ile eşyalarınızı güvenli ve sigortalı şekilde taşıyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-istanbul-nakliyat",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="bg-brand-black text-white border-b border-white/10"><div className="container mx-auto px-4 py-10 md:py-14"><div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6"><h1 className="text-4xl md:text-5xl font-bold mb-4">Antalya İstanbul Nakliyat Hizmeti</h1><p className="text-brand-yellow font-semibold mb-3">Güvenli ve Planlı Şehirlerarası Taşıma</p><p className="text-gray-200 text-lg mb-6">Antalya’dan İstanbul’a evden eve nakliyat hizmeti sunuyoruz. Uzun mesafe taşımacılıkta profesyonel ekip, planlı süreç ve sigortalı taşıma ile eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.</p><ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200 mb-6"><li>✓ Sigortalı taşıma</li><li>✓ Zamanında teslim</li><li>✓ Profesyonel ekip</li><li>✓ Türkiye geneli hizmet</li></ul><div className="flex flex-col sm:flex-row gap-4"><a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a><a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a></div></div></div></section>
      <section className="py-10 bg-brand-black text-white"><div className="container mx-auto px-4 max-w-6xl space-y-6"><div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Antalya İstanbul Nakliyat Nasıl Yapılır?</h2><p className="text-gray-300">Ön bilgi ve keşif sonrası taşıma planı çıkarılır. Eşyalar uygun paketleme ile araca yüklenir, güzergah planına göre İstanbul’daki yeni adrese teslim edilir.</p></div><div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Kaç Gün Sürer?</h2><p className="text-gray-300">Antalya İstanbul hattında operasyon yoğunluğu ve teslim noktasına göre süreç genellikle 1-3 gün aralığında planlanır.</p></div><div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Fiyatlar Neye Göre Belirlenir?</h2><p className="text-gray-300">Mesafe, eşya miktarı, kat sayısı, bina erişimi ve <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">Antalya asansörlü nakliyat</Link> ihtiyacı fiyatı etkiler.</p></div><div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Neden Profesyonel Nakliyat?</h2><p className="text-gray-300">Şehirlerarası taşımada zaman yönetimi, doğru paketleme ve düzenli yükleme hayati önem taşır. Profesyonel ekip ile çalışma, hem eşya güvenliğini artırır hem de teslim süresini daha öngörülebilir hale getirir. Antalya çıkışlı uzun mesafe taşımalarda rota planlaması, araç organizasyonu ve teslim koordinasyonu bir bütün olarak ele alınmalıdır. Bu sayede gecikme, karışıklık ve operasyon hataları azalır. Özellikle büyük hacimli ev taşımalarda, eşyaların türüne göre sınıflandırılması ve araç içine doğru yerleşimi hasar riskini azaltır. Şehir içi hazırlık aşamasında <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">Antalya evden eve nakliyat</Link> desteği ile süreç daha düzenli başlar. Sonuç olarak profesyonel yaklaşım, sadece taşıma değil; planlama, güvenlik ve müşteri konforu açısından da ciddi avantaj sağlar.</p><p className="mt-4"><Link href="/antalya-sehirlerarasi-nakliyat" className="text-brand-yellow hover:underline">Antalya şehirlerarası nakliyat ana sayfasına dön</Link></p></div></div></section>
      <FAQ faqs={faqs} schemaId="faq-antalya-istanbul-nakliyat" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <section className="py-12 bg-brand-black text-white border-t border-white/10"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Antalya İstanbul Nakliyat İçin Hemen Fiyat Alın</h2><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a><a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp&apos;tan Yaz</Button></a></div></div></section>
      <Footer />
    </main>
  );
}
