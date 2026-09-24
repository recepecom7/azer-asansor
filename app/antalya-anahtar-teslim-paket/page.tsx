import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, Package, ListChecks } from "lucide-react";

const packageItems = [
  "Eşya tespiti ve taşınma planı",
  "Koli, ambalaj ve koruma malzemeleriyle paketleme (malzemeler dahil)",
  "Mobilya, yatak, dolap ve benzeri eşyaların demontajı",
  "Taşıma için uygun araç ve mobil asansör planlaması",
  "Yeni adreste eşyaların teslim edilmesi ve yerleştirme desteği",
  "Gerekli mobilyaların yeniden kurulumu ve montajı",
];

const processSteps = [
  { title: "Arayın", text: "Adres, kat bilgisi ve eşya durumunu telefonda paylaşın." },
  { title: "Keşif", text: "Eşya hacmi, bina yapısı ve asansör ihtiyacı değerlendirilir." },
  { title: "Taşıma Günü", text: "Ekip gelir, paketler, söker, taşır ve yeni adreste kurulumu tamamlar." },
];

const faqItems = [
  {
    question: "Anahtar teslim nakliyat ne demek?",
    answer: "Anahtar teslim nakliyat, paketleme, demontaj, taşıma ve kurulumun tek ekip tarafından yapılması demektir.",
  },
  {
    question: "Anahtar teslim pakete neler dahil?",
    answer: "Anahtar teslim pakette paketleme malzemeleri, mobilya sökümü, taşıma, yeni adreste yerleştirme ve kurulum dahildir.",
  },
  {
    question: "Antalya'da anahtar teslim nakliyat fiyatı ne kadar?",
    answer: "Antalya'da anahtar teslim nakliyat fiyatı, kat sayısı, eşya miktarı, mesafe ve asansör ihtiyacına göre değişir; net fiyat keşiften sonra verilir.",
  },
  {
    question: "Paketleme malzemeleri dahil mi?",
    answer: "Evet, anahtar teslim pakette paketleme malzemeleri dahildir. Koli, ambalaj ve koruma malzemeleri ekibimiz tarafından sağlanır.",
  },
  {
    question: "Kurulum ve montaj da yapılıyor mu?",
    answer: "Evet, kurulum ve montaj da yapılır; taşınan mobilyalar yeni adreste tekrar kurulur.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Anahtar Teslim Nakliyat | Azer Asansör",
  description:
    "Antalya anahtar teslim nakliyat. Paketleme, demontaj, taşıma ve kurulum tek ekipten. Fiyat için hemen arayın.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-anahtar-teslim-paket",
  },
};

export default function AnahtarTeslimPaketPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antalya Anahtar Teslim Nakliyat",
    provider: {
      "@id": "https://www.azerasansor.com/#business",
    },
    areaServed: ["Antalya", "Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı"],
    serviceType: "Anahtar Teslim Nakliyat",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.azerasansor.com" },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: "https://www.azerasansor.com/antalya-nakliyat" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Anahtar Teslim Nakliyat",
        item: "https://www.azerasansor.com/antalya-anahtar-teslim-paket",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <script
        id="service-schema-antalya-anahtar-teslim-paket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="breadcrumb-schema-antalya-anahtar-teslim-paket"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Antalya Anahtar Teslim Nakliyat
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Antalya anahtar teslim nakliyat hizmetinde evi siz uğraşmadan topluyor, paketliyor, söküyor,
              taşıyor ve yeni adreste kuruyoruz. Azer Asansör&apos;de paketleme, demontaj, taşıma ve kurulum
              tek ekipten çıkar; süreç tek telefonla başlar ve taşınma günü tek koordinasyonla ilerler.
              2011&apos;den beri Antalya&apos;da çalışan kendi araç ve asansör filomuzla, dar sokaklarda ve
              yüksek katlı binalarda daha kontrollü bir taşıma planı kuruyoruz. Fiyat keşif sonrası netleşir;
              hemen arayın veya WhatsApp&apos;tan yazın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a data-cta-location="hero" href="tel:+905424669631" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full text-base md:text-lg px-7">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara - Ücretsiz Fiyat Al
                </Button>
              </a>
              <a
                data-cta-location="hero"
                href="https://wa.me/905424669631"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Hızlı Teklif Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pakete Neler Dahil?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packageItems.map((item) => (
                <div
                  key={item}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300 flex items-center gap-2"
                >
                  <Package className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nasıl Çalışır?</h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-1">
                    {index + 1}. {step.title}
                  </p>
                  <div className="flex items-start gap-2">
                    <ListChecks className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Neden Anahtar Teslim?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Anahtar teslim nakliyat, taşınırken vakit kaybetmek istemeyenler için uygundur. Paketleme
              malzemesi aramak, mobilya sökmek, aracı ayarlamak ve taşıma günü farklı ekiplerle uğraşmak
              yerine tek ekipten hizmet alırsınız.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Dar sokaklı apartmanlarda, yüksek katlı binalarda ve çok parçalı evlerde süreç daha düzenli
              ilerler. Mobil asansör, taşıma süresini ve bina içi riskleri azaltmak için kullanılır; özellikle
              Antalya&apos;da kat ve ulaşım koşulları değişken olduğunda bu model daha pratiktir.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Azer Asansör&apos;de işin tek noktadan yönetilmesi önemlidir. Kendi asansör filomuz ve kendi
              nakliye araçlarımızla, taşeron beklemeden planlama yaparız. Böylece taşıma günü iletişim
              dağılmaz ve süreç baştan sona aynı ekipte kalır.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Bu hizmet, &quot;ben sadece yeni eve geçeyim, gerisini ekip halletsin&quot; diyen kullanıcılar
              içindir. Parça parça hizmet almak yerine paketleme, demontaj, taşıma ve kurulumun birlikte
              ilerlemesi hem zamanı hem de koordinasyonu kolaylaştırır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Fiyat Nasıl Belirlenir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya anahtar teslim nakliyat fiyatı; evin bulunduğu kat, eşya hacmi, iki adres arasındaki
              mesafe, bina içi taşıma koşulları ve mobil asansör gerekip gerekmediğine göre belirlenir. Net
              rakam vermek yerine önce keşif yapıp ihtiyacı doğru görmek, daha gerçekçi bir teklif hazırlamayı
              sağlar.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-antalya-anahtar-teslim-paket"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Antalya Anahtar Teslim Nakliyat İçin Hemen Fiyat Alın
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a data-cta-location="final_cta" href="tel:+905424669631" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full text-base md:text-lg px-7">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara - Ücretsiz Fiyat Al
              </Button>
            </a>
            <a
              data-cta-location="final_cta"
              href="https://wa.me/905424669631"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Hızlı Teklif Al
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
