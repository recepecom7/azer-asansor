export type GoogleAdsSendTo = string;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function fireGoogleAdsConversion(sendTo: GoogleAdsSendTo) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", { send_to: sendTo });
}

