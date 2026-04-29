import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Phone, MessageCircle, Building2, ShieldCheck, Clock, Truck, Hammer, Package } from "lucide-react";

const usageCards = [
  {
    title: "İnşaat Malzemesi Taşıma",
    text: "Çimento, alçıpan, seramik ve benzeri ağır malzemeleri üst katlara hızlı ve kontrollü şekilde taşır.",
    icon: Hammer,
  },
  {
    title: "Cam Balkon ve Cam Taşıma",
    text: "Kırılma riski yüksek cam ürünlerini bina dışından daha dengeli bir süreçle ilgili kata ulaştırır.",
    icon: Building2,
  },
  {
    title: "Mobilya ve Beyaz Eşya Taşıma",
    text: "Koltuk, dolap, buzdolabı gibi hacimli eşyaların merdivensiz taşınmasını kolaylaştırır.",
    icon: Package,
  },
  {
    title: "Klima ve Büyük Ekipman Taşıma",
    text: "Ağır teknik ekipmanların güvenli şekilde taşınmasında dış cephe asansörü güçlü destek sağlar.",
    icon: Truck,
  },
  {
    title: "Evden Eve Nakliyat Desteği",
    text: "Taşınma sürecinde bina içi trafiği azaltır, taşıma süresini kısaltır ve hasar riskini düşürür.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "Dış cephe asansörü kaçıncı kata çıkar?",
    answer:
      "Dış cephe asansörü sistemlerimiz genellikle 22. kata kadar ulaşabilir. Uygunluk bina konumu ve kurulum alanına göre değerlendirilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Kurulum çoğu adreste 15-20 dakika içinde tamamlanır. Yol durumu ve kurulum alanının uygunluğu süreyi etkileyebilir.",
  },
  {
    question: "Hangi eşyalar taşınır?",
    answer:
      "Mobilya, beyaz eşya, cam balkon parçaları, inşaat malzemeleri ve farklı ağır yükler dış cephe asansörü ile taşınabilir.",
  },
  {
    question: "Güvenli mi?",
    answer:
      "Evet. Profesyonel kurulum ve kontrollü operasyon ile taşıma süreci daha güvenli hale gelir, bina içi hasar riski azalır.",
  },
  {
    question: "Her binada kurulur mu?",
    answer:
      "Her bina için kurulum uygunluğu ayrı kontrol edilir. Yol genişliği, cephe erişimi, balkon veya pencere konumu değerlendirilir.",
  },
  {
    question: "Fiyatlar neye göre değişir?",
    answer:
      "Fiyat; kat sayısı, yük miktarı, kurulum alanı ve hizmet süresine göre belirlenir. Net fiyat için ücretsiz keşif önerilir.",
  },
  {
    question: "Aynı gün hizmet alabilir miyim?",
    answer:
      "Yoğunluk durumuna göre aynı gün ekip yönlendirmesi yapılabilir. En hızlı teyit için telefon veya WhatsApp üzerinden ulaşabilirsiniz.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Dış Cephe Asansörü | Yük ve Eşya Taşıma Asansörü",
  description:
    "Antalya dış cephe asansörü ile inşaat malzemesi, cam balkon, mobilya ve beyaz eşyaları hızlı ve güvenli taşıyın. Aynı gün kurulum ve uygun fiyat.",
  alternates: {
    canonical: "https://www.azerasansor.com/antalya-dis-cephe-asansoru",
  },
};

export default function FacadeElevatorPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <section className="bg-brand-black text-white border-b border-white/10">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Antalya Dış Cephe Asansörü Hizmeti</h1>
            <p className="text-brand-yellow font-semibold text-lg mb-3">
              Yüksek Katlar İçin Güvenli Yük ve Eşya Taşıma Çözümü
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-7">
              Antalya’da dış cephe asansörü hizmetimiz ile inşaat malzemeleri, cam balkon, mobilya ve beyaz eşyalarınızı bina dışından hızlı ve güvenli şekilde taşıyoruz. Yük asansörü kiralama çözümlerimiz sayesinde dar merdiven, yüksek kat ve ağır yük problemlerini ortadan kaldırıyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 mb-8">
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>22. kata kadar ulaşım</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>15-20 dakikada kurulum</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Sigortalı taşıma</li>
              <li className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>Antalya geneli hizmet</li>
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
            <div className="mt-5 space-y-1 text-sm text-gray-300">
              <p>✔ Aynı gün kurulum</p>
              <p>✔ 22. kata kadar erişim</p>
              <p>✔ Sigortalı ve güvenli taşıma</p>
            </div>
            <p className="text-sm text-gray-300 mt-5">⭐ 5.0 Google puanı · Antalya geneli hızlı servis</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya’da Dış Cephe Asansörü Nedir?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dış cephe asansörü, bina dışına kurulan ve ağır yüklerin veya eşyaların balkon ya da pencere üzerinden taşınmasını sağlayan sistemdir. Antalya yük asansörü kiralama hizmeti, özellikle yüksek katlı binalarda taşıma sürecini kolaylaştırır ve bina içi hasar riskini azaltır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Dış Cephe Asansörü Neden Tercih Edilmeli?</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Geleneksel taşıma yöntemlerinde eşyalar merdivenlerden taşınırken hem zaman kaybı hem de hasar riski oluşur. Özellikle dar merdivenli ve yüksek katlı binalarda bu risk daha da artar.
              </p>
              <p>
                Antalya dış cephe asansörü sayesinde eşyalar bina dışından doğrudan ilgili kata ulaştırılır. Bu yöntem hem daha hızlı hem de çok daha güvenlidir. Aynı zamanda bina içi duvar, korkuluk ve asansör zararları tamamen ortadan kalkar.
              </p>
              <p>
                Özellikle Antalya yük asansörü ihtiyacı olan projelerde ve eşya taşıma asansörü Antalya taleplerinde doğru kurulum, sürecin hem güvenli hem de planlı ilerlemesini sağlar. Taşınma sürecinde{" "}
                <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">
                  Antalya asansörlü nakliyat
                </Link>{" "}
                ve{" "}
                <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">
                  Antalya evden eve nakliyat
                </Link>{" "}
                hizmetleriyle birlikte{" "}
                <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">
                  Antalya mobil asansör kiralama
                </Link>{" "}
                desteği kullanmak operasyonu ciddi şekilde hızlandırır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dış Cephe Asansörü Hangi İşlerde Kullanılır?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Dış cephe asansörü Antalya’da birçok farklı alanda kullanılmaktadır. Özellikle aşağıdaki işlemlerde büyük kolaylık sağlar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usageCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                    <Icon className="w-5 h-5 text-brand-yellow mb-3" />
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">İlgili Kullanım Alanları</h2>
            <div className="flex flex-col gap-3">
              <Link href="/cam-balkon-tasima-antalya" className="text-brand-yellow hover:underline">
                Antalya Cam Balkon Taşıma
              </Link>
              <Link href="/insaat-malzemesi-tasima-antalya" className="text-brand-yellow hover:underline">
                Antalya İnşaat Malzemesi Taşıma
              </Link>
              <Link href="/klima-tasima-antalya" className="text-brand-yellow hover:underline">
                Antalya Klima Taşıma
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dış Cephe Asansörü Kullanmanın Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Daha hızlı taşıma",
                "Daha güvenli süreç",
                "Bina içi zarar riskini azaltır",
                "Ağır yükler için ideal çözüm",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dış Cephe Asansörü Nasıl Kurulur?</h2>
            <div className="space-y-4">
              {["Ücretsiz keşif", "Alan analizi", "Araç yönlendirme", "15-20 dk kurulum", "Güvenli taşıma"].map(
                (step, idx) => (
                  <div key={step} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                    <p className="text-white font-semibold mb-1">Adım {idx + 1}</p>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-brand-yellow mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{step}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya Dış Cephe Asansörü Fiyatları</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Fiyatlar; kat sayısı, yük miktarı, kurulum alanı ve hizmet süresine göre değişir. Net fiyat için kısa bir keşif ile en doğru planlama yapılır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Kat sayısı", "Yük miktarı", "Kurulum alanı", "Süre"].map((item) => (
                <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-5 text-gray-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-200 font-medium mt-6">Net fiyat için hemen ücretsiz keşif ile teklif alın.</p>
            <p className="text-gray-300 mt-3">
              Net fiyat için ücretsiz keşif ile aynı gün teklif alabilirsiniz. Fiyatlandırma tamamen ihtiyaca göre belirlenir ve sürpriz maliyet oluşturmaz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya’da Dış Cephe Asansörü Neden Tercih Ediliyor?</h2>
            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Antalya’nın kent yapısında yüksek katlı apartmanlar, site projeleri ve yoğun yapılaşma dikkat çeker. Bu yapıların birçoğunda merdiven boşlukları dar, bina içi taşıma alanları ise sınırlıdır. Bu nedenle dış cephe asansörü, özellikle taşınma ve tadilat dönemlerinde en pratik çözümlerden biri haline gelir. Antalya yük asansörü hizmeti, ağır malzemelerin bina içine zarar vermeden hızlı şekilde ilgili kata ulaştırılmasına yardımcı olur.
              </p>
              <p>
                Ev taşıma ve ofis taşıma süreçlerinde büyük mobilyalar, beyaz eşyalar veya hassas parçalar merdivenlerden taşınırken hem zaman kaybı hem de hasar riski oluşturabilir. Eşya taşıma asansörü Antalya genelinde bu riski düşüren önemli bir destek sağlar. Eşyaların dış cepheden kontrollü taşınması, bina içinde duvar, korkuluk ve asansör kabini gibi alanların korunmasına katkı verir. Aynı zamanda taşıma ekibinin iş yükü daha dengeli dağıtılır.
              </p>
              <p>
                İnşaat ve tadilat işlerinde de benzer ihtiyaçlar ortaya çıkar. Çimento torbaları, cam balkon parçaları, seramik kutuları veya büyük ekipmanların üst katlara çıkarılması için mobil asansör kiralama desteği iş akışını hızlandırır. Doğru kurulum noktası belirlendiğinde hem güvenlik artar hem de taşıma süresi belirgin şekilde kısalır. Bu da proje teslim sürelerini daha öngörülebilir hale getirir.
              </p>
              <p>
                Dış cephe asansörünün profesyonel ekip tarafından kurulması kritik önem taşır. Yol genişliği, cephe erişimi, balkon/pencere kullanımı ve çevresel güvenlik unsurları doğru analiz edilmelidir. Antalya’da bu hizmeti tercih eden kullanıcılar, sadece bir taşıma aracı değil; planlama, kurulum ve operasyon desteğini birlikte almış olur. Sonuç olarak Antalya yük asansörü ve eşya taşıma asansörü çözümleri, zaman tasarrufu, güvenlik ve düzenli taşıma açısından güçlü bir avantaj sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Antalya’nın Hangi Bölgelerinde Hizmet Veriyoruz?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya genelinde dış cephe asansörü hizmeti veriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden Azer Asansör?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Deneyimli ekip", "Hızlı kurulum", "Sigortalı taşıma", "Aynı gün hizmet", "Ücretsiz keşif"].map((item) => (
              <div key={item} className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">İlgili Hizmetler</h2>
            <div className="flex flex-col gap-3">
              <Link href="/antalya-asansorlu-nakliyat" className="text-brand-yellow hover:underline">
                Antalya asansörlü nakliyat
              </Link>
              <Link href="/antalya-evden-eve-nakliyat" className="text-brand-yellow hover:underline">
                Antalya evden eve nakliyat
              </Link>
              <Link href="/antalya-mobil-asansor-kiralama" className="text-brand-yellow hover:underline">
                Antalya mobil asansör kiralama
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={[
          ...faqItems,
          {
            question: "Antalya dış cephe asansörü güvenli mi?",
            answer:
              "Evet, profesyonel kurulum ve operatör kontrolü ile tamamen güvenli şekilde çalışır.",
          },
          {
            question: "Dış cephe asansörü ile hangi eşyalar taşınabilir?",
            answer:
              "Mobilya, beyaz eşya, cam balkon, inşaat malzemeleri ve ağır yükler güvenle taşınabilir.",
          },
        ]}
        schemaId="faq-dis-cephe-asansoru"
        title="Sık Sorulan"
        highlight="Sorular"
        defaultOpenIndex={0}
      />

      <section className="py-12 md:py-16 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 mb-5">Bugün arayın, aynı gün planlama ve hızlı kurulum avantajından yararlanın.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Antalya Dış Cephe Asansörü İçin Hemen Fiyat Alın</h2>
          <p className="text-gray-300 text-lg mb-8">Bugün arayın, aynı gün kurulum ve net fiyat alın.</p>
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
          <p className="text-sm text-gray-400 mt-6">5.0 Google puanı · Hızlı servis</p>
        </div>
      </section>

      <section className="py-6 bg-brand-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-300 text-center">
            Antalya dış cephe asansörü ve yük asansörü kiralama hizmetlerimiz ile hızlı, güvenli ve profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
