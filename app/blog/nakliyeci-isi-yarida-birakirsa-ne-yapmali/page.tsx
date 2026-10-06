import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nakliyeci İşi Yarıda Bırakırsa Ne Yapmalı?",
  description:
    "Nakliyeci taşınma günü işi yarıda bırakır ya da fiyatı artırırsa ne yapmalısınız? Taşınmadan önce alınacak önlemler ve adım adım çözüm.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/nakliyeci-isi-yarida-birakirsa-ne-yapmali",
  },
  openGraph: {
    url: "https://www.azerasansor.com/blog/nakliyeci-isi-yarida-birakirsa-ne-yapmali",
    title: "Nakliyeci İşi Yarıda Bırakırsa Ne Yapmalı? | Azer Asansör",
    description:
      "Nakliyeci taşınma günü işi yarıda bırakır ya da fiyatı artırırsa ne yapmalısınız? Taşınmadan önce alınacak önlemler ve adım adım çözüm.",
    siteName: "Azer Asansör",
    locale: "tr_TR",
    type: "article",
    images: [
      {
        url: "https://www.azerasansor.com/images/hero-real.jpg",
        width: 1200,
        height: 630,
        alt: "Azer Asansör - Antalya Kiralık Asansör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakliyeci İşi Yarıda Bırakırsa Ne Yapmalı? | Azer Asansör",
    description:
      "Nakliyeci taşınma günü işi yarıda bırakır ya da fiyatı artırırsa ne yapmalısınız? Taşınmadan önce alınacak önlemler ve adım adım çözüm.",
    images: ["https://www.azerasansor.com/images/hero-real.jpg"],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Nakliyeci İşi Yarıda Bırakırsa veya Taşınma Günü Fiyatı Artırırsa Ne Yapmalısınız?",
  description:
    "Nakliyeci taşınma günü işi yarıda bırakır ya da fiyatı artırırsa ne yapmalısınız? Taşınmadan önce alınacak önlemler ve adım adım çözüm.",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: {
    "@type": "Organization",
    name: "Azer Asansör",
    url: "https://www.azerasansor.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Azer Asansör",
    url: "https://www.azerasansor.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.azerasansor.com/blog/nakliyeci-isi-yarida-birakirsa-ne-yapmali",
  },
  image: "https://www.azerasansor.com/images/hero-real.jpg",
};

const measures = [
  {
    title: "Keşif yaptırın",
    text: "Eşyaları ve binayı görmeden verilen fiyat, taşınma günü değişmeye açıktır.",
  },
  {
    title: "Fiyatı ve kapsamı yazılı alın",
    text: "Paketlemenin, asansörün ve mobilya sökme-montajın fiyata dahil olup olmadığını netleştirin.",
  },
  {
    title: "Yetki belgesini sorun",
    text: "Evden eve nakliyat için gerekli yetki belgesi K3'tür. Sürücülerin SRC belgesi de taşımacılıkta aranan bir yeterlilik belgesidir.",
  },
  {
    title: "Firmayı araştırın",
    text: "Gerçek adresi, yorumları ve geçmiş şikayetleri kontrol edin.",
  },
  {
    title: "Kimin geleceğini sorun",
    text: "Kendi ekipi ve aracıyla mı çalışıyor, işi başka bir ekibe mi devrediyor?",
  },
  {
    title: "Asansör gerekiyorsa teyit edin",
    text: "Asansörlü aracın taşıma günü gerçekten geleceğini önceden doğrulayın.",
  },
  {
    title: "Yazılı onay alın",
    text: "Tarih, saat ve adresleri mesaj veya sözleşmeyle kayda geçirin.",
  },
];

const onDayActions = [
  "Sakin kalın, tartışmayı büyütmeyin.",
  "Yazılı teklifi ve konuşmaları (mesaj, arama kaydı) saklayın.",
  "Durumu fotoğraf veya videoyla kaydedin.",
  "Anlaşılan bedeli aşan bir ödeme yapmayın; iş tamamlanmadan ödemeyi bitirmeyin.",
  "Eşyaları teslim alırken tek tek kontrol edin. Hasar varsa teslim sırasında fotoğraflayın ve firmaya yazılı bildirin.",
  "Eşyalar yarıda kaldıysa, hangi eşyanın nerede olduğunu listeleyip yazılı kayda geçirin.",
];

const faqs = [
  {
    question: "Nakliyeci taşınma günü fiyatı artırabilir mi?",
    answer:
      "Anlaşılan fiyat yazılıysa tek taraflı artırılamaz. Eşya miktarı gerçekten değiştiyse bu, taşınmadan önce konuşulmalıdır.",
  },
  {
    question: "Nakliyeci işi yarıda bırakırsa ne yapmalıyım?",
    answer:
      "Yazışmaları ve kayıtları saklayın, durumu fotoğraflayın, iş tamamlanmadan ödemeyi bitirmeyin.",
  },
  {
    question: "Eşyam zarar görürse ne yapmalıyım?",
    answer:
      "Teslim sırasında fotoğraflayın ve firmaya yazılı bildirin.",
  },
  {
    question: "Keşif neden önemli?",
    answer:
      "Fiyat ve kapsam eşyalar görülerek belirlenir, taşınma günü sürpriz çıkma riski azalır.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nakliyeci İşi Yarıda Bırakırsa veya Taşınma Günü Fiyatı Artırırsa Ne Yapmalısınız?</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 6 Ekim 2026</p>
          <div className="bg-gray-900 border-l-4 border-brand-yellow rounded p-4 mb-6">
            <p className="text-gray-300">
              Nakliyeci taşınma günü işi yarıda bırakırsa ya da anlaşılan fiyatı artırırsa önce sakin kalın, yazılı teklifi ve konuşmaları saklayın, durumu fotoğraf ve videoyla kaydedin ve iş tamamlanmadan ödemeyi bitirmeyin. En iyi çözüm, taşınmadan önce keşif yaptırmak, fiyatı yazılı almak ve firmanın yetki belgelerini sormaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bu sorunlar neden yaşanıyor?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Taşınma sektöründe en sık duyulan şikayetler benzer: taşınma günü değişen fiyat, eksik paketleme, söz verilen aracın gelmemesi ve işin yarıda kalması. Çoğu zaman sebep, eşyalar görülmeden verilen telefon fiyatı, yazılı olmayan anlaşma ve ekibin kim olduğunun belli olmamasıdır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Taşınmadan önce 7 önlem</h2>
          <div className="space-y-4">
            {measures.map((measure, index) => (
              <div key={index} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="font-bold">{measure.title}.</span> {measure.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Taşınma günü sorun çıkarsa</h2>
          <div className="space-y-3 text-gray-300 text-lg pl-4">
            {onDayActions.map((action, index) => (
              <p key={index} className="leading-relaxed">
                {index + 1}. {action}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Biz nasıl çalışıyoruz?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Azer Asansör 2011'den beri Antalya'da çalışıyor. K3 yetki belgemiz var ve SRC belgeli sürücülerimizle çalışıyoruz. Kendi asansör ve araç filomuzla, taşeron kullanmadan hizmet veriyoruz. Önce ücretsiz keşif yapılır ve net fiyat verilir. Paketleme fiyata dahildir, taşımalarımız sigortalıdır ve telefonumuz 7/24 açıktır.
            </p>
            <p className="text-gray-300 text-lg">
              <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
                Antalya evden eve nakliyat
              </Link>{" "}
              ve{" "}
              <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
                Antalya asansörlü nakliyat
              </Link>{" "}
              konusunda sorular varsa hemen arayın.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">
            Yazılı fiyat, keşif ve K3 yetki belgesiyle çalışan bir ekip arıyorsanız hemen arayın veya WhatsApp&apos;tan yazın.
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

      <FAQ faqs={faqs} schemaId="faq-nakliyeci-isi-yarida-birakirsa" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
