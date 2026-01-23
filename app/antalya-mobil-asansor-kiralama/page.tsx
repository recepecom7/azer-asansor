import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Antalya Mobil Asansör Kiralama | 22. Kata Kadar Kiralık Asansör",
    description: "Antalya'da 22. kata kadar ulaşan mobil asansör kiralama hizmeti. Evden eve nakliyat, inşaat ve mobilya taşıma için saatlik ve günlük kiralık asansör.",
    alternates: {
        canonical: "https://azerasansor.com/antalya-mobil-asansor-kiralama",
    },
};

export default function MobileElevatorPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Mobil Asansör <br />
                        <span className="text-brand-yellow">Kiralama Hizmeti</span>
                    </>
                }
                subtitle="Antalya'nın tüm ilçelerinde 22. kata kadar ulaşan, 400kg kapasiteli kiralık mobil asansörlerimizle işinizi kolaylaştırın. Saatlik ve günlük kiralama seçenekleri."
            />
            <Services />
            <WhyUs />
            <Footer />
        </main>
    );
}
