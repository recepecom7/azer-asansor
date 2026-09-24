import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

const SERVICE_LINKS: [string, string][] = [
    ['Evden Eve Nakliyat', '/antalya-evden-eve-nakliyat'],
    ['Asansörlü Nakliyat', '/antalya-asansorlu-nakliyat'],
    ['Kiralık Asansör', '/antalya-kiralik-asansor'],
    ['Şehirlerarası Nakliyat', '/antalya-sehirlerarasi-nakliyat'],
    ['Ofis Taşıma', '/antalya-ofis-tasima'],
    ['Anahtar Teslim Paket', '/antalya-anahtar-teslim-paket'],
];

const REGION_LINKS: [string, string][] = [
    ['Muratpaşa', '/muratpasa-evden-eve-nakliyat'],
    ['Kepez', '/kepez-evden-eve-nakliyat'],
    ['Konyaaltı', '/konyaalti-evden-eve-nakliyat'],
    ['Lara', '/lara-evden-eve-nakliyat'],
    ['Aksu', '/aksu-evden-eve-nakliyat'],
    ['Döşemealtı', '/dosemealti-evden-eve-nakliyat'],
    ['Kemer', '/kemer-evden-eve-nakliyat'],
];

const CORPORATE_LINKS: [string, string][] = [
    ['Anasayfa', '/'],
    ['Hakkımızda', '/hakkimizda'],
    ['Blog', '/blog'],
    ['İletişim', '/iletisim'],
    ['KVKK Aydınlatma Metni', '/kvkk-aydinlatma-metni'],
];

const LinkColumn = ({
    title,
    links,
    moreLabel,
    moreHref,
}: {
    title: string;
    links: [string, string][];
    moreLabel?: string;
    moreHref?: string;
}) => (
    <div>
        <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-brand-yellow">{title}</h3>
        <ul className="space-y-3">
            {links.map(([label, href]) => (
                <li key={href}>
                    <Link href={href} className="text-[13px] text-white/60 transition-colors hover:text-white">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
        {moreLabel && moreHref && (
            <Link
                href={moreHref}
                className="mt-3 inline-block text-[13px] text-brand-yellow transition-colors hover:underline"
            >
                {moreLabel}
            </Link>
        )}
    </div>
);

export const Footer = () => {
    return (
        <footer className="bg-[#060d16] text-white">
            <div className="container mx-auto px-5 py-12 md:px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo.png"
                                alt="Azer Asansör"
                                width={240}
                                height={72}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-3 max-w-[200px] text-[13px] leading-relaxed text-white/50">
                            Antalya ve çevre illerde güvenli, hızlı ve profesyonel nakliyat ve kiralık asansör
                            hizmetleri.
                        </p>
                        <a
                            data-cta-location="footer"
                            href="tel:+905424669631"
                            className="mt-4 flex items-center gap-2 text-[14px] text-white transition-colors hover:text-brand-yellow"
                        >
                            <Phone className="h-4 w-4 text-brand-yellow" />
                            +90 542 466 96 31
                        </a>
                        <div className="mt-2 flex items-start gap-2 text-[13px] text-white/50">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-yellow" />
                            <span>Antalya, Türkiye</span>
                        </div>
                        <p className="mt-2 text-[11px] text-white/30">
                            Azer Asansör - Antalya Kiralık Asansör &amp; Evden Eve Nakliyat
                        </p>
                    </div>

                    <LinkColumn
                        title="Hizmetlerimiz"
                        links={SERVICE_LINKS}
                        moreLabel="Tüm Hizmetler →"
                        moreHref="/antalya-nakliyat"
                    />
                    <LinkColumn
                        title="Hizmet Bölgeleri"
                        links={REGION_LINKS}
                        moreLabel="Tüm Bölgeler →"
                        moreHref="/hizmet-bolgeleri"
                    />
                    <LinkColumn title="Kurumsal" links={CORPORATE_LINKS} />
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container mx-auto flex flex-col items-center gap-2 px-5 py-5 text-center md:flex-row md:justify-between md:px-4 md:text-left">
                    <p className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} Azer Asansör · Tüm hakları saklıdır.
                    </p>
                    <p className="text-xs text-white/30">Tasarım: Defora Digital</p>
                </div>
            </div>
        </footer>
    );
};
