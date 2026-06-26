/*
 * ============================================================
 *  Librería de dominios del ecosistema EducaMates
 * ------------------------------------------------------------
 *  Única fuente de verdad de a dónde apunta cada marca.
 *
 *  - Una tarjeta del portal se activa SOLA cuando su dominio
 *    tiene valor. Vacío ("") → se muestra como "Próximamente".
 *  - Los dominios reales se apuntalan después desde el host
 *    sobrescribiendo con variables de entorno en Vercel
 *    (NEXT_PUBLIC_URL_*), sin tocar este código.
 *
 *  Nota: el destino real hoy es el sitio demo aprobado
 *  (sitio-madre). No se usa ningún sitio anterior del cliente.
 * ============================================================
 */

/** Sitio demo aprobado (sitio-madre) — lo que el cliente ya validó. */
const SITIO_DEMO = "https://educamates-site-sitio-madre.vercel.app";

export const DOMAINS = {
  /** EducaMates Foundation — es el sitio que YA tenemos hecho (demo aprobado). */
  emf: process.env.NEXT_PUBLIC_URL_EMF ?? SITIO_DEMO,

  /** Centro Educativo EducaMates — sitio aún no desarrollado → Próximamente. */
  ceem: process.env.NEXT_PUBLIC_URL_CEEM ?? "",

  /** Alma Libre — sitio aún no desarrollado → Próximamente. */
  almalibre: process.env.NEXT_PUBLIC_URL_ALMALIBRE ?? "",
} as const;
