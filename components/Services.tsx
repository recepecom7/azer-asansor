import { LucideIcon, Phone, MessageCircle, Armchair, Refrigerator, BrickWall, Trash2, Truck, Building2 } from 'lucide-react';
import { Button } from './Button';

export interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

const defaultServices: ServiceItem[] = [
    { title: 'Mobilya Taşıma Hizmetleri', description: 'Büyük, hacimli ve ağır mobilyaların bina içine zarar vermeden, hızlı ve güvenli şekilde yüksek katlara çıkarılması veya indirilmesi.', icon: Armchair },
    { title: 'Beyaz Eşya Taşıma', description: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi beyaz eşyaların mobil asansör ile güvenle taşınması.', icon: Refrigerator },
    { title: 'İnşaat Malzemesi Çıkarma & İndirme', description: 'İnşaat ve tadilat süreçlerinde ağır ve hassas malzemelerin kontrollü ve güvenli şekilde taşınması.', icon: BrickWall },
    { title: 'Moloz İndirme Hizmeti', description: 'Tadilat sonrası oluşan molozların çevreye zarar vermeden, hızlı ve düzenli şekilde indirilmesi.', icon: Trash2 },
    { title: 'Evden Eve Taşımacılığa Destek', description: 'Taşınma sürecinde eşyaların yüksek katlara sorunsuz, güvenli ve zamanında taşınmasına destek sağlanması.', icon: Truck },
    { title: 'Yüksek Katlara Özel Taşıma Çözümleri', description: 'Mobil asansör ile istenilen her türlü eşyanın yüksek katlara güvenle çıkarılması veya indirilmesi.', icon: Building2 },
];

interface ServicesProps {
    title?: string;
    highlight?: string;
    services?: ServiceItem[];
    ctaTitle?: string;
    ctaDescription?: string;
}

export const Services = ({
    title = 'Mobil Asansör',
    highlight = 'Hizmetleri',
    services = defaultServices,
    ctaTitle = 'Hizmetlerimiz hakkında bilgi almak için hemen arayın.',
    ctaDescription = 'Azer Asansör ile güvenli, hızlı ve profesyonel çözümler.',
}: ServicesProps) => {
    return (
        <section id="services" className="py-24 bg-brand-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">{title}</span>{' '}
                        <span className="text-brand-yellow">{highlight}</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-brand-yellow/10 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                                <service.icon className="w-7 h-7 text-brand-yellow group-hover:text-brand-black" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center border border-gray-800">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {ctaTitle}
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        {ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+905424669631">
                            <Button variant="primary" className="min-w-[180px] text-lg">
                                <Phone className="w-5 h-5 mr-2" />
                                Hemen Ara
                            </Button>
                        </a>
                        <a href="https://wa.me/+905424669631" target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="min-w-[180px] text-lg">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp ile İletişim
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};