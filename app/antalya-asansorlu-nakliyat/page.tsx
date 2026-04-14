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
    title: "Antalya Asansörlü Nakliyat | Evden Eve ve Mobilya Asansörü",
    description: "Antalya'da evden eve nakliyat firmaları ve mobilyacılar için kiralık taşıma asansörü. Yüksek katlara mobilya ve beyaz eşya çıkarma hizmeti.",
    alternates: {
        canonical: "https://www.azerasansor.com/antalya-asansorlu-nakliyat",
    },
};

export default function MovingElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Asansörlü Nakliyat <br />
                        <span className="text-brand-yellow">Hizmeti</span> | Hızlı ve Güvenli Taşımacılık
                    </>
                }
                subtitle="Evden eve nakliyat, mobilya teslimatı ve beyaz eşya taşıma işlemlerinizde bina merdivenlerini kullanmadan, balkon veya pencereden güvenli taşıma."
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                            Antalya’da ev taşıma süreci özellikle yüksek katlı binalarda zorlayıcı olabilir. Asansörlü nakliyat ile eşyalarınızı merdiven boşluğunu kullanmadan, daha hızlı ve güvenli şekilde daireye çıkarır; dar alanlarda oluşabilecek çizilme ve hasar riskini azaltırız.
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-5">
                            Antalya’da yüzlerce başarılı taşımacılık deneyimimizle müşterilerimize güvenilir hizmet sunuyoruz.
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-5">
                            Antalya asansörlü taşımacılık çözümleri; yüksek katlı taşınma süreçlerinde hız ve güvenlik sağlar. Bina dışı asansör sistemi ile yük akışı daha kontrollü ilerler, eşyalar daha kısa sürede ve daha düzenli şekilde taşınabilir.
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-5">
                            Mobil asansör kiralama hizmetimiz hakkında detaylı bilgi almak için{" "}
                            <Link
                                href="/antalya-mobil-asansor-kiralama"
                                className="font-semibold text-brand-black hover:text-brand-yellow transition-colors"
                            >
                                buraya göz atabilirsiniz
                            </Link>
                            .
                        </p>
                        <div className="mt-6 text-gray-700 text-lg">
                            Hızlı randevu için <span className="font-semibold text-brand-black">hemen arayın</span>, <span className="font-semibold text-brand-black">ücretsiz keşif</span> talep edin veya <span className="font-semibold text-brand-black">WhatsApp’tan teklif alın</span>.{" "}
                            <span className="font-semibold text-brand-black">Hemen arayın ve ücretsiz keşif ile net fiyat alın.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Asansörlü Nakliyat <span className="text-brand-yellow/90 bg-black px-2 rounded">Nedir?</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Asansörlü nakliyat; eşyaların bina dışından mobil asansör ile taşınmasıdır. Özellikle yüksek katlarda, dar merdivenlerde ve asansör kullanımının zor olduğu binalarda süreci hızlandırır.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Neden Gerekli?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Büyük mobilya ve beyaz eşyaların merdivenden çıkarılması hem zaman alır hem de bina içinde zarar riski oluşturur. Mobil asansör, yükü daha kontrollü taşıyarak güvenliği artırır.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Normal Taşımaya Göre Farkı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Klasik taşımada eşyalar merdiven boşluğundan ve bina içinden taşınır. Asansörlü nakliyatta ise bina dışından taşıma yapılır; böylece süre kısalır, taşıma daha düzenli ilerler.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Nasıl <span className="text-brand-yellow/90 bg-black px-2 rounded">Çalışır?</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Süreci şeffaf ve pratik şekilde yönetiyoruz. Keşiften kurulum ve taşımaya kadar her adımda planlı ilerleriz.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">1) Keşif</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Adres, kat bilgisi ve bina önü uygunluğu (park alanı, yaklaşım mesafesi, olası engeller) hızlıca değerlendirilir.
                            </p>
                        </div>
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">2) Planlama</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Taşıma günü, ekip planı ve yük akışı belirlenir. Hassas parçalar için ambalaj ve güvenlik adımları netleştirilir.
                            </p>
                        </div>
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">3) Kurulum</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mobil asansör kurulumu genellikle <span className="font-semibold text-brand-black">15–30 dakika</span> içinde tamamlanır. Operatör güvenlik kontrollerini yapar.
                            </p>
                        </div>
                        <div className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">4) Taşıma</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Eşyalar düzenli sırayla taşınır. Asansörlerimiz <span className="font-semibold text-brand-black">22. kata kadar</span> ulaşabilir; süreç daha hızlı ve kontrollü ilerler.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-700 text-lg">
                            Randevu için <span className="font-semibold text-brand-black">hemen arayın</span> veya <span className="font-semibold text-brand-black">WhatsApp’tan teklif alın</span>.
                        </p>
                    </div>
                </div>
            </section>

            <Services
                title="Asansörlü Taşıma"
                highlight="Hizmetleri"
                services={services}
                ctaTitle="Asansörlü nakliyat için hemen arayın."
                ctaDescription="Ücretsiz keşif talep edebilir, adres + kat bilgisi ile WhatsApp’tan hızlı teklif alabilirsiniz. Hemen arayın ve ücretsiz keşif ile net fiyat alın."
            />

            <section className="py-20 bg-brand-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Fiyatlandırma <span className="text-brand-yellow/90 bg-black px-2 rounded">Neye Göre Değişir?</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Net bir teklif için birkaç bilgi yeterlidir. İşin koşullarına göre adil ve gerçekçi bir planlama yaparız.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Kat Sayısı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Çıkılacak kat ve erişim koşulları süreyi etkiler.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Mesafe</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Antalya içi lokasyon ve mobilizasyon mesafesi teklife yansır.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Eşya Miktarı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Hacim, parça sayısı ve hassas eşyalar çalışma planını belirler.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-brand-black mb-3">Asansör Kullanımı</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Kurulum noktası, yaklaşım mesafesi ve dış cephe taşıma akışı fiyatı etkileyebilir.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-700 text-lg">
                            Hızlı teklif için <span className="font-semibold text-brand-black">ücretsiz keşif</span> talep edin veya <span className="font-semibold text-brand-black">WhatsApp’tan yazın</span>.
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
                            Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı başta olmak üzere Antalya’nın tüm ilçelerinde asansörlü nakliyat hizmeti sunuyoruz.
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
                description="Deneyimli ekibimizle süreci planlı yürütür, eşyalarınızı güvenle taşırız. Sigortalı taşımacılık, hızlı servis ve profesyonel operatör desteği ile yüksek katlı taşınmalarınızda yanınızdayız."
                benefits={benefits}
                image="/new-image.jpg"
                imageAlt="Antalya mobil asansör kurulumu"
            />
            <FAQ
                faqs={[
                    ...faqs,
                    {
                        question: "Asansörlü nakliyat neden avantajlı?",
                        answer: "Yüksek katlı binalarda eşyaları merdivenden taşımak zaman alır ve risklidir. Mobil asansör ile taşıma daha hızlı ilerler, eşyaların ve bina içinin zarar görme riski azalır.",
                    },
                    {
                        question: "Aynı gün hizmet mümkün mü?",
                        answer: "Müsaitlik durumuna göre aynı gün hizmet verebiliriz. Adres, kat bilgisi ve taşıma detaylarını paylaşmanız planlamayı hızlandırır.",
                    },
                    {
                        question: "Eşyalar sigortalı mı?",
                        answer: "Evet, taşıma sürecinde eşyalarınız sigorta kapsamındadır. Detayları keşif sırasında netleştiririz.",
                    },
                    {
                        question: "Asansörlü nakliyat kaç saat sürer?",
                        answer: "Taşınma süresi; kat sayısı, eşya miktarı ve mesafeye göre değişir. Ancak asansörlü sistem sayesinde süreç klasik taşımaya göre çok daha hızlı ve düzenli ilerler.",
                    },
                ]}
                schemaId="faq-asansorlu-tasima"
                title="Sık Sorulan"
                highlight="Sorular"
            />
            <Footer />
        </main>
    );
}
