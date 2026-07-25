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
  title: "Antalya'da Taşınmadan Önce Yapılması Gereken 10 Hazırlık",
  description:
    "Antalya'da ev taşımadan önce izlemeniz gereken 10 adımlık hazırlık rehberi: kutulama, envanter, sigorta, asansör izni ve daha fazlası.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/antalya-tasinma-hazirlik-rehberi",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Antalya'da Taşınmadan Önce Yapılması Gereken 10 Hazırlık",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
};

const steps = [
  {
    title: "1. Eşya Envanteri Çıkarın",
    text: "Taşınmadan önce evinizdeki tüm eşyaların bir listesini çıkarın. Bu liste hem nakliyat firmasından doğru teklif almanızı sağlar hem de taşınma sonrası hiçbir şeyin eksik kalmadığını kontrol etmenize yardımcı olur. Özellikle oda bazında hazırlanan bir envanter, keşif sırasında ekip ile aranızdaki iletişimi de hızlandırır.",
  },
  {
    title: "2. Kutulama ve Paketleme Malzemesi Temin Edin",
    text: "Yeterli sayıda karton kutu, baloncuklu naylon, streç film ve koli bandı önceden hazırlanmalıdır. Oda oda ilerleyerek eşyaları kategorilere ayırmak, yeni evde yerleştirme sürecini de kolaylaştırır. Kutuların üzerine hangi odaya ait olduğunu yazmak, boşaltma aşamasında zaman kaybını önemli ölçüde azaltır.",
  },
  {
    title: "3. Kırılacak Eşyaları Ayrı İşaretleyin",
    text: "Cam, porselen ve elektronik gibi kırılgan eşyalar ayrı kutulara konulmalı ve üzerine \"Kırılır\" ibaresi yazılmalıdır. Bu eşyaların taşıma sırasında ekip tarafından öncelikli olarak dikkat edilmesini sağlar. Kutu içlerinde boşluk kalmaması için gazete kağıdı veya kumaş parçalarıyla doldurma yapılması hasar riskini daha da azaltır.",
  },
  {
    title: "4. Elektronik Cihazları Hazırlayın",
    text: "Televizyon, bilgisayar ve beyaz eşyaların kablolarını sökmeden önce fotoğraflarını çekin; bu, yeni evde bağlantıları yeniden yaparken işinizi kolaylaştırır. Mümkünse cihazları orijinal kutularında taşımak hasar riskini azaltır. Hassas elektronik cihazları taşımadan en az birkaç saat önce kapatıp soğumasını beklemek de önerilir.",
  },
  {
    title: "5. Çocuk ve Evcil Hayvan Planı Yapın",
    text: "Taşınma günü evde yoğun hareketlilik olacağından çocuklar ve evcil hayvanlar için ayrı bir gözetim planı yapılması önerilir. Güvenli bir alanda tutulmaları hem onların hem de taşıma ekibinin işini kolaylaştırır. Mümkünse taşınma gününün büyük bölümünü bir yakınınızın yanında geçirmeleri stresi de azaltır.",
  },
  {
    title: "6. Yeni Adres Bilgilendirmelerini Tamamlayın",
    text: "Nüfus müdürlüğü, banka, e-fatura ve abonelik hizmetleri gibi kurumlara adres değişikliğini önceden bildirin. Böylece taşınma sonrası önemli evrak ve faturaların eski adrese gitmesi önlenir. İnternet ve doğalgaz gibi hizmetlerin yeni adreste taşınma günü aktif olması için başvuruları birkaç gün önceden yapmanız gerekir.",
  },
  {
    title: "7. Sigorta Durumunu Kontrol Edin",
    text: "Taşınacak eşyaların nakliyat sırasında sigorta kapsamında olup olmadığını nakliyat firmanızla netleştirin. Değerli eşyalar için ek sigorta seçenekleri olup olmadığını sormak, olası bir hasar durumunda güvence sağlar. Sigorta kapsamının hangi durumları içerdiğini yazılı olarak teyit etmeniz ileride yaşanabilecek anlaşmazlıkları önler.",
  },
  {
    title: "8. Asansör ve Otopark İzni Alın",
    text: "Hem eski hem de yeni binada apartman yönetiminden asansör kullanım izni ve nakliyat aracı için otopark/yükleme alanı ayarlayın. Yüksek katlı binalarda mobil asansör kullanılacaksa bina yönetimine önceden bilgi verilmesi süreci hızlandırır. Dar sokaklarda araç park kısıtlaması olup olmadığını da taşınma öncesinde kontrol etmeniz gerekir.",
  },
  {
    title: "9. Değerli Eşyaları Ayrı Taşıyın",
    text: "Nakit, mücevher, önemli evraklar ve dijital yedekler gibi değerli eşyaları nakliyat aracına vermek yerine kendi aracınızla veya yanınızda taşımanız önerilir. Bu, kaybolma veya hasar riskini tamamen ortadan kaldırır. Tapu, kimlik ve sözleşme gibi belgeleri ayrı bir dosyada tutmak, taşınma sonrası ilk günlerde işinizi kolaylaştırır.",
  },
  {
    title: "10. Taşınma Günü Kontrol Listesi Hazırlayın",
    text: "Taşınma sabahı unutulmaması gereken işlemleri (sayaç okumaları, anahtar teslimi, son kontrol) içeren kısa bir liste hazırlayın. Bu liste, yoğun geçen taşınma gününde hiçbir adımın atlanmamasını sağlar. Eski evden ayrılmadan önce tüm odaları, dolap içlerini ve balkonu son kez kontrol etmek unutulan eşya riskini ortadan kaldırır.",
  },
];

const faqs = [
  {
    question: "Taşınma hazırlığına ne zaman başlamalıyım?",
    answer:
      "Taşınma tarihinden en az 1-2 hafta önce envanter çıkarma ve kutulama işlemine başlamak, son güne yoğun iş yükü kalmasını önler.",
  },
  {
    question: "Paketleme hizmetini nakliyat firması sağlıyor mu?",
    answer:
      "Evet, profesyonel nakliyat firmaları paketleme malzemesi ve işçiliği dahil hizmet sunabilir. Talebinizi keşif sırasında iletmeniz yeterlidir.",
  },
  {
    question: "Asansör izni kimden alınır?",
    answer:
      "Asansör ve otopark izni genellikle apartman/site yönetiminden alınır. Yüksek katlı binalarda mobil asansör kullanılacaksa bina yönetimine önceden bilgi verilmesi gerekir.",
  },
  {
    question: "Değerli eşyalarımı nakliyat firmasına teslim edebilir miyim?",
    answer:
      "Nakit, mücevher ve önemli evraklar gibi yüksek değerli eşyaları kendi kontrolünüzde taşımanız her zaman daha güvenlidir.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-tasinma-hazirlik-rehberi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Antalya&apos;da Taşınmadan Önce Yapılması Gereken 10 Hazırlık</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 25 Temmuz 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sorunsuz bir taşınma süreci, doğru planlamayla başlar. Antalya&apos;da{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              evden eve nakliyat
            </Link>{" "}
            öncesinde atacağınız 10 basit adım, hem zamandan tasarruf etmenizi hem de eşyalarınızın hasarsız taşınmasını sağlar.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {steps.map((step) => (
            <div key={step.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
              <p className="text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-brand-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-300 text-lg mb-6">
            Hazırlık listesini tamamladınız mı? Antalya{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
              asansörlü nakliyat
            </Link>{" "}
            desteği için hemen arayın veya WhatsApp&apos;tan yazın.
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

      <FAQ faqs={faqs} schemaId="faq-blog-tasinma-hazirlik-rehberi" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
