import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { GoogleRatingBadge } from './GoogleRatingBadge';

// Defaults = homepage hero. Pages passing title/subtitle keep their own content.
const DEFAULT_EYEBROW = "2011'den beri Antalya'da · 7/24 hizmet";
const CUSTOM_PAGE_EYEBROW = "Antalya'da Hızlı ve Güvenli Asansörlü Nakliyat";
const DEFAULT_TITLE = "Antalya Asansörlü Evden Eve Nakliyat";
const DEFAULT_SUBTITLE = "Antalya'da evden eve nakliyat ve kiralık mobil asansör hizmeti veriyoruz. Dar sokaktan yüksek kata, binanıza uygun asansörle anahtar teslim taşıyoruz.";
const DEFAULT_CHECKLIST = [
    "22. kata kadar mobil asansör",
    "15–20 dakikada kurulum",
    "Ücretsiz keşif",
];

const CTA_BASE = "inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center rounded-full px-7 py-3 text-base md:text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: string;
    imageSrc?: string;
    showButtons?: boolean;
    eyebrow?: string;
    checklist?: string[];
    subline?: string;
    showRating?: boolean;
    ratingText?: string;
    reviewCount?: number;
    fullHeight?: boolean;
}

export const Hero = ({
    title,
    subtitle,
    imageSrc = "/images/hero-real.jpg",
    showButtons = true,
    eyebrow,
    checklist,
    subline,
    showRating = false,
    ratingText,
    reviewCount,
    fullHeight = false,
}: HeroProps) => {
    const isCustom = Boolean(title || subtitle);
    const resolvedEyebrow = eyebrow ?? (isCustom ? CUSTOM_PAGE_EYEBROW : DEFAULT_EYEBROW);
    const resolvedChecklist = checklist ?? (!isCustom ? DEFAULT_CHECKLIST : undefined);
    const isDefaultChecklist = !checklist && !isCustom;

    // fullHeight mobile min-height: screen minus header (72px) and MobileStickyCTA (73px + safe area)
    return (
        <section id="hero" className={`relative w-full flex items-center overflow-hidden ${fullHeight ? 'min-h-[calc(100svh-145px-env(safe-area-inset-bottom))]' : ''} md:min-h-[600px] lg:min-h-[85vh]`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Antalya asansörlü nakliyat mobil asansör hizmeti"
                    fill
                    className="object-cover object-center"
                    quality={80}
                    sizes="100vw"
                    priority
                    fetchPriority="high"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 via-45% to-black/55 md:to-black/10" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-5 md:px-4 relative z-10 py-6 md:py-20">
                <div className="max-w-2xl">
                    <p className={`text-brand-yellow font-semibold ${isCustom ? 'text-[15px]' : 'text-[16px]'} md:text-lg mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]`}>
                        {resolvedEyebrow}
                    </p>
                    <h1 className={`${isCustom ? 'text-[34px]' : 'text-[36px]'} leading-[1.15] md:text-5xl md:leading-tight lg:text-6xl font-bold text-white mb-4 md:mb-5 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]`}>
                        {title || DEFAULT_TITLE}
                    </h1>
                    <p className={`${isCustom ? 'text-[18px] max-md:[@media(max-height:700px)]:text-[17px]' : 'text-[19px]'} leading-[1.55] md:text-xl md:leading-relaxed text-white mb-5 md:mb-7 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]`}>
                        {subtitle || DEFAULT_SUBTITLE}
                    </p>
                    {resolvedChecklist && <ul className={`grid gap-2.5 md:gap-2 ${isCustom ? 'text-[18px]' : 'text-[19px]'} leading-[1.5] md:text-base md:leading-normal text-white mb-2 md:mb-8 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]`}>
                        {resolvedChecklist.map((item, i) => (
                            <li key={item} className={`flex items-center gap-2 ${isDefaultChecklist && i === 0 ? 'font-bold' : ''}`}>
                                <span className="text-brand-yellow">✓</span>{item}
                            </li>
                        ))}
                    </ul>}
                    {/* Mobile uses MobileStickyCTA for call/WhatsApp */}
                    {showButtons && <div className="hidden md:flex flex-row gap-4">
                        <a
                            href="tel:+905424669631"
                            data-cta-location="hero"
                            className={`${CTA_BASE} bg-brand-yellow text-brand-black hover:bg-yellow-500 focus:ring-brand-yellow`}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Hemen Ara · 0542 466 96 31
                        </a>
                        <a
                            href="https://wa.me/905424669631"
                            data-cta-location="hero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${CTA_BASE} bg-green-500 text-white hover:bg-green-600 focus:ring-green-500`}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp&apos;tan Fiyat Al
                        </a>
                    </div>}
                    {!isCustom && <GoogleRatingBadge />}
                    {showRating && ratingText && reviewCount !== undefined && (
                        <p className="mt-4 text-sm text-gray-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                            ★ {ratingText} · Google&apos;da {reviewCount} yorum
                        </p>
                    )}
                    {subline && <p className="mt-4 text-sm text-gray-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                        {subline}
                    </p>}
                </div>
            </div>
        </section>
    );
};
