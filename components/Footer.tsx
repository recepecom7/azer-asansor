import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center">
                                <span className="text-brand-black font-bold text-xl">A</span>
                            </div>
                            <span className="text-xl font-bold">AZER ASANSÖR</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Antalya ve çevre illerde güvenli, hızlı ve profesyonel kiralık asansör hizmetleri.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-brand-yellow" />
                                <span>+90 542 466 96 31</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-brand-yellow" />
                                <span>info@azerasansor.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-brand-yellow mt-1" />
                                <span>Antalya, Türkiye</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3">
                            {['Anasayfa', 'Hizmetler', 'Hakkımızda', 'İletişim'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Azer Asansör. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};
