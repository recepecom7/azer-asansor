import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumb, BreadcrumbItem } from "@/components/Breadcrumb";
import { getPlaceDetails } from "@/lib/googlePlaces";
import { Phone, MessageCircle, Check } from "lucide-react";

const PAGE_URL = "https://www.azerasansor.com/antalya-nakliyat";

const services = [
  {
    title: "Evden Eve Nakliyat",
    href: "/antalya-evden-eve-nakliyat",
    text: "Ev eşyalarınızı paketleme, taşıma ve yeni evinizde yerleştirme dahil tek ekiple taşıyoruz.",
  },
  {
    title: "Asansörlü Nakliyat",
    href: "/antalya-asansorlu-nakliyat",
    text: "Yüksek katlı binalarda eşyalar dış cepheden mobil asansörle indirilir ve çıkarılır. Merdivende hasar riski ortadan kalkar.",
  },
  {
    title: "Mobil Asansör Kiralama",
    href: "/antalya-mobil-asansor-kiralama",
    text: "Kendi aracınızla taşınıyorsanız sadece operatörlü mobil asansör kiralayabilirsiniz.",
  },
  {
    title: "Ofis Taşıma",
    href: "/antalya-ofis-tasima",
    text: "Ofis mobilyası, dosya ve elektronik ekipmanı iş akışınızı en az kesintiye uğratacak şekilde planlıyoruz.",
  },
  {
    title: "Şehirlerarası Nakliyat",
    href: "/antalya-sehirlerarasi-nakliyat",
    text: null,
  },
  {
    title: "Parça Eşya Taşıma",
    href: "/antalya-parca-esya-tasima",
    text: "Tek bir koltuk, buzdolabı ya da birkaç koli için tam kamyon kiralamanız gerekmez.",
  },
  {
    title: "Piyano ve Ağır Eşya Taşıma",
    href: "/antalya-piyano-ve-agir-esya-tasima",
    text: "Piyano, kasa ve ağır cihazlar için özel ekipman ve deneyimli ekip.",
  },
  {
    title: "Eşya Depolama",
    href: "/antalya-esya-depolama",
    text: "Taşınma tarihleriniz çakışmıyorsa eşyalarınızı güvenle depoluyoruz.",
  },
];

const cities = [
  { name: "İstanbul", href: "/antalya-istanbul-nakliyat" },
  { name: "Ankara", href: "/antalya-ankara-nakliyat" },
  { name: "İzmir", href: "/antalya-izmir-nakliyat" },
  { name: "Bursa", href: "/antalya-bursa-nakliyat" },
  { name: "Adana", href: "/antalya-adana-nakliyat" },
];

const districts = [
  { name: "Muratpaşa", href: "/muratpasa-evden-eve-nakliyat" },
  { name: "Konyaaltı", href: "/konyaalti-evden-eve-nakliyat" },
  { name: "Lara", href: "/lara-evden-eve-nakliyat" },
  { name: "Kepez", href: "/kepez-evden-eve-nakliyat" },
  { name: "Aksu", href: "/aksu-evden-eve-nakliyat" },
  { name: "Döşemealtı", href: "/dosemealti-evden-eve-nakliyat" },
];

const processSteps = [
  "Bizi arayın ya da WhatsApp'tan yazın. Taşınma tarihinizi ve adresleri alalım.",
  "Ücretsiz keşif yapalım. Eşya miktarını, katları ve asansör ihtiyacını yerinde görüp net fiyat verelim.",
  "Taşınma günü eşyalarınızı paketleyip taşıyalım. Gerekirse mobil asansörü kuralım.",
  "Yeni adresinizde eşyalarınızı yerleştirelim.",
];

