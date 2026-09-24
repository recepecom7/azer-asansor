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
  title: "Eylülde Antalya Evden Eve Nakliyat: Avantajlar ve İpuçları",
  description:
    "Eylülde Antalya evden eve nakliyat yaparken sezon sonu avantajları, okul dönemi ve serin hava koşullarına göre pratik bilgiler burada.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-evden-eve-nakliyat-eylul",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Eylülde Antalya Evden Eve Nakliyat: Avantajlar ve İpuçları",
  datePublished: "2026-09-09",
  dateModified: "2026-09-09",
};

const sections = [
  {
    title: "Yaz Bitince Ekiplerde Nefes Alma Payı Oluyor",
    text: "Haziran-Ağustos arası bizim için oldukça yoğun geçiyor açıkçası — sezonluk kiralamalar, tatilcilerin taşınmaları, yaz aylarında ev değiştirenler derken takvim hızla doluyor. Bazı hafta sonları neredeyse bir ay önceden dolmuş oluyor. Eylülle birlikte bu tempo düşüyor, ekip ve araç bulmak eskisi kadar zor olmuyor. Bu da size esnek tarih seçebilme ve daha rahat bir planlama yapabilme şansı veriyor.",
  },
  {
    title: "Serinleyen Hava İşin Kalitesini de Etkiliyor",
    text: "Temmuz-Ağustos sıcağında taşıma yapmak hem ekip için yorucu hem de eşyalar için riskli olabiliyor — özellikle uzun süre araçta bekleyen mobilyalar veya elektronik eşyalar aşırı sıcaktan etkilenebiliyor. Eylülde hava yumuşamaya başlayınca hem işler daha hızlı ilerliyor hem de eşyalarınız için daha güvenli bir taşıma ortamı oluşuyor.",
  },
  {
    title: "Okul Öncesi Yerleşme Telaşı",
    text: "Çocuklu ailelerin çoğu okul açılmadan yeni evine yerleşmiş olmak istiyor, bu gayet anlaşılır bir öncelik. Eşyalar yerine oturduğunda çocuğun ders düzenine geçmesi de kolaylaşıyor. Konyaaltı, Muratpaşa ve Kepez gibi aile yoğunluğu yüksek bölgelerde eylül ayında bu yüzden talep gözle görülür şekilde artıyor.",
  },
  {
    title: "Kira Sözleşmeleri de Genelde Bu Döneme Denk Geliyor",
    text: "Antalya'da kira sözleşmelerinin çoğu yıllık yenileniyor ve bunların bir kısmı eylül ayına denk geliyor. Kirası artan ya da farklı bir eve geçmek isteyen kiracılar için bu dönem doğal bir fırsat penceresi. Sözleşme bitişine yakın taşınacaksanız randevunuzu son haftaya bırakmamanızı öneririz — hem uygun tarih bulmak zorlaşıyor hem de pazarlık payınız daralıyor.",
  },
  {
    title: "Eylülde Taşınırken Aklınızda Bulunsun",
    text: "Randevuyu erken alın, özellikle okul açılış haftasına denk gelen günlerde trafik yoğunlaşabiliyor, bu yüzden sabah erken saatleri tercih etmenizi öneririz. Değerli eşyalarınızı kendi yanınızda taşıyın, adres güncellemelerini önceden yapın. Site yönetimli binalarda asansör ve park izinlerini taşınma gününden en az bir gün önce halletmeniz de işleri hızlandırıyor.",
  },
  {
    title: "Fiyatı Ne Belirliyor?",
    text: "Eylül sezon sonu olsa da fiyatlar sabit değil — eşya miktarı, kat sayısı, mesafe ve asansör ihtiyacı hâlâ belirleyici. Okul dönemi yoğunluğu bazı tarihlerde talebi yukarı çekebiliyor, o yüzden tarihinizi netleştirir netleştirmez keşif talep etmenizi öneriyoruz. Böylece hem uygun bir tarih yakalarsınız hem de net bir bütçeyle ilerlersiniz.",
  },
];

const faqs = [
  {
    question: "Eylülde Antalya evden eve nakliyat fiyatları değişir mi?",
    answer:
      "Genelde yaz sezonuna göre daha uygun ve daha esnek oluyor. Kesin rakam için ücretsiz keşif almanızı öneririz.",
  },
  {
    question: "Okul döneminden önce ne zaman taşınmalıyım?",
    answer:
      "Okul açılışından en az 1-2 hafta önce randevu almanız, son dakika telaşı yaşamamanızı sağlar.",
  },
  {
    question: "Eylülde hangi bölgelerde talep daha yoğun?",
    answer:
      "Konyaaltı, Muratpaşa ve Kepez gibi aile yoğunluğu yüksek bölgelerde talep belirgin şekilde artıyor.",
  },
  {
    question: "Yüksek katlı binada eylülde taşınmak zor mu?",
    answer:
      "Hayır, asansörlü nakliyat sayesinde merdiven kullanmadan hızlıca taşınabiliyorsunuz.",
  },
  {
    question: "Randevuyu ne kadar önceden almalıyım?",
    answer:
      "Kira yenileme ve okul dönemi çakıştığı için en az 1-2 hafta öncesinden almanızı öneririz.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-evden-eve-nakliyat-eylul"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eylülde Antalya Evden Eve Nakliyat: Avantajlar ve İpuçları</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 9 Eylül 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya&apos;da yılın en çok taşınma talebi aldığımız dönemlerden biri eylül ayıdır ve bunun tesadüf olmadığını düşünüyoruz. Yaz sezonunun bitmesiyle şehir biraz nefes alıyor, hava artık taşıma ekibini bunaltmıyor, üstelik okulların açılması da birçok aileyi eylül sonuna kadar yerleşmiş olmaya itiyor. Bu yazıda{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              Antalya evden eve nakliyat
            </Link>{" "}
            işini eylülde yaptırmanın neden mantıklı olduğunu ve nelere dikkat etmeniz gerektiğini anlatıyoruz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {sections.slice(0, 4).map((section) => (
            <div key={section.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-300">{section.text}</p>
            </div>
          ))}

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Yüksek Katta Oturuyorsanız Asansörlü Çözüm İşinizi Kolaylaştırır</h2>
            <p className="text-gray-300">
              Eylülde talep artsa da yüksek katlı binalarda süreç yine hızlı ilerleyebiliyor.{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
                Asansörlü nakliyat
              </Link>{" "}
              yöntemiyle eşyalar merdiven kullanılmadan bina dışından taşınıyor, bu da hem zamandan kazandırıyor hem hasar riskini azaltıyor. Özellikle 8. kat ve üzerinde oturanlara bu yöntemi öneriyoruz. Taşınmadan önce{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-tasinma-hazirlik-rehberi">
                hazırlık rehberimize
              </Link>{" "}
              göz atmanız da işinizi kolaylaştırır.
            </p>
          </div>

          {sections.slice(4).map((section) => (
            <div key={section.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-300">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">
            Eylül planınızı netleştirdiyseniz hemen arayın, ücretsiz keşif ile net fiyat alalım.
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

      <FAQ faqs={faqs} schemaId="faq-blog-evden-eve-nakliyat-eylul" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
