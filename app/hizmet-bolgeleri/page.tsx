import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Antalya Mobil Asansör Hizmet Bölgeleri | Muratpaşa, Kepez, Konyaaltı",
    description: "Antalya'nın tüm ilçelerinde mobil asansör kiralama hizmeti. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde 7/24 hizmet.",
    alternates: {
        canonical: "https://azerasansor.com/hizmet-bolgeleri",
    },
};

const districts = [
    {
        name: "Muratpaşa",
        description: "Muratpaşa genelinde evden eve nakliyat ve inşaat işleri için hızlı mobil asansör servisi."
    },
    {
        name: "Kepez",
        description: "Kepez bölgesindeki tüm mahallelerde 22. kata kadar ulaşan kiralık dış cephe asansörleri."
    },
    {
        name: "Konyaaltı",
        description: "Konyaaltı ilçesinde güvenli, sigortalı ve profesyonel mobil asansör kiralama çözümleri."
    },
    {
        name: "Lara",
        description: "Lara bölgesinde hassas mobilya taşıma ve beyaz eşya çıkarma işlemleri için özel ekipman."
    },
    {
        name: "Aksu",
        description: "Aksu ve çevresinde inşaat malzemesi taşıma ve moloz indirme için güçlü asansör parkuru."
    },
    {
        name: "Döşemealtı",
        description: "Döşemealtı bölgesinde villa ve yüksek katlı binalar için uygun mobil asansör kiralama."
    },
];

export default function ServiceAreasPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Antalya Hizmet <br />
                        <span className="text-brand-yellow">Bölgelerimiz</span>
                    </>
                }
                subtitle="Antalya merkez ve çevre ilçelerde geniş hizmet ağı. İhtiyaç duyduğunuz her noktada yanınızdayız."
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {districts.map((district, index) => (
                            <div key={index} className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-black">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-black">{district.name}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {district.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
