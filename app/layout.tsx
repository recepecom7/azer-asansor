import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.azerasansor.com"),
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Azer Asansör - Antalya Kiralık Asansör & Evden Eve Nakliyat",
  "description": "Antalya'da 7/24 profesyonel kiralık asansör, mobil asansör ve yük asansörü kiralama hizmetleri. 22. kata kadar ulaşan asansörlerimizle güvenli taşımacılık.",
  "image": "https://www.azerasansor.com/images/hero-real.jpg",
  "url": "https://www.azerasansor.com",
  "telephone": "+905424669631",
  "email": "info@azerasansor.com",
  "priceRange": "₺₺",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Antalya",
    "addressLocality": "Antalya",
    "addressRegion": "Antalya",
    "addressCountry": "TR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8969,
    "longitude": 30.7133,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "opens": "00:00",
    "closes": "23:59",
  },
  "sameAs": ["https://wa.me/905424669631"],
  "areaServed": [
    "Muratpaşa",
    "Kepez",
    "Konyaaltı",
    "Lara",
    "Aksu",
    "Döşemealtı",
    "Antalya",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Asansör Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobil Asansör Kiralama",
          "url": "https://www.azerasansor.com/antalya-mobil-asansor-kiralama",
          "description":
            "Antalya'da 22. kata kadar ulaşan 400kg kapasiteli mobil asansör kiralama hizmeti",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dış Cephe Asansörü",
          "url": "https://www.azerasansor.com/antalya-dis-cephe-asansoru",
          "description":
            "İnşaat ve tadilat projeleri için yüksek katlara ulaşan dış cephe asansörü kiralama",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Evden Eve Nakliyat Desteği",
          "description":
            "Yüksek katlara güvenli eşya taşıma ve nakliyat desteği için asansör kurulumu",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}