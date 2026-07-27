/*
 * ============================================================
 *  Enlace al sitio del Centro Educativo EducaMates
 * ------------------------------------------------------------
 *  El cliente pidió que las secciones de maternal y preescolar
 *  de este sitio manden al sitio propio de CEEM, SIN quitarlas de
 *  aquí: el contenido se queda y además se ofrece el salto.
 *
 *  Mismo mecanismo que la librería de dominios del portal: si la
 *  URL tiene valor, aparecen los CTA hacia CEEM; si está vacía,
 *  las páginas se comportan igual que hasta ahora y nadie ve un
 *  enlace roto. Al desplegar CEEM basta con poner la URL aquí o
 *  con la variable NEXT_PUBLIC_URL_CEEM en Vercel.
 * ============================================================
 */

/** Sitio de CEEM, desplegado en su propio proyecto Vercel (jul 2026). */
const CEEM_URL_FALLBACK = "https://educamates-site-ceem.vercel.app";

export const CEEM_SITE_URL = process.env.NEXT_PUBLIC_URL_CEEM ?? CEEM_URL_FALLBACK;

/** true cuando ya hay sitio de CEEM al que mandar a la gente. */
export const CEEM_SITE_AVAILABLE = CEEM_SITE_URL !== "";
