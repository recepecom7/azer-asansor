import { LucideIcon, Award, HardHat, ShieldCheck, Check, Clock } from 'lucide-react';
import { WhyUsSlider } from './WhyUsSlider';

export interface Benefit {
    title: string;
    description: string;
    icon: LucideIcon;
}

const defaultBenefits: Benefit[] = [
    { title: '10+ Yıllık Sektör Tecrübesi', description: "Antalya'da konut, inşaat, tadilat ve taşımacılık projelerinde yıllara dayanan deneyim.", icon: Award },
    { title: 'Sertifikalı ve Deneyimli Ekip', description: 'İş güvenliği eğitimlerini tamamlamış, alanında uzman profesyonel kadro.', icon: HardHat },
    { title: 'Modern ve Güvenli Ekipman', description: 'Düzenli bakımlı, 22. kata kadar ulaşan mobil ve dış cephe asansörleri.', icon: ShieldCheck },
    { title: 'Tam Sigorta Güvencesi', description: 'Tüm çalışmalar yasal mevzuata uygun, sigortalı ve kontrollü şekilde gerçekleştirilir.', icon: Check },
    { title: 'Hızlı Servis', description: 'Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve çevresinde hızlı hizmet.', icon: Clock },
];

interface WhyUsProps {
    title?: string;
    highlight?: string;
    description?: string;
    benefits?: Benefit[];
    image?: string;
    imageAlt?: string;
    ctaText?: string;
}

export const WhyUs = ({
    title = 'Neden',
    highlight = 'Azer Asansör?',
    description = 'Azer Asansör, Antalya ve çevre illerde dış cephe asansörü, mobil asansör ve yük asansörü hizmetlerinde güvenilir çözüm ortağınızdır.',
    benefits = defaultBenefits,
    image = '/images/project-lift.png',
    imageAlt = 'Azer Asansör Operasyon',
    ctaText,
}: WhyUsProps) => {
    const slides = [
        { src: image, alt: imageAlt },
        { src: '/images/antalya-konyaalti-nakliyat.jpg', alt: 'Antalya Konyaaltı nakliyat taşıma operasyonu' },
        { src: '/images/antalya-asansorlu-nakliyat.jpeg', alt: 'Antalya asansörlü nakliyat araç filosu' },
    ];

    return (
        <section id="about" className="py-12 md:py-16 bg-brand-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {title}{' '}
                            <span className="text-brand-yellow">
                                {highlight}
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-7 leading-relaxed">
                            {description}
                        </p>
                        <div className="space-y-5">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-5 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                                        <benefit.icon className="w-6 h-6 text-brand-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1.5">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {ctaText && (
                            <p className="text-sm text-gray-400 mt-6">
                                {ctaText}
                            </p>
                        )}
                    </div>
                    <div className="flex-1 w-full">
                        <WhyUsSlider slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
};