const faqItems = [
  {
    question: "Antalya'da nakliyat firması seçerken nelere dikkat etmeliyim?",
    answer:
      "Firmanın yazılı teklif verip vermediğine, sigortalı taşıma yapıp yapmadığına ve gerçek müşteri yorumlarına bakın. Keşif yapmadan telefonda kesin fiyat veren firmalara temkinli yaklaşın. Detaylı kontrol listesi için \"Nakliyat firması seçerken nelere dikkat edilmeli\" yazımıza göz atabilirsiniz.",
  },
  {
    question: "Taşınma ve eşya depolamayı birlikte planlayabilir miyim?",
    answer:
      "Evet. Eski evinizden çıkış ile yeni evinize giriş tarihleri arasında boşluk varsa eşyalarınızı depoluyor, uygun tarihte yeni adresinize teslim ediyoruz.",
  },
  {
    question: "Taşınmaya ne kadar önceden hazırlanmalıyım?",
    answer:
      "En az bir hafta önceden rezervasyon yapmanızı öneririz. Yaz aylarında bu süre iki haftaya çıkabilir. Hazırlık adımları için taşınma hazırlık rehberimize bakabilirsiniz.",
  },
  {
    question: "Binada asansör yoksa ya da eşyalar asansöre sığmıyorsa ne olur?",
    answer:
      "Mobil asansörümüzü binanın dış cephesine kurarak eşyaları pencere veya balkondan taşıyoruz. Kurulum çoğu binada kısa sürede tamamlanır.",
  },
  {
    question: "Sadece birkaç parça eşya taşıtabilir miyim?",
    answer:
      "Evet. Parça eşya taşımasında sadece taşınacak eşyalar için ücret alınır, tam ev taşıması gibi fiyatlandırılmaz.",
  },
];

const faqGuides = [
  { label: "Nakliyat firması seçerken nelere dikkat edilmeli", href: "/blog/nakliyat-firmasi-secerken-nelere-dikkat" },
  { label: "Antalya'da taşınma süresi ne kadar?", href: "/blog/antalya-tasinma-suresi-ne-kadar" },
  { label: "Taşınma hazırlık rehberi", href: "/blog/antalya-tasinma-hazirlik-rehberi" },
];

export const metadata: Metadata = {
  title: { absolute: "Antalya Nakliyat Firması | Ev, Ofis ve Asansörlü Taşıma" },
  description:
    "Antalya'da evden eve, ofis ve şehirlerarası nakliyat. 22. kata kadar mobil asansörle taşıma. Ücretsiz keşif için hemen arayın.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Antalya Nakliyat",
  provider: {
    "@type": "LocalBusiness",
    name: "Azer Asansör",
    url: "https://www.azerasansor.com",
  },
  areaServed: ["Antalya", "Muratpaşa", "Konyaaltı", "Lara", "Kepez", "Aksu", "Döşemealtı"],
  serviceType: "Nakliyat",
};

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Antalya Nakliyat", href: "/antalya-nakliyat" },
];

function ContactButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="tel:+905424669631" className="w-full sm:w-auto">
        <Button variant="primary" className="w-full text-base md:text-lg px-7">
          <Phone className="w-5 h-5 mr-2" />
          Hemen Ara - Ücretsiz Fiyat Al
        </Button>
      </a>
      <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp&apos;tan Hızlı Teklif Al
        </Button>
      </a>
    </div>
  );
}

const linkClass = "text-brand-yellow hover:underline";

