/*
 * ============================================================
 *  Datos del Centro Educativo EducaMates
 * ------------------------------------------------------------
 *  Fuente única de contenido del sitio. Cada bloque dice de
 *  dónde salió, porque hay cuatro orígenes distintos:
 *
 *   [EMF]        Contenido real que ya estaba publicado en el
 *                sitio de EducaMates Foundation (apps/emf) y que
 *                se migra aquí. Verificado con el cliente.
 *   [REUNIÓN]    Requisitos dictados en la reunión de jul 2026.
 *   [OFICIAL]    Transcrito de las piezas gráficas oficiales que
 *                entregó el cliente el 3-ago-2026 (logotipo,
 *                lockup con datos SEP, documentación y datos
 *                bancarios). Es la fuente más autorizada que hay.
 *   [PENDIENTE]  Marcador de posición. NO publicar sin que el
 *                cliente lo confirme; está señalado en cada caso.
 * ============================================================
 */

/*
 * [OFICIAL] Datos de contacto del Centro Educativo.
 *
 * El WhatsApp cambió el 3-ago-2026: la pieza oficial dice
 * 56 3555 5558 y manda ella. El sitio llevaba desde junio el
 * …5598, que también estaba registrado como número de CEEM (el de
 * la fundación es otro, 5215561852213), así que no es que se
 * hubiera colado el de EMF: son dos números de la misma marca que
 * difieren en dos dígitos. Uno de los dos es una errata, y ante la
 * duda vale el de la propaganda que el cliente está repartiendo.
 * Queda pendiente su confirmación en voz.
 */
export const CONTACT = {
  name: "Centro Educativo EducaMates",
  short: "CEEM",
  phone: "55 5655 4228",
  phoneHref: "tel:5556554228",
  whatsappNumber: "5215635555558",
  whatsappDisplay: "+52 56 3555 5558",
  /** [EMF] Dirección del Centro; el enlace de Maps lo dio el cliente. */
  address:
    "Cam. Viejo a San Pedro Mártir 315, San Pedro Mártir, Tlalpan, 14640 Ciudad de México, CDMX",
  mapsUrl: "https://maps.app.goo.gl/1BGvRnU6vjtPFM6w7",
  /** [REUNIÓN] Linktree oficial que compartió el cliente. */
  linktree: "https://linktr.ee/CEEM_",
  /** [OFICIAL] Usuario de Instagram tal cual aparece en la pieza. */
  instagram: "@somosCEEM",
  instagramUrl: "https://www.instagram.com/somosceem",
  /**
   * [OFICIAL] Nombre de la página de Facebook. La pieza da el
   * nombre pero no la URL, así que no se enlaza directo: el clic
   * va al Linktree, que sí es un enlace verificado.
   * ⚠ [PENDIENTE] Pedir la URL de Facebook.
   */
  facebook: "Centro Educativo Educa Mates",
} as const;

export interface Sede {
  readonly id: string;
  readonly label: string;
  readonly address: string;
  readonly mapsUrl: string;
  /** true = dirección verificada con el cliente y con enlace propio de Maps. */
  readonly verified: boolean;
}

/*
 * [OFICIAL] La pieza de datos bancarios lista DOS direcciones, con
 * códigos postales y alcaldías distintas (Tlalpan 14640 y Coyoacán
 * 04210). No es una dirección partida en dos líneas: son dos
 * ubicaciones.
 *
 * ⚠ [PENDIENTE] La primera es la que lleva meses publicada y tiene
 * el enlace de Maps que dio el cliente. De la segunda solo sabemos
 * la dirección — no si es otro plantel, las oficinas o la sede de
 * la fundación. Por eso se muestra sin afirmar qué es. Confirmar
 * antes de rotularla.
 */
export const SEDES: readonly Sede[] = [
  {
    id: "san-pedro-martir",
    label: "Centro Educativo",
    address: CONTACT.address,
    mapsUrl: CONTACT.mapsUrl,
    verified: true,
  },
  {
    id: "country-club",
    label: "Country Club Churubusco",
    address: "Country Club 77, Country Club Churubusco, Coyoacán, 04210 Ciudad de México, CDMX",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Country+Club+77%2C+Country+Club+Churubusco%2C+Coyoac%C3%A1n%2C+04210+Ciudad+de+M%C3%A9xico",
    verified: false,
  },
];

