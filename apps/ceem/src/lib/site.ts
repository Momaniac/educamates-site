/*
 * ============================================================
 *  Datos del Centro Educativo EducaMates
 * ------------------------------------------------------------
 *  Fuente única de contenido del sitio. Cada bloque dice de
 *  dónde salió, porque hay tres orígenes distintos:
 *
 *   [EMF]        Contenido real que ya estaba publicado en el
 *                sitio de EducaMates Foundation (apps/emf) y que
 *                se migra aquí. Verificado con el cliente.
 *   [REUNIÓN]    Requisitos dictados en la reunión de jul 2026.
 *   [PENDIENTE]  Marcador de posición. NO publicar sin que el
 *                cliente lo confirme; está señalado en cada caso.
 * ============================================================
 */

/** [EMF] Datos de contacto reales del Centro Educativo. */
export const CONTACT = {
  name: "Centro Educativo EducaMates",
  short: "CEEM",
  phone: "55 5655 4228",
  phoneHref: "tel:5556554228",
  whatsappNumber: "5215635555598",
  whatsappDisplay: "+52 56 3555 5598",
  address:
    "Cam. Viejo a San Pedro Mártir 315, San Pedro Mártir, Tlalpan, 14640 Ciudad de México, CDMX",
  mapsUrl: "https://maps.app.goo.gl/1BGvRnU6vjtPFM6w7",
  /** [REUNIÓN] Linktree oficial que compartió el cliente. */
  linktree: "https://linktr.ee/CEEM_",
} as const;

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/*
 * [REUNIÓN] Mapa de navegación. Cubre todo lo que pidió el
 * cliente: oferta por niveles, extracurriculares, servicios
 * (comedor y neurodivergencia) y admisión con captura de datos.
 *
 * ⚠ La reunión menciona "una escuela de referencia como modelo
 * para el mapa de navegación" que todavía no tenemos. Este árbol
 * sale del brief; al recibir la referencia habrá que contrastar
 * orden y nomenclatura.
 */
export const NAV: readonly NavItem[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Niveles", href: "#niveles" },
  { label: "Talleres", href: "#talleres" },
  { label: "Servicios", href: "#servicios" },
  { label: "Admisión", href: "#admision" },
  { label: "Contacto", href: "#contacto" },
];

export interface Nivel {
  readonly id: string;
  readonly name: string;
  /** ⚠ [PENDIENTE] Rango de edad por nivel — confirmar con el cliente. */
  readonly edad: string;
  readonly description: string;
  /** Token de la rueda de color de CEEM. */
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
  /** Ilustración del cliente, elegida por edad del nivel. */
  readonly ilustracion: string;
  readonly ilustracionAlt: string;
}

/*
 * [REUNIÓN] "Oferta desde prematernal hasta preescolar 3".
 * [EMF] El dato global sí está verificado: se atiende desde los
 * 45 días de nacidos hasta los 5 años.
 *
 * ⚠ Los rangos de edad POR NIVEL son una interpretación de ese
 * rango global. Un padre los lee como información oficial, así
 * que hay que confirmarlos antes de publicar.
 */
