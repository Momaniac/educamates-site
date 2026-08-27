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
 * El WhatsApp se resolvió el 17-ago-2026. Hubo dos números en
 * disputa desde junio: …5598 (el que el sitio llevaba) y …5558 (el
 * de la pieza de datos bancarios, por el que se cambió el 3-ago).
 * Ese cambio rompió el botón: el cliente reportó que no redirigía
 * al contacto de CEEM. El enlace corto oficial que dio el cliente
 * (wa.me/message/GBGRRD5C3VBQH1) resuelve internamente a
 * 5215635555598 — el …5598 de siempre. La errata estaba en la
 * pieza bancaria.
 *
 * El botón principal usa el enlace corto porque es la dirección
 * que comparte el propio cliente en su propaganda; el número
 * sigue existiendo para construir los mensajes con ?text=
 * prellenado (los enlaces cortos no aceptan texto prellenado).
 *
 * [VERIFICADO 27-ago-2026] Se volvió a comprobar contra WhatsApp,
 * resolviendo cada enlace y leyendo el nombre de la cuenta:
 *   wa.me/message/GBGRRD5C3VBQH1 → "Centro Educativo Educa Mates" ✓
 *   wa.me/5215635555598          → "Centro Educativo Educa Mates" ✓
 *   wa.me/5215635555558          → sin cuenta (página genérica) ✗
 *   wa.me/5215561852213          → "Educa Mates Foundation" ✓ (EMF)
 * O sea: el enlace corto y el número son la MISMA cuenta de CEEM,
 * y el …5558 de la pieza de datos bancarios no tiene WhatsApp. No
 * cambiar nada aquí sin repetir esta comprobación.
 */
