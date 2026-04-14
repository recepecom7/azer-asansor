import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import Link from "next/link";
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
    canonical: "https://www.azerasansor.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <Hero
        title={
          <>
            Antalya Mobil Asansör Kiralama <br />
            <span className="text-brand-yellow">ve Asansörlü Nakliyat</span> Hizmeti
          </>
        }
        subtitle="Antalya ve çevre illerde güvenli evden eve nakliyat ve profesyonel mobil asansör kiralama çözümleri. Yüksek katlara kolay, güvenli ve sorunsuz şekilde ulaşın."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Azer Asansör olarak Antalya odaklı hizmet veriyor; <span className="font-semibold text-brand-black">Antalya nakliyat</span> ihtiyaçlarınızda ev taşıma, yüksek kat taşımacılığı ve <span className="font-semibold text-brand-black">mobil asansör</span> desteğini tek süreçte yönetiyoruz. Deneyimli ekibimiz, sigortalı hizmet anlayışımız ve hızlı servisimizle taşınma stresini azaltıyoruz.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-5">
              En çok talep gören hizmetlerimiz:{" "}
              <Link href="/antalya-mobil-asansor-kiralama" className="font-semibold text-brand-black hover:text-brand-yellow transition-colors">
                Antalya mobil asansör kiralama
              </Link>{" "}
              ve{" "}
              <Link href="/antalya-asansorlu-nakliyat" className="font-semibold text-brand-black hover:text-brand-yellow transition-colors">
                Antalya asansörlü nakliyat
              </Link>
              .
            </p>
            <div className="mt-6 text-gray-700 text-lg">
              <span className="font-semibold text-brand-black">Hemen arayın ve ücretsiz keşif ile net fiyat alın.</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-beige border border-gray-100 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Yüksek katlı taşınma süreçlerinde güvenli ve hızlı ilerlemek için hem ekip hem ekipman tarafını birlikte planlarız. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya’nın tüm ilçelerinde hizmetinizdeyiz.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-brand-black mb-2">Mobil Asansör Kiralama</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mobilya, beyaz eşya ve malzemeleri bina içini yormadan dış cepheden taşımaya yardımcı olur. 22. kata kadar ulaşan sistem ile süreç daha düzenli ilerler.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-brand-black mb-2">Asansörlü Nakliyat</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ev taşıma sürecinde asansör avantajını kullanarak hız ve güvenliği artırır. Büyük parçaların merdivenden taşınma riskini azaltır, taşıma akışını planlı hale getirir.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-brand-black mb-2">Evden Eve Nakliyat</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Paketleme, taşıma ve yerleştirme adımlarını organize eder; eşyalarınızı güvenle yeni adresinize ulaştırırız. Sigortalı taşımacılık ile içiniz rahat eder.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-brand-black mb-2">Yüksek Kat Taşımacılığı</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yüksek katlarda bina içi taşımanın zorlaştığı durumlarda doğru kurulum ve operatör yönetimi ile hızlı ve güvenli taşıma sağlar.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-gray-700">
                <span className="font-semibold text-brand-black">Hızlı servis</span>, <span className="font-semibold text-brand-black">sigortalı hizmet</span> ve <span className="font-semibold text-brand-black">deneyim</span> odaklı çalışıyoruz.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services
        title="Hizmetlerimiz"
        highlight=""
        services={services}
        ctaTitle="Nakliyat veya asansör kiralama için hemen arayın."
        ctaDescription="Azer Asansör ile güvenli, hızlı ve profesyonel çözümler. Hemen arayın ve ücretsiz keşif ile net fiyat alın."
      />
      <WhyUs
        title="Neden"
        highlight="Azer Asansör?"
        description="Antalya ve çevre illerde evden eve nakliyat ve asansör kiralama hizmetlerinde güvenilir çözüm ortağınız. 10+ yıllık deneyim, sertifikalı ekip ve tam sigorta güvencesi."
        benefits={benefits}
        image="/new-image.jpg"
        imageAlt="Antalya mobil asansör kurulumu"
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