import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
    title: "İletişim | Azer Asansör Antalya",
    description: "Azer Asansör iletişim bilgileri. Antalya mobil asansör kiralama fiyatları ve randevu için bize ulaşın. 7/24 Telefon ve WhatsApp desteği.",
    alternates: {
        canonical: "https://azerasansor.com/iletisim",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={
                    <>
                        Bize <br />
                        <span className="text-brand-yellow">Ulaşın</span>
                    </>
                }
                subtitle="Mobil asansör kiralama ihtiyaçlarınız, fiyat teklifi ve randevu talepleriniz için 7/24 hizmetinizdeyiz."
                showButtons={false}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-brand-black mb-6">İletişim Bilgileri</h2>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-black flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">Telefon</h3>
                                    <p className="text-gray-600 mb-2">7/24 Bize Ulaşabilirsiniz</p>
                                    <a href="tel:+905424669631" className="text-xl font-bold text-brand-yellow hover:text-brand-black transition-colors">
                                        +90 542 466 96 31
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-black flex-shrink-0">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Hızlı Fiyat Teklifi Alın</p>
                                    <a href="https://wa.me/+905424669631" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
                                        WhatsApp'tan Yaz
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-black flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">E-Posta</h3>
                                    <p className="text-gray-600 mb-2">Kurumsal Talepleriniz İçin</p>
                                    <a href="mailto:info@azerasansor.com" className="text-lg font-medium text-gray-800 hover:text-brand-yellow transition-colors">
                                        info@azerasansor.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-black flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">Adres</h3>
                                    <p className="text-gray-600">
                                        Antalya, Türkiye <br />
                                        (Merkez Ofis ve Depo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Form */}
                        <div className="bg-gray-100 rounded-3xl min-h-[400px] flex items-center justify-center border border-gray-200">
                            <p className="text-gray-500 font-medium">Harita Alanı</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
