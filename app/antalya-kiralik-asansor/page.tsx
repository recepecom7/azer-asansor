import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, Building2, Clock, ShieldCheck, MapPin } from "lucide-react";

const faqItems = [
  {
    question: "Antalya kiralık asansör fiyatları ne kadar?",
    answer:
      "Antalya kiralık asansör fiyatları; kat sayısı, eşya miktarı, mesafe ve çalışma süresine göre değişir. Net fiyat için ücretsiz keşif ile hızlı teklif alabilirsiniz.",
  },
  {
    question: "Kaçıncı kata kadar çıkıyor?",
    answer:
      "Antalya kiralık asansör hizmetimizde kullanılan mobil sistemler genellikle 22. kata kadar ulaşabilir. Uygunluk bina konumu ve kurulum alanına göre değerlendirilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Mobil asansör kurulumu çoğu durumda 15-20 dakika içinde tamamlanır. Süre, kurulum alanının uygunluğuna göre değişebilir.",
  },
  {
    question: "Eşyalar güvenli mi?",
    answer:
      "Evet. Antalya eşya taşıma asansörü ile eşyalar merdiven yerine bina dışından kontrollü şekilde taşındığı için çarpma ve hasar riski azalır.",
  },
  {
    question: "Aynı gün hizmet var mı?",
    answer:
      "Yoğunluk ve lokasyona bağlı olarak Antalya kiralık asansör hizmetinde aynı gün planlama yapılabilir. Hızlı teyit için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    question: "Hafta sonu çalışıyor musunuz?",
    answer:
      "Evet, Antalya mobil asansör kiralama hizmetimizde hafta sonu da çalışıyoruz. Programın netleşmesi için önceden rezervasyon önerilir.",
  },
];

const processSteps = [
  "Ücretsiz keşif veya telefon ile bilgi alınır.",
  "Kat sayısı ve kurulum alanı belirlenir.",
  "Uygun araç yönlendirilir.",
  "15-20 dakikada kurulum yapılır.",
  "Eşyalar güvenli şekilde taşınır.",
];

const priceFactors = ["Kat sayısı", "Eşya miktarı", "Mesafe", "Süre"];

const whyUs = [
  "Deneyimli ekip",
  "Hızlı kurulum",
  "Güvenli taşıma",
  "Uygun fiyat",
  "Antalya geneli hizmet",
];

export const metadata: Metadata = {
  title: "Antalya Kiralık Asansör | Hızlı ve Güvenli Asansör Kiralama",
  description:
    "Antalya kiralık asansör hizmeti ile yüksek katlara hızlı ve güvenli taşıma. Mobil asansör kiralama, uygun fiyat ve aynı gün kurulum.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-kiralik-asansor",
  },
};

export default function AntalyaKiralikAsansorPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Antalya Kiralık Asansör Hizmeti</h1>
            <p className="text-brand-yellow font-semibold text-lg mb-3">
              Antalya&apos;da mobil asansör kiralama ile yüksek katlara hızlı, güvenli ve sorunsuz taşıma.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Antalya kiralık asansör hizmetimiz ile ev taşıma, ofis taşıma ve inşaat malzemesi taşıma işlemlerinde zamandan tasarruf edin. Mobil asansör sistemleri sayesinde eşyalar merdiven kullanılmadan güvenli şekilde taşınır.
            </p>
            <p className="text-sm text-gray-300 mb-6">
              Aynı gün hizmet almak için şimdi arayın.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7 text-gray-100">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>22. kata kadar ulaşım</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>15-20 dakikada kurulum</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı ve güvenli taşıma</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Aynı gün hizmet imkanı</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905424669631" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full px-7">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </Button>
              </a>
              <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="w-full px-7">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yaz
                </Button>
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-5">⭐ 5.0 Google puanı · Hızlı servis · Antalya geneli hizmet</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Kiralık Asansör Nedir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya kiralık asansör, yüksek katlara eşya taşımayı kolaylaştıran mobil bir taşıma sistemidir. Antalya asansör kiralama hizmeti;{" "}
              <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">
                Antalya evden eve nakliyat
              </Link>{" "}
              ve ofis taşıma başta olmak üzere inşaat malzemesi, mobilya ve beyaz eşya taşıma süreçlerinde hız ve güvenlik sağlar. Antalya yük asansörü ve Antalya eşya taşıma asansörü çözümleri, özellikle bina içinde risk oluşturan durumlarda tercih edilir.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Detaylı bilgi ve hızlı fiyat için hemen bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Antalya&apos;da Kiralık Asansör Ne Zaman Gerekli?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "3. kat ve üzeri taşınmalarda",
                "Dar merdivenli binalarda",
                "Ağır eşyalarda",
                "Zaman kısıtlıysa",
              ].map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Kiralık Asansör Hizmeti Hangi Alanlarda Kullanılır?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya kiralık asansör hizmeti,{" "}
              <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">
                Antalya evden eve nakliyat
              </Link>
              ,{" "}
              <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">
                Antalya asansörlü nakliyat
              </Link>
              , ofis taşıma, inşaat malzemesi taşıma ve mobilya/beyaz eşya taşımada aktif olarak kullanılır.{" "}
              <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">
                Antalya mobil asansör kiralama
              </Link>{" "}
              desteği sayesinde taşıma süreci daha kontrollü ve hızlı ilerler.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Antalya Kiralık Asansör Süreci Nasıl İşler?</h2>
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div key={step} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-2">Adım {idx + 1}</p>
                  <div className="flex items-start gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Kiralık Asansör Fiyatları</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Antalya kiralık asansör fiyatları sabit değildir. Antalya asansör kiralama ücretleri; kat sayısı, eşya miktarı, mesafe ve toplam süreye göre değişir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {priceFactors.map((factor) => (
                <div key={factor} className="bg-[#111827] border border-white/10 rounded-2xl p-5 text-gray-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {factor}
                </div>
              ))}
            </div>
            <p className="text-gray-200 font-medium mt-4">Net fiyat için ücretsiz keşif ile hemen teklif alın.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Kiralık Asansör Hakkında Detaylı Bilgi</h2>
            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Antalya kiralık asansör hizmeti, özellikle yüksek katlı binalarda taşınma süreçlerini kolaylaştırmak için en pratik çözümlerden biridir. Antalya&apos;da apartman yapısının yoğun olduğu bölgelerde merdiven boşlukları dar olabilir, bina içi asansörler büyük eşyalar için yetersiz kalabilir ve klasik taşıma yöntemi zaman kaybına neden olabilir. Bu noktada Antalya asansör kiralama seçeneği, hem ekip hem de müşteriler için daha kontrollü bir taşıma düzeni sunar.
              </p>
              <p>
                Mobil sistemlerin en önemli avantajı, eşyaların bina dışından doğrudan ilgili kata taşınabilmesidir. Bu sayede merdivenlerde yaşanan sıkışma, duvarlara çarpma veya apartman içinde hasar oluşturma riski azalır. Antalya eşya taşıma asansörü kullanımı; koltuk, dolap, beyaz eşya ve benzeri hacimli ürünlerde ciddi kolaylık sağlar. Aynı zamanda Antalya yük asansörü desteği ile inşaat malzemesi, ofis ekipmanı ve ağır parçalar da daha güvenli şekilde taşınabilir.
              </p>
              <p>
                Antalya kiralık asansör hizmetinin bir diğer artısı da zaman ve iş gücü tasarrufudur. Geleneksel yöntemlerde saatler sürebilen taşıma süreçleri, doğru kurulum ile çok daha kısa sürede tamamlanabilir. Özellikle yoğun tempoda çalışan aileler veya işletmeler için bu hız farkı önemlidir. Deneyimli ekip planlamasıyla birlikte süreç daha düzenli ilerler; gereksiz taşıma tekrarları azalır ve güvenli taşıma standardı yükselir.
              </p>
              <p>
                Dar merdivenli binalarda veya araç park alanı kısıtlı bölgelerde mobil asansör kiralama doğru keşif ile uygulanır. Kurulum alanı, kat yüksekliği ve eşya türü önceden değerlendirilerek en uygun yöntem belirlenir. Antalya geneli hizmet yaklaşımımız sayesinde Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı dahil farklı lokasyonlarda hızlı yönlendirme yapılabilir. Bu nedenle Antalya kiralık asansör çözümü, hem bireysel taşınmalarda hem de profesyonel taşıma ihtiyaçlarında güvenilir bir destek sunar.
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-5">
              Detaylı bilgi ve hızlı fiyat için hemen bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya İlçelerine Göre Kiralık Asansör Hizmeti</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Antalya kiralık asansör hizmetimizi Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere şehir genelinde sunuyoruz. Antalya mobil asansör kiralama taleplerinde lokasyona göre hızlı ekip planlaması yaparak aynı gün destek sağlayabiliyoruz.
            </p>
            <p className="text-sm text-gray-400 mt-4">Deneyimli ekip, güvenli taşıma ve Antalya geneli hizmet anlayışıyla çalışıyoruz.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden Azer Asansör?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">İlgili Hizmetler</h2>
            <div className="flex flex-col gap-3">
              <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Antalya asansörlü nakliyat
              </Link>
              <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Antalya evden eve nakliyat
              </Link>
              <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Antalya mobil asansör kiralama
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={faqItems}
        schemaId="faq-antalya-kiralik-asansor"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Antalya Kiralık Asansör İçin Hemen Fiyat Alın</h2>
          <p className="text-gray-300 text-lg mb-8">
            Hızlı, güvenli ve profesyonel mobil asansör hizmeti için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905424669631" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full px-7">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" className="w-full px-7">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Yaz
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
