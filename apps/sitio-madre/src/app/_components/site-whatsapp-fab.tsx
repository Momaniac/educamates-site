"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFAB } from "@educamates/ui";
import { CONTACTS } from "../../lib/site";

export function SiteWhatsAppFAB() {
  const pathname = usePathname();
  const isCeem = pathname === "/maternal" || pathname === "/preescolar" || pathname === "/educacion-inicial";
  const contact = isCeem ? CONTACTS.ceem : CONTACTS.foundation;

  return (
    <WhatsAppFAB
      phone={contact.whatsappNumber}
      message={`¡Hola! Me interesa recibir información de ${contact.name}.`}
    />
  );
}
