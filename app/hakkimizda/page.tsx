import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

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
                subtitle="Antalya'da güvenli ve profesyonel mobil asansör çözümleri sunan çözüm ortağınız."
                showButtons={false}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Azer Asansör olarak, Antalya ve çevre illerde dış cephe asansörü kiralama sektöründe 10 yılı aşkın süredir hizmet vermekteyiz. Kuruluşumuzdan bu yana temel önceliğimiz, müşterilerimize en güvenli, en hızlı ve en ekonomik taşıma çözümlerini sunmaktır.
                        </p>
                        <p>
                            Gelişen inşaat ve taşımacılık sektörünün ihtiyaçlarına modern çözümler üretmek amacıyla, makine parkurumuzu sürekli yeniliyor ve teknolojiyi yakından takip ediyoruz. 22. kata kadar ulaşabilen yüksek kapasiteli mobil asansörlerimizle, hem bireysel hem de kurumsal müşterilerimizin en zorlu taşıma operasyonlarını kolaylaştırıyoruz.
                        </p>
                        <h3 className="text-2xl font-bold text-brand-black pt-4">Misyonumuz</h3>
                        <p>
                            İş güvenliği standartlarından ödün vermeden, müşteri memnuniyetini en üst düzeye çıkarmak ve Antalya'nın lider mobil asansör kiralama firması olmak.
                        </p>
                        <h3 className="text-2xl font-bold text-brand-black pt-4">Vizyonumuz</h3>
                        <p>
                            Sektördeki teknolojik gelişmeleri takip ederek hizmet kalitemizi sürekli artırmak ve çevre illerde de referans gösterilen bir marka haline gelmek.
                        </p>
                    </div>
                </div>
            </section>

            <WhyUs />
            <Footer />
        </main>
    );
}
