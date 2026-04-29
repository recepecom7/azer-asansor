import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
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
    question: "Antalya evden eve nakliyat fiyatları ne kadar?",
    answer: "Fiyatlar eşya miktarı, kat sayısı, mesafe ve ek hizmet ihtiyacına göre değişir. Net fiyat için ücretsiz keşif talep edebilir veya hızlı teklif alabilirsiniz.",
  },
  {
    question: "Eşyalarım sigortalı mı?",
    answer: "Taşıma sürecinde eşyalarınızın güvenliği önceliklidir. Uygun durumlarda sigortalı taşıma desteği sunulur ve süreç kontrollü şekilde ilerletilir.",
  },
  {
    question: "Paketleme yapıyor musunuz?",
    answer: "Evet, eşyalarınızın güvenli taşınması için paketleme ve ambalajlama hizmeti sunuyoruz.",
  },
  {
    question: "Asansörlü taşıma gerekli mi?",
    answer: "Yüksek katlı veya dar merdivenli binalarda asansörlü taşıma süreci hızlandırır ve eşyaların zarar görme riskini azaltır.",
  },
  {
    question: "Taşınma ne kadar sürer?",
    answer: "Taşınma süresi eşya miktarı, kat sayısı, mesafe ve kurulum koşullarına göre değişir. Planlama sonrası net süre paylaşılır.",
  },
  {
    question: "Antalya evden eve nakliyat ne kadar sürer?",
    answer: "Taşınma süresi eşya miktarı, kat sayısı, mesafe ve asansör ihtiyacına göre değişir. Küçük taşınmalar birkaç saat içinde tamamlanabilirken, daha kapsamlı ev taşıma süreçleri gün içinde planlı şekilde tamamlanır.",
  },
  {
    question: "Hafta sonu hizmet var mı?",
    answer: "Evet, Antalya genelinde hafta sonu da hizmet veriyoruz. Uygun tarih için önceden randevu önerilir.",
  },
  {
    question: "Asansörlü taşıma daha mı pahalı?",
    answer: "Her durumda değil. Çoğu zaman asansörlü taşıma süreci hızlandırdığı için maliyet açısından avantajlı olabilir.",
  },
  {
    question: "Fiyatı düşürmek için ne yapılabilir?",
    answer: "Taşınma öncesi eşya planlaması yapmak ve uygun gün seçmek maliyeti etkileyebilir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Evden Eve Nakliyat | Azer Asansör",
  description:
    "Antalya evden eve nakliyat hizmeti. Paketleme, sigortalı taşıma, asansörlü destek. Muratpaşa, Kepez, Konyaaltı ve tüm Antalya.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-evden-eve-nakliyat",
  },
};

export default function EvdenEveNakliyatPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
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
            <p className="text-sm text-gray-300 mt-5">⭐ 5.0 Google puanı · 66+ müşteri yorumu</p>
          </div>
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

      <section className="py-10 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Hangi Bölgelerde Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya genelinde evden eve nakliyat hizmeti sunuyoruz.
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
              <p className="text-sm text-gray-400 mt-5">⭐ 5.0 Google puanı · 66+ müşteri yorumu</p>
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
          <p className="text-sm text-gray-400 mt-6">5.0 Google puanı · 66+ yorum</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
