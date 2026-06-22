/**
 * Shared EducaMates site data — single source of truth for values reused
 * across pages (WhatsApp number, program selector options, sedes).
 */
import type { ProgramOption, ProgramLocation } from "@educamates/ui";

export const OFFICIAL_EMAIL = "hola@educamates.edu.mx";

export const CONTACTS = {
  foundation: {
    name: "Fundación Educa Mates, AC",
    whatsappNumber: "5215561852213",
    whatsappDisplay: "+52 55 6185 2213",
    whatsappUrl: "https://wa.me/5215561852213",
    address: "Fútbol 77, Country Club Churubusco, Coyoacán, 04210 Ciudad de México, CDMX",
    mapsUrl: "https://maps.app.goo.gl/3Mhiob4gxMdx8B147",
  },
  ceem: {
    name: "Centro Educativo EducaMates",
    whatsappNumber: "5215635555598",
    whatsappDisplay: "+52 56 3555 5598",
    whatsappUrl: "https://wa.me/5215635555598",
    phone: "55 5655 4228",
    phoneHref: "tel:5556554228",
    address: "Cam. Viejo a San Pedro Mártir 315, San Pedro Mártir, Tlalpan, 14640 Ciudad de México, CDMX",
    mapsUrl: "https://maps.app.goo.gl/1BGvRnU6vjtPFM6w7",
  },
} as const;

/** General site contact. CEEM pages explicitly use CONTACTS.ceem. */
export const WHATSAPP_NUMBER = CONTACTS.foundation.whatsappNumber;

/** Options shown in every ContactForm program selector. */
export const PROGRAM_OPTIONS: readonly ProgramOption[] = [
  { value: "Educa Mates", label: "Educa Mates" },
  { value: "Maternal", label: "Maternal" },
  { value: "Preescolar", label: "Preescolar" },
  { value: "Secundaria", label: "Secundaria" },
  { value: "Bachillerato", label: "Bachillerato" },
  { value: "Licenciaturas", label: "Licenciaturas" },
  { value: "Maestrías", label: "Maestrías (próximamente)" },
  { value: "Doctorados", label: "Doctorados (próximamente)" },
  { value: "Servicio empresas", label: "Servicio empresas" },
];

/** Foundation location used by its academic programs. */
export const FOUNDATION_SEDE: ProgramLocation = {
  label: CONTACTS.foundation.name,
  address: CONTACTS.foundation.address,
  href: CONTACTS.foundation.mapsUrl,
  actionLabel: "Ver ubicación",
};

/** Physical sedes available across the EducaMates ecosystem. */
export const SEDES: readonly ProgramLocation[] = [
  FOUNDATION_SEDE,
  {
    label: CONTACTS.ceem.name,
    address: CONTACTS.ceem.address,
    href: CONTACTS.ceem.mapsUrl,
    actionLabel: "Ver ubicación",
  },
];
