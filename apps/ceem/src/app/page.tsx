import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Landmark,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { buildWhatsAppUrl } from "@educamates/ui";
import { SiteHeader } from "@/components/site-header";
import { AdmisionForm } from "@/components/admision-form";
import { Icon } from "@/components/icons";
import { Wordmark } from "@/components/wordmark";
import {
  BENEFICIOS,
  CONTACT,
  COSTOS,
  CURSOS_ESPECIALES,
  DISTINTIVOS,
  DOCUMENTOS_ALUMNO,
  DOCUMENTOS_COLABORADOR,
  ENFOQUE,
  HORARIOS,
  ILUSTRACIONES,
  INCLUSION,
  LEMA,
  NAV_SECUNDARIA,
  NIVELES,
  PAGOS,
  PROCESO_INSCRIPCION,
  PROMOCIONES,
  REGULARIZACION,
  SEDES,
  SEP,
  SERVICIOS,
  TALLERES,
} from "@/lib/site";

/*
 * El enlace corto de WhatsApp Business que dio el cliente: es la
 * dirección oficial que comparte en su propaganda y la que pidió
 * para el botón principal. Los enlaces con mensaje prellenado no
 * pueden usarlo (no aceptan ?text=), así que esos siguen armados
 * desde el número verificado.
 */
const whatsappUrl = CONTACT.whatsappUrl;

/* Mensajes contextuales con texto prellenado: van por número. */
const whatsappInscripcionUrl = buildWhatsAppUrl({
  phone: CONTACT.whatsappNumber,
  message: `Hola, me interesa inscribir a mi hijo(a) en ${CONTACT.name}. Quisiera información de la inscripción y las colegiaturas.`,
});

/* Los datos de cuenta no se publican: se piden por aquí. */
const whatsappPagosUrl = buildWhatsAppUrl({
  phone: CONTACT.whatsappNumber,
  message: "Hola, necesito los datos bancarios para realizar un pago.",
});

