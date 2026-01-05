import Image from 'next/image';
import { Check, ShieldCheck, Clock, Award, HardHat } from 'lucide-react';

const benefits = [
    {
        title: '10+ Yıllık Sektör Tecrübesi',
        description: 'Antalya’da konut, inşaat, tadilat ve taşımacılık projelerinde yıllara dayanan deneyim',
        icon: Award,
    },
    {
        title: 'Sertifikalı ve Deneyimli Operatör Kadrosu',
        description: 'İş güvenliği eğitimlerini tamamlamış, alanında uzman profesyonel ekip',
        icon: HardHat,
    },
    {
        title: 'Modern ve Güvenli Asansör Parkuru',
        description: 'Düzenli bakımları yapılmış, yüksek katlara uygun mobil ve dış cephe asansörleri',
        icon: ShieldCheck,
    },
    {
        title: 'Tam Kapsamlı Sigorta ve İş Güvenliği Önlemleri',
        description: 'Tüm çalışmalar yasal mevzuata uygun, sigortalı ve kontrollü şekilde gerçekleştirilir',
        icon: Check,
    },
    {
        title: 'Antalya ve Çevre İlçelerde Hızlı Servis',
        description: 'Muratpaşa, Kepez, Konyaaltı, Lara, Aksu, Döşemealtı ve çevresinde hızlı ve zamanında hizmet',
        icon: Clock,
    },
];

export const WhyUs = () => {
    return (
        <section id="about" className="py-20 bg-brand-beige">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                            Neden <span className="text-brand-yellow/90 bg-black px-2 rounded">Azer Asansör?</span>
                        </h2>

                        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                            Azer Asansör, Antalya ve çevre illerde dış cephe asansörü, mobil asansör ve yük asansörü hizmetlerinde güvenilir çözüm ortağınızdır.
                        </p>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <benefit.icon className="w-6 h-6 text-brand-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-black mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/project-lift.png"
                                alt="Azer Asansör Operasyon"
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
