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
    { title: "Mobilya Taşıma", description: "Büyük ve ağır mobilyaların merdivenden çıkarılmadan balkon veya pencereden güvenle taşınması.", icon: Armchair },
    { title: "Beyaz Eşya Taşıma", description: "Buzdolabı, çamaşır makinesi gibi beyaz eşyaların asansörlü sistem ile hasarsız taşınması.", icon: Refrigerator },
    { title: "Evden Eve Nakliyat Desteği", description: "Nakliyat firmalarına asansörlü taşıma desteği. Yüksek katlı binalarda hızlı ve güvenli çözüm.", icon: Truck },
    { title: "İnşaat Malzemesi Taşıma", description: "İnşaat ve tadilat süreçlerinde ağır malzemelerin kontrollü şekilde yüksek katlara çıkarılması.", icon: BrickWall },
    { title: "Moloz İndirme", description: "Tadilat sonrası oluşan molozların çevreye zarar vermeden hızlı ve düzenli şekilde indirilmesi.", icon: Trash2 },
    { title: "Yüksek Kat Çözümleri", description: "22. kata kadar ulaşan asansörümüzle her türlü eşyanın güvenle taşınması.", icon: Building2 },
];

const benefits = [
    { title: "22. Kata Kadar Ulaşım", description: "400kg kapasiteli asansörlerimiz Antalya'daki en yüksek binalara ulaşabilir.", icon: Award },
    { title: "Sertifikalı Operatörler", description: "İş güvenliği eğitimlerini tamamlamış uzman operatörler eşliğinde güvenli taşıma.", icon: HardHat },
    { title: "Sigortalı Hizmet", description: "Tüm taşıma işlemleri sigorta kapsamındadır. Eşyalarınız güvende.", icon: ShieldCheck },
    { title: "Hızlı Kurulum", description: "Asansörümüz kısa sürede kurulur, taşıma işleminiz vakit kaybetmeden başlar.", icon: Clock },
    { title: "Tüm Antalya'da Hizmet", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve tüm ilçelerde hizmetinizdeyiz.", icon: Check },
];

const faqs = [
    { question: "Asansörlü taşıma her binada yapılabiliyor mu?", answer: "Elektrik teli ve ağaç gibi engel yoksa hemen her binada kurulum yapılabilmektedir." },
    { question: "Kaçıncı kata kadar çıkıyor?", answer: "Asansörlerimiz 22. kata kadar ulaşmaktadır. 400kg yük kapasitesi ile büyük eşyaları taşır." },
    { question: "Mobilya firmaları için kiralama yapıyor musunuz?", answer: "Evet, mobilya firmaları, nakliyat şirketleri ve bireysel müşteriler için saatlik ve günlük kiralama yapıyoruz." },
    { question: "Kurulum ne kadar sürer?", answer: "Ortalama 15-20 dakika içinde asansör kurulumu tamamlanır ve taşıma işlemine başlanır." },
    { question: "Hafta sonu hizmet veriyor musunuz?", answer: "Evet, 7 gün 24 saat hizmetinizdeyiz." },
];

export const metadata: Metadata = {
    title: "Antalya Asansörlü Taşıma | Evden Eve ve Mobilya Asansörü",
    description: "Antalya'da evden eve nakliyat firmaları ve mobilyacılar için kiralık taşıma asansörü. Yüksek katlara mobilya ve beyaz eşya çıkarma hizmeti.",
    alternates: {
        canonical: "https://azerasansor.com/antalya-asansorlu-tasima",
    },
};

export default function MovingElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Asansörlü <br />
                        <span className="text-brand-yellow">Taşıma Hizmeti</span>
                    </>
                }
                subtitle="Evden eve nakliyat, mobilya teslimatı ve beyaz eşya taşıma işlemlerinizde bina merdivenlerini kullanmadan, balkon veya pencereden güvenli taşıma."
            />
            <Services
                title="Asansörlü Taşıma"
                highlight="Hizmetleri"
                services={services}
                ctaTitle="Asansörlü taşıma için hemen bizimle iletişime geçin."
                ctaDescription="Azer Asansör ile yüksek katlarda güvenli ve hızlı taşıma çözümleri."
            />
            <WhyUs
                title="Neden"
                highlight="Azer Asansör?"
                description="Antalya'da asansörlü taşıma hizmetinde en güvenilir çözüm ortağınız. 22. kata kadar ulaşan ekipmanlarımız ve uzman ekibimizle yanınızdayız."
                benefits={benefits}
                image="/images/project-lift.png"
                imageAlt="Antalya asansörlü taşıma hizmeti - Azer Asansör"
            />
            <FAQ
                faqs={faqs}
                schemaId="faq-asansorlu-tasima"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}