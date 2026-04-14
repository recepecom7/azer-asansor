import Image from 'next/image';
import { LucideIcon, Award, HardHat, ShieldCheck, Check, Clock } from 'lucide-react';

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
}

export const WhyUs = ({
    title = 'Neden',
    highlight = 'Azer Asansör?',
    description = 'Azer Asansör, Antalya ve çevre illerde dış cephe asansörü, mobil asansör ve yük asansörü hizmetlerinde güvenilir çözüm ortağınızdır.',
    benefits = defaultBenefits,
    image = '/images/project-lift.png',
    imageAlt = 'Azer Asansör Operasyon',
}: WhyUsProps) => {
    return (
        <section id="about" className="py-20 bg-brand-beige">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                            {title}{' '}
                            <span className="text-brand-yellow/90 bg-black px-2 rounded">
                                {highlight}
                            </span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                            {description}
                        </p>
                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <benefit.icon className="w-6 h-6 text-brand-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-black mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};