const whatsappVacantesUrl = buildWhatsAppUrl({
  phone: CONTACT.whatsappNumber,
  message: "Hola, me interesa trabajar en el Centro Educativo EducaMates.",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ═══ Portada ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          {/* Manchas de color del arte del cliente */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="blob blob-drift absolute -left-24 -top-16 h-72 w-72 bg-[var(--ceem-carmin)]/25" />
            <div
              className="blob blob-drift absolute -right-20 top-4 h-64 w-64 bg-[var(--ceem-cyan)]/20"
              style={{ animationDelay: "-6s" }}
            />
            <div
              className="blob blob-drift absolute -right-10 bottom-0 h-56 w-56 bg-[var(--ceem-orange)]/25"
              style={{ animationDelay: "-11s" }}
            />
            <div
              className="blob blob-drift absolute bottom-8 left-8 h-40 w-40 bg-[var(--ceem-olive)]/20"
              style={{ animationDelay: "-3s" }}
            />
          </div>

          {/*
           * Los dos personajes flanquean el titular igual que en la
           * gráfica del cliente. Se ocultan bajo lg: en móvil el
           * titular necesita todo el ancho y los niños vuelven más
           * abajo, en la franja de comunidad.
           */}
          <Image
            src={ILUSTRACIONES.heroIzquierda.src}
            alt={ILUSTRACIONES.heroIzquierda.alt}
            width={600}
            height={780}
            priority
            className="soft-bounce pointer-events-none absolute bottom-6 left-2 hidden h-auto w-[clamp(11rem,17vw,20rem)] lg:block xl:left-10"
          />
          <Image
            src={ILUSTRACIONES.heroDerecha.src}
            alt={ILUSTRACIONES.heroDerecha.alt}
            width={600}
            height={780}
            priority
            className="soft-bounce pointer-events-none absolute bottom-6 right-2 hidden h-auto w-[clamp(11rem,17vw,20rem)] lg:block xl:right-10"
            style={{ animationDelay: "-1.7s" }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="sticker-pill inline-flex items-center gap-2 bg-[var(--ceem-cyan-deep)] px-5 py-2 text-sm font-black uppercase tracking-wide text-white">
              <Sparkles className="h-4 w-4" aria-hidden />
              Kínder incorporado a la SEP
            </span>

            {/*
             * Titular tipo calcomanía, como en la gráfica: cada
             * línea con su color de la rueda y contorno blanco.
             * El olivo va puro; el naranja usa el tono de titular,
             * un 3 % más oscuro, que es lo justo para cruzar el
             * mínimo de contraste sin dejar de ser el naranja de
             * la marca.
             */}
            <h1 className="mt-7 text-[clamp(2.5rem,9vw,5rem)] font-black uppercase leading-[0.95] tracking-tight">
              <span className="sticker-text block text-brand-primary">Aprender, crear</span>
              <span className="sticker-text block text-[var(--ceem-orange-display)]">y crecer</span>
              <span className="sticker-text block text-[var(--ceem-olive)]">juntos es mejor</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-brand-text/70 sm:text-xl">
              Acompañamos a tu hijo desde los <strong className="text-brand-primary">45 días de
              nacidos</strong> hasta preescolar 3, con inglés todos los días, programa STEM y
              grupos reducidos.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#admision"
                className="sticker-pill inline-flex w-full items-center justify-center gap-2 bg-brand-secondary px-7 py-4 text-base font-black text-white transition-transform hover:scale-105 sm:w-auto"
              >
                Agenda tu visita
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-pill inline-flex w-full items-center justify-center gap-2 bg-brand-primary px-7 py-4 text-base font-black text-white transition-transform hover:scale-105 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ═══ Credenciales SEP ══════════════════════════════ */}
        {/*
         * Recrea el lockup oficial que mandó el cliente — lema en
         * colores, línea de incorporación y las tres claves — pero
         * como texto y no como imagen: así lo lee un buscador, se
         * puede copiar para verificar la escuela ante la SEP y no
         * se pixela en pantallas grandes.
         *
         * Va aquí arriba a propósito: es la prueba de que el kínder
         * es oficial, que es la primera duda de un padre.
         */}
        <section
          aria-labelledby="sep-titulo"
          className="border-y-2 border-brand-muted px-4 py-12 sm:px-6"
          style={{ backgroundColor: "color-mix(in srgb, var(--ceem-sky) 16%, #fff)" }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xl font-black sm:text-2xl md:text-3xl">
              {LEMA.map(({ word, color }, index) => (
                <span key={word} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-brand-primary/50 sm:h-2 sm:w-2"
                    />
                  )}
                  <span style={{ color }}>{word}</span>
                </span>
              ))}
            </p>

            <h2
              id="sep-titulo"
              className="mx-auto mt-5 max-w-2xl text-balance text-base font-bold leading-relaxed text-brand-primary sm:text-lg"
            >
              {SEP.incorporacion}
            </h2>

            <dl className="mt-6 flex flex-wrap items-stretch justify-center gap-3">
              {SEP.claves.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border-2 border-white bg-white/80 px-5 py-3 text-left shadow-[var(--ceem-sticker-shadow)]"
                >
                  <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-brand-text/55">
                    {label}
                  </dt>
                  {/* tabular-nums: son claves que la gente copia dígito a dígito. */}
                  <dd className="mt-0.5 font-black tabular-nums tracking-wide text-brand-primary">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/*
             * Distintivos institucionales (17-ago-2026): la otra
             * mitad de la credencial. Las claves dicen QUÉ es; esto
             * dice QUIÉN la supervisa.
             */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {DISTINTIVOS.map((distintivo) => (
                <li
                  key={distintivo.label}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/80 px-4 py-2 text-sm font-black text-brand-primary shadow-[var(--ceem-sticker-shadow)]"
                >
                  <Icon name={distintivo.icon} className="h-4 w-4 text-brand-secondary" />
                  {distintivo.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ Nosotros ══════════════════════════════════════ */}
        <section id="nosotros" className="scroll-mt-24 bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Quiénes somos
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Un lugar donde cada niño es tomado en cuenta
              </h2>
            </header>

            {/*
             * Texto y foto que ya estaban publicados y aprobados en
             * el sitio de la fundación. Se reproducen tal cual: es
             * copia validada por el cliente, no hay por qué
             * reescribirla. Sigue viva también en apps/emf.
             */}
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
              <div className="space-y-4 text-lg leading-relaxed text-brand-text/70">
                <p>
                  En Centro Educativo EducaMates ofrecemos un programa integral de educación
                  preescolar que va más allá del programa tradicional de la SEP, ya que está
                  diseñado para impulsar el desarrollo académico, emocional, social y personal de
                  cada niño, adaptándonos a sus necesidades individuales.
                </p>
                <p>
                  Contamos con niveles desde maternal hasta preescolar 3 y atención desde los 45
                  días de nacidos hasta los 5 años.
                </p>
              </div>

              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rotate-2 rounded-[var(--ceem-radius-card)]"
                  style={{ backgroundColor: "color-mix(in srgb, var(--ceem-carmin) 14%, #fff)" }}
                />
                <Image
                  src="/images/ceem-preescolar.webp"
                  alt="Actividades del Centro Educativo EducaMates"
                  width={1200}
                  height={675}
                  className="relative aspect-video w-full rounded-[var(--ceem-radius-card)] object-cover shadow-xl"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFICIOS.map((beneficio) => (
                <article
                  key={beneficio.title}
                  className="rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-6 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: beneficio.color, color: beneficio.ink }}
                  >
                    <Icon name={beneficio.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-black leading-tight text-brand-primary">
                    {beneficio.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/65">
                    {beneficio.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Niveles ═══════════════════════════════════════ */}
        <section id="niveles" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Nuestros niveles
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                De prematernal a preescolar 3
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-text/70">
                Cinco etapas para acompañar a tu hijo desde los primeros meses hasta el salto a la
                primaria.
              </p>
            </header>

            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {NIVELES.map((nivel, index) => (
                <li
                  key={nivel.id}
                  className="flex flex-col overflow-hidden rounded-[var(--ceem-radius-card)] bg-white shadow-[var(--ceem-sticker-shadow)] ring-2 ring-brand-muted"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ backgroundColor: nivel.color, color: nivel.ink }}
                  >
                    <span className="text-xs font-black uppercase tracking-widest opacity-90">
                      Nivel {index + 1}
                    </span>
                    <span className="text-xs font-black">{nivel.edad}</span>
                  </div>
                  <div
                    className="flex justify-center pt-4"
                    style={{ backgroundColor: `color-mix(in srgb, ${nivel.color} 12%, #fff)` }}
                  >
                    <Image
                      src={nivel.ilustracion}
                      alt={nivel.ilustracionAlt}
                      width={200}
                      height={240}
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-black leading-tight text-brand-primary">
                      {nivel.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text/65">
                      {nivel.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* ── Enfoque educativo ── */}
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {ENFOQUE.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[var(--ceem-radius-card)] p-7 sm:p-9"
                  style={{ backgroundColor: area.color, color: area.ink }}
                >
                  <h3 className="text-2xl font-black leading-tight">{area.title}</h3>
                  <p className="mt-2 leading-relaxed opacity-85">{area.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-medium">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* ── Horarios ── */}
            {/*
             * Las tres modalidades oficiales (17-ago-2026). Van
             * dentro de Niveles porque responden la pregunta
             * siguiente: ya sé el nivel, ¿cómo es la jornada?
             */}
            <div className="mt-16">
              <header className="mx-auto max-w-3xl text-center">
                <h3 className="text-3xl font-black text-brand-primary sm:text-3xl">
                  Tres horarios para tu familia
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-brand-text/70">
                  La misma calidad educativa en tres jornadas distintas.
                </p>
              </header>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {HORARIOS.map((horario) => (
                  <article
                    key={horario.name}
                    className="rounded-[var(--ceem-radius-card)] p-7 text-center"
                    style={{ backgroundColor: horario.color, color: horario.ink }}
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10">
                      <Icon name={horario.icon} className="h-7 w-7" />
                    </span>
                    <h4 className="mt-5 text-xl font-black leading-tight">{horario.name}</h4>
                    {/* tabular-nums: horas que se copian. */}
                    <p className="mt-2 text-2xl font-black tabular-nums">{horario.horas}</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-85">{horario.comedor}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Talleres ══════════════════════════════════════ */}
        <section id="talleres" className="scroll-mt-24 bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Clases extracurriculares
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Talleres para después de clase
              </h2>
            </header>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TALLERES.map((taller) => (
                <article
                  key={taller.name}
                  className="rounded-[var(--ceem-radius-card)] bg-white p-6 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: taller.color, color: taller.ink }}
                  >
                    <Icon name={taller.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-brand-primary">{taller.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/65">
                    {taller.description}
                  </p>
                  {taller.horario && (
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-3 py-1.5 text-xs font-black text-brand-primary">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {taller.horario}
                    </p>
                  )}
                </article>
              ))}

              {/*
               * Cursos especiales y regularización (17-ago-2026):
               * el "etc." de la reunión ya tiene nombre. Los cursos
               * usan los mismos horarios del programa académico y
               * completo, que viven en su propia sección.
               */}
              {CURSOS_ESPECIALES.map((curso) => (
                <article
                  key={curso.name}
                  className="rounded-[var(--ceem-radius-card)] bg-white p-6 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: curso.color, color: curso.ink }}
                  >
                    <Icon name={curso.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-brand-primary">{curso.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/65">
                    {curso.description}
                  </p>
                </article>
              ))}

              {REGULARIZACION.map((programa) => (
                <article
                  key={programa.name}
                  className="rounded-[var(--ceem-radius-card)] bg-white p-6 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: programa.color, color: programa.ink }}
                  >
                    <Icon name={programa.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-brand-primary">{programa.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/65">
                    {programa.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Servicios ═════════════════════════════════════ */}
        <section id="servicios" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Servicios
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Pensados para la vida real de las familias
              </h2>
            </header>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {SERVICIOS.map((servicio) => (
                <article
                  key={servicio.title}
                  className="flex flex-col rounded-[var(--ceem-radius-card)] p-7"
                  style={{ backgroundColor: servicio.color, color: servicio.ink }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10">
                    <Icon name={servicio.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-black leading-tight">{servicio.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">
                    {servicio.description}
                  </p>
                </article>
              ))}
            </div>

            {/* ── Educación inclusiva ── */}
            {/*
             * Texto literal del cliente (17-ago-2026). Tema
             * sensible: redacción exacta, sin paráfrasis. Un
             * personaje acompaña el bloque, como pidió el cliente.
             */}
            <div
              id="inclusion"
              className="scroll-mt-24 mt-16 grid items-center gap-8 rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-7 shadow-[var(--ceem-sticker-shadow)] lg:grid-cols-[auto_1fr] lg:gap-12 sm:p-9"
            >
              <Image
                src="/ilustraciones/completos/nino-afro.png"
                alt="Niño de EducaMates sonriendo, acompañando el mensaje de educación inclusiva"
                width={200}
                height={240}
                className="soft-bounce mx-auto h-40 w-auto object-contain"
              />
              <div>
                <p className="text-sm font-black uppercase tracking-[.2em] text-brand-secondary">
                  Nuestro compromiso
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-brand-primary sm:text-3xl">
                  {INCLUSION.titulo}
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-text/70">
                  {INCLUSION.parrafos.map((parrafo) => (
                    <p key={parrafo.slice(0, 40)}>{parrafo}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Comunidad ═════════════════════════════════════ */}
        {/*
         * Retoma el mensaje de la gráfica del cliente — "sé parte
         * de nuestra comunidad" — y es donde entran las caritas.
         */}
        <section id="comunidad" className="scroll-mt-24 overflow-hidden bg-white px-4 pb-4 pt-8 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {ILUSTRACIONES.caritas.map((src, index) => (
                <li key={src}>
                  <Image
                    src={src}
                    alt=""
                    aria-hidden
                    width={110}
                    height={110}
                    className="soft-bounce h-14 w-14 object-contain sm:h-20 sm:w-20"
                    style={{ animationDelay: `${index * 0.28}s` }}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-2xl font-black text-brand-primary sm:text-3xl">
              Sé parte de nuestra comunidad
            </p>
          </div>
        </section>

        {/* ═══ Promociones ════════════════════════════════════ */}
        {/*
         * [OFICIAL 17-ago-2026] El cliente pidió personajes de CEEM
         * con mensajes llamativos "a lo largo del sitio" para hacerlo
         * más dinámico e incrementar conversiones. Los cinco mensajes
         * son literales; cada tarjeta abre WhatsApp con un mensaje
         * contextual en vez de un enlace genérico.
         */}
        <section
          id="promociones"
          className="scroll-mt-24 overflow-hidden bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Promociones
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Lo que queremos que sepas
              </h2>
            </header>

            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {PROMOCIONES.map((promo, index) => (
                <li key={promo.mensaje}>
                  <a
                    href={buildWhatsAppUrl({
                      phone: CONTACT.whatsappNumber,
                      message: promo.whatsappMensaje,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col items-center rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-5 text-center shadow-[var(--ceem-sticker-shadow)] transition-transform hover:scale-[1.03]"
                  >
                    <Image
                      src={promo.ilustracion}
                      alt={promo.ilustracionAlt}
                      width={200}
                      height={240}
                      className="soft-bounce h-28 w-auto object-contain sm:h-32"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    />
                    <span className="mt-4 text-sm font-black leading-snug text-brand-primary sm:text-base">
                      {promo.mensaje}
                      </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-black text-brand-secondary">
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                      Escríbenos
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ Admisión ══════════════════════════════════════ */}
        {/*
         * Reestructurada el 17-ago-2026 con el proceso oficial del
         * cliente: contacto → verificación de edad → documentación.
         * La cuota de inscripción es el único costo público; las
         * colegiaturas se dan por WhatsApp con atención
         * personalizada (decisión del cliente).
         */}
        <section
          id="admision"
          className="scroll-mt-24 bg-brand-primary px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              {/* El azul del avión de papel es el único de la rueda
                  que se lee sobre el marino (8.2:1). */}
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ceem-sky)]">
                Admisión
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Conoce el Centro por dentro
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Déjanos tus datos y te contactamos para agendar una visita, resolver dudas y
                explicarte el proceso de inscripción.
              </p>
            </header>

            {/* ── El proceso, tal cual lo dictó el cliente ── */}
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {PROCESO_INSCRIPCION.map((paso) => (
                <li
                  key={paso.numero}
                  className="rounded-[var(--ceem-radius-card)] bg-white/10 p-6 ring-1 ring-white/15"
                >
                  <span className="sticker-pill inline-flex h-11 w-11 items-center justify-center bg-brand-secondary text-lg font-black text-white">
                    {paso.numero}
                  </span>
                  <h3 className="mt-4 text-lg font-black leading-tight text-white">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{paso.description}</p>
                </li>
              ))}
            </ol>

            {/* ── Cuota de inscripción + formulario ── */}
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="text-white">
                {/*
                 * Único costo público del sitio. Al seleccionarlo,
                 * WhatsApp con atención personalizada.
                 */}
                <div className="rounded-[var(--ceem-radius-card)] bg-white/10 p-7 ring-1 ring-white/15">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--ceem-sky)]">
                    {COSTOS.inscripcion.nota}
                  </p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-5xl font-black tabular-nums text-white">
                      {COSTOS.inscripcion.monto}
                    </span>
                    <span className="text-lg font-black text-white/60">
                      {COSTOS.inscripcion.moneda}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">
                    {COSTOS.colegiaturas.mensaje}
                  </p>
                  <a
                    href={whatsappInscripcionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-pill mt-5 inline-flex items-center gap-2 bg-brand-secondary px-6 py-3.5 text-sm font-black text-white transition-transform hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Quiero información de costos
                  </a>
                </div>
              </div>

              <div className="rounded-[var(--ceem-radius-card)] bg-white p-6 shadow-2xl sm:p-8">
                <AdmisionForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Documentación para inscribir ══════════════════ */}
        {/*
         * La lista real PARA LAS FAMILIAS (17-ago-2026). Vive
         * después de Admisión porque es el paso 3 del proceso. La
         * de colaboradores sigue en su propia sección, más abajo.
         */}
        <section className="bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Inscripción
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Documentos para inscribir a tu hijo
              </h2>
            </header>

            <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {DOCUMENTOS_ALUMNO.map((doc) => (
                <li
                  key={doc.name}
                  className="flex items-start gap-4 rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-5 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: doc.color }}
                  >
                    <Icon name={doc.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-black leading-tight text-brand-primary">{doc.name}</p>
                    {doc.detail && (
                      <p className="mt-1 text-sm leading-snug text-brand-text/60">{doc.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ Pagos ═════════════════════════════════════════ */}
        {/*
         * Recreación de la pieza "DATOS BANCARIOS" con una omisión
         * deliberada: el número de cuenta y la CLABE NO se publican
         * (decisión del usuario, 3-ago-2026). Publicarlos los deja
         * indexables y facilita el fraude de la captura alterada.
         *
         * Sí se publican el titular y el banco, que es la mitad que
         * PROTEGE: le permiten a un padre darse cuenta de que le
         * están pasando una cuenta que no es la del Centro.
         */}
        <section id="pagos" className="scroll-mt-24 bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Pagos
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Cómo realizar tu pago
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-brand-text/70">
                {PAGOS.lema}
              </p>
            </header>

            <div className="mt-10 rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-6 shadow-[var(--ceem-sticker-shadow)] sm:p-8">
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                    <UserRound className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm text-brand-text/55">Titular de la cuenta</dt>
                    <dd className="font-black text-brand-primary">{PAGOS.titular}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-cyan-deep)] text-white">
                    <Landmark className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm text-brand-text/55">Banco</dt>
                    <dd className="font-black text-brand-primary">{PAGOS.banco}</dd>
                  </div>
                </div>
              </dl>

              <div
                className="mt-6 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
                style={{ backgroundColor: "color-mix(in srgb, var(--ceem-sky) 22%, #fff)" }}
              >
                <p className="flex items-start gap-3 text-sm leading-relaxed text-brand-primary">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                  <span>
                    Por seguridad, el número de cuenta y la CLABE no se publican. Te los enviamos
                    por WhatsApp junto con las instrucciones.
                  </span>
                </p>
                <a
                  href={whatsappPagosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-black text-white transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Solicitar datos
                </a>
              </div>

              <ul className="mt-6 grid gap-3 border-t-2 border-brand-muted pt-6">
                {PAGOS.condiciones.map((condicion) => (
                  <li
                    key={condicion}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-text/70"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary"
                      aria-hidden
                    />
                    {condicion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ Contacto ══════════════════════════════════════ */}
        <section id="contacto" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Visítanos
              </p>
              {/* Antes decía "Estamos en San Pedro Mártir, Tlalpan".
                  Con la segunda dirección de la pieza oficial ya no
                  es cierto, y como no sabemos qué es esa sede, el
                  titular no afirma nada de más. */}
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Dónde encontrarnos
              </h2>
            </header>

            <div className="mt-10 grid items-start gap-5 lg:grid-cols-[1.3fr_1fr]">
              {/* Las dos direcciones de la pieza oficial. La segunda
                  se lista sin rotularla como plantel: ver SEDES. */}
              <div className="grid content-start gap-5">
                {SEDES.map((sede) => (
                  <article
                    key={sede.id}
                    className="flex flex-col gap-5 rounded-[var(--ceem-radius-card)] bg-brand-muted/50 p-7 sm:flex-row sm:p-8"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                      <MapPin className="h-7 w-7" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-brand-primary">{sede.label}</h3>
                      <p className="mt-2 leading-relaxed text-brand-text/70">{sede.address}</p>
                      <a
                        href={sede.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 font-black text-brand-secondary hover:underline"
                      >
                        Ver en Google Maps
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="grid content-start gap-4">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-navy-deep)] text-white">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Teléfono</span>
                    <span className="block font-black text-brand-primary">{CONTACT.phone}</span>
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-olive-deep)] text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">WhatsApp</span>
                    <span className="block font-black text-brand-primary">
                      {CONTACT.whatsappDisplay}
                    </span>
                  </span>
                </a>

                {/* [OFICIAL 17-ago-2026] Correo oficial de CEEM. */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Correo</span>
                    <span className="block font-black text-brand-primary">{CONTACT.email}</span>
                  </span>
                </a>

                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-carmin-deep)] text-white">
                    <Instagram className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Instagram</span>
                    <span className="block font-black text-brand-primary">
                      {CONTACT.instagram}
                    </span>
                  </span>
                </a>

                {/*
                 * La pieza oficial da el nombre de la página de
                 * Facebook pero no su URL, así que el clic va al
                 * Linktree, que sí está verificado, en vez de a una
                 * dirección adivinada.
                 */}
                <a
                  href={CONTACT.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-purple-deep)] text-white">
                    <Facebook className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Facebook</span>
                    <span className="block font-black text-brand-primary">
                      {CONTACT.facebook}
                    </span>
                  </span>
                </a>

                <a
                  href={CONTACT.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ceem-orange-deep)] text-white">
                    <Link2 className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Todos nuestros enlaces</span>
                    <span className="block font-black text-brand-primary">Linktree</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Colaboradores ═════════════════════════════════ */}
        {/*
         * Recreación de la pieza "DOCUMENTACIÓN".
         *
         * ⚠ La pieza no dice para quién es, pero pide CV con
         * fotografía, RFC, cédula o título y reglamento de uniforme
         * firmado: es documentación de PERSONAL, no de inscripción
         * de alumnos. Por eso va aquí abajo, con su propio rótulo y
         * fuera del menú principal — un padre que la leyera dentro
         * de Admisión entendería que le piden un título profesional
         * para inscribir a su hijo de tres años.
         */}
        <section
          id="colaboradores"
          className="scroll-mt-24 bg-brand-muted/40 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-secondary">
                Trabaja con nosotros
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Documentación para colaboradores
              </h2>
              <p className="mt-4 text-balance text-lg leading-relaxed text-brand-text/70">
                Si te integras al equipo del Centro Educativo, esto es lo que necesitamos de ti.{" "}
                <strong className="text-brand-primary">
                  No son los documentos para inscribir a un alumno
                </strong>
                : para eso escríbenos y te pasamos la lista que corresponde.
              </p>
            </header>

            <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {DOCUMENTOS_COLABORADOR.map((doc) => (
                <li
                  key={doc.name}
                  className="flex items-start gap-4 rounded-[var(--ceem-radius-card)] border-2 border-white bg-white p-5 shadow-[var(--ceem-sticker-shadow)]"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: doc.color }}
                  >
                    <Icon name={doc.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-black leading-tight text-brand-primary">{doc.name}</p>
                    {doc.detail && (
                      <p className="mt-1 text-sm leading-snug text-brand-text/60">{doc.detail}</p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-muted px-3 py-1 text-xs font-black uppercase tracking-wide text-brand-primary">
                    {doc.copies}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              {/* El cierre de la pieza original. */}
              <p className="text-2xl font-black text-brand-primary sm:text-3xl">
                Juntos construimos{" "}
                <span className="text-[var(--ceem-orange-display)]">su mejor futuro</span>
              </p>
              <a
                href={whatsappVacantesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-pill mt-6 inline-flex items-center justify-center gap-2 bg-brand-primary px-7 py-4 text-base font-black text-white transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Quiero postularme
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-primary px-4 py-12 text-sm text-white/65 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* El logotipo es multicolor y lleva una estela negra:
                sobre el marino va en su pastilla blanca. */}
            <Wordmark variant="chip" className="w-[190px]" />

            <div>
              <p className="font-black text-white">{CONTACT.name}</p>
              <p className="mt-2 max-w-md leading-relaxed">{SEP.incorporacion}</p>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              {SEP.claves.map(({ label, value }) => (
                <li key={label}>
                  <span className="font-black uppercase tracking-[0.14em] text-white/50">
                    {label}
                  </span>{" "}
                  <span className="font-black tabular-nums text-white">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2">
            <ul className="grid gap-1.5">
              {SEDES.map((sede) => (
                <li key={sede.id} className="leading-relaxed">
                  <span className="font-black text-white/85">{sede.label}:</span> {sede.address}
                </li>
              ))}
            </ul>

            <nav className="flex flex-col gap-1.5 sm:items-end sm:text-right">
              {NAV_SECUNDARIA.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </a>
              ))}
              <a
                href={CONTACT.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Redes sociales
              </a>
            </nav>
          </div>

          <p className="mt-8 text-center text-xs text-white/45">
            © {new Date().getFullYear()} EducaMates. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
