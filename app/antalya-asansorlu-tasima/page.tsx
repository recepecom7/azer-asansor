import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

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
            <Services />
            <WhyUs />
            <Footer />
        </main>
    );
}
