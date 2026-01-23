import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://azerasansor.com"),
  title: {
    default: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
    template: "%s | Azer Asansör",
  },
  description: "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri. 7/24 profesyonel çözüm.",
  keywords: ["antalya asansör kiralama", "dış cephe asansörü", "yük asansörü", "nakliyat asansörü", "mobil asansör"],
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
    description: "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri.",
    url: "https://azerasansor.com",
    siteName: "Azer Asansör",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
    description: "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
