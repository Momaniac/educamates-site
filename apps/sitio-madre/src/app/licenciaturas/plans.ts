export interface DegreePeriod {
  readonly name: string;
  readonly group?: string;
  readonly subjects: readonly string[];
}

export interface DegreePlan {
  readonly id: string;
  readonly name: string;
  readonly modality: string;
  readonly rvoe?: string;
  readonly periods: readonly DegreePeriod[];
}

export const DEGREE_PLANS: readonly DegreePlan[] = [
  {
    id: "pedagogia", name: "Licenciatura en Pedagogía", modality: "presencial",
    periods: [
      { name: "Primer semestre", subjects: ["Historia de la educación", "Teoría pedagógica", "Comunicación y educación", "Sociología y educación", "Estadística y probabilidad", "Introducción a la investigación"] },
      { name: "Cuarto semestre", subjects: ["Legislación y política educativa", "Organización educativa", "Infancia", "Planeación educativa", "Educación a distancia", "Problemas de aprendizaje", "Métodos cuantitativos y cualitativos en la educación", "Historia de la educación en México", "Economía y educación", "Historia de la psicología", "Didáctica", "Psicología de la educación", "Modelos de enseñanza", "Educación especial"] },
      { name: "Quinto semestre", subjects: ["Organismos nacionales e internacionales de la educación", "Gestión educativa", "Adolescencia", "Diseño de planos y programas de estudio", "Tecnología y educación", "Epistemología de la educación", "Calidad y educación"] },
      { name: "Séptimo semestre", subjects: ["Andragogía", "Evaluación institucional", "Capacitación y reclutamiento", "Taller de diseño de material didáctico", "Diseño instructivo", "Deontología profesional", "Seminario de investigación"] },
    ],
  },
  {
    id: "administracion", name: "Licenciatura en Administración", modality: "en línea", rvoe: "20171849/14-12-17",
    periods: [
      { name: "Primer cuatrimestre", subjects: ["Metodología de la investigación", "Redacción avanzada", "Matemáticas aplicadas a los negocios I", "Visión microeconómica", "Informática aplicada a los negocios I", "Derecho constitucional y administrativo"] },
      { name: "Segundo cuatrimestre", subjects: ["Administración I", "Teoría de la comunicación", "Matemáticas aplicadas a los negocios II", "Visión macroeconómica", "Informática aplicada a los negocios II", "Derecho mercantil"] },
      { name: "Tercer cuatrimestre", subjects: ["Administración II", "Sociología de las organizaciones", "Estadística para los negocios", "Mercadotecnia", "Informática aplicada a los negocios III", "Información financiera"] },
      { name: "Cuarto cuatrimestre", subjects: ["Administración de personal", "Administración de la producción", "Investigación de operaciones", "Sistemas y procedimientos", "Comportamiento organizacional", "Derecho civil"] },
      { name: "Quinto cuatrimestre", subjects: ["Calidad total", "Administración de compras", "Costos I", "Sistemas administrativos", "Derecho laboral"] },
      { name: "Sexto cuatrimestre", subjects: ["Contabilidad administrativa", "Finanzas I", "Costos II", "Presupuestos", "Administración de la mercadotecnia"] },
      { name: "Séptimo cuatrimestre", subjects: ["Liderazgo", "Finanzas II", "Administración de proyectos", "Estudio contable de los impuestos I", "Derecho fiscal"] },
      { name: "Octavo cuatrimestre", subjects: ["Auditoría administrativa", "Trabajo en equipo y negociación", "Habilidades directivas", "Análisis financiero", "Relaciones públicas"] },
    ],
  },
  {
    id: "derecho", name: "Licenciatura en Derecho", modality: "mixta", rvoe: "20220321/14-04-21",
    periods: [
      { name: "Primer semestre", subjects: ["Introducción al estudio del derecho", "Derecho romano y sus instituciones", "Teoría general del estado", "Teoría de la ley penal y del delito", "Historia del derecho mexicano", "Argumentación jurídica", "Teoría general del proceso"] },
      { name: "Segundo semestre", subjects: ["Sociología jurídica", "Derecho civil: personas y familia", "Derecho laboral", "Derecho administrativo", "Teoría económica", "Técnicas de investigación jurídica", "Derecho constitucional"] },
      { name: "Tercer semestre", subjects: ["Derecho tributario", "Derecho civil: bienes y derechos", "Derecho del trabajo individual", "Derecho fiscal", "Derecho económico", "Retórica, expresión y oratoria", "Derecho penal: estudio de los delitos"] },
      { name: "Cuarto semestre", subjects: ["Derecho procesal penal", "Derecho mercantil y sus sociedades", "Derecho del trabajo colectivo", "Derecho internacional privado", "Derecho procesal civil", "Técnicas de litigio oral", "Derechos humanos"] },
      { name: "Quinto semestre", subjects: ["Sistemas jurídicos contemporáneos", "Derecho aduanero y el régimen jurídico de comercio exterior", "Contratos civiles", "Derecho internacional público", "Juicios orales civiles", "Filosofía del derecho", "Títulos y operaciones de crédito"] },
      { name: "Sexto semestre", subjects: ["Derecho de la transparencia y acceso a la información", "Derecho bancario y bursátil", "Contratos mercantiles", "Amparo", "Juicios orales mercantiles", "Ética profesional", "Seguridad social", "Derecho agrario"] },
      { name: "Séptimo semestre", subjects: ["Seguros y fianzas", "Penología", "Delitos en especial", "Mediación y arbitraje", "Juicios orales penales", "Contratos empresariales"] },
    ],
  },
  {
    id: "contaduria", name: "Licenciatura en Contaduría", modality: "en línea",
    periods: [
      { name: "Primer cuatrimestre", subjects: ["Metodología de la investigación", "Redacción avanzada", "Matemáticas aplicadas a los negocios I", "Visión microeconómica", "Informática aplicada a los negocios I", "Derecho constitucional y administrativo"] },
      { name: "Segundo cuatrimestre", subjects: ["Administración", "Teoría de la comunicación", "Matemáticas aplicadas a los negocios II", "Visión macroeconómica", "Informática aplicada a los negocios II", "Derecho mercantil"] },
      { name: "Tercer cuatrimestre", subjects: ["Administración II", "Sociología de las organizaciones", "Estadística para los negocios", "Mercadotecnia", "Informática aplicada a los negocios III", "Información financiera"] },
      { name: "Cuarto cuatrimestre", subjects: ["Administración de personal", "Administración de la producción", "Investigación de operaciones", "Sistemas y procedimientos", "Contabilidad intermedia", "Derecho civil"] },
      { name: "Quinto cuatrimestre", subjects: ["Sistemas contables", "Sociedades mercantiles I", "Costos I", "Sistemas administrativos", "Derecho laboral"] },
      { name: "Sexto cuatrimestre", subjects: ["Contabilidad administrativa", "Finanzas I", "Costos II", "Presupuestos", "Sociedades mercantiles II"] },
      { name: "Séptimo cuatrimestre", subjects: ["Contabilidades especiales", "Finanzas II", "Auditoría I", "Estudio contable de los impuestos I", "Derecho fiscal"] },
      { name: "Octavo cuatrimestre", subjects: ["Auditoría administrativa", "Finanzas III", "Auditoría II", "Estudio contable de los impuestos II", "Relaciones públicas"] },
      { name: "Noveno cuatrimestre", subjects: ["Seminario de titulación", "Ética profesional", "Auditoría III", "Estudio contable de los impuestos III", "Auditoría de estados financieros"] },
    ],
  },
  {
    id: "educacion-preescolar", name: "Licenciatura en Educación Preescolar", modality: "presencial",
    periods: [
      {
        group: "1. Bases teóricas metodológicas para la enseñanza",
        name: "Desarrollo y aprendizaje",
        subjects: ["Enfoques teóricos sobre desarrollo y aprendizaje", "La escuela y la educación de los niños", "Teoría psicogenética evolutiva", "Teoría constructivista", "Aprendizaje significativo", "Promoción del aprendizaje", "Tipos de escuela"],
      },
      {
        group: "1. Bases teóricas metodológicas para la enseñanza · Planificación y evaluación de la enseñanza y el aprendizaje",
        name: "Planeación curricular",
        subjects: ["Técnicas de planeación curricular", "Elementos de la planeación curricular", "Estrategias de planeación curricular", "Gestión del aprendizaje"],
      },
      {
        group: "1. Bases teóricas metodológicas para la enseñanza · Planificación y evaluación de la enseñanza y el aprendizaje",
        name: "Planeación didáctica y evaluación",
        subjects: ["Tipos de evaluación", "Elementos de la evaluación del aprendizaje", "Factores que intervienen en la evaluación del aprendizaje", "Instrumentos de evaluación", "Diagnóstico escolar"],
      },
      {
        group: "1. Bases teóricas metodológicas para la enseñanza",
        name: "Educación socioemocional",
        subjects: ["Habilidades socioemocionales", "Orientación psicopedagógica", "Tipos de inteligencia"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Atención a la diversidad y educación inclusiva",
        subjects: ["Neurociencias y aprendizaje", "Desarrollo infantil desde la neurociencia", "Desarrollo cerebral", "Resiliencia", "Prácticas educativas inclusivas", "Recursos para promover la inclusión en el aula", "Técnicas de orientación para la atención de la diversidad"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Modelos pedagógicos",
        subjects: ["Educación humanista", "Educación libertadora", "Pragmatismo", "Educación neoliberal"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Lenguaje y comunicación",
        subjects: ["Teorías lingüísticas", "Aplicación de la lingüística", "Lingüística y comunicación", "Estrategias didácticas en prácticas sociales del lenguaje", "Desarrollo de la comprensión lectora", "Literatura infantil"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Pensamiento cuantitativo",
        subjects: ["Características y elementos del pensamiento cuantitativo", "Estrategias de enseñanza-aprendizaje para el desarrollo del pensamiento cuantitativo", "Los números y su fundamento", "Operaciones aritméticas"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Estudio del mundo natural",
        subjects: ["Seres vivos", "Ciencia y tecnología", "Implicación de la tecnología preescolar", "Ubicación espacial"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Educación artística",
        subjects: ["Música y teatro", "Expresión corporal", "Artes visuales"],
      },
      {
        group: "2. Formación para la enseñanza y el aprendizaje",
        name: "Desarrollo de hábitos",
        subjects: ["Desarrollo psicomotriz", "Hábitos saludables", "Salud infantil"],
      },
      {
        group: "3. Práctica profesional",
        name: "Observación y análisis de la práctica educativa",
        subjects: ["Observación y entrevistas", "Contextos socioculturales", "Prácticas escolares", "Interacciones pedagógicas y didácticas"],
      },
      {
        group: "3. Práctica profesional",
        name: "Trabajo docente",
        subjects: ["Iniciación al trabajo docente", "Estrategias de trabajo docente", "Innovación y trabajo docente", "Trabajo docente y proyectos de mejora escolar"],
      },
    ],
  },
];
