import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

const SERVICE_LINKS = [
    ['Antalya Nakliyat', '/antalya-nakliyat'],
    ['Evden Eve Nakliyat', '/antalya-evden-eve-nakliyat'],
    ['Asansörlü Nakliyat', '/antalya-asansorlu-nakliyat'],
    ['Ofis Taşıma', '/antalya-ofis-tasima'],
    ['Şehirlerarası Nakliyat', '/antalya-sehirlerarasi-nakliyat'],
    ['Mobil Asansör Kiralama', '/antalya-mobil-asansor-kiralama'],
    ['Dış Cephe Asansörü', '/antalya-dis-cephe-asansoru'],
    ['Parça Eşya Taşıma', '/antalya-parca-esya-tasima'],
    ['Eşya Depolama', '/antalya-esya-depolama'],
    ['Piyano ve Ağır Eşya Taşıma', '/antalya-piyano-ve-agir-esya-tasima'],
];

const REGION_LINKS = [
    ['Muratpaşa Evden Eve Nakliyat', '/muratpasa-evden-eve-nakliyat'],
    ['Konyaaltı Evden Eve Nakliyat', '/konyaalti-evden-eve-nakliyat'],
    ['Lara Evden Eve Nakliyat', '/lara-evden-eve-nakliyat'],
    ['Kepez Evden Eve Nakliyat', '/kepez-evden-eve-nakliyat'],
    ['Aksu Evden Eve Nakliyat', '/aksu-evden-eve-nakliyat'],
    ['Döşemealtı Evden Eve Nakliyat', '/dosemealti-evden-eve-nakliyat'],
    ['Tüm Bölgeler', '/antalya-hizmet-bolgeleri'],
];

const CORPORATE_LINKS = [
    ['Anasayfa', '/'],
    ['Blog', '/blog'],
    ['Hakkımızda', '/hakkimizda'],
    ['İletişim', '/iletisim'],
    ['KVKK Aydınlatma Metni', '/kvkk-aydinlatma-metni'],
];

const LinkColumn = ({ title, links }: { title: string; links: string[][] }) => (
    <div>
        <h3 className="text-lg font-bold mb-6 text-brand-yellow">{title}</h3>
        <ul className="space-y-3">
            {links.map(([label, href]) => (
                <li key={href}>
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
);

export const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Azer Asansör"
                                width={240}
                                height={72}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Antalya ve çevre illerde güvenli, hızlı ve profesyonel
                            nakliyat ve kiralık asansör hizmetleri.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-brand-yellow" />
                                <a href="tel:+905424669631" className="hover:text-brand-yellow transition-colors">
                                    +90 542 466 96 31
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-brand-yellow mt-1" />
                                <span>Antalya, Türkiye</span>
                            </li>
                        </ul>
                    </div>

                    <LinkColumn title="Hizmetlerimiz" links={SERVICE_LINKS} />
                    <LinkColumn title="Hizmet Bölgeleri" links={REGION_LINKS} />
                    <LinkColumn title="Kurumsal" links={CORPORATE_LINKS} />
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Azer Asansör. Tüm hakları saklıdır.</p>
                    <a
                        href="https://defora.digital"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="block mt-3 text-gray-300 hover:text-brand-yellow transition-colors font-medium"
                    >
                        Web Tasarım: Defora Digital
                    </a>
                </div>
            </div>
        </footer>
    );
};
