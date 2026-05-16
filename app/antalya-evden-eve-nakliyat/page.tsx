import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Phone, MessageCircle, ShieldCheck, Package, Building2, MapPin, Clock } from "lucide-react";

const serviceScopeItems = [
  "Eşya paketleme ve ambalajlama",
  "Mobilya sökme ve montaj",
  "Güvenli taşıma",
  "Yeni adrese yerleştirme",
  "Asansörlü taşıma desteği (gerektiğinde)",
];

const processSteps = [
  "Ücretsiz keşif veya telefonla bilgi alınır",
  "Eşya miktarı ve kat durumu belirlenir",
  "Paketleme yapılır",
  "Taşıma gerçekleştirilir",
  "Yeni adrese yerleştirme yapılır",
];

const priceFactors = [
  "Eşya miktarı",
  "Kat sayısı",
  "Mesafe",
  "Asansör ihtiyacı",
  "Paketleme hizmeti",
];

const whyUsItems = [
  { title: "Deneyimli ekip", text: "Antalya genelinde taşınma süreçlerini planlı şekilde yöneten deneyimli ekibimizle çalışıyoruz." },
  { title: "Sigortalı taşıma", text: "Eşyalarınızın güvenliği için taşıma süreci kontrollü ilerler ve uygun durumlarda sigortalı destek sunulur." },
  { title: "Hızlı ve planlı süreç", text: "Taşınma günü, ekip planı ve taşıma adımları önceden belirlenerek süreç gereksiz bekleme olmadan tamamlanır." },
  { title: "Asansörlü taşıma desteği", text: "Yüksek katlı binalarda mobil asansör desteği ile eşyalar daha güvenli ve düzenli şekilde taşınır." },
  { title: "Ücretsiz keşif", text: "Eşya miktarı, kat sayısı ve mesafeye göre net fiyatlandırma için ücretsiz keşif imkanı sunuyoruz." },
];

