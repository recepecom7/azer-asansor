import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";
import { Award, ShieldCheck, Clock, Check, HardHat } from "lucide-react";

const benefits = [
    { title: "10+ Yıllık Sektör Tecrübesi", description: "Antalya'da konut, inşaat, tadilat ve taşımacılık projelerinde yıllara dayanan deneyim.", icon: Award },
    { title: "Sertifikalı ve Deneyimli Operatör Kadrosu", description: "İş güvenliği eğitimlerini tamamlamış, alanında uzman profesyonel ekip.", icon: HardHat },
    { title: "Modern ve Güvenli Asansör Parkuru", description: "Düzenli bakımları yapılmış, yüksek katlara uygun mobil ve dış cephe asansörleri.", icon: ShieldCheck },
    { title: "Tam Kapsamlı Sigorta ve İş Güvenliği", description: "Tüm çalışmalar yasal mevzuata uygun, sigortalı ve kontrollü şekilde gerçekleştirilir.", icon: Check },
    { title: "Antalya ve Çevre İlçelerde Hızlı Servis", description: "Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve çevresinde hızlı ve zamanında hizmet.", icon: Clock },
];

export const metadata: Metadata = {
    title: "Hakkımızda | Azer Asansör Antalya",
    description: "Azer Asansör hakkında bilgi edinin. 10 yılı aşkın tecrübe, sertifikalı operatörler ve güvenli mobil asansör kiralama hizmetleri.",
    alternates: {
        canonical: "https://azerasansor.com/hakkimizda",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Hakkımızda <br />
                        <span className="text-brand-yellow">Azer Asansör</span>
                    </>
                }
                subtitle="Antalya'da güvenli ve profesyonel mobil asansör ve nakliyat çözümleri sunan güvenilir çözüm ortağınız."
                showButtons={false}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Azer Asansör olarak, Antalya ve çevre illerde dış cephe asansörü kiralama,
                            mobil asansör kiralama ve evden eve nakliyat sektörlerinde 10 yılı aşkın
                            süredir hizmet vermekteyiz. Kuruluşumuzdan bu yana temel önceliğimiz,
                            müşterilerimize en güvenli, en hızlı ve en ekonomik taşıma çözümlerini sunmaktır.
                        </p>
                        <p>
                            Gelişen inşaat ve taşımacılık sektörünün ihtiyaçlarına modern çözümler
                            üretmek amacıyla makine parkurumuzu sürekli yeniliyor ve teknolojiyi
                            yakından takip ediyoruz. 22. kata kadar ulaşabilen yüksek kapasiteli
                            mobil asansörlerimizle hem bireysel hem de kurumsal müşterilerimizin
                            en zorlu taşıma operasyonlarını kolaylaştırıyoruz.
                        </p>
                        <p>
                            Evden eve nakliyat hizmetimizde profesyonel ekibimiz eşyalarınızı özenle
                            paketler, sigortalı araçlarımızla yeni adresinize güvenle ulaştırır.
                            Asansörlü nakliyat çözümümüz sayesinde yüksek katlardaki taşınmalar
                            artık çok daha kolay ve güvenli.
                        </p>
                        <h3 className="text-2xl font-bold text-brand-black pt-4">Misyonumuz</h3>
                        <p>
                            İş güvenliği standartlarından ödün vermeden müşteri memnuniyetini
                            en üst düzeye çıkarmak ve Antalya'nın lider nakliyat ve asansör
                            kiralama firması olmak.
                        </p>
                        <h3 className="text-2xl font-bold text-brand-black pt-4">Vizyonumuz</h3>
                        <p>
                            Sektördeki teknolojik gelişmeleri takip ederek hizmet kalitemizi
                            sürekli artırmak ve çevre illerde de referans gösterilen bir marka
                            haline gelmek.
                        </p>
                    </div>
                </div>
            </section>

            <WhyUs
                title="Neden"
                highlight="Azer Asansör?"
                description="Antalya ve çevre illerde asansör kiralama ve nakliyat hizmetlerinde güvenilir çözüm ortağınız."
                benefits={benefits}
                image="/images/project-lift.png"
                imageAlt="Azer Asansör - Antalya nakliyat ve asansör kiralama"
            />
            <Footer />
        </main>
    );
}