export const NIVELES: readonly Nivel[] = [
  {
    id: "prematernal",
    ilustracion: "/ilustraciones/completos/bebe-nina.png",
    ilustracionAlt: "Bebé con mameluco de EducaMates",
    name: "Prematernal",
    edad: "Desde 45 días",
    description:
      "Los primeros meses, con acompañamiento cercano y personal especializado en la etapa más temprana.",
    color: "var(--ceem-magenta)",
    ink: "var(--ceem-on-magenta)",
  },
  {
    id: "maternal",
    ilustracion: "/ilustraciones/completos/bebe-nino.png",
    ilustracionAlt: "Bebé pequeño con mameluco de EducaMates",
    name: "Maternal",
    edad: "1 a 2 años",
    description:
      "Juego, movimiento y lenguaje. Empiezan los hábitos, la convivencia y el descubrimiento del entorno.",
    color: "var(--ceem-orange)",
    ink: "var(--ceem-on-orange)",
  },
  {
    id: "preescolar-1",
    ilustracion: "/ilustraciones/completos/nina-coletas.png",
    ilustracionAlt: "Niña con coletas y chamarra de EducaMates",
    name: "Preescolar 1",
    edad: "3 años",
    description:
      "Primer año de preescolar: autonomía, expresión y las primeras nociones de lectura y número.",
    color: "var(--ceem-yellow)",
    ink: "var(--ceem-on-yellow)",
  },
  {
    id: "preescolar-2",
    ilustracion: "/ilustraciones/completos/nino-afro.png",
    ilustracionAlt: "Niño sonriente con chamarra de EducaMates",
    name: "Preescolar 2",
    edad: "4 años",
    description:
      "Se afianza el pensamiento lógico, la motricidad fina y el trabajo en equipo con sus compañeros.",
    color: "var(--ceem-green)",
    ink: "var(--ceem-on-green)",
  },
  {
    id: "preescolar-3",
    ilustracion: "/ilustraciones/completos/nino-mayor.png",
    ilustracionAlt: "Niño mayor con uniforme de EducaMates",
    name: "Preescolar 3",
    edad: "5 años",
    description:
      "Preparación para la primaria: lectoescritura, razonamiento matemático y seguridad para el siguiente paso.",
    color: "var(--ceem-cyan)",
    ink: "var(--ceem-on-cyan)",
  },
];

