import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../common/icons";
import type { WhatsAppFABConfig } from "../../types/contact";

/**
 * WhatsAppFAB — floating circular WhatsApp button (bottom-right).
 *
 * Uses the constant `bg-whatsapp` token (WhatsApp's own brand color),
 * never a per-tenant palette color, so it stays recognizable everywhere.
 */
export function WhatsAppFAB({ phone, message, label = "Chatea por WhatsApp" }: WhatsAppFABConfig) {
  const href = buildWhatsAppUrl({ phone, message });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-[80] flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white shadow-xl hover:scale-110 transition-transform duration-200"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-40 animate-ping -z-10" />
    </a>
  );
}
