import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <Hero
        title={
          <>
            Kiralık Asansör <br />
            <span className="text-brand-yellow">& Yük Asansörü</span> Hizmetleri
          </>
        }
        subtitle="Antalya ve çevre illerde güvenli, hızlı ve profesyonel mobil asansör kiralama çözümleri. Yüksek katlara kolay, güvenli ve sorunsuz şekilde ulaşın."
      />
      <Services />
      <WhyUs />
      <Footer />
    </main>
  );
}
