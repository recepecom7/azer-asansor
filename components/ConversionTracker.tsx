'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: any[]) => void
  }
}

export function ConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href') || ''

      console.log('[ConversionTracker] click event on:', href)

      if (href.startsWith('tel:')) {
        console.log('[ConversionTracker] tel: click detected, href:', href)
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-18038829941/5ySFCOrdrpQcEPXmyplD',
          value: 1.0,
          currency: 'TRY',
        })
      }

      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        console.log('[ConversionTracker] whatsapp click detected, href:', href)
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-18038829941/S_QXCLmZwZwcEPXmyplD',
          value: 1.0,
          currency: 'TRY',
        })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
