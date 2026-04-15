import Image from 'next/image';
import { Button } from './Button';
import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
    title: React.ReactNode;
    subtitle: string;
    imageSrc?: string;
    showButtons?: boolean;
}

export const Hero = ({
    title,
    subtitle,
    imageSrc = "/images/hero-real.jpg",
    showButtons = true
}: HeroProps) => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Azer Asansör Filosu"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium max-w-xl">
                        {subtitle}
                    </p>

                    {showButtons && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+905424669631" className="w-full sm:w-auto">
                                <Button variant="primary" className="w-full text-lg px-8">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Hemen Ara
                                </Button>
                            </a>

                            <a href="https://wa.me/905424669631" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="whatsapp" className="w-full text-lg px-8">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp&apos;tan Yaz
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
