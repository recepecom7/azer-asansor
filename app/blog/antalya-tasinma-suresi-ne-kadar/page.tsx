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
  title: "Taşınma Günü Ne Kadar Sürer? Antalya'da Ev Taşıma Süreci",
  description:
    "Antalya'da ev taşıma süreci keşiften teslimata kaç saat sürer? Adım adım süre tahminleri ve ev büyüklüğüne göre değişimi.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-tasinma-suresi-ne-kadar",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Taşınma Günü Ne Kadar Sürer? Antalya'da Ev Taşıma Süreci",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
};

const stages = [
  {
    title: "1. Keşif ve Planlama (1-2 gün önceden)",
    text: "Taşınma günü öncesinde yapılan keşifte eşya hacmi, kat durumu ve asansör ihtiyacı belirlenir. Bu aşama taşınma gününün kendisini kapsamaz ancak sürecin ne kadar süreceğini doğrudan etkiler. Keşif sırasında verilen net bilgiler, taşınma günü ekip ve araç planlamasının doğru yapılmasını sağlar.",
  },
  {
    title: "2. Paketleme (1-4 saat)",
    text: "1+1 bir dairenin paketlenmesi ortalama 1-2 saat sürerken, 3+1 ve üzeri evlerde bu süre 3-4 saate çıkabilir. Önceden kutulanmış eşyalar bu süreyi ciddi oranda kısaltır. Paketleme hizmeti nakliyat firmasından talep edilirse, profesyonel ekip bu süreyi kendi deneyimiyle daha da hızlandırabilir.",
  },
  {
    title: "3. Yükleme (1-3 saat)",
    text: "Eşyaların araca yüklenmesi, kat sayısına ve bina erişimine göre değişir. Zemin katta 1 saat sürebilecek bir yükleme, asansörsüz üst katlarda 2-3 saate uzayabilir. Dar merdiven ve koridorlar da yükleme süresini uzatan önemli bir etkendir.",
  },
  {
    title: "4. Mobil Asansörle Taşıma (30 dk - 2 saat)",
    text: "Yüksek katlı binalarda kullanılan mobil asansör kurulumu ortalama 20-30 dakika sürer. Kurulum sonrası eşyaların indirilmesi kat sayısına bağlı olarak 1-2 saat arasında tamamlanır ve merdiven kullanımına göre çok daha hızlıdır. Özellikle 8. kat ve üzeri dairelerde bu yöntem toplam süreyi saatlerce kısaltabilir.",
  },
  {
    title: "5. Nakliye (Mesafeye göre değişir)",
    text: "Antalya şehir içi taşımalarda araç yolculuğu genellikle 30-60 dakika sürer. Şehirlerarası taşımalarda bu süre mesafeye göre birkaç saate kadar uzayabilir. Trafik yoğunluğu ve güzergah seçimi de nakliye süresini etkileyen değişkenler arasındadır.",
  },
  {
    title: "6. Boşaltma (1-3 saat)",
    text: "Yeni adreste eşyaların indirilmesi, yükleme sürecine benzer şekilde kat durumuna göre 1-3 saat arasında tamamlanır. Asansörlü taşımada bu süre önemli ölçüde kısalır. Yeni adreste otopark ve asansör erişiminin önceden ayarlanmış olması boşaltma süresini de doğrudan kısaltır.",
  },
  {
    title: "7. Yerleştirme (1-2 saat)",
    text: "Mobilyaların montajı ve eşyaların odalara yerleştirilmesi ortalama 1-2 saat sürer. Bu aşamanın süresi, talep edilen ek hizmetlere (montaj, düzenleme) göre değişebilir. Kutuların önceden oda etiketleriyle işaretlenmiş olması, yerleştirme sürecini belirgin şekilde hızlandırır.",
  },
];

const summary =
  "Görüldüğü gibi bir ev taşıma sürecinin toplam süresi tek bir sabit rakamla ifade edilemez; ev büyüklüğü, kat sayısı, mesafe ve seçilen hizmetler bu süreyi doğrudan şekillendirir. Doğru planlama ve deneyimli bir ekiple çalışmak, sürecin hem daha kısa hem de daha güvenli tamamlanmasını sağlar.";

const faqs = [
  {
    question: "Ortalama bir ev taşıma süreci toplam kaç saat sürer?",
    answer:
      "2+1 standart bir daire için keşiften yerleştirmeye kadar toplam süre genellikle 4-8 saat arasında değişir. Eşya miktarı, kat durumu ve mesafe bu süreyi doğrudan etkileyen ana faktörlerdir.",
  },
  {
    question: "Asansörlü taşıma süreyi ne kadar kısaltır?",
    answer:
      "Yüksek katlı binalarda mobil asansör kullanımı, merdivenle taşımaya kıyasla yükleme ve boşaltma süresini yaklaşık yarı yarıya kısaltabilir. Özellikle 8. kat ve üzerindeki dairelerde bu fark çok daha belirgin hale gelir.",
  },
  {
    question: "Büyük evler ne kadar sürede taşınır?",
    answer:
      "4+1 ve üzeri geniş evlerde toplam süreç, ek ekip ve araç desteğiyle birlikte 8-10 saate kadar çıkabilir. Bu tür taşımalarda genellikle birden fazla araç ve daha kalabalık bir ekip görevlendirilir.",
  },
  {
    question: "Taşınma süresini kısaltmak için ne yapabilirim?",
    answer:
      "Eşyaları önceden kutulamak, kırılacakları ayırmak ve keşif sırasında net bilgi vermek, taşınma gününün daha hızlı tamamlanmasını sağlar. Otopark ve asansör erişiminin önceden ayarlanmış olması da süreci belirgin şekilde hızlandırır.",
  },
  {
    question: "Hafta sonu taşınmalarda süre değişir mi?",
    answer:
      "Hafta sonu taşınmalarda trafik genellikle daha az olduğu için nakliye süresi kısalabilir, ancak bazı bina yönetimlerinin belirlediği saat kısıtlamaları toplam süreci etkileyebilir.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-tasinma-suresi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Taşınma Günü Ne Kadar Sürer? Antalya&apos;da Ev Taşıma Süreci</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 25 Temmuz 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Antalya&apos;da{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              evden eve nakliyat
            </Link>{" "}
            sürecinin ne kadar süreceği, ev büyüklüğü, kat durumu ve mesafeye göre değişir. Keşiften teslimata kadar tüm adımları ve yaklaşık sürelerini bu yazıda bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {stages.map((stage) => (
            <div key={stage.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{stage.title}</h2>
              <p className="text-gray-300">{stage.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed">{summary}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">
            Ev büyüklüğünüze göre net bir süre tahmini için Antalya{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
              asansörlü nakliyat
            </Link>{" "}
            ekibimizle hemen görüşün.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631">
              <Button variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer">
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

      <FAQ faqs={faqs} schemaId="faq-blog-tasinma-suresi" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
