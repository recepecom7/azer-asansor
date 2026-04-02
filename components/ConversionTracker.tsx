'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export function ConversionTracker() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Find the closest anchor tag in case they clicked an icon inside the link
            const link = target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href') || '';
            
            // Trigger conversion if it's a Phone call or WhatsApp link
            if (href.startsWith('tel:') || href.includes('wa.me')) {
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', {
                        'send_to': 'AW-18038829941/5ySFCOrdrpQcEPXmyplD'
                    });
                }
            }
        };

        // Attach global listener
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
}
