import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ConversionTracker } from "@/components/ConversionTracker";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.azerasansor.com"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  title: {
    default: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
    template: "%s | Azer Asansör",
  },
  description:
    "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri. 7/24 profesyonel çözüm.",
  keywords: [
    "antalya asansör kiralama",
    "dış cephe asansörü",
    "yük asansörü",
    "nakliyat asansörü",
    "mobil asansör",
  ],
  authors: [{ name: "Azer Asansör" }],
  creator: "Azer Asansör",
  publisher: "Azer Asansör",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
    description:
      "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri.",
    url: "https://www.azerasansor.com",
    siteName: "Azer Asansör",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.azerasansor.com/images/hero-real.jpg",
        width: 1200,
        height: 630,
        alt: "Azer Asansör - Antalya Kiralık Asansör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
    description:
      "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri.",
    images: ["https://www.azerasansor.com/images/hero-real.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18038829941"
          strategy="afterInteractive"
        />
        <Script id="google-ads-global-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18038829941', { allow_enhanced_conversions: true });
            gtag('config', 'G-B3P99ETM15');
          `}
        </Script>
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="al ol ll init Il Rl Tl Ml Ol za El Dl Sl capture getExtension Pl nl Hl calculateEventProperties Bl register register_once register_for_session unregister unregister_for_session Vl Cl zl getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Gl identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset Zl shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Ul ql createPersonProfile setInternalOrTestUser Wl ul hl opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $l debug Ua Jn getPageViewId captureTraceFeedback captureTraceMetric bl".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_xqVxwXyNrVMDjEMMxZg8bm5kabFTwzzuESewPboJA4J3', {
                api_host: 'https://eu.i.posthog.com',
                defaults: '2026-05-30',
                person_profiles: 'identified_only',
            })
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <MobileStickyCTA />
        <ConversionTracker />
      </body>
    </html>
  );
}
