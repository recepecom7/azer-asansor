import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import {
  Truck, Building2, Armchair, Refrigerator,
  BrickWall, Award, ShieldCheck,
  Clock, Check, HardHat,
} from "lucide-react";

const services = [
  {
    title: "Antalya Evden Eve Nakliyat Hizmeti",
    description:
      "Antalya'da evden eve nakliyat hizmeti ile eşyalarınızı sigortalı ve güvenli şekilde yeni adresinize taşıyoruz. Paketleme, taşıma ve yerleştirme dahil tüm süreci profesyonel ekip ile yönetiyoruz.",
    icon: Truck,
    href: "/antalya-evden-eve-nakliyat",
  },
  {
    title: "Antalya Asansörlü Nakliyat Hizmeti",
    description:
      "Antalya asansörlü nakliyat hizmetimiz ile yüksek katlara hızlı ve güvenli taşıma sağlıyoruz. Mobil asansör sistemi sayesinde eşyalar merdiven kullanılmadan hasarsız şekilde taşınır.",
    icon: Building2,
    href: "/antalya-asansorlu-nakliyat",
    featured: true,
  },
  {
    title: "Antalya Mobil Asansör Kiralama",
    description:
      "Antalya mobil asansör kiralama hizmeti ile 22. kata kadar hızlı kurulum ve güvenli taşıma sağlanır. Dar merdivenli binalar ve yüksek kat taşımaları için ideal çözümdür.",
    icon: Armchair,
    href: "/antalya-mobil-asansor-kiralama",
    featured: true,
  },
  {
    title: "Antalya Ofis Taşıma Hizmeti",
    description:
      "Antalya ofis taşıma hizmeti ile iş kaybı yaşamadan hızlı ve planlı taşınma sağlıyoruz. Kurumsal çözümler ile süreci minimum kesinti ile yönetiyoruz.",
    icon: Clock,
    href: "/iletisim",
  },
  {
    title: "Beyaz Eşya Taşıma",
    description:
      "Buzdolabı, çamaşır makinesi gibi ağır eşyalar mobil asansör ile güvenli şekilde taşınır ve taşıma sırasında hasar riski minimuma indirilir.",
    icon: Refrigerator,
    href: "/antalya-asansorlu-tasima",
  },
  {
    title: "İnşaat Malzemesi Taşıma",
    description:
      "İnşaat ve tadilat süreçlerinde ağır malzemelerin mobil asansör ile hızlı ve güvenli şekilde taşınmasını sağlıyoruz.",
    icon: BrickWall,
    href: "/antalya-dis-cephe-asansoru",
  },
];

