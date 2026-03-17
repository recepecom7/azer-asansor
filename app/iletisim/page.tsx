import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Iletisim | Azer Asansor Antalya",
    description: "Azer Asansor iletisim bilgileri. 7/24 Telefon ve WhatsApp destegi.",
    alternates: { canonical: "https://azerasansor.com/iletisim" },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-beige">
            <Header />
            <Hero
                title={<>Bize <br /><span className="text-brand-yellow">Ulasin</span></>}
                subtitle="Nakliyat ve asansor kiralama icin 7/24 hizmetinizdeyiz."
                showButtons={false}
            />
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-brand-black">Iletisim Bilgileri</h2>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-brand-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">Telefon</h3>
                                    <p className="text-gray-600 mb-2">7/24 Bize Ulasabilirsiniz</p>
                                    <a href="tel:+905424669631" className="text-xl font-bold text-brand-yellow hover:text-brand-black transition-colors">+90 542 466 96 31</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-brand-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Hizli Fiyat Teklifi Alin</p>
                                    <a href="https://wa.me/+905424669631" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">WhatsApp tan Yaz</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-brand-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">E-Posta</h3>
                                    <p className="text-gray-600 mb-2">Kurumsal Talepleriniz Icin</p>
                                    <a href="mailto:info@azerasansor.com" className="text-lg font-medium text-gray-800 hover:text-brand-yellow transition-colors">info@azerasansor.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-brand-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">Calisma Saatleri</h3>
                                    <p className="text-gray-600">7 gun 24 saat hizmetinizdeyiz.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-black mb-1">Hizmet Bolgesi</h3>
                                    <p className="text-gray-600">Antalya merkez ve tum ilceler</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-black rounded-3xl p-10 flex flex-col justify-center gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Hemen Fiyat Teklifi Alin</h3>
                                <p className="text-gray-400 leading-relaxed">Ucretsiz kesif ve fiyat teklifi icin bizi arayin.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="tel:+905424669631" className="flex items-center justify-center gap-3 bg-brand-yellow text-brand-black font-bold py-4 px-6 rounded-2xl hover:bg-yellow-400 transition-colors text-lg">
                                    <Phone className="w-5 h-5" />
                                    +90 542 466 96 31
                                </a>
                                <a href="https://wa.me/+905424669631" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-green-700 transition-colors text-lg">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp tan Yaz
                                </a>
                                <a href="mailto:info@azerasansor.com" className="flex items-center justify-center gap-3 bg-gray-800 text-white font-bold py-4 px-6 rounded-2xl hover:bg-gray-700 transition-colors text-lg">
                                    <Mail className="w-5 h-5" />
                                    info@azerasansor.com
                                </a>
                            </div>
                            <div className="border-t border-gray-700 pt-6">
                                <p className="text-gray-400 text-sm text-center">7 gun 24 saat - Ucretsiz kesif - Sigortali tasima</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
