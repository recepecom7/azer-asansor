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
    alternates: { canonical: 'https://www.azerasansor.com/antalya-mobil-asansor-kiralama' },
};

export default function MobileElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Mobil Asansör <br />
                        <span className="text-brand-yellow">
                            Kiralama Hizmeti
                        </span>{' '}
                        | 7/24 Hızlı ve Güvenli
                    </>
                }
                subtitle="Antalya'nın tüm ilçelerinde 22. kata kadar ulaşan, 400kg kapasiteli kiralık mobil asansörlerimizle işinizi kolaylaştırın."
            />
            <Services
                title="Mobil Asansör"
                highlight="Hizmetleri"
                services={services}
                ctaTitle="Mobil asansör kiralama için hemen arayın."
                ctaDescription="Aynı gün hızlı servis, sigortalı hizmet ve profesyonel ekip ile WhatsApp’tan teklif alabilirsiniz."
            />
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Nasıl <span className="text-brand-yellow/90 bg-black px-2 rounded">Çalışır?</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Mobil asansör kiralama sürecini hızlı ve net tutuyoruz. Keşif, kurulum ve taşıma boyunca operatörümüz güvenliği ve akışı yönetir.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">1) Keşif & Planlama</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Adres, bina önü uygunluk ve taşıma detaylarını hızlıca netleştiririz. Elektrik teli, ağaç ve park alanı gibi etkenlere göre en güvenli kurulum noktasını belirleriz.
                            </p>
                        </div>
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">2) Kurulum</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mobil asansör kurulumu genellikle <span className="font-semibold text-brand-black">15–30 dakika</span> içinde tamamlanır. Operatörümüz kurulum ve güvenlik kontrollerini yapar.
                            </p>
                        </div>
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">3) Taşıma</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Asansörlerimiz <span className="font-semibold text-brand-black">22. kata kadar</span> ulaşabilir. Mobilya, beyaz eşya ve malzemeler merdiven kullanmadan daha hızlı ve güvenli şekilde taşınır.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-700 text-lg">
                            Hızlı planlama için <span className="font-semibold text-brand-black">hemen arayın</span> veya <span className="font-semibold text-brand-black">WhatsApp’tan teklif alın</span>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Fiyatlandırma <span className="text-brand-yellow/90 bg-black px-2 rounded">Neye Göre Değişir?</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Net fiyat için kısa bilgi yeterli. Sabit “tek fiyat” vermek yerine, işin gerçek koşullarına göre adil bir teklif sunuyoruz.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Kat Sayısı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Çıkılacak kat ve erişim koşulları (balkon/pencere açıklığı, yaklaşım mesafesi) sürenizi ve planlamayı etkiler.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Mesafe</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Antalya içinde lokasyon ve ekip/ekipman mobilizasyonu teklife yansır. Aynı ilçede kısa mesafe ile uzak mesafe aynı değildir.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Eşya Miktarı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Taşınacak eşyanın hacmi, ağırlığı ve parça sayısı çalışma süresini belirler. Büyük mobilya/beyaz eşya gibi parçalar planlamayı değiştirir.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-700 text-lg">
                            Kısa bir mesajla adres + kat bilgisi paylaşın; <span className="font-semibold text-brand-black">WhatsApp’tan teklif alabilirsiniz</span>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Hizmet <span className="text-brand-yellow/90 bg-black px-2 rounded">Alanlarımız</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya’nın tüm ilçelerine hizmet veriyoruz.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {["Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı"].map((name) => (
                            <span
                                key={name}
                                className="px-4 py-2 rounded-full bg-brand-beige border border-gray-100 text-brand-black font-medium"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <WhyUs
                title="Neden Bizi"
                highlight="Tercih Etmelisiniz?"
                description="Antalya’da mobil asansör kiralama sürecinde güvenliği ve hızı birlikte sunuyoruz. Deneyimli operatör, sigortalı hizmet ve aynı gün hızlı servis ile taşıma sürecini sorunsuz yönetmenize yardımcı oluruz."
                benefits={benefits}
                image="/new-image.jpg"
                imageAlt="Antalya mobil asansör kurulumu"
            />
            <FAQ
                faqs={[
                    ...faqs,
                    {
                        question: 'Kurulum ne kadar sürer?',
                        answer: 'Kurulum süresi çoğu adreste ortalama 15–30 dakika içinde tamamlanır. Bina önü uygunluk, park alanı ve çevresel engeller süreyi etkileyebilir.',
                    },
                    {
                        question: 'Aynı gün hizmet var mı?',
                        answer: 'Müsaitlik durumuna göre aynı gün hizmet verebiliriz. En doğru planlama için adres ve kat bilgisini paylaşıp hızlıca teyit alabilirsiniz.',
                    },
                    {
                        question: 'Fiyatı hangi bilgilerle netleştirebilirsiniz?',
                        answer: 'Adres/ilçe, çıkılacak kat, taşınacak eşya miktarı ve bina önü erişim koşulları (yaklaşım mesafesi, olası engeller) teklif için yeterlidir.',
                    },
                    {
                        question: 'Hangi eşyalar için uygundur?',
                        answer: 'Mobilya, beyaz eşya, koliler ve inşaat/tadilat malzemeleri gibi birçok yük için uygundur. Çok hassas veya özel parçalar için önceden bilgi vermeniz yeterli.',
                    },
                ]}
                schemaId="faq-mobil-asansor"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}