export interface Beneficio {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/*
 * [EMF] Los ocho beneficios tal cual estaban publicados en el
 * sitio de la fundación. Contenido verificado; solo se reescribió
 * la redacción para que hable en primera persona.
 */
export const BENEFICIOS: readonly Beneficio[] = [
  {
    title: "Kínder incorporado a la SEP",
    description: "Reconocimiento oficial de la Secretaría de Educación Pública.",
    icon: "school",
    color: "var(--ceem-blue)",
    ink: "var(--ceem-on-blue)",
  },
  {
    title: "Inglés todos los días",
    description: "El inglés no es una clase suelta: forma parte de la jornada.",
    icon: "languages",
    color: "var(--ceem-magenta)",
    ink: "var(--ceem-on-magenta)",
  },
  {
    title: "Programa STEM",
    description: "Ingeniería aplicada para despertar el pensamiento lógico desde pequeños.",
    icon: "brain",
    color: "var(--ceem-orange)",
    ink: "var(--ceem-on-orange)",
  },
  {
    title: "Grupos reducidos",
    description: "Pocos niños por grupo para que cada uno reciba atención de verdad.",
    icon: "users",
    color: "var(--ceem-green)",
    ink: "var(--ceem-on-green)",
  },
  {
    title: "Horario extendido",
    description: "Pensado para acompañar a las familias que trabajan.",
    icon: "clock",
    color: "var(--ceem-cyan)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    title: "Servicio de comedor",
    description: "Alimentación dentro del Centro Educativo, sin salir a comer.",
    icon: "utensils",
    color: "var(--ceem-yellow)",
    ink: "var(--ceem-on-yellow)",
  },
  {
    title: "Personal especializado",
    description: "Equipo capacitado para acompañar cada etapa del desarrollo.",
    icon: "heart",
    color: "var(--ceem-red)",
    ink: "var(--ceem-on-red)",
  },
  {
    title: "Instalaciones seguras",
    description: "Espacios limpios, cuidados y pensados para la edad de cada grupo.",
    icon: "shield",
    color: "var(--ceem-blue)",
    ink: "var(--ceem-on-blue)",
  },
];

export interface Enfoque {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/* [EMF] Las dos áreas del enfoque educativo, sin cambios de fondo. */
export const ENFOQUE: readonly Enfoque[] = [
  {
    title: "Desarrollo socioemocional",
    description: "Acompañamos hábitos, emociones y bienestar desde las primeras etapas.",
    items: [
      "Hábitos saludables",
      "Educación emocional",
      "Cuidado y prevención",
      "Sensibilización sensorial",
      "Disciplina positiva",
    ],
    color: "var(--ceem-magenta-deep)",
    ink: "var(--ceem-on-magenta)",
  },
  {
    title: "Desarrollo académico y cognitivo",
    description: "Fortalecemos habilidades para conocer, comunicar, crear y comprender el mundo.",
    items: [
      "Lenguaje y comunicación",
      "Arte, ciencia y tecnología",
      "Conocimiento del mundo",
      "Programa STEM",
      "Coordinación motriz fina y gruesa",
      "Análisis y capacidad de síntesis",
    ],
    color: "var(--ceem-blue)",
    ink: "var(--ceem-on-blue)",
  },
];

export interface Taller {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
  /** false = aún no confirmado por el cliente, se muestra como tal. */
  readonly confirmed: boolean;
}

/*
 * [REUNIÓN] "Clases extracurriculares (club de tareas, taekwondo,
 * etc.)". Solo esos dos están confirmados; el "etc." implica más,
 * pero no se inventan: la tarjeta final lo dice abiertamente.
 */
export const TALLERES: readonly Taller[] = [
  {
    name: "Club de tareas",
    description: "Acompañamiento para hacer la tarea en el Centro, con apoyo de las maestras.",
    icon: "book",
    color: "var(--ceem-orange)",
    ink: "var(--ceem-on-orange)",
    confirmed: true,
  },
  {
    name: "Taekwondo",
    description: "Disciplina, coordinación y confianza a través del deporte.",
    icon: "medal",
    color: "var(--ceem-blue)",
    ink: "var(--ceem-on-blue)",
    confirmed: true,
  },
];

export interface Servicio {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/*
 * [REUNIÓN] Servicios que el cliente pidió mencionar de forma
 * explícita: comedor y manejo de neurodivergencia.
 * [EMF] El horario extendido ya estaba publicado.
 */
export const SERVICIOS: readonly Servicio[] = [
  {
    title: "Comedor",
    description:
      "Servicio de alimentación dentro del Centro Educativo, como parte de la atención diaria.",
    icon: "utensils",
    color: "var(--ceem-yellow)",
    ink: "var(--ceem-on-yellow)",
  },
  {
    title: "Acompañamiento a la neurodivergencia",
    description:
      "Atendemos y acompañamos a niñas y niños neurodivergentes, adaptándonos a las necesidades de cada uno.",
    icon: "puzzle",
    color: "var(--ceem-green)",
    ink: "var(--ceem-on-green)",
  },
  {
    title: "Horario extendido",
    description:
      "Ampliamos la jornada para las familias que lo necesitan, sin que el niño cambie de entorno.",
    icon: "clock",
    color: "var(--ceem-cyan)",
    ink: "var(--ceem-on-cyan)",
  },
];

/*
 * [CLIENTE] Ilustraciones entregadas en jul 2026. Los personajes
 * llevan la chamarra "EM", así que funcionan como la mascota de
 * la marca: se usan para poner cara al sitio mientras no lleguen
 * las fotos reales de los niños.
 *
 * Originales en la carpeta `niños_ceem` de la raíz del proyecto;
 * aquí van redimensionados. Next sirve WebP automáticamente.
 */
export const ILUSTRACIONES = {
  /* Los dos que flanquean la portada, como en la gráfica del cliente. */
  heroIzquierda: {
    src: "/ilustraciones/completos/nino-pelirrojo.png",
    alt: "Niño de EducaMates saludando con los brazos abiertos",
  },
  heroDerecha: {
    src: "/ilustraciones/completos/nina-rubia.png",
    alt: "Niña de EducaMates saludando con los brazos abiertos",
  },
  /* Caritas para la franja de comunidad. La octava era duplicado. */
  caritas: [1, 2, 3, 4, 5, 6, 7].map((n) => `/ilustraciones/caritas/carita-${n}.png`),
} as const;
