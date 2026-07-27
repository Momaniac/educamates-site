import { DOMAINS } from "./domains";

export interface Area {
  readonly id: string;
  /** Nombre completo, el que se lee dentro del orbe en escritorio. */
  readonly name: string;
  /** Nombre corto: cabe dentro del orbe en pantallas pequeñas. */
  readonly short: string;
  readonly tagline: string;
  /**
   * Color de la marca dentro del portal, siempre como referencia
   * a un token — nunca un hex suelto. Los valores viven en
   * `palette-educamates.css`; el mockup del cliente define la
   * composición, la paleta define el color.
   */
  readonly accent: string;
  readonly href: string;
  readonly available: boolean;
  /** Lo que el usuario encontrará en el sitio de esa área. */
  readonly contents: readonly string[];
}

/*
 * Las tres áreas hermanas del ecosistema. El destino de cada una
 * vive en la librería de dominios (src/lib/domains.ts): si el
 * dominio tiene valor, la tarjeta está disponible; si está vacío,
 * se muestra como "Próximamente".
 *
 * El orden es el del mockup del cliente: CEEM · EMF · Alma Libre.
 */
export const AREAS: readonly Area[] = [
  {
    id: "ceem",
    name: "Centro Educativo EducaMates",
    short: "CEEM",
    tagline: "Educación desde maternal hasta preescolar, con enfoque integral, STEM e inglés diario.",
    /*
     * Azul intermedio: el azul de trabajo de EducaMates, el más
     * usado del sitio EMF. Además coincide con el azul del mockup.
     */
    accent: "var(--color-intermediate)",
    href: DOMAINS.ceem,
    available: DOMAINS.ceem !== "",
    contents: [
      "Quiénes somos",
      "Programas educativos",
      "Equipo docente",
      "Actividades y extracurriculares",
      "Horarios e información general",
      "Inscripción y pago en línea",
      "Testimonios y entrevistas",
    ],
  },
  {
    id: "emf",
    name: "EducaMates Foundation",
    short: "Foundation",
    // Descripción auténtica extraída del sitio ya desarrollado (apps/emf).
    tagline: "Formación académica, profesional y humana para jóvenes, adultos y organizaciones.",
    /*
     * Coral: el color más usado de la marca y el de acción en el
     * sitio EMF. Aquí además es la única tarjeta activa, así que
     * el cálido contra el fondo azul la señala sola.
     */
    accent: "var(--color-secondary)",
    href: DOMAINS.emf,
    available: DOMAINS.emf !== "",
    contents: [
      "Quiénes somos",
      "Bachillerato y Secundaria en 6 meses",
      "Licenciaturas con RVOE",
      "Servicios empresariales",
      "Programas y proyectos de impacto",
      "Formas de participación o apoyo",
    ],
  },
  {
    id: "almalibre",
    name: "Alma Libre",
    short: "Alma Libre",
    tagline: "Consultoría, Detona y desarrollo humano. Acompañamiento y sesiones uno a uno.",
    /* Único color fuera de la paleta; ver el aviso en globals.css. */
    accent: "var(--area-almalibre)",
    href: DOMAINS.almalibre,
    available: DOMAINS.almalibre !== "",
    contents: [
      "Quiénes somos",
      "Detona",
      "Consultoría",
      "Cartera completa de servicios",
      "Calendario para agendar citas",
      "Sesiones uno a uno",
      "Material audiovisual y recursos",
    ],
  },
];
