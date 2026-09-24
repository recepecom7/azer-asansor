'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
    schemaId: string;
    title?: string;
    highlight?: string;
    ctaText?: string;
    defaultOpenIndex?: number | null;
}

export const FAQ = ({
    faqs,
    schemaId,
    title = 'Sık Sorulan',
    highlight = 'Sorular',
    ctaText,
    defaultOpenIndex = null,
}: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="py-20 bg-brand-black text-white">
            {/* Plain <script> (not next/script) so the schema is in the server HTML,
                not deferred into the client hydration payload. */}
            <script
                id={schemaId}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}{' '}
                        <span className="text-brand-yellow bg-gray-900 px-2 rounded">
                            {highlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-800 bg-gray-900 rounded-2xl overflow-hidden"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800 transition-colors"
                                aria-expanded={openIndex === index}
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <span className="font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-yellow flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`px-6 text-gray-300 leading-relaxed border-t border-gray-800 ${openIndex === index ? 'max-h-none pb-6 pt-4' : 'max-h-0 overflow-hidden border-t-0 py-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>

                {ctaText && (
                    <p className="text-center text-gray-400 mt-8">
                        {ctaText}
                    </p>
                )}
            </div>
        </section>
    );
};
