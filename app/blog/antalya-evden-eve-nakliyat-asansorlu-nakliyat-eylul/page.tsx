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
  title: "Eylülde Evden Eve Nakliyat mı Asansörlü Nakliyat mı Seçmeli?",
  description:
    "Antalya evden eve nakliyat ve Antalya asansörlü nakliyat arasındaki fark ne, eylülde hangisini seçmelisiniz? Kat sayısına göre pratik karar rehberi.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-evden-eve-nakliyat-asansorlu-nakliyat-eylul",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Eylülde Evden Eve Nakliyat mı Asansörlü Nakliyat mı Seçmeli?",
  datePublished: "2026-09-09",
  dateModified: "2026-09-09",
};

const sections = [
  {
    title: "Evden Eve Nakliyat Ne Zaman Yeterli Oluyor?",
    text: "Alçak katlı bir binadaysanız ya da bina asansörünüz geniş mobilyaları rahatça taşıyabiliyorsa, standart Antalya evden eve nakliyat hizmeti çoğu zaman yeterli oluyor. Ekip eşyalarınızı paketliyor, bina asansörünü veya merdiveni kullanarak indiriyor, yeni adreste tekrar yerleştiriyor. Konyaaltı ve Muratpaşa'daki 4-5 katlı sitelerin çoğunda bu yöntem sorunsuz işliyor.",
  },
  {
    title: "Asansörlü Nakliyat Ne Zaman Devreye Giriyor?",
    text: "8. kat ve üzerinde oturuyorsanız, bina asansörü dar geliyorsa ya da merdivenden büyük bir koltuk takımını indirmek fiziksel olarak mümkün değilse, asansörlü nakliyat çözümü devreye giriyor. Mobil asansör bina dış cephesine kuruluyor ve eşyalar merdiven ya da bina asansörü hiç kullanılmadan doğrudan taşınıyor. Lara ve Konyaaltı'ndaki yüksek katlı rezidanslarda bu yöntemi sık sık öneriyoruz.",
  },
  {
    title: "Eylülde Talep İkisinde de Neden Artıyor?",
    text: "",
  },
  {
    title: "Fiyat Farkı Var mı?",
    text: "Asansörlü nakliyat, ek ekipman ve kurulum gerektirdiği için standart taşımaya göre biraz daha maliyetli olabiliyor. Ama bu fark çoğu zaman kendini amorti ediyor: süreç daha hızlı ilerliyor, merdiven ve asansör hasarı riski ortadan kalkıyor, ekip daha az yoruluyor. Kesin fiyat farkını görmek için ikisi için de ücretsiz keşif talep etmenizi öneririz.",
  },
  {
    title: "Hangisini Seçmelisiniz?",
    text: "Basit bir kural işe yarıyor: bina asansörünüz eşyalarınızı taşımaya yetiyorsa ve kat düşükse standart hizmet yeterli. Yetmiyorsa, dar merdiven varsa ya da site yönetimi asansörlü çözüm istiyorsa asansörlü nakliyata geçmek daha mantıklı. Emin değilseniz, keşif sırasında ekibimiz binanızı görüp size doğru seçeneği önerebiliyor.",
  },
  {
    title: "Eylülde Randevu Alırken Nelere Dikkat Etmeli?",
    text: "Hangi hizmete ihtiyacınız olduğuna karar verdikten sonra randevunuzu mümkün olduğunca erken almanızı öneririz, çünkü eylülde her iki hizmette de takvim hızlı doluyor. Site yönetimli binalarda asansör ve park izinlerini de taşınma gününden önce netleştirmeniz süreci hızlandırıyor.",
  },
];

const faqs = [
  {
    question: "Antalya evden eve nakliyat ile asansörlü nakliyat arasındaki fark nedir?",
    answer:
      "Evden eve nakliyat bina asansörünü veya merdiveni kullanır, asansörlü nakliyat ise mobil asansörle eşyaları bina dışından taşır.",
  },
  {
    question: "Kaçıncı kattan itibaren asansörlü nakliyat gerekir?",
    answer:
      "Kesin bir kural yok ama genellikle 8. kat ve üzerinde, dar merdivenli binalarda asansörlü nakliyat tercih ediliyor.",
  },
  {
    question: "Asansörlü nakliyat daha mı pahalı?",
    answer:
      "Standart taşımaya göre biraz daha maliyetli olabilir, ancak hız ve hasar riskinin azalması bu farkı dengeliyor.",
  },
  {
    question: "Hangi hizmete ihtiyacım olduğunu nasıl anlarım?",
    answer:
      "Emin değilseniz ücretsiz keşif talep edebilirsiniz, ekibimiz binanızı görüp size uygun seçeneği önerir.",
  },
  {
    question: "Eylülde randevu almak için ne kadar önceden aramalıyım?",
    answer:
      "Talep arttığı için en az 1-2 hafta önceden randevu almanızı öneririz.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-evden-eve-asansorlu-eylul"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eylülde Evden Eve Nakliyat mı Asansörlü Nakliyat mı Seçmeli?</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 9 Eylül 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Eylülde taşınma talebi artınca bize en çok sorulan sorulardan biri şu oluyor: standart{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              Antalya evden eve nakliyat
            </Link>{" "}
            mi yeterli, yoksa{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
              Antalya asansörlü nakliyat
            </Link>{" "}
            mı gerekiyor? Bu yazıda ikisi arasındaki farkı ve hangi durumda hangisini seçmeniz gerektiğini anlatıyoruz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {sections.slice(0, 2).map((section) => (
            <div key={section.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-300">{section.text}</p>
            </div>
          ))}

          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">{sections[2].title}</h2>
            <p className="text-gray-300">
              Sezon sonu, okul dönemi ve kira sözleşmesi yenilemeleri eylülde üst üste biniyor; bu konuyu daha detaylı işlediğimiz{" "}
              <Link className="text-brand-yellow hover:underline" href="/blog/antalya-evden-eve-nakliyat-eylul">
                eylül yazımıza
              </Link>{" "}
              göz atabilirsiniz. Talep arttığı için hem evden eve nakliyat hem asansörlü nakliyat randevularında yoğunluk yaşanabiliyor, bu yüzden hangi hizmete ihtiyacınız olduğunu önceden netleştirmeniz randevu almanızı hızlandırıyor.
            </p>
          </div>

          {sections.slice(3).map((section) => (
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
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz? Hemen arayın, ücretsiz keşif ile birlikte netleştirelim.
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

      <FAQ faqs={faqs} schemaId="faq-blog-evden-eve-asansorlu-eylul" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
