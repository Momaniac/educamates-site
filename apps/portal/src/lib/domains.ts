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
 *  Nota: el destino real hoy es el sitio EMF que ya construimos
 *  (app `apps/emf`). No se usa ningún sitio anterior del cliente.
 * ============================================================
 */

/*
 * URL del sitio EMF (app `apps/emf`), desplegado en su propio proyecto Vercel.
 * PENDIENTE: pegar aquí la URL del nuevo despliegue de EMF. Mientras esté
 * vacía, la tarjeta EMF se muestra como "Próximamente" en lugar de enlazar a
 * un despliegue inexistente (evita el 404 DEPLOYMENT_NOT_FOUND).
 * Alternativa: definir la env-var NEXT_PUBLIC_URL_EMF en el proyecto del portal.
 */
const EMF_URL = "";

export const DOMAINS = {
  /** EducaMates Foundation — es el sitio que YA tenemos hecho. */
  emf: process.env.NEXT_PUBLIC_URL_EMF ?? EMF_URL,

  /** Centro Educativo EducaMates — sitio aún no desarrollado → Próximamente. */
  ceem: process.env.NEXT_PUBLIC_URL_CEEM ?? "",

  /** Alma Libre — sitio aún no desarrollado → Próximamente. */
  almalibre: process.env.NEXT_PUBLIC_URL_ALMALIBRE ?? "",
} as const;
