import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Antalya Nakliyat ve Asansör Hizmet Bölgeleri | Tüm İlçeler",
    description: "Antalya'nın tüm ilçelerinde evden eve nakliyat ve mobil asansör kiralama hizmeti. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı'nda 7/24 hizmet.",
    alternates: {
        canonical: "https://www.azerasansor.com/hizmet-bolgeleri",
    },
};

const districts = [
    {
        name: "Muratpaşa",
        description: "Muratpaşa genelinde evden eve nakliyat ve inşaat işleri için hızlı mobil asansör servisi.",
    },
    {
        name: "Kepez",
        description: "Kepez bölgesindeki tüm mahallelerde 22. kata kadar ulaşan kiralık dış cephe asansörleri.",
    },
    {
        name: "Konyaaltı",
        description: "Konyaaltı ilçesinde güvenli, sigortalı ve profesyonel mobil asansör ve nakliyat çözümleri.",
    },
    {
        name: "Lara",
        description: "Lara bölgesinde hassas mobilya taşıma ve beyaz eşya çıkarma işlemleri için özel ekipman.",
    },
    {
        name: "Aksu",
        description: "Aksu ve çevresinde inşaat malzemesi taşıma ve moloz indirme için güçlü asansör parkuru.",
    },
    {
        name: "Döşemealtı",
        description: "Döşemealtı bölgesinde villa ve yüksek katlı binalar için uygun mobil asansör kiralama.",
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
                subtitle="Antalya merkez ve çevre ilçelerde evden eve nakliyat ve mobil asansör kiralama hizmetleri. İhtiyaç duyduğunuz her noktada yanınızdayız."
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                            Hizmet <span className="text-brand-yellow/90 bg-black px-2 rounded">Bölgelerimiz</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Antalya'nın tüm ilçelerinde profesyonel nakliyat ve asansör kiralama hizmetleri sunuyoruz.
                        </p>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-3">
                            Antalya’nın tüm ilçelerine hizmet veriyoruz.
                        </p>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {districts.map((district, index) => (
                            <div
                                key={index}
                                className="bg-brand-beige p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-brand-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-black">
                                        {district.name}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {district.description}
                                </p>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-brand-black flex items-center gap-1">
                                        → {district.name} Evden Eve Nakliyat
                                    </span>
                                    <span className="text-sm font-medium text-brand-black flex items-center gap-1">
                                        → {district.name} Mobil Asansör Kiralama
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}