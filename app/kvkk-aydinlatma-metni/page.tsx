import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "KVKK Aydınlatma Metni | Azer Asansör" },
  alternates: {
    canonical: "https://www.azerasansor.com/kvkk-aydinlatma-metni",
  },
  robots: { index: false, follow: true },
};

const h2Class = "text-xl md:text-2xl font-bold text-brand-black mt-10 mb-4";
const listClass = "list-disc pl-6 space-y-2";

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />

      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl text-gray-800 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-3">
          Kişisel Verilerin Korunması Hakkında Aydınlatma Metni
        </h1>
        <p className="text-sm text-gray-500">Son güncelleme: 24 Eylül 2026</p>

        <h2 className={h2Class}>1. Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu,
          &quot;Evden Eve Nakliyat Azer Asansör Antalya Kiralık Asansör&quot; unvanıyla faaliyet gösteren
          Taner Kahraman&apos;dır (&quot;Azer Asansör&quot;).
        </p>
        <p className="mt-3">
          E-posta:{" "}
          <a href="mailto:tanerkahramanazer@gmail.com" className="underline hover:text-brand-black">
            tanerkahramanazer@gmail.com
          </a>
          <br />
          Telefon:{" "}
          <a data-cta-location="legal_text" href="tel:+905424669631" className="underline hover:text-brand-black">
            +90 542 466 96 31
          </a>
        </p>

        <h2 className={h2Class}>2. İşlenen Kişisel Veriler</h2>
        <ul className={listClass}>
          <li>Kimlik ve iletişim bilgileri: ad soyad, telefon numarası</li>
          <li>
            Hizmet bilgileri: talep ettiğiniz hizmet türü, iletişim formundaki &quot;Ek Detaylar&quot; alanına
            yazdığınız bilgiler (ör. ev tipi, kat ve asansör ihtiyacı) ile telefon ve WhatsApp
            görüşmelerinde paylaştığınız taşınma adresleri, tarih ve eşya bilgisi
          </li>
          <li>
            İnternet sitesi kullanım verileri: IP adresi, tarayıcı ve cihaz bilgisi, ziyaret edilen
            sayfalar, tıklama ve oturum verileri, çerez verileri
          </li>
        </ul>

        <h2 className={h2Class}>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul className={listClass}>
          <li>Teklif taleplerinizi almak, size dönüş yapmak ve fiyat teklifi hazırlamak</li>
          <li>Nakliyat ve asansör hizmetinin planlanması ve yürütülmesi</li>
          <li>Telefon, WhatsApp ve SMS yoluyla sizinle iletişim kurmak</li>
          <li>İnternet sitesinin güvenliğini sağlamak ve kullanım deneyimini iyileştirmek</li>
          <li>Reklam kampanyalarımızın etkinliğini ölçmek</li>
        </ul>

        <h2 className={h2Class}>4. Hukuki Sebepler</h2>
        <p>
          Kişisel verileriniz KVKK&apos;nın 5. maddesinde yer alan; bir sözleşmenin kurulması veya ifasıyla
          doğrudan ilgili olması, veri sorumlusunun meşru menfaatleri için zorunlu olması ve hukuki
          yükümlülüklerin yerine getirilmesi hukuki sebeplerine dayanılarak işlenir.
        </p>

        <h2 className={h2Class}>5. Toplama Yöntemi</h2>
        <p>
          Kişisel verileriniz; internet sitemizdeki iletişim formu, telefon ve WhatsApp görüşmeleri ile
          internet sitemizde kullanılan çerezler ve benzeri teknolojiler aracılığıyla otomatik veya kısmen
          otomatik yollarla toplanır.
        </p>

        <h2 className={h2Class}>6. Kişisel Verilerin Aktarılması</h2>
        <p>
          Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olarak aşağıdaki hizmet sağlayıcılarla
          paylaşılabilir:
        </p>
        <ul className={`${listClass} mt-3`}>
          <li>Netgsm (Türkiye): form bildirimlerinin SMS ile iletilmesi</li>
          <li>
            Google LLC (Google Ads, Google Analytics, Google Haritalar): reklam ölçümü, site analizi ve
            iletişim sayfasında harita gösterimi. İletişim formunu gönderdiğinizde telefon numaranız,
            reklam dönüşüm ölçümü amacıyla tarayıcınızda karma (hash) işlemine tabi tutularak
            Google&apos;a iletilir.
          </li>
          <li>PostHog Inc. (AB sunucuları): site kullanım analizi</li>
          <li>Vercel Inc. (ABD): internet sitesinin barındırılması</li>
          <li>WhatsApp (Meta Platforms): WhatsApp üzerinden bize yazmanız halinde mesajlaşma</li>
          <li>Yetkili kamu kurum ve kuruluşları: yasal zorunluluk halinde</li>
        </ul>
        <p className="mt-3">
          Bu hizmet sağlayıcıların bir kısmının sunucuları yurt dışında bulunduğundan, söz konusu
          aktarımlar KVKK&apos;nın 9. maddesinde öngörülen şartlara uygun olarak gerçekleştirilir.
        </p>

        <h2 className={h2Class}>7. Saklama Süresi</h2>
        <p>
          Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen süreler
          boyunca saklanır. Teklif ve iletişim kayıtları, hizmetin tamamlanmasından itibaren 2 yıl süreyle
          saklanır. Bu sürenin sonunda verileriniz silinir, yok edilir veya anonim hale getirilir.
        </p>

        <h2 className={h2Class}>8. Haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca;</p>
        <ul className={`${listClass} mt-3`}>
          <li>kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>işlenmişse buna ilişkin bilgi talep etme,</li>
          <li>işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>
            düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini
            isteme,
          </li>
          <li>
            münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz
            etme,
          </li>
          <li>
            kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme
          </li>
        </ul>
        <p className="mt-3">haklarına sahipsiniz.</p>

        <h2 className={h2Class}>9. Başvuru</h2>
        <p>
          Haklarınıza ilişkin taleplerinizi, kimliğinizi tespit edici bilgilerle birlikte{" "}
          <a href="mailto:tanerkahramanazer@gmail.com" className="underline hover:text-brand-black">
            tanerkahramanazer@gmail.com
          </a>{" "}
          adresine iletebilirsiniz. Başvurunuz en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.
        </p>
      </article>

      <Footer />
    </main>
  );
}
