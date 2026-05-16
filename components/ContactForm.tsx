"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
  Phone,
  User,
  Briefcase,
  MessageSquare,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  phone: string;
  serviceType: string;
  note: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Constants ──────────────────────────────────────────────────────────────────
const NOTE_MAX_LENGTH = 160; // Guarantees total SMS stays within 2 segments max

const SERVICES = [
  "Evden Eve Nakliyat",
  "Asansörlü Taşıma",
  "Ofis/İşyeri Taşıma",
  "Sadece Asansör Hizmeti",
] as const;

// ── Phone formatting ───────────────────────────────────────────────────────────
// Strips non-digits, removes leading +90 or 90, normalises to 10-digit "5XXXXXXXXX"
function formatPhoneDisplay(raw: string): string {
  // Allow only digits, spaces, parens, hyphens, plus
  let cleaned = raw.replace(/[^\d\s()\-+]/g, "");
  return cleaned;
}

function isValidTurkishPhone(raw: string): boolean {
  // Strip everything that isn't a digit
  const digits = raw.replace(/\D/g, "");
  // Accept: 05XXXXXXXXX (11 digits), 5XXXXXXXXX (10 digits), +905XXXXXXXXX (12 digits)
  if (digits.length === 11 && digits.startsWith("05")) return true;
  if (digits.length === 10 && digits.startsWith("5"))  return true;
  if (digits.length === 12 && digits.startsWith("905")) return true;
  if (digits.length === 13 && digits.startsWith("9005")) return true;
  return false;
}

// ── Inline styles (brand-specific HEX values outside Tailwind palette) ─────────
const CARD_BG    = "#0D172B";
const INPUT_BG   = "#16223f";
const AMBER      = "#f2c94c";

// ── Component ─────────────────────────────────────────────────────────────────
export function ContactForm() {
  const [form, setForm]       = useState<FormState>({ name: "", phone: "", serviceType: "", note: "" });
  const [status, setStatus]   = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const isLoading = status === "loading";

  // ── Handlers ─────────────────────────────────────────────────────────────
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneDisplay(value);
      setForm((prev) => ({ ...prev, phone: formatted }));
      if (phoneError && isValidTurkishPhone(formatted)) setPhoneError("");
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handlePhoneBlur() {
    if (form.phone && !isValidTurkishPhone(form.phone)) {
      setPhoneError("Lütfen geçerli bir Türkiye cep numarası girin (ör: 0532 111 22 33).");
    } else {
      setPhoneError("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side phone gate
    if (!isValidTurkishPhone(form.phone)) {
      setPhoneError("Lütfen geçerli bir Türkiye cep numarası girin (ör: 0532 111 22 33).");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = (await res.json()) as { success: boolean; message: string };

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setForm({ name: "", phone: "", serviceType: "", note: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.");
    }
  }

  // ── Shared field styles ───────────────────────────────────────────────────
  const inputClass =
    "w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 disabled:opacity-50";

  const labelClass = "block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1.5";

  return (
    <div
      className="rounded-2xl p-6 md:p-8 w-full"
      style={{ backgroundColor: CARD_BG }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="mb-7">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: AMBER }}
        >
          Ücretsiz Fiyat Talebi
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          Hızlı Fiyat Teklifi Al
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Formu doldurun, 5 dakika içinde sizi arayalım.
        </p>
      </div>

      {/* ── Success Alert ───────────────────────────────────────────────────── */}
      {status === "success" && (
        <div className="flex items-start gap-3 bg-green-900/40 border border-green-500/40 text-green-300 rounded-xl px-4 py-3 mb-6 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-400" />
          <p className="leading-relaxed font-medium">{message}</p>
        </div>
      )}

      {/* ── Error Alert ─────────────────────────────────────────────────────── */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-900/40 border border-red-500/40 text-red-300 rounded-xl px-4 py-3 mb-6 text-sm">
          <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
          <p className="leading-relaxed font-medium">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* ── Row 1: Name + Phone ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Name */}
          <div>
            <label htmlFor="cf-name" className={labelClass}>
              <User className="inline w-3 h-3 mr-1 opacity-70" />
              Ad Soyad
            </label>
            <input
              id="cf-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Örn: Ahmet Yılmaz"
              required
              disabled={isLoading}
              autoComplete="name"
              className={inputClass}
              style={{ backgroundColor: INPUT_BG }}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="cf-phone" className={labelClass}>
              <Phone className="inline w-3 h-3 mr-1 opacity-70" />
              Telefon
            </label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handlePhoneBlur}
              placeholder="05xx xxx xx xx"
              required
              disabled={isLoading}
              autoComplete="tel"
              inputMode="tel"
              maxLength={16}
              className={`${inputClass} ${phoneError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              style={{ backgroundColor: INPUT_BG }}
            />
            {phoneError && (
              <p className="mt-1.5 text-xs text-red-400">{phoneError}</p>
            )}
          </div>
        </div>

        {/* ── Row 2: Service Type + Note ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Service Type */}
          <div>
            <label htmlFor="cf-service" className={labelClass}>
              <Briefcase className="inline w-3 h-3 mr-1 opacity-70" />
              Hizmet Türü
            </label>
            <select
              id="cf-service"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={`${inputClass} cursor-pointer`}
              style={{ backgroundColor: INPUT_BG }}
            >
              <option value="" disabled style={{ backgroundColor: INPUT_BG }}>
                Hizmet seçin...
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s} style={{ backgroundColor: INPUT_BG }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Note / Details */}
          <div>
            <label htmlFor="cf-note" className={labelClass}>
              <MessageSquare className="inline w-3 h-3 mr-1 opacity-70" />
              Ek Detaylar
            </label>
            <textarea
              id="cf-note"
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Örn: 3+1 evimi taşımak istiyorum, asansör gerekli."
              disabled={isLoading}
              rows={3}
              maxLength={NOTE_MAX_LENGTH}
              className={`${inputClass} resize-none`}
              style={{ backgroundColor: INPUT_BG }}
            />
            {/* Live character counter */}
            <p className={`text-right text-xs mt-1 tabular-nums ${
              form.note.length >= NOTE_MAX_LENGTH
                ? "text-red-400"
                : form.note.length >= NOTE_MAX_LENGTH * 0.85
                ? "text-amber-400"
                : "text-gray-600"
            }`}>
              {form.note.length}/{NOTE_MAX_LENGTH}
            </p>
          </div>
        </div>

        {/* ── Submit ───────────────────────────────────────────────────────── */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 font-bold text-base transition-all duration-200 hover:brightness-105 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          style={{ backgroundColor: AMBER, color: CARD_BG }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Phone className="w-5 h-5" />
              Ücretsiz Fiyat Teklifi Al
            </>
          )}
        </button>


      </form>
    </div>
  );
}
