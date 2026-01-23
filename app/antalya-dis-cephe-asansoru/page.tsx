import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Antalya Dış Cephe Asansörü Kiralama | İnşaat ve Moloz Asansörü",
    description: "Antalya dış cephe asansörü kiralama hizmetleri. İnşaat malzemesi çıkarma, moloz indirme ve cam balkon montajı için profesyonel cephe asansörü.",
    alternates: {
        canonical: "https://azerasansor.com/antalya-dis-cephe-asansoru",
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
            <Services />
            <WhyUs />
            <Footer />
        </main>
    );
}
