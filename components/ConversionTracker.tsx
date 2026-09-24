'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: any[]) => void
    posthog?: { capture: (...args: any[]) => void }
  }
}

export function ConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href') || ''
      const ctaLocation = link.closest('[data-cta-location]')?.getAttribute('data-cta-location') || 'unknown'

      if (href.startsWith('tel:')) {
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-18038829941/5ySFCOrdrpQcEPXmyplD',
          value: 1.0,
          currency: 'TRY',
        })
        window.gtag?.('event', 'phone_click', { event_category: 'contact', cta_location: ctaLocation })
        window.posthog?.capture('phone_clicked', { cta_location: ctaLocation })
      }

      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-18038829941/S_QXCLmZwZwcEPXmyplD',
          value: 1.0,
          currency: 'TRY',
        })
        window.gtag?.('event', 'whatsapp_click', { event_category: 'contact', cta_location: ctaLocation })
        window.posthog?.capture('whatsapp_clicked', { cta_location: ctaLocation })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
