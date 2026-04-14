import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    const links = [
        ['Anasayfa', '/'],
        ['Evden Eve Nakliyat', '/antalya-evden-eve-nakliyat'],
        ['Asansörlü Nakliyat', '/antalya-asansorlu-nakliyat'],
        ['Mobil Asansör Kiralama', '/antalya-mobil-asansor-kiralama'],
        ['Dış Cephe Asansörü', '/antalya-dis-cephe-asansoru'],
        ['Hizmet Bölgeleri', '/hizmet-bolgeleri'],
        ['Hakkımızda', '/hakkimizda'],
        ['İletişim', '/iletisim'],
    ];

    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Azer Asansör"
                                width={240}
                                height={72}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Antalya ve çevre illerde güvenli, hızlı ve profesyonel
                            nakliyat ve kiralık asansör hizmetleri.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-brand-yellow" />
                                <a href="tel:+905424669631" className="hover:text-brand-yellow transition-colors">
                                    +90 542 466 96 31
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-brand-yellow" />
                                <a href="mailto:info@azerasansor.com" className="hover:text-brand-yellow transition-colors">
                                    info@azerasansor.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-brand-yellow mt-1" />
                                <span>Antalya, Türkiye</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3">
                            {links.map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-gray-400 hover:text-brand-yellow transition-colors"
                                    >
                                        {label}
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