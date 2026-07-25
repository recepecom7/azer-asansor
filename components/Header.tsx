'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Phone, ChevronDown } from 'lucide-react';

const navItems = [
    { label: 'Anasayfa', href: '/' },
    {
        label: 'Nakliyat',
        children: [
            { label: 'Antalya Evden Eve Nakliyat', href: '/antalya-evden-eve-nakliyat' },
            { label: 'Antalya Asansörlü Nakliyat', href: '/antalya-asansorlu-nakliyat' },
            { label: 'Antalya Ofis Taşıma', href: '/antalya-ofis-tasima' },
            { label: 'Antalya Şehirlerarası Nakliyat', href: '/antalya-sehirlerarasi-nakliyat' },
        ],
    },
    {
        label: 'Hizmet Bölgeleri',
        children: [
            { label: 'Antalya Hizmet Bölgeleri', href: '/antalya-hizmet-bolgeleri' },
            { label: 'Muratpaşa Asansörlü Nakliyat', href: '/muratpasa-asansorlu-nakliyat' },
            { label: 'Kepez Asansörlü Nakliyat', href: '/kepez-asansorlu-nakliyat' },
            { label: 'Konyaaltı Asansörlü Nakliyat', href: '/konyaalti-asansorlu-nakliyat' },
            { label: 'Lara Asansörlü Nakliyat', href: '/lara-asansorlu-nakliyat' },
            { label: 'Aksu Asansörlü Nakliyat', href: '/aksu-asansorlu-nakliyat' },
            { label: 'Döşemealtı Asansörlü Nakliyat', href: '/dosemealti-asansorlu-nakliyat' },
        ],
    },
    {
        label: 'Asansör',
        children: [
            { label: 'Antalya Kiralık Asansör', href: '/antalya-kiralik-asansor' },
            { label: 'Antalya Mobil Asansör Kiralama', href: '/antalya-mobil-asansor-kiralama' },
            { label: 'Dış Cephe Asansörü', href: '/antalya-dis-cephe-asansoru' },
        ],
    },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' },
];

export const Header = () => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        if (!openMenu) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpenMenu(null);
        }

        function handleClickOutside(e: MouseEvent) {
            const activeEl = dropdownRefs.current[openMenu as string];
            if (activeEl && !activeEl.contains(e.target as Node)) setOpenMenu(null);
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu]);

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
                    {navItems.map((item) => {
                        const isParentActive = item.children?.some((child) => child.href === pathname) ?? false;
                        const isActive = item.href === pathname || isParentActive;

                        return item.children ? (
                            <div
                                key={item.label}
                                ref={(el) => { dropdownRefs.current[item.label] = el; }}
                                className="relative"
                                onMouseEnter={() => setOpenMenu(item.label)}
                                onMouseLeave={() => setOpenMenu(null)}
                                onBlur={(e) => {
                                    const wrapper = dropdownRefs.current[item.label];
                                    if (wrapper && !wrapper.contains(e.relatedTarget as Node)) {
                                        setOpenMenu(null);
                                    }
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                                    onFocus={() => setOpenMenu(item.label)}
                                    aria-haspopup="true"
                                    aria-expanded={openMenu === item.label}
                                    aria-current={isParentActive ? 'page' : undefined}
                                    className={`flex items-center gap-1 font-medium transition-colors relative group py-2 ${
                                        isParentActive ? 'text-brand-yellow underline underline-offset-4' : 'text-white hover:text-brand-yellow'
                                    }`}
                                >
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
                                                aria-current={child.href === pathname ? 'page' : undefined}
                                                className={`block px-4 py-3 text-sm transition-colors border-b border-gray-800 last:border-0 ${
                                                    child.href === pathname
                                                        ? 'text-brand-yellow bg-gray-800'
                                                        : 'text-gray-300 hover:text-brand-yellow hover:bg-gray-800'
                                                }`}
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
                                aria-current={isActive ? 'page' : undefined}
                                className={`font-medium transition-colors relative group py-2 ${
                                    isActive ? 'text-brand-yellow underline underline-offset-4' : 'text-white hover:text-brand-yellow'
                                }`}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
                            </Link>
                        );
                    })}
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
                        className="md:hidden flex flex-col items-center justify-center gap-1.5 min-w-[44px] min-h-[44px]"
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
                    {navItems.map((item) => {
                        const isParentActive = item.children?.some((child) => child.href === pathname) ?? false;
                        const isActive = item.href === pathname || isParentActive;

                        return item.children ? (
                            <div key={item.label} className="border-b border-gray-800">
                                <button
                                    aria-current={isParentActive ? 'page' : undefined}
                                    className={`w-full flex items-center justify-between py-3 font-medium ${
                                        isParentActive ? 'text-brand-yellow underline underline-offset-4' : 'text-white'
                                    }`}
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
                                                aria-current={child.href === pathname ? 'page' : undefined}
                                                className={`block py-2 text-sm transition-colors ${
                                                    child.href === pathname
                                                        ? 'text-brand-yellow underline underline-offset-4'
                                                        : 'text-gray-300 hover:text-brand-yellow'
                                                }`}
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
                                aria-current={isActive ? 'page' : undefined}
                                className={`block py-3 font-medium border-b border-gray-800 transition-colors ${
                                    isActive ? 'text-brand-yellow underline underline-offset-4' : 'text-white hover:text-brand-yellow'
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
};