const faqItems = [
  {
    question: "Antalya evden eve nakliyat fiyatları neye göre belirlenir?",
    answer:
      "Antalya şehir içi nakliye fiyatları; taşınacak eşyanın hacmi ve ağırlığı, yükleme ile boşaltma adreslerinin kat sayısı, iki adres arasındaki mesafe ve asansörlü taşıma gereksinimi gibi temel faktörlere göre şekillenir. Dar merdiveni olan eski binalarda ya da 8. kat ve üzerindeki dairelerde mobil asansör kullanımı zorunlu hale geldiğinden bu durum fiyatlandırmayı doğrudan etkiler. Bunların yanı sıra eşya paketleme, marangoz montaj desteği ve sigortalı nakliyat gibi ek hizmetler de toplam maliyete dahil edilebilir. Kesin rakam almak için ücretsiz keşif ya da WhatsApp üzerinden detaylı bir görüşme yapmanızı öneririz.",
  },
  {
    question: "Taşınma sırasında eşyalarım sigortalanıyor mu; olası bir hasarda süreç nasıl işliyor?",
    answer:
      "Evet, sigortalı nakliyat kapsamında eşyalarınız taşıma sürecinin başından teslimata kadar güvence altına alınmaktadır. Taşıma öncesinde eşyaların durumu kayıt altına alınır; tüm ürünler balonlu naylon, köpük profil ve koruyucu battaniyelerle ambalajlanarak araca yüklenir. Olası bir hasar durumunda durum tutanakla belgelenir ve sigorta kapsamında tazminat süreci hızlıca başlatılır; sizi bürokrasi ile baş başa bırakmayız. Bu şeffaf güvence sistemi, özellikle değerli mobilya ve antika eşya taşıyan aileler için büyük bir huzur kaynağı olmaktadır.",
  },
  {
    question: "Eşya paketleme ve ambalajlama hizmetine neler dahildir; beyaz eşyaları da sökebiliyor musunuz?",
    answer:
      "Eşya paketleme hizmetimiz; tabak-bardak gibi kırılgan ürünlerin balonlu naylonla, tekstil ürünlerin vakum poşetle, büyük mobilyaların ise koruyucu battaniye ve stretch filmle sarılmasını kapsar. Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi büyük beyaz eşyaların taşımaya hazır hale getirilmesi için deneyimli teknik ekibimiz söküm ve sabitleme işlemlerini gerçekleştirir. Gardırop, yatak başlığı, TV ünitesi gibi büyük mobilyaların demontaj ve montajı ise marangoz desteğimiz aracılığıyla yeni adresinizde de sağlanmaktadır. Tüm bu hizmetler taşıma paketinize dahil edilebildiği gibi ihtiyaç bazlı olarak da eklenebilir.",
  },
  {
    question: "Mobil asansörlü nakliyat kaçıncı kata kadar hizmet verebiliyor?",
    answer:
      "Filomuzda bulunan mobil asansörler, bina dış cephesine monte edilerek 22. kata kadar kesintisiz taşıma yapabilmektedir. Bu kapasite, Lara ve Konyaaltı'ndaki yüksek katlı rezidanslardan Kepez'deki toplu konut bloklarına kadar Antalya'nın büyük çoğunluğunu kapsamaktadır. Asansörlü taşıma sistemimiz, bina iç asansörünü meşgul etmeden ve merdivene yük bindirmeden çalışır; bu sayede site yönetimi kurallarına tam uyum sağlanır. Binanızın kat sayısı veya cephe yapısıyla ilgili herhangi bir soru için bizi aramadan önce birkaç fotoğraf WhatsApp'tan iletmeniz yeterlidir.",
  },
  {
    question: "Antalya şehir içi nakliyat süreci ortalama kaç saat sürer?",
    answer:
      "Antalya şehir içi nakliyat süresi, eşya hacmine ve bina koşullarına bağlı olarak ortalama 3 ila 8 saat arasında değişmektedir. 2+1 veya 3+1 standart bir daire için asansörlü taşıma kullanıldığında yükleme ve boşaltma dahil süreç genellikle 4–5 saat içinde tamamlanır; merdiven taşımalarında ise bu süre uzayabilir. Eşya paketleme hizmeti de alınıyorsa, paketleme ekibi taşıma günü sabahı erken saatte işe başlar ve mesai kaybı yaşanmaz. Kesin bir süre tahmini için ücretsiz ön keşif ya da detaylı bilgi görüşmesi yapılması önerilir.",
  },
  {
    question: "Hafta sonu veya nakliyat yasak günlerinde ev taşıma hizmeti veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ve resmi tatil günlerinde de evden eve nakliyat hizmeti sunuyoruz; ancak bazı site yönetimleri ve belediyeler belirli gün ve saat aralıklarında ağır taşıt girişini kısıtlayabilir. Bu tür kısıtlamalar özellikle Muratpaşa ve Kepez merkezdeki dar sokaklarda farklılık gösterebileceğinden, taşınma günü öncesinde bölgenizin trafik düzenlemelerini ekibimizle birlikte netleştirmenizi tavsiye ederiz. Randevunuzu en az 2–3 gün öncesinden almak, hem uygun ekip planlaması hem de sigortalı nakliyat belgelerinin hazırlanması açısından süreci kolaylaştırır. Acil taşınma talepleriniz için WhatsApp hattımız 7/24 aktiftir.",
  },
];

