import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import {
    Armchair, Refrigerator, BrickWall,
    Trash2, Truck, Building2,
    Award, ShieldCheck, Clock, Check, HardHat,
} from 'lucide-react';

const services = [
    { title: 'Mobilya Taşıma', description: 'Büyük, hacimli ve ağır mobilyaların bina içine zarar vermeden yüksek katlara çıkarılması.', icon: Armchair },
    { title: 'Beyaz Eşya Taşıma', description: 'Buzdolabı, çamaşır makinesi gibi beyaz eşyaların mobil asansör ile güvenle taşınması.', icon: Refrigerator },
    { title: 'İnşaat Malzemesi', description: 'İnşaat ve tadilat süreçlerinde ağır malzemelerin kontrollü ve güvenli şekilde taşınması.', icon: BrickWall },
    { title: 'Moloz İndirme', description: 'Tadilat sonrası molozların çevreye zarar vermeden hızlı ve düzenli şekilde indirilmesi.', icon: Trash2 },
    { title: 'Nakliyat Desteği', description: 'Taşınma sürecinde eşyaların yüksek katlara sorunsuz ve zamanında taşınmasına destek.', icon: Truck },
    { title: 'Yüksek Kat Çözümleri', description: 'Mobil asansör ile istenilen her türlü eşyanın yüksek katlara güvenle çıkarılması.', icon: Building2 },
];

const benefits = [
    { title: '10+ Yıllık Tecrübe', description: 'Antalya\'da konut, inşaat ve tadilat projelerinde yıllara dayanan deneyim.', icon: Award },
    { title: 'Sertifikalı Operatörler', description: 'İş güvenliği eğitimlerini tamamlamış uzman profesyonel ekip.', icon: HardHat },
    { title: 'Modern Ekipman', description: 'Düzenli bakımlı, 22. kata kadar ulaşan mobil ve dış cephe asansörleri.', icon: ShieldCheck },
    { title: 'Tam Sigorta Güvencesi', description: 'Tüm çalışmalar yasal mevzuata uygun, sigortalı şekilde gerçekleştirilir.', icon: Check },
    { title: 'Hızlı Servis', description: 'Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı\'nda hızlı hizmet.', icon: Clock },
];

const faqs = [
    { question: 'Mobil asansör kaçıncı kata kadar çıkıyor?', answer: 'Asansörlerimiz 22. kata kadar ulaşmaktadır. 400kg yük kapasitesi ile büyük eşyaları güvenle taşır.' },
    { question: 'Kiralama saatlik mi günlük mi?', answer: 'Her iki seçenek de mevcuttur. Saatlik veya günlük kiralama yapabilirsiniz. Fiyat için hemen arayın.' },
    { question: 'Her binada kurulum yapılabiliyor mu?', answer: 'Elektrik teli ve ağaç gibi engelleyici faktörler yoksa her binada kurulum yapılabilmektedir.' },
    { question: 'Operatör dahil mi?', answer: 'Evet, tüm kiralama hizmetlerimizde sertifikalı operatörümüz dahildir.' },
    { question: 'Hafta sonu hizmet veriyor musunuz?', answer: 'Evet, 7 gün 24 saat hizmetinizdeyiz.' },
];

export const metadata: Metadata = {
    title: 'Antalya Mobil Asansör Kiralama | 22. Kata Kadar Kiralık Asansör',
    description: 'Antalya\'da 22. kata kadar ulaşan mobil asansör kiralama hizmeti. Saatlik ve günlük kiralama seçenekleri.',
    alternates: { canonical: 'https://azerasansor.com/antalya-mobil-asansor-kiralama' },
};

export default function MobileElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={<>Antalya Mobil Asansör <br /><span className="text-brand-yellow">Kiralama Hizmeti</span></>}
                subtitle="Antalya'nın tüm ilçelerinde 22. kata kadar ulaşan, 400kg kapasiteli kiralık mobil asansörlerimizle işinizi kolaylaştırın."
            />
            <Services
                title="Mobil Asansör"
                highlight="Hizmetleri"
                services={services}
                ctaTitle="Mobil asansör ihtiyacınız için hemen bizimle iletişime geçin."
                ctaDescription="Azer Asansör ile güvenli, hızlı ve profesyonel çözümler."
            />
            <WhyUs
                title="Neden"
                highlight="Azer Asansör?"
                description="Antalya ve çevre illerde dış cephe asansörü, mobil asansör ve yük asansörü hizmetlerinde güvenilir çözüm ortağınız."
                benefits={benefits}
                image="/images/project-lift.png"
                imageAlt="Antalya mobil asansör kiralama operasyonu"
            />
            <FAQ
                faqs={faqs}
                schemaId="faq-mobil-asansor"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}