/*
 * [OFICIAL] Datos de incorporación a la SEP, transcritos del lockup
 * horizontal. Son el dato que más peso legal tiene de todo el
 * sitio: un padre los usa para verificar la escuela ante la SEP, y
 * un dígito mal la vuelve inverificable. No editar sin tener la
 * pieza oficial delante.
 */
export const SEP = {
  incorporacion: "Preescolar Incorporado a la Secretaría de Educación Pública",
  claves: [
    { label: "CCT", value: "09PJN4354E" },
    { label: "CE", value: "P-0634-225" },
    { label: "Acuerdo", value: "PRER-09150053CT" },
  ],
} as const;

/*
 * [OFICIAL] El lema de la marca. No es una frase suelta: cada
 * palabra lleva uno de los cinco puntos de color del logotipo, en
 * este orden exacto. La rueda de palette-ceem.css se construyó a
 * partir de aquí, así que este arreglo y la paleta tienen que
 * moverse juntos.
 *
 * Va con la rueda PURA, que es lo que se ve en la pieza oficial.
 * Puede permitírselo porque se compone en negrita grande, donde el
 * mínimo de contraste baja a 3:1 y los cinco lo cumplen — salvo el
 * naranja, que se queda en 2.91 y usa su tono de titular. Si algún
 * día este lema se compone en pequeño, hay que pasarlo a `-deep`.
 */
export const LEMA: readonly { readonly word: string; readonly color: string }[] = [
  { word: "Únicos", color: "var(--ceem-carmin)" },
  { word: "Plenos", color: "var(--ceem-orange-display)" },
  { word: "Completos", color: "var(--ceem-cyan)" },
  { word: "Perfectos", color: "var(--ceem-olive)" },
  { word: "Felices", color: "var(--ceem-purple)" },
];

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/*
 * [REUNIÓN] Mapa de navegación. Cubre todo lo que pidió el
 * cliente: oferta por niveles, extracurriculares, servicios
 * (comedor y neurodivergencia) y admisión con captura de datos.
 *
 * Solo lleva lo que le sirve a una familia. Lo dirigido a personal
 * docente vive en NAV_SECUNDARIA para no competir con la
 * conversión que importa, que es la visita agendada.
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

/* Audiencia distinta: aspirantes a trabajar en el Centro. Va en el
   pie, no en la cabecera. */
export const NAV_SECUNDARIA: readonly NavItem[] = [
  { label: "Documentación para colaboradores", href: "#colaboradores" },
  { label: "Información de pagos", href: "#pagos" },
];

