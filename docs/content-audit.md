# Azer Asansör — İçerik Denetimi (Content Audit)

Tarih: 2026-09-23 · Kapsam: `app/` altındaki tüm Next.js App Router sayfaları (salt okunur analiz).

> Not: Kelime sayıları koddan gövde metni okunarak yapılan yaklaşık tahminlerdir (~), gerçek trafik/dönüşüm/yorum sayısı gibi veriler repo içinde bulunmadığından **[müşteriden alınacak]** olarak işaretlenmiştir.

---

## Adım 1 — Sayfa Envanteri

| URL | H1 | Meta Title | Hedef Keyword | Kelime Sayısı (~) | Schema Tipleri | İç Link Sayısı |
|---|---|---|---|---|---|---|
| `/` (anasayfa) | Antalya Mobil Asansör Kiralama ve Asansörlü Nakliyat Hizmeti | Antalya Nakliyat ve Kiralık Asansör \| Azer Asansör | antalya nakliyat / asansör kiralama (karma) | ~350 | FAQPage (`faq-homepage`), LocalBusiness (layout'tan global) | 2 (gövde metninde /antalya-mobil-asansor-kiralama, /antalya-asansorlu-nakliyat) + Header/Footer nav |
| `/antalya-evden-eve-nakliyat` | Antalya Evden Eve Nakliyat Hizmeti | Antalya Evden Eve Nakliyat \| Güvenli & Sigortalı Taşıma | antalya evden eve nakliyat | ~180 | FAQPage (`faq-evden-eve-nakliyat`) | 0 gövde içi link (sadece Header/Footer nav) |
| `/antalya-asansorlu-nakliyat` | Antalya Asansörlü Nakliyat Hizmeti | Antalya Asansörlü Nakliyat \| Evden Eve ve Mobilya Asansörü | antalya asansörlü nakliyat | ~650 | FAQPage (`faq-asansorlu-tasima`) | 1 (→ /antalya-mobil-asansor-kiralama) + nav |
| `/antalya-asansorlu-tasima` | — (redirect, JSX yok) | — | antalya asansörlü taşıma | 0 (302 redirect → /antalya-asansorlu-nakliyat) | yok | 0 |
| `/antalya-mobil-asansor-kiralama` | Antalya Mobil Asansör Kiralama Hizmeti | Antalya Mobil Asansör Kiralama \| 22. Kata Kadar Kiralık Asansör | antalya mobil asansör kiralama | ~600 | FAQPage (`faq-mobil-asansor`) | 0 gövde içi link + nav |
| `/antalya-dis-cephe-asansoru` | Antalya Dış Cephe Asansörü Kiralama | Antalya Dış Cephe Asansörü Kiralama \| İnşaat ve Moloz Asansörü | antalya dış cephe asansörü | ~200 | FAQPage (`faq-dis-cephe-asansoru`) | 0 gövde içi link + nav |
| `/hizmet-bolgeleri` | Antalya Hizmet Bölgelerimiz | Antalya Nakliyat ve Asansör Hizmet Bölgeleri \| Tüm İlçeler | antalya ilçe bazlı hizmet | ~120 | yok | 0 (ilçe kartlarındaki "→ X Evden Eve Nakliyat" ve "→ X Mobil Asansör Kiralama" metinleri **link değil, düz metin**) + nav |
| `/hakkimizda` | Hakkımızda Azer Asansör | Hakkımızda \| Azer Asansör Antalya | azer asansör hakkında | ~220 | yok | 0 gövde içi link + nav |
| `/iletisim` | Bize Ulaşın | İletişim \| Azer Asansör Antalya | azer asansör iletişim | ~80 | yok | 0 gövde içi link + nav (tel/WhatsApp/mail CTA'ları var) |

Header/Footer navigasyonu tüm sayfalarda ortak: Anasayfa, Evden Eve Nakliyat, Asansörlü Nakliyat, Mobil Asansör Kiralama, Dış Cephe Asansörü, Hizmet Bölgeleri, Hakkımızda, İletişim (8 link, her sayfada sabit).

Global: `app/layout.tsx` içinde `LocalBusiness` JSON-LD şeması var (tüm sayfalara `<Script>` ile enjekte ediliyor), `address.streetAddress` alanı sadece `"Antalya"` — gerçek bir sokak adresi **yok**, bu doğru (hizmet bölgesi işletmesi için uygun).

---

## Adım 2 — Etiketleme (KEEP / IMPROVE / MERGE / DELETE)

### Kannibalizasyon grubu 1: "Antalya nakliyat / evden eve nakliyat" ailesi
| Sayfa | Etiket | Gerekçe |
|---|---|---|
| `/` (anasayfa) | **IMPROVE** | Anasayfa hem "mobil asansör kiralama" hem "asansörlü nakliyat" hem "evden eve nakliyat" konularını aynı anda hedefliyor — bu üç ayrı hizmet sayfasıyla doğrudan kelime çakışması yaratıyor (kannibalizasyon). Anasayfa marka/genel tanıtım sayfasına indirgenmeli, spesifik hizmet anahtar kelimelerini hizmet sayfalarına bırakmalı. |
| `/antalya-evden-eve-nakliyat` **(Google Ads para sayfası — YÜKSEK RİSK, onay gerekli)** | **IMPROVE** | Site içindeki en kısa içerikli sayfa (~180 kelime), tek `<Hero>`+`<Services>`+`<WhyUs>`+`<FAQ>` bloklarından oluşuyor; kendine özgü "Nasıl Çalışır / Fiyatlandırma / Hizmet Alanları" bölümleri yok — oysa `/antalya-asansorlu-nakliyat` ve `/antalya-mobil-asansor-kiralama` sayfalarında bu bölümler var. Ödemeli trafik bu sayfaya geldiği için **herhangi bir değişiklik önce onaylanmalı**, ancak mevcut haliyle rakip sayfalara göre en zayıf yapılandırılmış sayfa. |
| `/antalya-asansorlu-nakliyat` | **KEEP** | En kapsamlı ve en iyi yapılandırılmış sayfa (Nasıl Çalışır, Fiyatlandırma, Hizmet Alanları bölümleri var). Ana "asansörlü nakliyat" hedef kelimesi için doğal lider. |
| `/antalya-asansorlu-tasima` | **KEEP** (redirect olarak) | Zaten 301/302 redirect ile `/antalya-asansorlu-nakliyat`'a yönleniyor — doğru davranış, ek işlem gerekmiyor. |

### Kannibalizasyon grubu 2: "mobil asansör kiralama"
| Sayfa | Etiket | Gerekçe |
|---|---|---|
| `/antalya-mobil-asansor-kiralama` | **KEEP** | İyi yapılandırılmış, kendine özgü hedef kelime (kiralama, 22. kat, fiyatlandırma bölümü var). Ancak anasayfa ile aynı kelimeyi hedeflediği için anasayfa hafifletilmeli. |
| `/antalya-dis-cephe-asansoru` | **KEEP** | Farklı, net bir alt segment (inşaat/tadilat/moloz) hedefliyor; kannibalizasyon riski düşük. |

### Diğer sayfalar
| Sayfa | Etiket | Gerekçe |
|---|---|---|
| `/hizmet-bolgeleri` | **IMPROVE** | İlçe kartlarında "→ X Evden Eve Nakliyat" / "→ X Mobil Asansör Kiralama" ifadeleri **gerçek link değil**, düz metin (`<span>`). İlçe×hizmet programatik alt sayfaları (`/hizmet-bolgeleri/muratpasa` gibi) yok — GEO/yerel SEO açısından büyük fırsat kaybı. |
| `/hakkimizda` | **KEEP** | Marka/güven içeriği için doğru sayfa, kannibalizasyon riski yok. |
| `/iletisim` | **KEEP** | Standart iletişim sayfası, sorun yok. Fiziksel adres göstermiyor (doğru, hizmet bölgesi işletmesi). |

### MERGE önerisi yok
Hiçbir sayfa tam anlamıyla "silinip başka bir URL'ye yönlendirilmeli" seviyesinde zayıf değil (asansörlü-tasima zaten redirect). Bunun yerine **anasayfanın kapsamının daraltılması** öneriliyor (MERGE değil, IMPROVE/de-scope).

### DELETE
Yok — tüm sayfalar iş değeri taşıyor, silinmesi önerilen sayfa yok.

---

## Adım 3 — Yapı Karşılaştırması

İdeal yapı: Hero (H1 + tel/WhatsApp CTA + puan) → Hizmetler → Bölgeler → Neden Azer → Yorumlar → Fiyat nasıl belirlenir → FAQ → Alt CTA → Footer

| Sayfa | Hero+CTA | Puan/Yıldız | Hizmetler | Bölgeler | Neden Azer | Yorumlar | Fiyat Bilgisi | FAQ | Alt CTA | Eksikler |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | ✅ | ❌ | ✅ | metin içinde geçiyor, ayrı bölüm yok | ✅ | ❌ | ❌ | ✅ | ✅ (Services CTA) | Puan/yıldız, Yorumlar, Fiyat bölümü, ayrı Bölgeler bölümü |
| `/antalya-evden-eve-nakliyat` | ✅ | ❌ | ✅ | ❌ (sadece WhyUs metninde ilçe adları geçiyor) | ✅ | ❌ | ❌ | ✅ | ✅ | Puan/yıldız, Bölgeler, Yorumlar, Fiyat bölümü — **en eksik sayfa** |
| `/antalya-asansorlu-nakliyat` | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Puan/yıldız, Yorumlar |
| `/antalya-mobil-asansor-kiralama` | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Puan/yıldız, Yorumlar |
| `/antalya-dis-cephe-asansoru` | ✅ | ❌ | ✅ | ❌ (sadece WhyUs metninde) | ✅ | ❌ | ❌ | ✅ | ✅ | Puan/yıldız, Bölgeler, Yorumlar, Fiyat bölümü |
| `/hizmet-bolgeleri` | ✅ (showButtons default true) | ❌ | ❌ | ✅ (ana amacı bu) | ❌ | ❌ | ❌ | ❌ | ❌ | Puan/yıldız, FAQ, Alt CTA yok |
| `/hakkimizda` | ✅ ama `showButtons={false}` (CTA yok) | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Hero'da CTA kapalı, FAQ yok |

**Site genelinde ortak eksik: hiçbir sayfada "puan/yıldız" (Google 90+ yorum, 5 yıldız) gösterimi yok ve gerçek müşteri yorumu/testimonial bölümü hiçbir sayfada yok.** Bu, verilen iş bağlamındaki en güçlü güven sinyalinin sitede hiç kullanılmadığı anlamına geliyor.

---

## Adım 4 — GEO/AEO Boşlukları (ana hizmet sayfaları)

| Sayfa | İlk 2 cümle net/alıntılanabilir cevap mı? | FAQ gerçek sorgulara mı cevap veriyor? | Somut veri var mı? |
|---|---|---|---|
| `/antalya-evden-eve-nakliyat` | ❌ Sayfa doğrudan Hero başlığı + alt başlıktan Services'e geçiyor, tanım cümlesi/doğrudan cevap paragrafı yok | Kısmen — "fiyat ne kadar" gibi gerçek sorgulara cevap var ama cevaplar jenerik ("Ücretsiz keşif için hemen arayın", rakam yok) | Sadece "22. kata kadar" — süre, fiyatı etkileyen faktörler somutlaştırılmamış |
| `/antalya-asansorlu-nakliyat` | ✅ "Asansörlü nakliyat; eşyaların bina dışından mobil asansör ile taşınmasıdır" tanımı var (Nedir? bölümü), doğrudan alıntılanabilir | ✅ Gerçek sorgulara yakın ("kaçıncı kata kadar çıkıyor", "kurulum ne kadar sürer") | ✅ 22. kat, 400kg kapasite, 15-30 dk kurulum süresi verilmiş |
| `/antalya-mobil-asansor-kiralama` | ❌ Hero'dan direkt Services'e geçiyor, ayrı "nedir" tanım paragrafı yok (asansorlu-nakliyat sayfasındaki gibi) | ✅ Gerçek sorgulara yakın (saatlik/günlük kiralama, operatör dahil mi, her binada kurulabiliyor mu) | ✅ 22. kat, 400kg, 15-30 dk kurulum |
| `/antalya-dis-cephe-asansoru` | ❌ Hero'dan direkt Services'e geçiyor | Kısmen — sorular gerçekçi ama cevaplar kısa/jenerik | ✅ 22. kat, 300-400kg kapasite, 20-30 dk kurulum |
| `/` (anasayfa) | Kısmen — ilk paragraf "Antalya nakliyat" için genel bir tanıtım cümlesi, tek bir sorguya net cevap değil (çoklu hizmet karışık anlatılıyor) | ✅ ama anasayfa FAQ'ı diğer sayfalarla neredeyse birebir aynı (evden-eve-nakliyat FAQ'ıyla %80+ örtüşüyor) — kannibalizasyonu FAQ seviyesinde de yaratıyor | ✅ 22. kat mevcut |

**Genel gözlem:** `/antalya-asansorlu-nakliyat` GEO/AEO açısından en güçlü sayfa (net tanım + somut veri + gerçekçi FAQ). `/antalya-evden-eve-nakliyat` en zayıf sayfa — hem en kısa içerik hem doğrudan cevap paragrafı yok, hem de bu **Google Ads para sayfası**.

---

## Adım 5 — İç Link Haritası

```
Anasayfa (/)
 ├─ (gövde metninde) → /antalya-mobil-asansor-kiralama
 ├─ (gövde metninde) → /antalya-asansorlu-nakliyat
 └─ (Header/Footer nav, tüm sayfalarda ortak) → tüm 8 sayfa

/antalya-asansorlu-nakliyat
 └─ (gövde metninde) → /antalya-mobil-asansor-kiralama

/hizmet-bolgeleri
 └─ İlçe kartlarında "→ X Evden Eve Nakliyat / → X Mobil Asansör Kiralama" METİN olarak var, HREF yok — link akışına katkısı sıfır
```

**Orphan sayfalar (sadece Header/Footer nav dışında hiçbir sayfadan gövde içi link almayan):**
- `/antalya-evden-eve-nakliyat` — hiçbir sayfanın gövde metninde bu sayfaya link yok (sadece global nav) — **para sayfası olduğu için ciddi bir bulgu**
- `/antalya-mobil-asansor-kiralama` — anasayfa ve asansorlu-nakliyat'tan link alıyor, orphan değil
- `/antalya-dis-cephe-asansoru` — hiçbir sayfanın gövde metninde link yok (sadece global nav)
- `/hizmet-bolgeleri` — hiçbir sayfanın gövde metninde link yok (sadece global nav)
- `/hakkimizda`, `/iletisim` — hiçbir sayfanın gövde metninde link yok (sadece global nav) — bu sayfalar için normal kabul edilebilir

**Eksik yapı: ilçe×hizmet sayfaları hiç yok** (`/hizmet-bolgeleri/muratpasa` gibi programatik alt sayfalar). `hizmet-bolgeleri` sayfası bunu vaat ediyor gibi görünüyor ("→ Muratpaşa Evden Eve Nakliyat") ama gerçek sayfa/link yok.

---

## Adım 6 — Öncelikli İş Listesi

### P1 (yüksek öncelik)
1. **`/antalya-evden-eve-nakliyat` içerik zenginleştirme** — [Google Ads para sayfası, **YÜKSEK RİSK / ONAY GEREKLİ**]. Sayfayı `/antalya-asansorlu-nakliyat` seviyesine çıkar: "Nedir/Nasıl Çalışır" doğrudan-cevap paragrafı, fiyatlandırma bölümü, ilçe listesi bölümü ekle. Reklam trafiği bu sayfaya aktığı için **canlıya almadan önce müşteri onayı şart**, A/B test veya düşük riskli saatte deploy önerilir. Etki: CTR/dönüşüm potansiyeli yüksek, ama hata riski de yüksek.
2. **Anasayfa vs hizmet sayfaları kannibalizasyonu** (`app/page.tsx`) — Anasayfanın "Hizmetlerimiz" bölümündeki (satır 84-122) evden-eve-nakliyat ve asansörlü-nakliyat metin bloklarını kısalt, anasayfayı marka/yönlendirme sayfasına çevir; detaylı hizmet anlatımını ilgili alt sayfalara bırak. Etki: kelime çakışmasını azaltır, Google'ın doğru sayfayı sıralamasına yardımcı olur.
3. **Puan/yıldız gösterimi eksik** (`components/Hero.tsx`, tüm hizmet sayfaları) — Google'daki 90+ yorum / 5 yıldız verisi (gerçek sayı **[müşteriden alınacak]** — Hero.tsx şu an bu veriyi göstermiyor, sabit metin de yok) hiçbir sayfada gösterilmiyor. Hero'ya "puan" alanı eklenmeli, gerçek rakam müşteriden teyit edilmeli. Etki: güven sinyali eksikliği CTR'ı doğrudan etkiler (bilinen sorun: AI Overview tıklamayı yiyor, kalan tıklamalarda güven sinyali kritik).

### P2 (orta öncelik)
4. **`/hizmet-bolgeleri` linkleri gerçek `<Link>` değil** (`app/hizmet-bolgeleri/page.tsx` satır 88-94) — "→ X Evden Eve Nakliyat / → X Mobil Asansör Kiralama" ifadeleri `<span>`, href yok. Gerçek link yapılmalı veya ilçe×hizmet alt sayfaları oluşturulup bağlanmalı. Etki: iç link akışı ve yerel SEO için orta-yüksek etki.
5. **FAQ içerik tekrarı** (anasayfa FAQ ile `/antalya-evden-eve-nakliyat` FAQ'ı %80+ örtüşüyor) — FAQPage şemaları farklı `schemaId` kullanıyor ama soru-cevap içerikleri neredeyse aynı, bu da FAQ seviyesinde kannibalizasyon yaratıyor. Her sayfanın FAQ'ı kendine özgü sorulara odaklanmalı. Etki: GEO/AI Overview alıntılanma şansını artırır.
6. **Yorumlar/testimonial bölümü hiçbir sayfada yok** — İdeal yapıdaki "Yorumlar" bölümü tamamen eksik. Gerçek müşteri yorumu metinleri **[müşteriden alınacak]**. Etki: dönüşüm oranını artırır, orta-yüksek etki.

### P3 (düşük öncelik)
7. **`/antalya-evden-eve-nakliyat` ve `/antalya-dis-cephe-asansoru` sayfalarında "Bölgeler" bölümü yok** (WhyUs metninde geçiyor ama ayrı bölüm değil) — diğer iki hizmet sayfasıyla tutarlılık için eklenebilir. Etki: düşük-orta.
8. **`/hakkimizda` sayfasında Hero CTA kapalı** (`showButtons={false}`) — marka sayfası olsa da tel/WhatsApp CTA'sının kapatılması gereksiz bir dönüşüm kaybı olabilir. Etki: düşük.
9. **`/hizmet-bolgeleri` ve `/hakkimizda` sayfalarında FAQ ve alt CTA bölümü yok** — ideal yapıya tam uyum için eklenebilir. Etki: düşük.

---

## ConversionTracker.tsx / ContactForm.tsx — Özel Risk Notu

- **`ContactForm.tsx` sitede mevcut değil** (component klasöründe yok, hiçbir sayfa referans vermiyor) — bu dosyaya dokunan bir bulgu yok.
- **`components/ConversionTracker.tsx`** mevcut ve `app/layout.tsx` üzerinden tüm sayfalara global olarak enjekte ediliyor. Bu dosya `tel:` ve WhatsApp (`wa.me/905424669631`) linklerine tıklamaları yakalayıp Google Ads dönüşüm event'i (`AW-18038829941/...`) tetikliyor.
  - **Denetimde bu dosyaya dokunmayı gerektiren doğrudan bir hata bulunmadı** — mantık tutarlı görünüyor (tel/WhatsApp click → conversion fire → 150ms sonra gerçek yönlendirme).
  - **Dolaylı risk flag'i:** P1 maddesi olan puan/yıldız veya yeni CTA blokları eklenirken, yeni bir tel/WhatsApp linki eklenmesi durumunda bu component'in `href` eşleştirme mantığının (`normalizedHref === WHATSAPP_URL` tam eşleşme kontrolü) yeni linklerle uyumlu kalması gerekiyor — herhangi bir yapısal değişiklik ConversionTracker.tsx'in davranışını dolaylı etkileyebilir, ancak bu component'in kendisinin **değiştirilmesi gerekmiyor**.
