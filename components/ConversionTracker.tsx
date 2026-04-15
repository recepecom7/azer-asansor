'use client'

import { useEffect } from 'react'
import { fireGoogleAdsConversion } from '@/lib/googleAds'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: any[]) => void
  }
}

const WHATSAPP_URL = 'https://wa.me/905424669631'
const WHATSAPP_SEND_TO = 'AW-18038829941/S_QXCLmZwZwcEPXmyplD'
const PHONE_SEND_TO = 'AW-18038829941/0RtHCMCmxpwcEPXmyplD'

export function ConversionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href') || ''

      if (href.startsWith('tel:')) {
        event.preventDefault()

        fireGoogleAdsConversion(PHONE_SEND_TO)

        const open = () => {
          window.location.href = href
        }

        window.setTimeout(open, 150)
        return
      }

      const normalizedHref = href.replace('https://wa.me/+', 'https://wa.me/')
      if (normalizedHref === WHATSAPP_URL) {
        event.preventDefault()

        fireGoogleAdsConversion(WHATSAPP_SEND_TO)

        const open = () => {
          if (link.target === '_blank') {
            window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
            return
          }
          window.location.href = WHATSAPP_URL
        }

        window.setTimeout(open, 150)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