export interface Nivel {
  readonly id: string;
  readonly name: string;
  /** ⚠ [PENDIENTE] Rango de edad por nivel — confirmar con el cliente. */
  readonly edad: string;
  readonly description: string;
  /** Superficie de la rueda de CEEM (familia `-deep`, apta para texto). */
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
 * Los cinco niveles toman los cinco colores del lema en su orden
 * oficial — Únicos, Plenos, Completos, Perfectos, Felices — para
 * que la escalera de niveles y la marca digan lo mismo.
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
    color: "var(--ceem-carmin-deep)",
    ink: "var(--ceem-on-carmin)",
  },
  {
    id: "maternal",
    ilustracion: "/ilustraciones/completos/bebe-nino.png",
    ilustracionAlt: "Bebé pequeño con mameluco de EducaMates",
    name: "Maternal",
    edad: "1 a 2 años",
    description:
      "Juego, movimiento y lenguaje. Empiezan los hábitos, la convivencia y el descubrimiento del entorno.",
    color: "var(--ceem-orange-deep)",
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
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    id: "preescolar-2",
    ilustracion: "/ilustraciones/completos/nino-afro.png",
    ilustracionAlt: "Niño sonriente con chamarra de EducaMates",
    name: "Preescolar 2",
    edad: "4 años",
    description:
      "Se afianza el pensamiento lógico, la motricidad fina y el trabajo en equipo con sus compañeros.",
    color: "var(--ceem-olive-deep)",
    ink: "var(--ceem-on-olive)",
  },
  {
    id: "preescolar-3",
    ilustracion: "/ilustraciones/completos/nino-mayor.png",
    ilustracionAlt: "Niño mayor con uniforme de EducaMates",
    name: "Preescolar 3",
    edad: "5 años",
    description:
      "Preparación para la primaria: lectoescritura, razonamiento matemático y seguridad para el siguiente paso.",
    color: "var(--ceem-purple-deep)",
    ink: "var(--ceem-on-purple)",
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
    description: `Reconocimiento oficial de la Secretaría de Educación Pública. CCT ${SEP.claves[0].value}.`,
    icon: "school",
    color: "var(--ceem-navy-deep)",
    ink: "var(--ceem-on-navy)",
  },
  {
    title: "Inglés todos los días",
    description: "El inglés no es una clase suelta: forma parte de la jornada.",
    icon: "languages",
    color: "var(--ceem-carmin-deep)",
    ink: "var(--ceem-on-carmin)",
  },
  {
    title: "Programa STEM",
    description: "Ingeniería aplicada para despertar el pensamiento lógico desde pequeños.",
    icon: "brain",
    color: "var(--ceem-orange-deep)",
    ink: "var(--ceem-on-orange)",
  },
  {
    title: "Grupos reducidos",
    description: "Pocos niños por grupo para que cada uno reciba atención de verdad.",
    icon: "users",
    color: "var(--ceem-olive-deep)",
    ink: "var(--ceem-on-olive)",
  },
  {
    title: "Horario extendido",
    description: "Pensado para acompañar a las familias que trabajan.",
    icon: "clock",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    title: "Servicio de comedor",
    description: "Alimentación dentro del Centro Educativo, sin salir a comer.",
    icon: "utensils",
    color: "var(--ceem-purple-deep)",
    ink: "var(--ceem-on-purple)",
  },
  {
    title: "Personal especializado",
    description: "Equipo capacitado para acompañar cada etapa del desarrollo.",
    icon: "heart",
    color: "var(--ceem-carmin-deep)",
    ink: "var(--ceem-on-carmin)",
  },
  {
    title: "Instalaciones seguras",
    description: "Espacios limpios, cuidados y pensados para la edad de cada grupo.",
    icon: "shield",
    color: "var(--ceem-navy-deep)",
    ink: "var(--ceem-on-navy)",
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
    color: "var(--ceem-carmin-deep)",
    ink: "var(--ceem-on-carmin)",
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
    color: "var(--ceem-navy-deep)",
    ink: "var(--ceem-on-navy)",
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
    color: "var(--ceem-orange-deep)",
    ink: "var(--ceem-on-orange)",
    confirmed: true,
  },
  {
    name: "Taekwondo",
    description: "Disciplina, coordinación y confianza a través del deporte.",
    icon: "medal",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
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
    color: "var(--ceem-purple-deep)",
    ink: "var(--ceem-on-purple)",
  },
  {
    title: "Acompañamiento a la neurodivergencia",
    description:
      "Atendemos y acompañamos a niñas y niños neurodivergentes, adaptándonos a las necesidades de cada uno.",
    icon: "puzzle",
    color: "var(--ceem-olive-deep)",
    ink: "var(--ceem-on-olive)",
  },
  {
    title: "Horario extendido",
    description:
      "Ampliamos la jornada para las familias que lo necesitan, sin que el niño cambie de entorno.",
    icon: "clock",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
];

export interface Documento {
  readonly name: string;
  /** Precisión entre paréntesis en la pieza original. */
  readonly detail?: string;
  readonly copies: string;
  readonly icon: string;
  readonly color: string;
}

/*
 * [OFICIAL] Checklist de documentación, transcrita literalmente de
 * la pieza "DOCUMENTACIÓN".
 *
 * ⚠ ES DOCUMENTACIÓN DE PERSONAL, NO DE INSCRIPCIÓN DE ALUMNOS.
 * La pieza no lo dice, pero el contenido no deja lugar a dudas:
 * pide CV actualizado con fotografía, RFC (alta o CSF), cédula o
 * título profesional, comprobante de capacitaciones y reglamento
 * de uniforme firmado. Un niño de 45 días a 5 años no tiene nada
 * de eso. Por eso vive en su propia sección de colaboradores y no
 * dentro de Admisión: un padre que leyera "título profesional"
 * como requisito para inscribir a su hijo se iría del sitio.
 *
 * ⚠ [PENDIENTE] Preguntar al cliente si además existe una lista de
 * documentos distinta para las familias. Es muy probable que sí.
 *
 * Los colores rotan por la rueda oficial en el orden del logotipo,
 * en su familia `-deep`: el icono va en blanco encima del círculo,
 * así que el círculo es una superficie con contenido, no un punto
 * decorativo.
 */
