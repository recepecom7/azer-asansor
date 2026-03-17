import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import {
    PackageOpen, Truck, Building2, Piano, Archive, Box,
    Award, ShieldCheck, Clock, Check, HardHat,
} from 'lucide-react';

const services = [
    { title: 'Evden Eve Nakliyat', description: 'Eşyalarınız profesyonel ekibimiz tarafından özenle paketlenir, güvenli araçlarımızla yeni adresinize taşınır.', icon: Truck },
    { title: 'Asansörlü Nakliyat', description: 'Yüksek katlarda mobil asansörümüz ile eşyalarınız merdivenden çıkarılmadan güvenle taşınır.', icon: Building2 },
    { title: 'Ambalajlama & Paketleme', description: 'Balonlu naylon, streç film ve battaniye kullanılarak eşyalarınız profesyonelce paketlenir.', icon: PackageOpen },
    { title: 'Şehirler Arası Taşıma', description: 'Antalya\'dan Türkiye\'nin her iline güvenli, sigortalı şehirlerarası nakliyat hizmeti.', icon: Box },
    { title: 'Piyano Taşıma', description: 'Özel ekipman ve deneyimli personelimizle piyano ve değerli eşyalarınız hasarsız taşınır.', icon: Piano },
    { title: 'Arşiv & Ofis Taşıma', description: 'Kurumsal taşınmalarda ofis eşyalarınız ve arşivleriniz düzenli ve güvenle ulaştırılır.', icon: Archive },
];

const benefits = [
    { title: '10+ Yıllık Nakliyat Tecrübesi', description: 'Antalya\'da binlerce başarılı taşınma gerçekleştirdik. Her taşınmayı özenle yönetiyoruz.', icon: Award },
    { title: 'Sigortalı Taşımacılık', description: 'Tüm eşyalarınız taşıma sürecinde sigorta kapsamındadır. Olası hasarlarda tam güvence sağlanır.', icon: ShieldCheck },
    { title: 'Profesyonel Ambalajlama', description: 'Eşyalarınız balonlu naylon, streç film ve özel battaniyelerle hasara karşı korumalı paketlenir.', icon: HardHat },
    { title: 'Zamanında Teslimat', description: 'Belirlenen tarih ve saatte eşyalarınız yeni adresinizde olur. Gecikme yaşatmıyoruz.', icon: Clock },
    { title: 'Antalya Genelinde Hizmet', description: 'Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve tüm Antalya ilçelerinde hizmetinizdeyiz.', icon: Check },
];

const faqs = [
    { question: 'Antalya evden eve nakliyat fiyatları ne kadar?', answer: 'Fiyatlar eşya miktarına, mesafeye ve kat sayısına göre değişir. Ücretsiz keşif için hemen arayın.' },
    { question: 'Eşyalarımı önceden paketlemem gerekiyor mu?', answer: 'Hayır, profesyonel ekibimiz tüm eşyalarınızı paketler. Siz sadece hazır olun.' },
    { question: 'Taşıma sırasında eşyalarım sigortalı mı?', answer: 'Evet, tüm taşımalarımız sigorta kapsamındadır.' },
    { question: 'Yüksek katlarda taşınma nasıl yapılıyor?', answer: 'Mobil asansörümüz sayesinde 22. kata kadar eşyalarınız dış cepheden güvenle taşınır.' },
    { question: 'Şehirler arası nakliyat yapıyor musunuz?', answer: 'Evet, Türkiye\'nin her iline kapalı kasa araçlarımızla güvenli taşımacılık yapıyoruz.' },
    { question: 'Hafta sonu hizmet veriyor musunuz?', answer: 'Evet, 7 gün 24 saat hizmetinizdeyiz.' },
];

export const metadata: Metadata = {
    title: 'Antalya Evden Eve Nakliyat | Güvenli & Sigortalı Taşıma',
    description: 'Antalya evden eve nakliyat hizmeti. Profesyonel ekip, sigortalı taşıma, asansörlü nakliyat ve ambalajlama. Muratpaşa, Kepez, Konyaaltı, Lara ve tüm Antalya.',
    alternates: { canonical: 'https://azerasansor.com/antalya-evden-eve-nakliyat' },
};

export default function EvdenEveNakliyatPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={<>Antalya Evden Eve <br /><span className="text-brand-yellow">Nakliyat Hizmeti</span></>}
                subtitle="Antalya'nın tüm ilçelerinde profesyonel ekip, sigortalı taşıma ve asansörlü nakliyat hizmetiyle güvenli taşınma."
            />
            <Services
                title="Nakliyat"
                highlight="Hizmetlerimiz"
                services={services}
                ctaTitle="Antalya'da güvenilir nakliyat için hemen arayın."
                ctaDescription="Profesyonel ekip, sigortalı taşıma, zamanında teslimat."
            />
            <WhyUs
                title="Neden"
                highlight="Azer Asansör Nakliyat?"
                description="Antalya'nın en güvenilir evden eve nakliyat firması olarak eşyalarınızı sanki kendi eşyamızmış gibi özenle taşıyoruz."
                benefits={benefits}
                image="/images/hero-real.jpg"
                imageAlt="Antalya evden eve nakliyat - Azer Asansör"
            />
            <FAQ
                faqs={faqs}
                schemaId="faq-evden-eve-nakliyat"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}