export const CONTACT = {
  name: "Centro Educativo EducaMates",
  short: "CEEM",
  phone: "55 5655 4228",
  phoneHref: "tel:5556554228",
  /** [OFICIAL] Enlace corto de WhatsApp Business que compartió el cliente. */
  whatsappUrl: "https://wa.me/message/GBGRRD5C3VBQH1",
  /** [OFICIAL] Respaldo del enlace corto; para armar mensajes prellenados. */
  whatsappNumber: "5215635555598",
  whatsappDisplay: "+52 56 3555 5598",
  /** [OFICIAL] Correo oficial de CEEM, dado por el cliente el 17-ago-2026. */
  email: "hola@educamates.edu.mx",
  /** [EMF] Dirección del Centro; el enlace de Maps lo dio el cliente. */
  address:
    "Cam. Viejo a San Pedro Mártir 315, San Pedro Mártir, Tlalpan, 14640 Ciudad de México, CDMX",
  mapsUrl: "https://maps.app.goo.gl/1BGvRnU6vjtPFM6w7",
  /**
   * [REUNIÓN] Linktree oficial que compartió el cliente.
   * [OFICIAL 17-ago-2026] "Por el momento, las redes sociales
   * pueden direccionarse únicamente al Linktree": TODAS las redes
   * apuntan aquí. El usuario de Instagram se conserva como dato
   * visible (viene de la pieza oficial), pero su clic también va
   * al Linktree en vez de directo a instagram.com.
   */
  linktree: "https://linktr.ee/CEEM_",
  /** [OFICIAL] Usuario de Instagram tal cual aparece en la pieza. */
  instagram: "@somosCEEM",
  instagramUrl: "https://linktr.ee/CEEM_",
  /**
   * [OFICIAL] Nombre de la página de Facebook. La pieza da el
   * nombre pero no la URL, y el cliente pidió que las redes vayan
   * al Linktree, así que el clic va ahí.
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

export interface Distintivo {
  readonly label: string;
  readonly icon: string;
}

/*
 * [OFICIAL 17-ago-2026] Los cuatro distintivos institucionales que
 * el cliente pidió destacar, tal cual los escribió. Van junto a las
 * claves de la SEP porque son la misma credencial: la prueba de que
 * el Centro es oficial y supervisado.
 */
export const DISTINTIVOS: readonly Distintivo[] = [
  { label: "Escuela supervisada por la SEP", icon: "school" },
  { label: "Escuela supervisada por el DIF", icon: "heart" },
  { label: "Incorporación oficial ante la SEP", icon: "certificate" },
  { label: "Escuela Segura de la Zona", icon: "shield" },
];

export interface Horario {
  readonly name: string;
  readonly horas: string;
  readonly comedor: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/*
 * [OFICIAL 17-ago-2026] Las tres modalidades de horario, horas y
 * comedor tal cual las dio el cliente. Las edades de la escalera de
 * niveles y estas jornadas son las dos preguntas que todo padre
 * hace primero.
 */
export const HORARIOS: readonly Horario[] = [
  {
    name: "Horario Académico",
    horas: "8:45 a 13:30 h",
    comedor: "No incluye comedor.",
    icon: "sunrise",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    name: "Horario Completo",
    horas: "7:45 a 16:00 h",
    comedor: "Incluye comedor (3 tiempos de alimentos).",
    icon: "sun",
    color: "var(--ceem-orange-deep)",
    ink: "var(--ceem-on-orange)",
  },
  {
    name: "Horario Extendido",
    horas: "7:45 a 18:00 h",
    comedor: "Incluye comedor (4 tiempos de alimentos).",
    icon: "sunset",
    color: "var(--ceem-purple-deep)",
    ink: "var(--ceem-on-purple)",
  },
];

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
  { label: "Equipo", href: "#equipo" },
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
  /** [OFICIAL] Edad por nivel, confirmada por el cliente el 17-ago-2026. */
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
 * [OFICIAL 17-ago-2026] Edades por nivel confirmadas por escrito
 * por el cliente: Pre Maternal desde los 45 días; Maternal de 1 a
 * 2 años; Preescolar 1: 3 años; Preescolar 2: 4 años; Preescolar
 * 3: 5 años. Coinciden con la interpretación provisional, que ya
 * no es interpretación.
 *
 * Los cinco niveles toman los cinco colores del lema en su orden
 * oficial — Únicos, Plenos, Completos, Perfectos, Felices — para
 * que la escalera de niveles y la marca digan lo mismo.
 */
export const NIVELES: readonly Nivel[] = [
  {
    id: "prematernal",
    ilustracion: "/ilustraciones/completos/bebe-nina.png",
    ilustracionAlt: "Bebé con mameluco de EducaMates",
    name: "Pre Maternal",
    edad: "Desde 45 días de nacido",
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
    edad: "De 1 a 2 años",
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
  /** Horarios oficiales del taller, si los hay. */
  readonly horario?: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/*
 * [OFICIAL 17-ago-2026] Talleres con sus horarios tal cual los dio
 * el cliente. Antes solo estaban confirmados de palabra ("club de
 * tareas, taekwondo, etc.") y la tercera tarjeta pedía la lista
 * completa: ya llegó.
 */
export const TALLERES: readonly Taller[] = [
  {
    name: "Taekwondo",
    description: "Disciplina, coordinación y confianza a través del deporte.",
    horario: "Martes y jueves · 15:00 a 16:00 h",
    icon: "medal",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    name: "Club de tareas",
    description: "Acompañamiento para hacer la tarea en el Centro, con apoyo de las maestras.",
    horario: "Lunes a viernes · 14:00 a 15:00 h y 15:00 a 16:00 h",
    icon: "book",
    color: "var(--ceem-orange-deep)",
    ink: "var(--ceem-on-orange)",
  },
];

export interface Programa {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly color: string;
  /** Tinta legible sobre ese color (ver palette-ceem.css). */
  readonly ink: string;
}

/*
 * [OFICIAL 17-ago-2026] Cursos especiales y regularización tal
 * cual los dio el cliente. Los cursos "manejan los mismos
 * horarios del programa académico y completo" — se referencia a
 * HORARIOS en vez de repetir las horas, para que si cambian solo
 * haya que tocar un lugar.
 */
export const CURSOS_ESPECIALES: readonly Programa[] = [
  {
    name: "Curso de Verano",
    description: "Los mismos horarios del programa académico y completo.",
    icon: "sun",
    color: "var(--ceem-orange-deep)",
    ink: "var(--ceem-on-orange)",
  },
  {
    name: "Curso de Invierno",
    description: "Los mismos horarios del programa académico y completo.",
    icon: "snowflake",
    color: "var(--ceem-cyan-deep)",
    ink: "var(--ceem-on-cyan)",
  },
  {
    name: "Curso de Primavera",
    description: "Los mismos horarios del programa académico y completo.",
    icon: "flower",
    color: "var(--ceem-olive-deep)",
    ink: "var(--ceem-on-olive)",
  },
];

/*
 * [OFICIAL 17-ago-2026] Regularización para preescolar y primaria.
 * Nota: el sitio es del kínder, pero la regularización cubre
 * primaria — se publica tal cual, es oferta real del Centro.
 */
export const REGULARIZACION: readonly Programa[] = [
  {
    name: "Regularización Preescolar",
    description: "Refuerzo académico de 14:00 a 15:00 h y de 15:00 a 16:00 h.",
    icon: "book",
    color: "var(--ceem-carmin-deep)",
    ink: "var(--ceem-on-carmin)",
  },
  {
    name: "Regularización Primaria",
    description: "Refuerzo académico de 14:00 a 15:00 h y de 15:00 a 16:00 h.",
    icon: "graduation",
    color: "var(--ceem-navy-deep)",
    ink: "var(--ceem-on-navy)",
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
  /** Copias exigidas. Opcional: la lista de familias no las especifica. */
  readonly copies?: string;
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
  /*
   * [OFICIAL 17-ago-2026] Los niños originales de CEEM que el
   * cliente pidió conservar como imagen principal. Llegaron con
   * fondo blanco sólido; el fondo se volvió transparente con
   * relleno por inundación desde los bordes.
   */
  heroIzquierda: {
    src: "/ilustraciones/completos/nino-ceem.png",
    alt: "Niño de EducaMates con los brazos abiertos",
  },
  heroDerecha: {
    src: "/ilustraciones/completos/nina-ceem.png",
    alt: "Niña de EducaMates con los brazos abiertos",
  },
  /* Personajes extra del mismo envío, para asomarse en secciones. */
  hada: {
    src: "/ilustraciones/completos/hada.png",
    alt: "Hada de EducaMates",
  },
  superheroina: {
    src: "/ilustraciones/completos/superheroina.png",
    alt: "Superheroína de EducaMates",
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

/*
 * [OFICIAL 17-ago-2026] Apartado de educación inclusiva y
 * neurodivergencia. El texto es literal del cliente; era un
 * pendiente registrado — es un tema sensible para las familias y
 * convenía su redacción exacta.
 *
 * Los perfiles que menciona (lenguaje, retrasos en el desarrollo,
 * TDAH, autismo) van como respaldo de la promesa, no como
 * catálogo.
 */
export const INCLUSION = {
  titulo: "Educación inclusiva y neurodivergencia",
  parrafos: [
    "En Centro Educativo Educa Mates contamos con un equipo preparado para trabajar desde un enfoque de educación inclusiva y atención a la neurodivergencia. Hemos acompañado a niñas y niños con distintos perfiles y necesidades de aprendizaje, incluyendo dificultades en el lenguaje, retrasos en el desarrollo, TDAH, autismo y otras condiciones.",
    "Cada alumno es único, por lo que buscamos conocer previamente sus necesidades, intereses y las estrategias que mejor favorecen su aprendizaje. Esto nos permite brindar un acompañamiento adecuado y crear un ambiente donde cada niño pueda aprender, desarrollarse y disfrutar plenamente de su experiencia escolar.",
    "Nuestro compromiso es que todos los alumnos se sientan seguros, respetados, incluidos y acompañados durante su formación.",
  ],
} as const;

export interface PasoInscripcion {
  readonly numero: number;
  readonly titulo: string;
  readonly description: string;
}

/*
 * [OFICIAL 17-ago-2026] Proceso de inscripción tal cual lo dictó
 * el cliente: contacto, verificación de edad y documentación.
 */
export const PROCESO_INSCRIPCION: readonly PasoInscripcion[] = [
  {
    numero: 1,
    titulo: "Ponte en contacto con nosotros",
    description: "Escríbenos por WhatsApp o déjanos tus datos en el formulario y te respondemos el mismo día.",
  },
  {
    numero: 2,
    titulo: "Verifica la edad correspondiente",
    description: "Juntos confirmamos que tu hijo quede en el nivel correcto según su edad.",
  },
  {
    numero: 3,
    titulo: "Presenta la documentación",
    description: "Reúne los documentos de la lista y entrega copias en el Centro.",
  },
];

/*
 * [OFICIAL 17-ago-2026] La lista de documentos PARA LAS FAMILIAS.
 * Esto resuelve el pendiente más engorroso: la pieza "Documentación"
 * de agosto resultó ser de personal docente, y desde entonces
 * faltaba la lista real para inscribir a un alumno.
 */
export const DOCUMENTOS_ALUMNO: readonly Documento[] = [
  {
    name: "Acta de nacimiento",
    detail: "Del alumno y de los padres",
    copies: "Copia",
    icon: "footprints",
    color: "var(--ceem-cyan-deep)",
  },
  {
    name: "Comprobante de domicilio",
    detail: "No mayor a tres meses",
    copies: "Copia",
    icon: "house",
    color: "var(--ceem-orange-deep)",
  },
  {
    name: "CURP",
    detail: "Del alumno y de los padres o tutores",
    copies: "Copia",
    icon: "badge",
    color: "var(--ceem-carmin-deep)",
  },
  {
    name: "Cartilla de vacunación",
    detail: "Actualizada, ambos lados",
    copies: "Copia",
    icon: "medical",
    color: "var(--ceem-olive-deep)",
  },
  {
    name: "INE",
    detail: "De los padres y de tres personas autorizadas para recoger al alumno",
    copies: "Copia",
    icon: "id",
    color: "var(--ceem-purple-deep)",
  },
  {
    name: "Fotografías del alumno",
    detail: "Tres fotografías tamaño infantil",
    icon: "camera",
    color: "var(--ceem-cyan-deep)",
  },
  {
    name: "Fotografías de padres y autorizados",
    detail: "Dos fotografías tamaño infantil de los padres y personas autorizadas",
    icon: "camera",
    color: "var(--ceem-orange-deep)",
  },
  {
    name: "Boletas de ciclos anteriores",
    detail: "En caso de aplicar",
    copies: "Copia",
    icon: "certificate",
    color: "var(--ceem-navy-deep)",
  },
  {
    name: "Certificado médico",
    copies: "Original",
    icon: "medical",
    color: "var(--ceem-carmin-deep)",
  },
];

/*
 * [OFICIAL 17-ago-2026] Costos. Decisión del cliente: las
 * colegiaturas y demás costos SOLO se dan por WhatsApp — y de
 * hecho nunca se publicaron, así que no hay que retirar nada. La
 * cuota de inscripción SÍ es pública: $3,008.00 MXN, y su único
 * CTA es WhatsApp con atención personalizada.
 */
export const COSTOS = {
  inscripcion: {
    monto: "$3,008.00",
    moneda: "MXN",
    nota: "Cuota de inscripción",
  },
  colegiaturas: {
    mensaje: "Las colegiaturas y demás costos se comparten por WhatsApp, con atención personalizada.",
  },
} as const;

export interface Promocion {
  readonly mensaje: string;
  /** Texto prellenado del WhatsApp de esta promoción. */
  readonly whatsappMensaje: string;
  /** Ilustración que acompaña la promoción. */
  readonly ilustracion: string;
  readonly ilustracionAlt: string;
}

export interface Integrante {
  readonly nombre: string;
  readonly rol: string;
  readonly foto: string;
  /** Semblanza individual; el cliente las manda durante la semana. */
  readonly semblanza?: string;
}

export interface GrupoEquipo {
  readonly titulo: string;
  readonly descripcion: string;
  /** Color del aro de las fotos del grupo (rueda CEEM, familia -deep). */
  readonly color: string;
  readonly integrantes: readonly Integrante[];
}

/*
 * [OFICIAL 17-ago-2026 · CORREGIDO 27-ago-2026] El organigrama del
 * cliente (Equipo.pdf), recreado como sección de equipo al diseño
 * del sitio — no como imagen ni PDF incrustado: el texto de una
 * imagen no lo indexa un buscador ni se lee en móvil.
 *
 * ⚠ La primera versión se armó leyendo los NOMBRES DE ARCHIVO de las
 * fotos que venían sueltas en el correo, porque el PDF no tiene capa
 * de texto legible (se extrae revuelta: "Preesco Preescolar 1 lar 2").
 * Eso metió tres errores que el cliente reportó el 27-ago: el rol de
 * Pamela Tejeda (el archivo no traía rol y se dedujo "Coordinación
 * Académica" cuando el organigrama dice "Subdirección
 * administrativa"), varios apellidos faltantes, y la omisión de
 * Samuel E. Martínez, que sólo aparece dentro del PDF y no tenía
 * foto suelta. Ahora TODO sale del organigrama leído gráficamente.
 *
 * Reglas de esta lista, para que no se vuelva a torcer:
 *  · El ROL es literal del organigrama. Si cambia, cambia el PDF.
 *  · El NOMBRE es el del organigrama, completo. Se conservan los
 *    tratamientos que el propio cliente usa en sus archivos ("Dra."
 *    de Alma, "Lic." de Pamela — el PDF la pone como "K. Pamela
 *    Tejeda") y se normalizan acentos (Hernández).
 *  · El orden de los grupos conserva la jerarquía del organigrama:
 *    Dirección → Subdirección y control escolar → docentes por nivel
 *    → suplentes → talleres y apoyo. Dentro de las docentes el orden
 *    es la escalera de niveles (Maternal → Preescolar 3), al revés
 *    que el PDF, porque así se lee la sección de niveles del sitio.
 *
 * La foto de Samuel se extrajo del propio PDF (imagen incrustada +
 * su máscara), aplanada sobre blanco y recortada al mismo encuadre
 * 480×560 que las demás.
 *
 * ⚠ [PENDIENTE] Las semblanzas individuales las manda el cliente
 * "durante la semana"; al llegar se llenan aquí y las cards las
 * muestran solas.
 */
export const EQUIPO: readonly GrupoEquipo[] = [
  {
    titulo: "Dirección",
    descripcion: "La visión que guía al Centro Educativo.",
    color: "var(--ceem-navy-deep)",
    integrantes: [
      {
        nombre: "Dra. Alma E. Martínez",
        rol: "Dirección General",
        foto: "/equipo/alma-martinez.webp",
      },
    ],
  },
  {
    titulo: "Subdirección y control escolar",
    descripcion: "Quienes sostienen la administración y el expediente de cada alumno.",
    color: "var(--ceem-purple-deep)",
    integrantes: [
      {
        nombre: "Lic. Pamela Tejeda",
        rol: "Subdirección administrativa",
        foto: "/equipo/pamela-tejeda.webp",
      },
      {
        nombre: "Lic. Juan Carlos De la Rosa",
        rol: "Control Escolar",
        foto: "/equipo/juan-carlos-de-la-rosa.webp",
      },
    ],
  },
  {
    titulo: "Equipo docente",
    descripcion: "Una maestra por cada etapa de la escalera de niveles.",
    color: "var(--ceem-cyan-deep)",
    integrantes: [
      {
        nombre: "Lic. Magnolia Hernández",
        rol: "Maternal",
        foto: "/equipo/magnolia.webp",
      },
      {
        nombre: "Lic. Silvia Hernández",
        rol: "Preescolar 1",
        foto: "/equipo/silvia.webp",
      },
      {
        nombre: "Lic. Margarita Rosas",
        rol: "Preescolar 2",
        foto: "/equipo/margarita-rosas.webp",
      },
      {
        /* El organigrama le pone "Enlace Academico" como insignia
           además de su nivel; se conservan los dos. */
        nombre: "Lic. Gabina Acosta",
        rol: "Preescolar 3 y Enlace Académico",
        foto: "/equipo/gabina-acosta.webp",
      },
    ],
  },
  {
    titulo: "Maestras suplentes",
    descripcion: "El relevo que mantiene cada grupo acompañado.",
    color: "var(--ceem-carmin-deep)",
    integrantes: [
      {
        nombre: "Lic. Magali García",
        rol: "Maestra suplente",
        foto: "/equipo/magali.webp",
      },
      {
        nombre: "Lic. Sofía Osnaya",
        rol: "Maestra suplente",
        foto: "/equipo/sofia.webp",
      },
    ],
  },
  {
    titulo: "Talleres y equipo de apoyo",
    descripcion: "Quienes hacen que todo funcione todos los días.",
    color: "var(--ceem-olive-deep)",
    integrantes: [
      {
        nombre: "Lic. Tadeo Alfaro",
        rol: "Tae Kwon Do",
        foto: "/equipo/tadeo-alfaro.webp",
      },
      {
        nombre: "Lizeth Miranda",
        rol: "Auxiliar de Limpieza y Cocina",
        foto: "/equipo/lizeth-miranda.webp",
      },
      {
        nombre: "Samuel E. Martínez",
        rol: "Servicio de Seguridad",
        foto: "/equipo/samuel-martinez.webp",
      },
    ],
  },
];

/*
 * [OFICIAL 17-ago-2026] Mensajes promocionales que el cliente
 * quiere repartidos por el sitio con los personajes de CEEM, para
 * darle dinamismo e incrementar conversiones. Los cinco mensajes
 * son literales; los personajes se reparten los que ya existen.
 * El texto prellenado de WhatsApp lo abre ya en contexto.
 */
export const PROMOCIONES: readonly Promocion[] = [
  {
    mensaje: "Pregunta por nuestras becas",
    whatsappMensaje: "Hola, quiero preguntar por las becas.",
    ilustracion: "/ilustraciones/completos/nina-coletas.png",
    ilustracionAlt: "Niña de EducaMates con coletas invitándote a preguntar por las becas",
  },
  {
    mensaje: "Promoción de inscripción",
    whatsappMensaje: "Hola, quiero información de la promoción de inscripción.",
    ilustracion: "/ilustraciones/completos/nino-afro.png",
    ilustracionAlt: "Niño de EducaMates sonriendo con la promoción de inscripción",
  },
  {
    mensaje: "Agenda tu visita",
    whatsappMensaje: "Hola, quiero agendar una visita al Centro Educativo.",
    ilustracion: "/ilustraciones/completos/nina-mayor.png",
    ilustracionAlt: "Niña de EducaMates agendando tu visita al Centro",
  },
  {
    mensaje: "Solicita información",
    whatsappMensaje: "Hola, quisiera recibir información del Centro Educativo.",
    ilustracion: "/ilustraciones/completos/nino-pelirrojo.png",
    ilustracionAlt: "Niño de EducaMates ofreciendo información",
  },
  {
    mensaje: "Conoce nuestros programas",
    whatsappMensaje: "Hola, quiero conocer los programas del Centro Educativo.",
    ilustracion: "/ilustraciones/completos/nina-rubia.png",
    ilustracionAlt: "Niña de EducaMates presentando los programas",
  },
];
