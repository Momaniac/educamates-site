/**
 * WhatsApp URL builder — single source of truth for wa.me links.
 *
 * Centralizing this keeps every component (FAB, ContactForm, CTAs)
 * consistent and avoids string-concatenation bugs with URL encoding.
 */

export interface WhatsAppUrlOptions {
  /** Phone number in any format; non-digit characters are stripped. */
  readonly phone: string;
  /** Optional pre-filled message (encoded automatically). */
  readonly message?: string;
}

export function buildWhatsAppUrl({ phone, message }: WhatsAppUrlOptions): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
