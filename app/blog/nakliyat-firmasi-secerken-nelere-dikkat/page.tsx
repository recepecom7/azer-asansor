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
  title: "Nakliyat Firması Seçerken Nelere Dikkat Etmeli?",
  description:
    "Antalya'da nakliyat firması seçerken sigorta, yorumlar, fiyat şeffaflığı, ekipman ve sözleşme şartları gibi kritik noktalar.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog/nakliyat-firmasi-secerken-nelere-dikkat",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Nakliyat Firması Seçerken Nelere Dikkat Etmeli?",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
};

const criteria = [
  {
    title: "Sigorta Kapsamı Var mı?",
    text: "Eşyalarınızın taşıma sırasında sigorta kapsamında olup olmadığını mutlaka sorun. Sigortalı taşıma, olası bir hasar durumunda maddi kaybınızı önler ve firmanın profesyonelliğinin de bir göstergesidir. Sigorta kapsamının hangi durumları içerdiğini ve talep sürecinin nasıl işlediğini önceden netleştirmeniz ileride yaşanabilecek anlaşmazlıkları önler.",
  },
  {
    title: "Yorumlar ve Referanslar",
    text: "Google puanı, müşteri yorumları ve tamamlanmış iş referansları, firmanın gerçek hizmet kalitesini anlamanın en pratik yoludur. Özellikle yakın tarihli ve detaylı yorumlara dikkat edin. Sosyal medya hesaplarındaki paylaşımlar ve önceki müşterilerin fotoğraflı geri bildirimleri de firmanın operasyon kalitesi hakkında fikir verir.",
  },
  {
    title: "Fiyat Şeffaflığı",
    text: "Net ve yazılı bir fiyat teklifi almadan anlaşma yapmaktan kaçının. Şeffaf firmalar, keşif sonrası fiyata nelerin dahil olduğunu (paketleme, asansör, sigorta) açıkça belirtir ve sürpriz ek ücret çıkarmaz. Piyasa ortalamasının çok altında verilen tekliflere karşı temkinli yaklaşmak, taşınma günü yaşanabilecek ek ücret sürprizlerini önler.",
  },
  {
    title: "Ekipman ve Araç Durumu",
    text: "Kapalı kasa araçlar, mobil asansör ve profesyonel paketleme malzemeleri kullanan firmalar eşyalarınızı çok daha güvenli taşır. Ekipman kalitesi düşük firmalar hasar riskini artırır. Aracın bakımlı olması ve mobil asansörün düzenli teknik kontrolden geçmesi, taşınma gününde yaşanabilecek arıza riskini de azaltır.",
  },
  {
    title: "Sözleşme Şartları",
    text: "Taşıma öncesinde yazılı bir sözleşme veya en azından yazılı bir teklif belgesi talep edin. Sözleşmede hizmet kapsamı, fiyat ve sorumluluk maddelerinin net olması, ileride yaşanabilecek anlaşmazlıkları önler. Hasar durumunda izlenecek prosedürün ve tazminat sürecinin sözleşmede açıkça yer alması, karşılıklı güveni artıran önemli bir unsurdur.",
  },
  {
    title: "İletişim Hızı ve Erişilebilirlik",
    text: "Telefon veya WhatsApp üzerinden hızlı geri dönüş yapan, sorularınızı net cevaplayan bir firma, taşınma günü de aynı düzeyde koordinasyon sağlar. İletişimde yaşanan gecikmeler genellikle operasyonel aksaklıkların da habercisidir. Keşif randevusuna zamanında gelen ve süreci adım adım anlatan bir ekip, güvenilirliğin en somut göstergelerinden biridir.",
  },
];

const summary =
  "Nakliyat firması seçimi, taşınma sürecinizin ne kadar sorunsuz geçeceğini belirleyen en kritik adımdır. Sigorta, şeffaf fiyatlandırma, kaliteli ekipman ve net bir sözleşme gibi unsurları önceden değerlendirmek, hem maddi hem de manevi açıdan büyük bir güvence sağlar. Birden fazla firmadan teklif alıp karşılaştırmak da doğru kararı vermenize yardımcı olur.";

const faqs = [
  {
    question: "Nakliyat firmasından mutlaka sigorta istemeli miyim?",
    answer:
      "Evet, sigortalı taşıma eşyalarınızın güvenliği için önemli bir güvencedir. Firmayla anlaşmadan önce sigorta kapsamını ve hasar durumunda izlenecek süreci netleştirmenizi öneririz.",
  },
  {
    question: "Fiyat teklifini nasıl karşılaştırmalıyım?",
    answer:
      "Sadece toplam fiyata değil, tekliflere nelerin dahil olduğuna (paketleme, sigorta, asansör desteği) bakarak karşılaştırma yapmanız daha doğru bir değerlendirme sağlar. Piyasa ortalamasının çok altındaki tekliflere karşı temkinli olmakta fayda vardır.",
  },
  {
    question: "Ücretsiz keşif her firmada var mı?",
    answer:
      "Çoğu profesyonel nakliyat firması ücretsiz keşif hizmeti sunar. Keşif sırasında net fiyat ve hizmet kapsamı belirlenir, bu da taşınma günü sürpriz maliyetle karşılaşma riskini ortadan kaldırır.",
  },
  {
    question: "Sözleşme olmadan taşınma yapılabilir mi?",
    answer:
      "Mümkünse yazılı bir teklif veya sözleşme almadan anlaşma yapmaktan kaçınmanızı öneririz; bu, her iki tarafın da haklarını korur ve hizmet kapsamını netleştirir.",
  },
  {
    question: "Yorumlara ne kadar güvenmeliyim?",
    answer:
      "Yakın tarihli, detaylı ve fotoğraflı yorumlar genellikle daha güvenilir bir fikir verir. Tek bir yorum yerine genel puan ortalamasına ve yorum sayısına bakmanız daha sağlıklı bir değerlendirme sağlar.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Script
        id="blogposting-schema-nakliyat-firmasi-secerken"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nakliyat Firması Seçerken Nelere Dikkat Etmeli?</h1>
          <p className="text-sm text-gray-400 mb-4">Güncelleme: 25 Temmuz 2026</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Doğru nakliyat firmasını seçmek, taşınma sürecinizin hem güvenli hem de sorunsuz geçmesini sağlar. Antalya&apos;da{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-evden-eve-nakliyat">
              evden eve nakliyat
            </Link>{" "}
            firması ararken dikkat etmeniz gereken 6 temel kriteri bu yazıda bulabilirsiniz. Yanlış firma seçimi hem maddi kayba hem de eşyalarınızın zarar görmesine yol açabileceğinden, karar vermeden önce bu kriterleri dikkatle değerlendirmenizi öneririz.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {criteria.map((item) => (
            <div key={item.title} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
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
            Sigortalı, şeffaf fiyatlı ve Antalya{" "}
            <Link className="text-brand-yellow hover:underline" href="/antalya-asansorlu-nakliyat">
              asansörlü nakliyat
            </Link>{" "}
            desteği veren bir ekip arıyorsanız hemen arayın veya WhatsApp&apos;tan yazın.
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

      <FAQ faqs={faqs} schemaId="faq-blog-nakliyat-firmasi-secerken" title="Sık Sorulan" highlight="Sorular" defaultOpenIndex={0} />
      <Footer />
    </main>
  );
}