const benefits = [
  { title: "Antalya'da Deneyimli Taşıma Ekibi", description: "Yüksek kat taşımacılığı, evden eve nakliyat ve mobil asansör kullanımı konusunda saha deneyimine sahip ekibimizle çalışıyoruz.", icon: Award },
  { title: "22. Kata Kadar Mobil Asansör Desteği", description: "Dar merdivenli veya yüksek katlı binalarda eşyalarınızı bina dışından, hızlı ve kontrollü şekilde taşıyoruz.", icon: HardHat },
  { title: "Sigortalı ve Kontrollü Taşıma Süreci", description: "Eşyalarınızın güvenliği için taşıma sürecini planlı şekilde yürütüyor, uygun durumlarda sigortalı taşıma desteği sunuyoruz.", icon: ShieldCheck },
  { title: "Antalya Geneli Hızlı Hizmet", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve Antalya'nın çevre bölgelerine hızlı ekip yönlendirmesi sağlıyoruz.", icon: Clock },
  { title: "Ücretsiz Keşif ve Net Fiyat Bilgisi", description: "Taşınacak eşya, kat sayısı, mesafe ve asansör kurulum alanına göre size özel fiyat bilgisi sunuyoruz.", icon: Check },
];

const faqs = [
  {
    question: "Antalya evden eve nakliyat fiyatları ne kadar?",
    answer:
      "Antalya evden eve nakliyat fiyatları; taşınacak eşya miktarı, kat sayısı, mesafe ve mobil asansör kullanımına göre değişir. Net fiyat almak için ücretsiz keşif talep edebilir veya hemen arayarak detaylı bilgi alabilirsiniz.",
  },
  {
    question: "Mobil asansör kaçıncı kata kadar çıkıyor?",
    answer:
      "Mobil asansör sistemlerimiz Antalya'da genellikle 22. kata kadar ulaşabilmektedir. Yüksek katlı binalarda eşyalar bina dışından güvenli ve hızlı şekilde taşınır.",
  },
  {
    question: "Taşıma sırasında eşyalarım sigortalı mı?",
    answer:
      "Taşıma sürecinde eşyalarınızın güvenliği ön plandadır. Uygun durumlarda sigortalı taşıma hizmeti sunulmakta olup, süreç planlı ve kontrollü şekilde yürütülmektedir.",
  },
  {
    question: "Hafta sonu hizmet veriyor musunuz?",
    answer:
      "Evet, Antalya genelinde hafta sonu ve resmi tatiller dahil olmak üzere hizmet veriyoruz. Yoğunluk yaşamamak için önceden rezervasyon yapmanız önerilir.",
  },
  {
    question: "Şehirler arası nakliyat yapıyor musunuz?",
    answer:
      "Evet, Antalya çıkışlı şehirler arası nakliyat hizmeti sunuyoruz. Eşyalarınız kapalı kasa araçlar ile güvenli şekilde Türkiye'nin farklı şehirlerine taşınır.",
  },
  {
    question: "Asansörlü nakliyat mı normal nakliyat mı daha avantajlı?",
    answer:
      "Asansörlü nakliyat, özellikle yüksek katlı binalarda daha hızlı ve güvenlidir. Merdiven kullanımı azalır, eşyaların zarar görme riski düşer ve taşıma süresi önemli ölçüde kısalır.",
  },
  {
    question: "Antalya'da mobil asansör kiralama ne kadar sürer?",
    answer:
      "Mobil asansör kurulumu genellikle 15–20 dakika sürer. Taşıma süresi ise eşya miktarı, kat sayısı ve kurulum alanına göre değişir.",
  },
  {
    question: "Asansör kurulumu için izin gerekiyor mu?",
    answer:
      "Bazı durumlarda bina yönetimi veya belediye izni gerekebilir. Detaylar lokasyona göre değiştiği için ekiplerimiz süreç hakkında sizi bilgilendirir.",
  },
];

export const metadata: Metadata = {
  title: "Antalya Nakliyat ve Kiralık Asansör | Azer Asansör",
  description: "Antalya evden eve nakliyat ve mobil asansör kiralama hizmeti. Profesyonel ekip, sigortalı taşıma, 22. kata kadar asansör. Muratpaşa, Kepez, Konyaaltı, Lara ve tüm Antalya.",
  alternates: {
    canonical: "https://www.azerasansor.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <Hero />
      <TrustBar />

      <Services
        title="Hizmetlerimiz"
        highlight=""
        services={services}
        ctaTitle="Antalya'da Asansörlü Nakliyat İçin Hemen Fiyat Alın"
        ctaDescription="Aynı gün keşif, hızlı kurulum ve sigortalı taşıma için Azer Asansör ekibiyle iletişime geçin."
      />
      <WhyUs
        title="Neden"
        highlight="Azer Asansör?"
        description="Antalya'da asansörlü nakliyat, mobil asansör kiralama ve evden eve taşıma hizmetlerinde güvenli, hızlı ve planlı çözümler sunuyoruz. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aynı gün hizmet imkanı ile taşınma sürecinizi kolaylaştırıyoruz."
        benefits={benefits}
        image="/new-image.jpg"
        imageAlt="Antalya mobil asansör kurulumu"
        ctaText="Antalya asansörlü nakliyat veya mobil asansör kiralama için hemen arayın ya da WhatsApp'tan hızlı teklif alın."
      />
      <FAQ
        faqs={faqs}
        schemaId="faq-homepage"
        title="Sık Sorulan"
        highlight="Sorular"
        ctaText="Antalya asansörlü nakliyat veya mobil asansör kiralama hizmeti için hemen arayın ya da WhatsApp'tan hızlı teklif alın."
      />
      <Footer />
    </main>
  );
}
