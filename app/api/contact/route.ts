import { NextRequest, NextResponse } from "next/server";

// ── Turkish character sanitizer ────────────────────────────────────────────────
// Netgsm HTTP GET encodes params as query strings — multi-byte Turkish chars
// can corrupt or be misread by the gateway. We map every common Turkish letter
// to its ASCII equivalent before inserting into the SMS body.
function sanitizeTurkish(text: string): string {
  return text
    .replace(/[çÇ]/g, (c) => (c === "ç" ? "c" : "C"))
    .replace(/[ğĞ]/g, (c) => (c === "ğ" ? "g" : "G"))
    .replace(/[ıİ]/g, (c) => (c === "ı" ? "i" : "I"))
    .replace(/[öÖ]/g, (c) => (c === "ö" ? "o" : "O"))
    .replace(/[şŞ]/g, (c) => (c === "ş" ? "s" : "S"))
    .replace(/[üÜ]/g, (c) => (c === "ü" ? "u" : "U"));
}

// ── Phone sanitizer ────────────────────────────────────────────────────────────
// Accepts: "05321112233", "+90 532 111 22 33", "532-111-22-33", etc.
// Returns: clean 10-digit string "5XXXXXXXXX" or throws if invalid.
function sanitizePhone(raw: string): string {
  // Strip everything except digits
  let digits = raw.replace(/\D/g, "");

  // Remove leading country code variants
  if (digits.startsWith("9005")) digits = digits.slice(4); // 9005XXXXXXXXX
  if (digits.startsWith("905"))  digits = digits.slice(3); // 905XXXXXXXXX
  if (digits.startsWith("0"))    digits = digits.slice(1); // 05XXXXXXXXX → 5XXXXXXXXX

  if (digits.length !== 10 || !digits.startsWith("5")) {
    throw new Error("invalid_phone");
  }

  return digits; // "5XXXXXXXXX"
}

// ── Whitelist constants ────────────────────────────────────────────────────────
const VALID_SERVICES = new Set([
  "Evden Eve Nakliyat",
  "Asansörlü Taşıma",
  "Ofis/İşyeri Taşıma",
  "Sadece Asansör Hizmeti",
]);

// ── POST handler ───────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, serviceType, note } = body as {
      name?:        string;
      phone?:       string;
      serviceType?: string;
      note?:        string;
    };

    // ── Validate required fields ─────────────────────────────────────────────
    if (!name?.trim() || !phone?.trim() || !serviceType?.trim()) {
      return NextResponse.json(
        { success: false, message: "Ad, telefon ve hizmet türü zorunludur." },
        { status: 400 }
      );
    }

    if (!VALID_SERVICES.has(serviceType.trim())) {
      return NextResponse.json(
        { success: false, message: "Geçersiz hizmet türü." },
        { status: 400 }
      );
    }

    // ── Sanitize phone ───────────────────────────────────────────────────────
    let cleanPhone: string;
    try {
      cleanPhone = sanitizePhone(phone);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "Geçerli bir Türkiye cep numarası giriniz (ör: 0532 111 22 33).",
        },
        { status: 400 }
      );
    }

    // ── Build SMS body (sanitize Turkish chars) ──────────────────────────────
    // Truncate note server-side in case someone bypasses the frontend maxLength
    const trimmedNote = note?.trim().slice(0, 160) ?? "";
    const noteLine = trimmedNote ? `\nNot: ${trimmedNote}` : "";

    const rawSms = `Azer Asansor Yeni Talep!\nIsim: ${name.trim()}\nTel: ${cleanPhone}\nHizmet: ${serviceType.trim()}${noteLine}`;

    const smsBody = sanitizeTurkish(rawSms);

    // ── Credential check ─────────────────────────────────────────────────────
    const netgsmUser = process.env.NETGSM_USER;
    const netgsmPass = process.env.NETGSM_PASS;

    if (!netgsmUser || !netgsmPass) {
      console.error("[contact] NETGSM env vars not configured.");
      return NextResponse.json(
        {
          success: false,
          message:
            "Sunucu yapılandırma hatası. Lütfen bizi doğrudan arayın: +90 542 466 96 31",
        },
        { status: 500 }
      );
    }

    // ── Netgsm HTTP GET call ─────────────────────────────────────────────────
    // Docs: https://www.netgsm.com.tr/dokuman/#http-get-sms
    const params = new URLSearchParams({
      usercode:  netgsmUser,
      password:  netgsmPass,
      gsmno:     "5424669631",   // Hardcoded destination: business owner
      message:   smsBody,
      msgheader: "DeforaTekno",  // Approved alphanumeric sender ID
      dil:       "TR",
    });

    const netgsmUrl = `https://api.netgsm.com.tr/sms/send/get/?${params.toString()}`;

    const netgsmRes  = await fetch(netgsmUrl, {
      method: "GET",
      // 8-second timeout — prevents the serverless function from hanging
      signal: AbortSignal.timeout(8000),
    });

    const netgsmText = await netgsmRes.text();

    // Netgsm returns "00 <bulkId>" on success, an error code otherwise
    if (!netgsmText.trim().startsWith("00")) {
      console.error(`[contact] Netgsm error: "${netgsmText.trim()}"`);
      return NextResponse.json(
        {
          success: false,
          message:
            "SMS gönderilemedi. Lütfen bizi doğrudan arayın: +90 542 466 96 31",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Talebiniz alındı! Ekibimiz en kısa sürede sizi arayacak.",
    });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Beklenmedik bir hata oluştu. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
