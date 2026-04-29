import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle } from "lucide-react";

const faqs = [
  { question: "Muratpaşa nakliyat fiyatları ne kadar?", answer: "Fiyat; kat sayısı, eşya miktarı, mesafe ve asansör kurulum ihtiyacına göre belirlenir." },
  { question: "Dar merdivenli binalarda taşıma nasıl yapılır?", answer: "Muratpaşa’daki dar merdivenli ve eski binalarda mobil asansör ile dış cepheden güvenli taşıma yapılır." },
  { question: "Aynı gün hizmet var mı?", answer: "Yoğunluk durumuna göre Muratpaşa için aynı gün keşif ve ekip planlaması yapılabilir." },
  { question: "Eşyalar sigortalı mı?", answer: "Uygun operasyonlarda sigortalı taşıma desteği sunularak eşyaların güvenliği artırılır." },
];

export const metadata: Metadata = {
  title: "Muratpaşa Asansörlü Nakliyat | Antalya Nakliyat Hizmeti",
  description: "Muratpaşa’da asansörlü nakliyat ve mobil asansör kiralama hizmeti ile hızlı ve güvenli taşıma çözümleri sunuyoruz.",
  alternates: {
    canonical: "https://www.azerasansor.com/muratpasa-asansorlu-nakliyat",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Muratpaşa Asansörlü Nakliyat Hizmeti</h1>
            <p className="text-brand-yellow font-semibold mb-3">Hızlı ve Güvenli Taşıma Çözümleri</p>
            <p className="text-gray-200 text-lg mb-6">Muratpaşa’da dar merdivenli ve eski binalarda asansörlü nakliyat en güvenli çözümdür. Eşyalarınızı yüksek katlara merdiven kullanmadan hızlı ve kontrollü şekilde taşıyoruz.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200 mb-6"><li>✓ 22. kata kadar ulaşım</li><li>✓ 15-20 dakikada kurulum</li><li>✓ Sigortalı taşıma</li><li>✓ Aynı gün hizmet</li></ul>
            <div className="flex flex-col sm:flex-row gap-4"><a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a><a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Button></a></div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-brand-black text-white"><div className="container mx-auto px-4 max-w-6xl space-y-6">
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Muratpaşa&apos;da Asansörlü Nakliyat Neden Tercih Edilir?</h2><p className="text-gray-300">Bölgedeki eski apartmanlarda dar merdiven ve küçük bina asansörü nedeniyle klasik taşıma risklidir. Asansörlü yöntem daha güvenli ve daha az hasarlı bir süreç sunar.</p></div>
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Hangi Hizmetleri Sunuyoruz?</h2><p className="text-gray-300"><Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">Antalya evden eve nakliyat</Link>, <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">Antalya mobil asansör kiralama</Link> ve ofis taşıma hizmetlerini Muratpaşa için planlıyoruz. Ayrıca <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">Antalya asansörlü nakliyat</Link> çözümlerimizle yüksek kat taşımasını kolaylaştırıyoruz.</p></div>
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Fiyatlar Neye Göre Belirlenir?</h2><p className="text-gray-300">Kat sayısı, eşya miktarı, mesafe ve asansör kurulumu fiyatlandırmada belirleyicidir. Ücretsiz keşif ile net fiyat alın.</p></div>
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-3xl font-bold mb-4">Muratpaşa&apos;da Lokal Taşıma Dinamikleri</h2><p className="text-gray-300 leading-relaxed">Muratpaşa, Antalya’nın en yoğun yerleşim bölgelerinden biri olduğu için taşıma planlamasında bina tipi ve sokak erişimi kritik rol oynar. Eski yapı stoğu fazla olan mahallelerde merdiven boşlukları dardır ve büyük mobilyaların bina içinden taşınması zaman kaybına neden olur. Bu noktada asansörlü nakliyat, operasyonu hem hızlandırır hem de bina içi hasar riskini azaltır. Özellikle yüksek katlı dairelerde bu yöntem, taşıma ekibinin iş yükünü dengeler ve eşyaların daha kontrollü hareket etmesini sağlar. Eşya yoğunluğu fazla aile taşınmalarında süreç adım adım planlandığında teslim süresi daha öngörülebilir olur. Muratpaşa’da yerel trafik, park alanı ve kurulum noktası gibi detaylar önceden değerlendirildiğinde aynı gün daha verimli taşıma yapılabilir.</p><p className="mt-4 text-gray-300 font-medium">Hemen arayın, aynı gün keşif ve net fiyat alın.</p><p className="mt-4"><Link href="/antalya-hizmet-bolgeleri" className="text-brand-yellow hover:underline">Antalya hizmet bölgeleri sayfasına dön</Link></p></div>
      </div></section>
      <FAQ faqs={faqs} schemaId="faq-muratpasa-asansorlu-nakliyat" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <section className="py-12 bg-brand-black text-white border-t border-white/10"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Muratpaşa&apos;da Nakliyat İçin Hemen Fiyat Alın</h2><p className="text-gray-300 mb-6">Hemen arayın, aynı gün keşif ve net fiyat alın.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="tel:+905424669631"><Button variant="primary"><Phone className="w-5 h-5 mr-2" />Hemen Ara</Button></a><a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Button></a></div></div></section>
      <Footer />
    </main>
  );
}
