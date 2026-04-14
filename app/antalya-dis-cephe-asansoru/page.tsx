import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import {
    BrickWall, Trash2, Building2, Hammer,
    PaintBucket, HardHat, Award, ShieldCheck,
    Clock, Check, Wrench,
} from "lucide-react";

const services = [
    { title: "İnşaat Malzemesi Taşıma", description: "İnşaat projelerinde ağır ve hacimli malzemelerin yüksek katlara kontrollü ve güvenli şekilde çıkarılması.", icon: BrickWall },
    { title: "Moloz İndirme", description: "Tadilat ve yıkım sonrası oluşan molozların çevreye zarar vermeden hızlı ve düzenli şekilde indirilmesi.", icon: Trash2 },
    { title: "Cam & Balkon Montajı", description: "Cam balkon, PVC pencere ve cephe kaplama montajlarında güvenli çalışma platformu sağlanması.", icon: Building2 },
    { title: "Tadilat Malzemesi", description: "Tadilat süreçlerinde seramik, alçıpan, boya gibi malzemelerin yüksek katlara taşınması.", icon: Hammer },
    { title: "Boya & Cephe Çalışmaları", description: "Dış cephe boya ve yalıtım projelerinde ekip ve malzeme taşıması için asansör kiralama.", icon: PaintBucket },
    { title: "Çatı & Teras Çalışmaları", description: "Çatı tamiri, teras düzenlemesi ve çatıya malzeme çıkarma işlemleri için özel asansör çözümleri.", icon: Wrench },
];

const benefits = [
    { title: "İnşaat Sektörü Deneyimi", description: "Antalya'daki yüzlerce inşaat ve tadilat projesinde güvenilir dış cephe asansörü hizmeti verdik.", icon: Award },
    { title: "Sertifikalı Operatörler", description: "İş güvenliği eğitimlerini tamamlamış uzman operatörler eşliğinde güvenli çalışma.", icon: HardHat },
    { title: "Sigortalı Hizmet", description: "Tüm çalışmalar yasal iş güvenliği mevzuatına uygun, tam sigorta kapsamında gerçekleştirilir.", icon: ShieldCheck },
    { title: "Hızlı Mobilizasyon", description: "Şantiyenize kısa sürede ulaşır, asansörü kurarak çalışmaya başlarız. Zaman kaybettirmeyiz.", icon: Clock },
    { title: "Tüm Antalya'da Hizmet", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve tüm ilçelerde hizmetinizdeyiz.", icon: Check },
];

const faqs = [
    { question: "Dış cephe asansörü ile kaçıncı kata kadar çıkılabiliyor?", answer: "Asansörlerimiz 22. kata kadar ulaşmaktadır. Farklı yüksekliklere uygun ekipmanlarımız mevcuttur." },
    { question: "İnşaat şantiyeleri için uzun süreli kiralama yapıyor musunuz?", answer: "Evet, günlük kiralamanın yanı sıra haftalık ve aylık uzun süreli kiralama seçenekleri de mevcuttur." },
    { question: "Asansör kurulumu ne kadar sürer?", answer: "Standart kurulum ortalama 20-30 dakika içinde tamamlanır ve hemen kullanıma hazır hale gelir." },
    { question: "Moloz indirme için kapasite ne kadar?", answer: "Asansörlerimizin yük kapasitesi 300-400kg arasındadır. Moloz torbası ve konteyner ile uyumludur." },
    { question: "Hafta sonu ve gece çalışma yapıyor musunuz?", answer: "Evet, şantiye ihtiyaçlarını karşılamak için 7 gün 24 saat hizmet veriyoruz." },
];

export const metadata: Metadata = {
    title: "Antalya Dış Cephe Asansörü Kiralama | İnşaat ve Moloz Asansörü",
    description: "Antalya dış cephe asansörü kiralama hizmetleri. İnşaat malzemesi çıkarma, moloz indirme ve cam balkon montajı için profesyonel cephe asansörü.",
    alternates: {
        canonical: "https://www.azerasansor.com/antalya-dis-cephe-asansoru",
    },
};

export default function FacadeElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Dış Cephe <br />
                        <span className="text-brand-yellow">Asansörü Kiralama</span>
                    </>
                }
                subtitle="İnşaat projeleriniz, tadilat işleriniz ve malzeme taşıma ihtiyaçlarınız için yüksek katlara ulaşan profesyonel dış cephe asansörü çözümleri."
            />
            <Services
                title="Dış Cephe Asansörü"
                highlight="Hizmetleri"
                services={services}
                ctaTitle="Dış cephe asansörü için hemen bizimle iletişime geçin."
                ctaDescription="Şantiyenize en hızlı şekilde ulaşıyor, kurulum yapıyor ve çalışmaya başlıyoruz."
            />
            <WhyUs
                title="Neden"
                highlight="Azer Asansör?"
                description="Antalya'da inşaat ve tadilat sektörünün güvenilir dış cephe asansörü çözüm ortağı. Hızlı mobilizasyon, sertifikalı ekip ve tam sigorta güvencesi."
                benefits={benefits}
                image="/new-image.jpg"
                imageAlt="Antalya mobil asansör kurulumu"
            />
            <FAQ
                faqs={faqs}
                schemaId="faq-dis-cephe-asansoru"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}