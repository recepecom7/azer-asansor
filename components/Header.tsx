import Link from 'next/link';
import { Button } from './Button';
import { Phone } from 'lucide-react';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-brand-black/95 backdrop-blur-sm border-b border-gray-800 h-[72px]">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center">
                        <span className="text-brand-black font-bold text-xl">A</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight group-hover:text-brand-yellow transition-colors">
                        AZER ASANSÖR
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        ['Anasayfa', '/'],
                        ['Mobil Asansör', '/antalya-mobil-asansor-kiralama'],
                        ['Dış Cephe', '/antalya-dis-cephe-asansoru'],
                        ['Hizmet Bölgeleri', '/hizmet-bolgeleri'],
                        ['Hakkımızda', '/hakkimizda'],
                        ['İletişim', '/iletisim'],
                    ].map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-white font-medium hover:text-brand-yellow transition-colors relative group"
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center">
                    <a href="tel:+905424669631">
                        <Button variant="primary" className="text-sm px-5 py-2">
                            <Phone className="w-4 h-4 mr-2" />
                            Hemen Ara
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
};