export const metadata: Metadata = {
  // Title: 55 chars — primary keyword first, brand at end, no repetition
  title: "Antalya Evden Eve Nakliyat – Sigortalı & Asansörlü | Azer Asansör",
  // Description: 154 chars — action verb, USPs, geo qualifier, implicit CTA
  description:
    "Antalya'da profesyonel evden eve nakliyat: sigortalı taşıma, ücretsiz paketleme ve mobil asansör desteği. Muratpaşa, Kepez, Konyaaltı ve tüm Antalya. Hemen fiyat alın!",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-evden-eve-nakliyat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Antalya Evden Eve Nakliyat – Sigortalı & Asansörlü | Azer Asansör",
    description:
      "Antalya'da profesyonel evden eve nakliyat: sigortalı taşıma, ücretsiz paketleme ve mobil asansör desteği. Tüm Antalya ilçelerinde hizmet.",
    url: "https://www.azerasansor.com/antalya-evden-eve-nakliyat",
    siteName: "Azer Asansör",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.azerasansor.com/images/muratpasa-nakliye.jpg",
        width: 1200,
        height: 630,
        alt: "Azer Asansör – Antalya Evden Eve Nakliyat Hizmeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Evden Eve Nakliyat – Sigortalı & Asansörlü | Azer Asansör",
    description:
      "Antalya'da sigortalı evden eve nakliyat, ücretsiz paketleme ve mobil asansör desteği. Tüm ilçelerde hizmet – hemen fiyat alın!",
    images: ["https://www.azerasansor.com/images/muratpasa-nakliye.jpg"],
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────
const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Azer Asansör",
  url: "https://www.azerasansor.com/antalya-evden-eve-nakliyat",
  logo: "https://www.azerasansor.com/icon.png",
  image: "https://www.azerasansor.com/images/muratpasa-nakliye.jpg",
  description:
    "Antalya'da sigortalı evden eve nakliyat, ücretsiz paketleme ve mobil asansör desteği ile profesyonel taşımacılık hizmeti.",
  telephone: "+905424669631",
  email: "info@azerasansor.com",
  priceRange: "TL",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antalya",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8969,
    longitude: 30.7133,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
  areaServed: [
    { "@type": "City", name: "Muratpaşa",   containedInPlace: { "@type": "City", name: "Antalya" } },
    { "@type": "City", name: "Kepez",       containedInPlace: { "@type": "City", name: "Antalya" } },
    { "@type": "City", name: "Konyaaltı",   containedInPlace: { "@type": "City", name: "Antalya" } },
    { "@type": "City", name: "Lara",        containedInPlace: { "@type": "City", name: "Antalya" } },
    { "@type": "City", name: "Aksu",        containedInPlace: { "@type": "City", name: "Antalya" } },
    { "@type": "City", name: "Döşemealtı",  containedInPlace: { "@type": "City", name: "Antalya" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Evden Eve Nakliyat Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evden Eve Nakliyat",
          description: "Eşya paketleme, güvenli taşıma ve yeni adrese yerleştirme hizmeti.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asansörlü Nakliyat",
          description: "Yüksek katlı binalar için mobil asansör destekli nakliyat hizmeti.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sigortalı Taşıma",
          description: "Eşyalarınızın güvende olması için sigortalı taşıma seçeneği.",
        },
      },
    ],
  },
  sameAs: [
    "https://wa.me/905424669631",
    "https://www.azerasansor.com",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "82",
    bestRating: "5",
    worstRating: "1",
  },
};

