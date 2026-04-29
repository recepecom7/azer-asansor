import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Azer Asansör Antalya",
  description:
    "Antalya asansörlü nakliyat, mobil asansör kiralama ve evden eve nakliyat hakkında faydalı rehberler.",
  alternates: {
    canonical: "https://www.azerasansor.com/blog",
  },
};

const posts = [
  {
    title: "Antalya Evden Eve Nakliyat Fiyatları 2026",
    href: "/blog/antalya-evden-eve-nakliyat-fiyatlari",
    text: "Ev taşıma fiyatlarını etkileyen faktörler ve ücretsiz keşif ile net teklif süreci.",
  },
  {
    title: "Antalya Asansörlü Nakliyat Fiyatları 2026",
    href: "/blog/antalya-asansorlu-nakliyat-fiyatlari",
    text: "Kat sayısı, kurulum alanı ve mobil asansör desteğinin fiyat üzerindeki etkileri.",
  },
  {
    title: "Antalya Mobil Asansör Kiralama Fiyatları 2026",
    href: "/blog/antalya-mobil-asansor-kiralama-fiyatlari",
    text: "Kiralık asansör fiyatı neye göre değişir, aynı gün hizmet nasıl planlanır?",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="py-12 md:py-16 bg-brand-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Azer Asansör Blog</h1>
          <p className="text-gray-300 text-lg max-w-4xl">
            Antalya’da nakliyat, asansörlü taşıma ve mobil asansör kiralama hakkında fiyat, süreç ve güvenli taşıma rehberlerini inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="bg-gray-900 border border-white/10 rounded-2xl p-6 block hover:border-brand-yellow/40 transition">
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.text}</p>
                <span className="text-brand-yellow font-medium">Detayları Gör →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
