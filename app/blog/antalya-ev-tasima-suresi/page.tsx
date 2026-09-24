import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Antalya'da Ev Taşıma Ne Kadar Sürer? 1+1'den 4+1'e Rehber",
  description:
    "Antalya'da ev taşıma süresi daire tipine göre 3-14 saat değişir. 1+1, 2+1, 3+1, 4+1 için gerçek süre hesabı ve ilçe bazlı ipuçları.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-ev-tasima-suresi",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Antalya'da Ev Taşıma Ne Kadar Sürer? 1+1'den 4+1'e Gerçek Süre Hesabı",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
};

const durations = [
  { type: "1+1 daire", range: "3–5 saat" },
  { type: "2+1 daire", range: "4–7 saat" },
  { type: "3+1 daire", range: "6–10 saat" },
  { type: "4+1 daire", range: "8–14 saat" },
];

const sections = [
  {
    title: "Taşıma Süresini Uzatan Faktörler",
    text: "Yukarıdaki saat aralıkları ortalama koşullar içindir; gerçek süre birkaç değişkene göre kısalır veya uzar. Kat sayısı ve bina asansörünün eşyaları taşımaya uygun olup olmaması en büyük etkendir. Eski merdiven boşlukları, dar koridorlar ve site yönetiminin araç giriş saatlerine koyduğu kısıtlamalar da toplam süreyi doğrudan etkiler. Eşya yoğunluğu, özellikle çok sayıda kutu ve büyük mobilya olan evlerde yükleme-boşaltma aşamasını uzatan bir diğer faktördür.",
  },
  {
    title: "Asansörlü Taşıma Süreyi Nasıl Kısaltır?",
    text: "8. kat ve üzerindeki dairelerde veya dar merdivenli binalarda mobil asansör kullanımı, yükleme ve boşaltma süresini yarı yarıya kısaltabilir. Kurulum yaklaşık 15-20 dakika sürer; ardından eşyalar bina asansörü hiç kullanılmadan doğrudan indirilip araca yüklenir. Bu yöntem hem süreyi kısaltır hem de merdiven ve asansör hasarı riskini ortadan kaldırır.",
  },
  {
    title: "İlçe Bazlı Süre İpuçları",
    text: "",
  },
  {
    title: "Süreyi Kısaltmak İçin Pratik Öneriler",
    text: "Eşyaları taşınmadan önce kutulamak, kırılacak ürünleri ayrı paketlemek ve keşif sırasında ekibe net bilgi vermek toplam süreyi belirgin şekilde kısaltır. Yeni adreste otopark ve asansör erişiminin önceden ayarlanmış olması da boşaltma aşamasını hızlandırır. Sabah erken saatlerde başlayan taşınmalar, öğleden sonra artan trafik ve sıcaklık nedeniyle genellikle daha hızlı tamamlanır.",
  },
];

const faqs = [
  {
    question: "Antalya'da 2+1 bir daire taşıma ortalama kaç saat sürer?",
    answer:
      "2+1 standart bir daire için keşiften yerleştirmeye kadar toplam süre genellikle 4-7 saat arasında değişir. Kat sayısı, bina erişimi ve eşya miktarı bu süreyi doğrudan etkiler.",
  },
  {
    question: "Taşınma için günün hangi saati en uygun?",
    answer:
      "Sabah erken saatler, trafik ve sıcaklığın daha az olması nedeniyle genellikle daha hızlı ve verimli sonuç verir. Özellikle yaz aylarında öğle sıcağından önce başlamak süreci kolaylaştırır.",
  },
  {
    question: "Asansörlü nakliyat gerçekten süreyi kısaltıyor mu?",
    answer:
      "Evet, özellikle 8. kat ve üzerindeki dairelerde mobil asansör kullanımı yükleme-boşaltma süresini yarı yarıya kısaltabilir; bina asansörü veya merdiven hiç kullanılmadan doğrudan taşıma yapılır.",
  },
  {
    question: "Paketlemeyi kendim yaparsam süre kısalır mı?",
    answer:
      "Kısmen evet; önceden kutulanmış ve etiketlenmiş eşyalar yükleme süresini kısaltır. Ancak profesyonel paketleme, hasar riskini azalttığı için genellikle daha güvenli bir seçenektir.",
  },
  {
    question: "Yaz aylarında taşınmak neden daha uzun sürüyor?",
    answer:
      "Yaz aylarında taşınma talebi arttığı için ekip ve araç yoğunluğu yükselir, ayrıca yüksek sıcaklık ekiplerin çalışma hızını etkileyebilir. Bu dönemde randevuyu erken almak süreci hızlandırır.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-ev-tasima-suresi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Antalya&apos;da Ev Taşıma Ne Kadar Sürer? 1+1&apos;den 4+1&apos;e Gerçek Süre Hesabı
          </h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 17 Eylül 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya&apos;da{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              Antalya evden eve nakliyat
            </Link>{" "}
            sürecinin ne kadar süreceği, daire büyüklüğüne, kat durumuna ve mesafeye göre değişir. Bu yazıda daire tipine göre gerçekçi süre tahminlerini ve süreyi etkileyen faktörleri bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-5">Antalya Ev Taşıma Süresi: Daire Tipine Göre Gerçekçi Tahmin</h2>
            <div className="space-y-2">
              {durations.map((item) => (
                <div key={item.type} className="flex items-center justify-between bg-[#111827] border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-white font-semibold">{item.type}</span>
                  <span className="text-brand-yellow font-semibold">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-5">
              Bu süreler keşiften yerleştirmeye kadar geçen toplam süreyi kapsar. Kat sayısı, asansör ihtiyacı ve mesafe gibi faktörler bu tahminleri değiştirebilir.
            </p>
          </div>

          {sections.slice(0, 2).map((section) => (
            <div key={section.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-300">{section.text}</p>
            </div>
          ))}

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">{sections[2].title}</h2>
            <p className="text-gray-300">
              Muratpaşa ve Kepez&apos;in dar sokaklı ve yoğun apartmanlı bölgelerinde araç park etme ve bina önü erişimi süreyi uzatabilir; erken saat planlaması burada fark yaratır. Lara ve Konyaaltı&apos;ndaki yüksek katlı rezidanslarda mobil asansör kullanımı standart hale gelmiştir ve toplam süreyi öngörülebilir kılar. Aksu ve Döşemealtı&apos;nda ise mesafe ve geniş yerleşim alanları, şehir içi nakliyeye kıyasla ekstra yol süresi ekler.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">{sections[3].title}</h2>
            <p className="text-gray-300">{sections[3].text}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">
            Daire büyüklüğünüze göre net bir süre ve fiyat tahmini için hemen arayın, ücretsiz keşif ile netleştirelim.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a data-cta-location="blog_cta" href="tel:+905424669631">
              <Button variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a data-cta-location="blog_cta" href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Yaz
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-brand-black py-10 md:py-16 px-4 border-t border-gray-800"
        aria-label="Ücretsiz fiyat teklifi formu"
      >
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <FAQ faqs={faqs} schemaId="faq-blog-ev-tasima-suresi" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
