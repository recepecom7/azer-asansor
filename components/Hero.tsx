import Image from 'next/image';
import { Button } from './Button';
import { Phone, MessageCircle } from 'lucide-react';

const DEFAULT_EYEBROW = "Antalya'da Hızlı ve Güvenli Asansörlü Nakliyat";
const DEFAULT_CHECKLIST = [
    "22. Kata Kadar Ulaşım",
    "Sigortalı Taşıma",
    "15–20 Dakikada Kurulum",
    "Aynı Gün Hizmet İmkânı",
];
const DEFAULT_SUBLINE = "Antalya asansörlü nakliyat ve mobil asansör hizmetinde yerel, hızlı ve güvenli çözüm.";

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
}

export const Hero = ({
    title,
    subtitle,
    imageSrc = "/images/hero-real.jpg",
    showButtons = true,
    eyebrow = DEFAULT_EYEBROW,
    checklist,
    subline,
    showRating = false,
    ratingText,
    reviewCount,
}: HeroProps) => {
    const isCustom = Boolean(title || subtitle);
    const resolvedChecklist = checklist ?? (!isCustom ? DEFAULT_CHECKLIST : undefined);
    const resolvedSubline = subline ?? (!isCustom ? DEFAULT_SUBLINE : undefined);

    return (
        <section id="hero" className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Antalya asansörlü nakliyat mobil asansör hizmeti"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    sizes="100vw"
                    priority
                    fetchPriority="high"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 py-14 md:py-20">
                <div className="max-w-2xl">
                    <p className="text-brand-yellow font-semibold text-base md:text-lg mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
                        {eyebrow}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
                        {title || "Antalya Asansörlü Nakliyat"}
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-7 leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                        {subtitle || "Antalya genelinde asansörlü nakliyat hizmeti ile yüksek katlara güvenli ve hızlı taşıma sağlıyoruz. 22. kata kadar ulaşan mobil asansör sistemimiz sayesinde eşyalarınız zarar görmeden taşınır. Muratpaşa, Kepez, Konyaaltı, Lara, Aksu ve Döşemealtı bölgelerinde aktif hizmet veriyoruz."}
                    </p>
                    {resolvedChecklist && <ul className="grid gap-2 sm:grid-cols-2 text-white mb-8 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                        {resolvedChecklist.map((item) => (
                            <li key={item} className="flex items-center gap-2"><span className="text-brand-yellow">✓</span>{item}</li>
                        ))}
                    </ul>}
                    {showButtons && <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:+905424669631" aria-label="Hemen Ara – Ücretsiz Fiyat Al" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full text-base md:text-lg px-7">
                                <Phone className="w-5 h-5 mr-2" />
                                Hemen Ara – Ücretsiz Fiyat Al
                            </Button>
                        </a>
                        <a href="https://wa.me/905424669631" aria-label="WhatsApp’tan Hızlı Teklif Al" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button variant="whatsapp" className="w-full text-base md:text-lg px-7">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp&apos;tan Yaz – Hızlı Teklif Al
                            </Button>
                        </a>
                    </div>}
                    {showRating && ratingText && reviewCount !== undefined && (
                        <p className="mt-4 text-sm text-gray-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                            ★ {ratingText} · Google&apos;da {reviewCount} yorum
                        </p>
                    )}
                    {resolvedSubline && <p className="mt-4 text-sm text-gray-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                        {resolvedSubline}
                    </p>}
                </div>
            </div>
        </section>
    );
};