export default async function AntalyaNakliyatPage() {
  const { rating, reviewCount } = await getPlaceDetails();
  const ratingText = rating.toFixed(1).replace(".", ",");
  const whyUsItems = [
    "Kendi mobil asansörlerimiz var. Asansör için üçüncü bir firmaya bağlı değiliz, planlama tek elden yürür.",
    "22. kata kadar dış cepheden taşıma yapabiliyoruz.",
    `Google'da ${reviewCount} müşteri yorumunda ${ratingText} puanımız var.`,
    "Keşiften yerleştirmeye kadar aynı ekip çalışır.",
  ];

  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="service-schema-antalya-nakliyat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Breadcrumb items={breadcrumbItems} schemaId="breadcrumb-schema-antalya-nakliyat" />

      <Hero
        title="Antalya Nakliyat Hizmetleri"
        subtitle="Evden eve, ofis ve şehirlerarası taşımada tek ekiple çalışıyoruz. Yüksek katlarda 22. kata kadar ulaşan mobil asansörümüzle eşyalarınızı merdiven kullanmadan taşıyoruz. Muratpaşa, Konyaaltı, Lara, Kepez, Aksu, Döşemealtı ve Kemer'de hizmet veriyoruz."
        eyebrow="Antalya'da Güvenilir Nakliyat Firması"
        checklist={["Evden Eve ve Ofis Taşıma", "Şehirlerarası Nakliyat", "22. Kata Kadar Mobil Asansör", "Sigortalı Taşıma"]}
        subline="Antalya'da ev, ofis ve şehirlerarası nakliyatta yerel, hızlı ve güvenli çözüm."
        showRating
        ratingText={ratingText}
        reviewCount={reviewCount}
      />

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Azer Asansör, Antalya&apos;nın merkez ilçelerinde evden eve nakliyat, ofis taşıma, şehirlerarası nakliyat ve asansörlü taşıma hizmeti veren bir nakliyat firmasıdır. Kendi mobil asansörlerimizle eşyalarınızı 22. kata kadar merdiven ve bina asansörü kullanmadan taşıyoruz. Taşınmanın büyüklüğüne göre doğru hizmeti aşağıdan seçebilir ya da bizi arayıp ücretsiz keşif isteyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Nakliyat Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.href} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-brand-yellow/60 transition-colors">
                <h3 className="text-xl font-bold mb-2">
                  <Link href={service.href} className="text-white hover:text-brand-yellow transition-colors">
                    {service.title}
                  </Link>
                </h3>
                {service.text ? (
                  <p className="text-gray-300">{service.text}</p>
                ) : (
                  <p className="text-gray-300">
                    Antalya&apos;dan{" "}
                    {cities.map((city, index) => (
                      <span key={city.href}>
                        <Link href={city.href} className={linkClass}>{city.name}</Link>
                        {index < cities.length - 1 ? ", " : " "}
                      </span>
                    ))}
                    ve diğer şehirlere taşıma.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya&apos;da Hizmet Verdiğimiz İlçeler</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {districts.map((district, index) => (
                <span key={district.href}>
                  <Link href={district.href} className={linkClass}>{district.name}</Link>
                  {index < districts.length - 1 ? ", " : " ve "}
                </span>
              ))}
              Kemer&apos;de kendi ekibimizle çalışıyoruz.
            </p>
            <p className="mt-5">
              <Link href="/antalya-hizmet-bolgeleri" className={`${linkClass} font-semibold`}>
                Tüm hizmet bölgelerini görün
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Taşınma Süreci Nasıl İşler?</h2>
            <ol className="space-y-4">
              {processSteps.map((step, index) => (
                <li key={step} className="bg-brand-black border border-gray-800 rounded-2xl p-5 flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-yellow text-brand-black font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-gray-300 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Neden Azer Asansör?</h2>
            <ul className="space-y-4">
              {whyUsItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-lg">
                  <Check className="w-5 h-5 text-brand-yellow mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Nakliyat Fiyatı Nasıl Belirlenir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nakliyat fiyatını belirleyen başlıca faktörler şunlardır: taşınacak eşya miktarı, iki adres arasındaki mesafe, binaların kat sayısı, mobil asansör ihtiyacı ve taşınma tarihi. Aynı ilçe içinde yapılan bir taşıma ile ilçeler arası ya da şehirlerarası bir taşıma aynı maliyete çıkmaz. Yaz aylarında ve ay sonlarında talep arttığı için erken planlama avantaj sağlar. Net fiyat, ücretsiz keşif sonrasında verilir.
            </p>
          </div>
          <div className="bg-gray-900 border border-brand-yellow/40 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Size Özel Net Fiyat Alın</h2>
            <ContactButtons />
          </div>
        </div>
      </section>

      <FAQ faqs={faqItems} schemaId="faq-antalya-nakliyat" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />

      <section className="pb-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">İlgili rehberler</h3>
            <ul className="space-y-2">
              {faqGuides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className={linkClass}>{guide.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-10 md:py-16 px-4" aria-label="Ücretsiz fiyat teklifi formu">
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