function MovingCompanyJsonLd() {
  return (
    <script
      id="moving-company-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(movingCompanySchema) }}
    />
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function EvdenEveNakliyatPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <MovingCompanyJsonLd />
      <Header />

      <section className="relative w-full overflow-hidden bg-brand-black text-white border-b border-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/muratpasa-nakliye.jpg"
            alt="Antalya asansörlü nakliyat hizmeti mobil asansör ile taşıma"
            fill
            className="object-cover object-center"
            priority
            quality={92}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <div className="max-w-5xl bg-gray-900/90 border border-white/10 rounded-2xl p-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Antalya Evden Eve Nakliyat
            </h1>
            <p className="text-brand-yellow font-semibold mb-3">
              Antalya&apos;da Sigortalı ve Asansörlü Evden Eve Nakliyat Hizmeti
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-7">
              Antalya&apos;da evden eve nakliyat hizmeti ile eşyalarınızı güvenli, hızlı ve planlı şekilde yeni adresinize taşıyoruz. Paketleme, taşıma ve yerleştirme süreçlerini profesyonel ekip ile yönetiyoruz.
            </p>

            <ul className="grid gap-2 sm:grid-cols-2 text-white/95 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı Taşıma</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Paketleme Dahil Hizmet</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Asansörlü Taşıma Seçeneği</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Antalya Geneli Hizmet</li>
            </ul>

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
            <p className="text-sm text-gray-300 mt-5">⭐ 5.0 Google puanı · 82+ müşteri yorumu</p>
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE FORM ─────────────────────────────────────────────────── */}
      <section
        className="bg-brand-black py-10 md:py-16 px-4"
        aria-label="Ücretsiz fiyat teklifi formu"
      >
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Antalya&apos;da Güvenilir Evden Eve Nakliyat
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya evden eve nakliyat hizmeti, taşınma sürecini daha kolay ve güvenli hale getiren profesyonel bir çözümdür. Eşyaların paketlenmesi, taşınması ve yeni adrese yerleştirilmesi uzman ekip tarafından planlı şekilde gerçekleştirilir.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aktif hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Evden eve nakliyat sürecinde tüm aşamaları sizin yerinize planlıyor ve uyguluyoruz.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Evden Eve Nakliyat Hizmetine Neler Dahil?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceScopeItems.map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300 flex items-center gap-2">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Antalya&apos;da Neden Profesyonel Nakliyat Tercih Etmelisiniz?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ev taşıma sürecinde plansız hareket etmek eşya hasarı, bina içi zararlar ve zaman kaybı gibi sorunlara yol açabilir. Profesyonel nakliyat hizmeti sayesinde paketleme, taşıma, asansör kullanımı ve yerleştirme adımları daha güvenli ve düzenli şekilde ilerler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Eşya Hasar Riskini Azaltır",
                "Taşınma Süresini Kısaltır",
                "Daha Planlı Bir Süreç Sağlar",
              ].map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Asansörlü Ev Taşıma Avantajları
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Yüksek katlı binalarda ev taşıma sürecini hızlandırmak için mobil asansör kullanıyoruz. Bu noktada Antalya asansörlü nakliyat hizmetimiz, taşıma planını daha güvenli ve kontrollü hale getirir.
            </p>
            <Link href="/antalya-mobil-asansor-kiralama" className="inline-flex items-center gap-2 text-brand-yellow hover:underline font-semibold">
              Antalya kiralık asansör ve mobil asansör kiralama
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Evden Eve Nakliyat Süreci Nasıl İşler?
            </h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-1">Adım {index + 1}</p>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{step}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Antalya Evden Eve Nakliyat Fiyatları
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Fiyatlar sabit değildir ve aşağıdaki faktörlere göre değişir:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {priceFactors.map((factor) => (
                <div key={factor} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {factor}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mt-7">
              Net fiyat için ücretsiz keşif ile aynı gün teklif alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* ── GEO SECTION 1: Lara & Konyaaltı ──────────────────────────────────── */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hangi Bölgelerde Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı&apos;nda her bölgenin kendine özgü yapısına göre özelleştirilmiş evden eve nakliyat çözümleri sunuyoruz.
            </p>

            {/* Lara & Konyaaltı */}
            <div className="mb-10 pb-10 border-b border-white/10">
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">
                Lara ve Konyaaltı&apos;nda Asansörlü Evden Eve Nakliyat
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Lara ve Konyaaltı bölgeleri, Antalya&apos;nın en yoğun yüksek katlı konut stoklarına ev sahipliği yapar. Özellikle Lara Caddesi boyunca uzanan rezidans ve site komplekslerinde, Konyaaltı&apos;nın sahil şeridindeki çok katlı blok apartmanlarda taşınma süreci sıradan bir nakliyat şirketiyle tamamlanamaz.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Bu bölgelerdeki site yönetimleri çoğunlukla bina merdivenlerinden yapılan taşımaları ya kısıtlar ya da belirli saatlerle sınırlar. Asansöre zarar verme riski, ortak alanlara verilen hasarlar ve komşu memnuniyetsizliği bu kısıtlamaların temel nedenidir. Azer Asansör olarak, Lara ve Konyaaltı&apos;ndaki taşınmalarınızda <strong className="text-white">22. kata kadar ulaşabilen mobil asansörümüzü</strong> binanın dış cephesine konumlandırarak eşyalarınızı dikey taşıma bandı ile hızlıca indirip yükleyebiliyoruz. Bu yöntem hem site yönetimi şartlarına tam uyum sağlar hem de taşıma süresini standart yönteme kıyasla ciddi ölçüde kısaltır.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Koltuk takımı, karyola, gardırop gibi büyük hacimli eşyalarınız dar asansör kabinine sığmasa dahi mobil asansör sistemi sayesinde güvenle taşınır; ne bina asansörü meşgul edilir ne de merdivenler zorlanır.
              </p>
            </div>

            {/* Muratpaşa & Kepez */}
            <div className="mb-10 pb-10 border-b border-white/10">
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">
                Muratpaşa ve Kepez&apos;de Hızlı ve Planlı Evden Eve Nakliyat
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Antalya&apos;nın merkezi ilçeleri olan Muratpaşa ve Kepez, birbirinden çok farklı iki kentsel dokuya sahiptir. Muratpaşa&apos;da Kaleiçi çevresindeki tarihi mahalleler, Meltem ve Bahçelievler gibi yerleşim alanlarında dar sokaklara çıkmak, çift taraflı park nedeniyle büyük nakliyat araçlarının manevra yapamaması ve birbirine yakın bitişik nizamda eski yapılar, taşınmayı fiziksel olarak karmaşık bir hale getirebilir.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Kepez&apos;de ise tablo farklılaşır: Yeni yapılaşma alanlarındaki 10&apos;u aşkın katlı toplu konut blokları ile eski mahallelerdeki 3–4 katlı yürüme merdiveni olan binaların bir arada bulunması, ekibin bölge topolojisini iyi tanıması gerektirir. Azer Asansör ekibi, Antalya merkezinde yıllardır aktif çalıştığı için bu iki ilçenin sokak yapısını, ulaşım kısıtlarını ve bina tiplerini yakından bilir.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dar sokak problemi yaşanan noktalarda araç konumlamasını önceden planlıyor; eski yapılardaki yüksek risk taşıyan merdiven taşımalarında mobil asansör çözümünü devreye alarak hem süreyi hem de eşya hasar riskini minimize ediyoruz. Muratpaşa ve Kepez&apos;de aynı gün taşınma taleplerine de mümkün olduğunca karşılık veriyoruz.
              </p>
            </div>

            {/* Döşemealtı & Aksu */}
            <div>
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">
                Döşemealtı ve Aksu&apos;da Villadan Villaya Kapsamlı Nakliyat
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Döşemealtı ve Aksu ilçeleri, Antalya&apos;nın diğer bölgelerine kıyasla farklı bir taşınma profili sunar. Bu bölgeler; müstakil villalar, tarım arazileri içindeki özel konutlar ve kentin dışına yayılmış geniş arazi parçaları üzerine kurulu yerleşim alanlarıyla öne çıkar. Şehir merkezine olan mesafe, ortalama 20–45 km arasında değişebilir; bu durum nakliyat planlamasını doğrudan etkiler.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Villadan villaya yapılan taşınmalarda eşya hacmi genellikle dairelere kıyasla çok daha fazladır: Bahçe takımları, büyük ankastre beyaz eşyalar, antika veya değerli mobilyalar, traktör ve tarım ekipmanı gibi standart dışı yükler bu bölgede sıklıkla karşılaştığımız taşınma kalemleri arasındadır. Azer Asansör olarak bu tür kapsamlı taşınmalar için taşınma günü öncesinde detaylı bir planlama görüşmesi yapıyor; araç kapasitesi, ekip sayısı ve güzergah optimizasyonunu eşya envanterine göre belirliyoruz.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Döşemealtı ve Aksu&apos;da uzun mesafeli nakliyat süreçlerinde yakıt, araç ve iş gücü maliyetleri fiyatlandırmayı doğrudan etkiler. Bu nedenle bu bölgeler için ücretsiz keşif veya detaylı WhatsApp görüşmesiyle net fiyat teklifi almanızı özellikle tavsiye ederiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK: Sigortalı & Marangozlu Taşımacılık ─────────────────── */}
      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#111827] border border-brand-yellow/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl flex-shrink-0" aria-hidden="true">🛡️</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Sigortalı ve Marangozlu Taşımacılık: Eşyalarınız Her Adımda Güvende
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Evden eve taşınma sürecinde en çok duyduğumuz kaygı, mobilyaların hasar görmesidir. Özellikle yıllarca birlikte yaşanmış gardıroplar, değer taşıyan koltuk takımları ya da büyükanne yadigarı antika eşyalar söz konusu olduğunda bu endişe büyümektedir. Azer Asansör olarak bu gerçeği çok iyi biliyoruz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Bu nedenle taşımacılık hizmetimiz, yalnızca &ldquo;eşyaları bir noktadan alıp diğerine bırakmak&rdquo; anlayışıyla değil, kapsamlı bir güvence sistemiyle şekillenmektedir. Büyük mobilyaların demontajı ve yeni adreste montajı için <strong className="text-white">deneyimli marangoz desteği</strong> sunuyoruz; karyola kafaları, modüler kütüphaneler, mutfak dolapları ve TV üniteleri gibi söküp takılması uzmanlık gerektiren eşyalar bu kapsamda değerlendirilir.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Taşıma sürecinde tüm eşyalar önce uygun ambalaj malzemeleriyle sarılır; kırılgan ürünler köpük ve baloncuklu naylon ile ayrıca korunur. Ardından <strong className="text-white">sigortalı taşımacılık</strong> kapsamında güvence altına alınarak araca yüklenir. Olası beklenmedik bir hasar durumunda ailenizin maddi kaybı telafi edilir; süreci şeffaf ve yazılı olarak yönetiyoruz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya&apos;da evden eve nakliyat planlarken sadece en ucuz teklifi değil, eşyalarınızın gerçek anlamda güvende olduğu, marangozlu ve sigortalı bir hizmet deneyimi arıyorsanız doğru yerdesiniz. Bize ulaşın; taşınma günü sizi stressiz bir sürecin içinde bulun.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Neden Azer Asansör?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUsItems.map((item) => (
              <div key={item.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Antalya Evden Eve Nakliyat Fiyatları 2026
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Antalya’da evden eve nakliyat fiyatları sabit değildir. Taşınacak eşyanın miktarı, kat sayısı, mesafe ve kullanılacak ekipmanlara göre fiyat değişiklik gösterebilir. Özellikle asansörlü nakliyat kullanılan durumlarda süreç daha hızlı ve güvenli ilerlerken fiyatlandırma da buna göre şekillenir.
            </p>

            <h3 className="text-2xl font-bold mb-3">Evden Eve Nakliyat Fiyatları Neye Göre Belirlenir?</h3>
            <p className="text-gray-300 mb-3">Aşağıdaki faktörler fiyatı doğrudan etkiler:</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>- Taşınacak eşya miktarı</li>
              <li>- Kat sayısı ve bina yapısı</li>
              <li>- Asansör kullanım ihtiyacı</li>
              <li>- Taşınacak mesafe</li>
              <li>- Paketleme ve ek hizmetler</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Antalya’da özellikle yüksek katlı binalarda{" "}
              <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">
                Antalya mobil asansör kiralama
              </Link>{" "}
              kullanımı hem süreci hızlandırır hem de eşyaların zarar görmesini engeller.
            </p>

            <h3 className="text-2xl font-bold mb-3">Asansörlü Nakliyat Fiyatı Etkiler mi?</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Asansörlü nakliyat, klasik taşımaya göre farklı bir sistemdir. Mobil asansör kurulumu sayesinde eşyalar merdiven kullanılmadan taşınır. Bu durum hem iş gücünü azaltır hem de taşıma süresini kısaltır.
            </p>
            <p className="mb-6">
              <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline font-medium">
                Antalya asansörlü nakliyat hizmetimiz hakkında detaylı bilgi alın
              </Link>
            </p>

            <h3 className="text-2xl font-bold mb-3">Antalya’da Nakliyat Fiyatları Neden Değişken?</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              Her taşınma farklıdır. Aynı şehirde bile dar merdivenli binalar, yüksek katlı siteler ve eşya yoğunluğu gibi faktörler fiyatı değiştirir.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bu yüzden net fiyat almak için ücretsiz keşif yapılması en doğru yöntemdir.
            </p>

            <h3 className="text-2xl font-bold mb-3">Ücretsiz Keşif ile Net Fiyat Alın</h3>
            <p className="text-gray-300 mb-3">
              Azer Asansör olarak taşıma öncesinde ücretsiz keşif hizmeti sunuyoruz. Bu sayede:
            </p>
            <ul className="space-y-2 text-gray-300 mb-8">
              <li>✓ Net fiyat belirlenir</li>
              <li>✓ Süre planlanır</li>
              <li>✓ Uygun ekip yönlendirilir</li>
            </ul>

            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">Hemen Fiyat Alın</h3>
              <p className="text-gray-300 text-lg mb-6">
                Antalya’da evden eve nakliyat hizmeti için hemen arayın veya WhatsApp’tan yazın. Aynı gün ücretsiz keşif ile net fiyat alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+905424669631" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full text-base md:text-lg px-7">
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Ara
                  </Button>
                </a>
                <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Yaz
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-5">⭐ 5.0 Google puanı · 82+ müşteri yorumu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Fiyat Rehberi</h3>
            <p className="text-gray-300">
              Detaylı fiyat rehberi için:{" "}
              <Link href="/blog/antalya-evden-eve-nakliyat-fiyatlari" className="text-brand-yellow hover:underline font-medium">
                Antalya Evden Eve Nakliyat Fiyatları 2026
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-evden-eve-nakliyat"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-10 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benzer Hizmetler
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Asansörlü nakliyat hizmetine ek olarak Antalya&apos;da mobil asansör kiralama ve evden eve nakliyat çözümlerimizden de yararlanabilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/antalya-asansorlu-nakliyat" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Asansörlü Nakliyat</h3>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
              <Link href="/antalya-mobil-asansor-kiralama" className="bg-[#111827] border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h3 className="text-white font-bold text-xl mb-2">Antalya Kiralık Asansör ve Mobil Asansör Kiralama</h3>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Antalya Evden Eve Nakliyat İçin Hemen Fiyat Alın
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Hemen arayın, ücretsiz keşif ile net fiyat alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full text-base md:text-lg px-7">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Yaz
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">5.0 Google puanı · 82+ yorum</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
