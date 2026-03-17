import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import {
  Truck, Building2, Armchair, Refrigerator,
  BrickWall, Trash2, Award, ShieldCheck,
  Clock, Check, HardHat,
} from "lucide-react";

const services = [
  { title: "Evden Eve Nakliyat", description: "Profesyonel ekip, sigortalı taşıma ve ambalajlama ile eşyalarınız güvenle yeni adresinize ulaşır.", icon: Truck },
  { title: "Asansörlü Nakliyat", description: "Yüksek katlarda mobil asansörümüz ile eşyalarınız merdivenden çıkarılmadan güvenle taşınır.", icon: Building2 },
  { title: "Mobilya Taşıma", description: "Büyük ve ağır mobilyaların bina içine zarar vermeden yüksek katlara güvenle çıkarılması.", icon: Armchair },
  { title: "Beyaz Eşya Taşıma", description: "Buzdolabı, çamaşır makinesi gibi beyaz eşyaların mobil asansör ile hasarsız taşınması.", icon: Refrigerator },
  { title: "İnşaat Malzemesi Taşıma", description: "İnşaat ve tadilat süreçlerinde ağır malzemelerin kontrollü ve güvenli şekilde taşınması.", icon: BrickWall },
  { title: "Moloz İndirme", description: "Tadilat sonrası molozların çevreye zarar vermeden hızlı ve düzenli şekilde indirilmesi.", icon: Trash2 },
];

const benefits = [
  { title: "10+ Yıllık Sektör Tecrübesi", description: "Antalya'da konut, inşaat, tadilat ve taşımacılık projelerinde yıllara dayanan deneyim.", icon: Award },
  { title: "Sertifikalı ve Deneyimli Operatörler", description: "İş güvenliği eğitimlerini tamamlamış, alanında uzman profesyonel ekip.", icon: HardHat },
  { title: "Sigortalı Taşımacılık", description: "Tüm çalışmalar yasal mevzuata uygun, sigortalı ve kontrollü şekilde gerçekleştirilir.", icon: ShieldCheck },
  { title: "7/24 Hızlı Servis", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve çevresinde hızlı ve zamanında hizmet.", icon: Clock },
  { title: "Ücretsiz Keşif", description: "Taşınma öncesi ücretsiz keşif yapıyor, size özel fiyat teklifi sunuyoruz.", icon: Check },
];

const faqs = [
  { question: "Antalya evden eve nakliyat fiyatları ne kadar?", answer: "Fiyatlar taşınacak eşya miktarına, mesafeye ve kat sayısına göre değişmektedir. Ücretsiz keşif için hemen arayın." },
  { question: "Mobil asansör kaçıncı kata kadar çıkıyor?", answer: "Asansörlerimiz 22. kata kadar ulaşmaktadır. 400kg yük kapasitesi ile büyük eşyaları güvenle taşır." },
  { question: "Taşıma sırasında eşyalarım sigortalı mı?", answer: "Evet, tüm taşımalarımız sigorta kapsamındadır. Olası bir hasar durumunda tam güvence sağlanır." },
  { question: "Hafta sonu hizmet veriyor musunuz?", answer: "Evet, 7 gün 24 saat hizmetinizdeyiz. Hafta sonu ve resmi tatillerde de taşınma gerçekleştirebilirsiniz." },
  { question: "Şehirler arası nakliyat yapıyor musunuz?", answer: "Evet, Antalya'dan Türkiye'nin her iline kapalı kasa araçlarımızla güvenli şehirlerarası taşımacılık yapıyoruz." },
];

export const metadata: Metadata = {
  title: "Antalya Nakliyat ve Kiralık Asansör | Azer Asansör",
  description: "Antalya evden eve nakliyat ve mobil asansör kiralama hizmeti. Profesyonel ekip, sigortalı taşıma, 22. kata kadar asansör. Muratpaşa, Kepez, Konyaaltı, Lara ve tüm Antalya.",
  alternates: {
    canonical: "https://azerasansor.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <Hero
        title={
          <>
            Antalya Nakliyat <br />
            <span className="text-brand-yellow">&amp; Kiralık Asansör</span> Hizmetleri
          </>
        }
        subtitle="Antalya ve çevre illerde güvenli evden eve nakliyat ve profesyonel mobil asansör kiralama çözümleri. Yüksek katlara kolay, güvenli ve sorunsuz şekilde ulaşın."
      />
      <Services
        title="Hizmetlerimiz"
        highlight=""
        services={services}
        ctaTitle="Nakliyat veya asansör kiralama için hemen arayın."
        ctaDescription="Azer Asansör ile güvenli, hızlı ve profesyonel çözümler. Ücretsiz keşif ve fiyat teklifi."
      />
      <WhyUs
        title="Neden"
        highlight="Azer Asansör?"
        description="Antalya ve çevre illerde evden eve nakliyat ve asansör kiralama hizmetlerinde güvenilir çözüm ortağınız. 10+ yıllık deneyim, sertifikalı ekip ve tam sigorta güvencesi."
        benefits={benefits}
        image="/images/project-lift.png"
        imageAlt="Antalya nakliyat ve asansör kiralama - Azer Asansör"
      />
      <FAQ
        faqs={faqs}
        schemaId="faq-homepage"
        title="Sık Sorulan"
        highlight="Sorular"
      />
      <Footer />
    </main>
  );
}