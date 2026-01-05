import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azer Asansör | Dış Cephe ve Yük Asansörü Hizmetleri",
  description: "Antalya ve çevre illerde güvenli kiralık asansör, yük asansörü kiralama ve nakliyat asansörü hizmetleri. 7/24 profesyonel çözüm.",
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
