'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';
import { Phone, ChevronDown } from 'lucide-react';

const navItems = [
    { label: 'Anasayfa', href: '/' },
    {
        label: 'Nakliyat',
        children: [
            { label: 'Evden Eve Nakliyat', href: '/antalya-evden-eve-nakliyat' },
            { label: 'Asansörlü Nakliyat', href: '/antalya-asansorlu-nakliyat' },
        ],
    },
    {
        label: 'Asansör',
        children: [
            { label: 'Mobil Asansör Kiralama', href: '/antalya-mobil-asansor-kiralama' },
            { label: 'Dış Cephe Asansörü', href: '/antalya-dis-cephe-asansoru' },
        ],
    },
    {
        label: 'Taşımacılık',
        children: [
        ],
    },
    { label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' },
];

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 w-full bg-brand-black/95 backdrop-blur-sm border-b border-gray-800 h-[72px]">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex flex-shrink-0 items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Azer Asansör"
                        width={200}
                        height={60}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) =>
                        item.children ? (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setOpenMenu(item.label)}
                                onMouseLeave={() => setOpenMenu(null)}
                            >
                                <button className="flex items-center gap-1 text-white font-medium hover:text-brand-yellow transition-colors relative group py-2">
                                    {item.label}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                                    />
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
                                </button>

                                {openMenu === item.label && (
                                    <div className="absolute top-full left-0 mt-1 w-52 bg-brand-black border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-3 text-sm text-gray-300 hover:text-brand-yellow hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-0"
                                                onClick={() => setOpenMenu(null)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href!}
                                className="text-white font-medium hover:text-brand-yellow transition-colors relative group py-2"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
                            </Link>
                        )
                    )}
                </nav>

                {/* Right side — CTA + Mobile burger */}
                <div className="flex items-center gap-3">
                    <a href="tel:+905424669631">
                        <Button variant="primary" className="text-sm px-5 py-2">
                            <Phone className="w-4 h-4 mr-2" />
                            Hemen Ara
                        </Button>
                    </a>

                    {/* Mobile burger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menü"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-brand-black border-t border-gray-800 px-4 pb-4 max-h-screen overflow-y-auto">
                    {navItems.map((item) =>
                        item.children ? (
                            <div key={item.label} className="border-b border-gray-800">
                                <button
                                    className="w-full flex items-center justify-between py-3 text-white font-medium"
                                    onClick={() =>
                                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                                    }
                                >
                                    {item.label}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {mobileExpanded === item.label && (
                                    <div className="pl-4 pb-2">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block py-2 text-sm text-gray-300 hover:text-brand-yellow transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href!}
                                className="block py-3 text-white font-medium border-b border-gray-800 hover:text-brand-yellow transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </div>
            )}
        </header>
    );
};