export const DOCUMENTOS_COLABORADOR: readonly Documento[] = [
  {
    name: "Acta de nacimiento",
    copies: "2 copias",
    icon: "footprints",
    color: "var(--ceem-cyan-deep)",
  },
  {
    name: "CURP",
    detail: "Formato internet",
    copies: "2 copias",
    icon: "badge",
    color: "var(--ceem-carmin-deep)",
  },
  {
    name: "INE",
    detail: "Ambos lados",
    copies: "2 copias",
    icon: "id",
    color: "var(--ceem-olive-deep)",
  },
  {
    name: "Comprobante de capacitaciones y actualizaciones",
    detail: "Certificados",
    copies: "2 copias",
    icon: "certificate",
    color: "var(--ceem-orange-deep)",
  },
  {
    name: "RFC",
    detail: "Alta o CSF",
    copies: "2 copias",
    icon: "receipt",
    color: "var(--ceem-purple-deep)",
  },
  {
    name: "Certificado médico",
    detail: "Actualizado, incluir alergias, tipo de sangre y restricciones médicas",
    copies: "2 copias",
    icon: "medical",
    color: "var(--ceem-olive-deep)",
  },
  {
    name: "Comprobante de domicilio",
    detail: "Servicios fijos, no mayor a 6 meses",
    copies: "2 copias",
    icon: "house",
    color: "var(--ceem-orange-deep)",
  },
  {
    name: "Contrato",
    detail: "Debidamente requisitado",
    copies: "2 copias",
    icon: "handshake",
    color: "var(--ceem-cyan-deep)",
  },
  {
    name: "CV",
    detail: "Actualizado con fotografía",
    copies: "2 copias",
    icon: "briefcase",
    color: "var(--ceem-carmin-deep)",
  },
  {
    name: "Reglamento interno",
    detail: "Firmado",
    copies: "2 copias",
    icon: "signature",
    color: "var(--ceem-purple-deep)",
  },
  {
    name: "Comprobante de estudios concluidos",
    detail: "Anexar cédula o título",
    copies: "2 copias",
    icon: "graduation",
    color: "var(--ceem-olive-deep)",
  },
  {
    name: "Reglamento de uniforme",
    detail: "Anexar cédula, firmado",
    copies: "2 copias",
    icon: "shirt",
    color: "var(--ceem-orange-deep)",
  },
];

/*
 * [OFICIAL] Información de pagos, de la pieza "DATOS BANCARIOS".
 *
 * ⚠ DECISIÓN EXPRESA (usuario, 3-ago-2026): el número de cuenta y
 * la CLABE NO se publican en el sitio. Publicarlos los deja
 * indexables y facilita el fraude de la captura alterada, en el
 * que alguien difunde la misma imagen con dígitos cambiados. Se
 * entregan por WhatsApp, uno a uno.
 *
 * Sí se publica el titular y el banco, que es justo lo contrario:
 * le permite a un padre detectar que le están pasando una cuenta
 * que no es la del Centro. Los datos completos están en la pieza
 * oficial, fuera del repo.
 */
export const PAGOS = {
  titular: "Educa Mates Foundation, A.C.",
  banco: "BBVA",
  lema: "Tu pago contribuye a seguir formando niños únicos, plenos, completos, felices y perfectos.",
  condiciones: [
    "Todos los pagos por transferencia, Practicaja o ventanilla deben incluir el nombre completo del participante.",
    "El comprobante se envía al asesor educativo.",
    "No se realizan devoluciones ni reembolsos una vez iniciado el proceso de inscripción, sin excepción.",
  ],
} as const;

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

/*
 * [OFICIAL] Logotipo entregado el 3-ago-2026. Se recortó el margen
 * blanco y se volvió transparente el fondo con relleno por
 * inundación desde los bordes, para que los blancos interiores del
 * avión de papel sobrevivan. Sustituye al bloque de texto
 * provisional que reconstruía el logotipo a mano.
 */
export const LOGO = {
  src: "/marca/logo-ceem.png",
  alt: "Centro Educativo Educa Mates",
  width: 794,
  height: 306,
} as const;
