import {
  ArrowRight,
  CheckCircle2,
  Link2,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
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
  ENFOQUE,
  ILUSTRACIONES,
  NIVELES,
  SERVICIOS,
  TALLERES,
} from "@/lib/site";

const whatsappUrl = buildWhatsAppUrl({
  phone: CONTACT.whatsappNumber,
  message: `Hola, me gustaría recibir información sobre ${CONTACT.name}.`,
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
            <div className="blob blob-drift absolute -left-24 -top-16 h-72 w-72 bg-[var(--ceem-magenta)]/25" />
            <div
              className="blob blob-drift absolute -right-20 top-4 h-64 w-64 bg-[var(--ceem-blue)]/20"
              style={{ animationDelay: "-6s" }}
            />
            <div
              className="blob blob-drift absolute -right-10 bottom-0 h-56 w-56 bg-[var(--ceem-yellow)]/30"
              style={{ animationDelay: "-11s" }}
            />
            <div
              className="blob blob-drift absolute bottom-8 left-8 h-40 w-40 bg-[var(--ceem-green)]/20"
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
            <span className="sticker-pill inline-flex items-center gap-2 bg-[var(--ceem-cyan)] px-5 py-2 text-sm font-black uppercase tracking-wide text-white">
              <Sparkles className="h-4 w-4" aria-hidden />
              Kínder incorporado a la SEP
            </span>

            {/*
             * Titular tipo calcomanía, como en la gráfica: cada
             * línea con su color de la rueda y contorno blanco.
             */}
            <h1 className="mt-7 text-[clamp(2.5rem,9vw,5rem)] font-black uppercase leading-[0.95] tracking-tight">
              <span className="sticker-text block text-brand-primary">Aprender, crear</span>
              <span className="sticker-text block text-[var(--ceem-orange)]">y crecer</span>
              <span className="sticker-text block text-[var(--ceem-green)]">juntos es mejor</span>
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
                  style={{ backgroundColor: "color-mix(in srgb, var(--ceem-magenta) 14%, #fff)" }}
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
                </article>
              ))}

              {/*
               * El cliente dijo "club de tareas, taekwondo, etc.".
               * En vez de inventar el "etc.", se dice abiertamente.
               */}
              <article className="flex flex-col justify-center rounded-[var(--ceem-radius-card)] border-2 border-dashed border-brand-primary/25 bg-white/60 p-6 text-center">
                <p className="text-lg font-black text-brand-primary">Y más talleres</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-text/65">
                  Pregúntanos por la lista completa del ciclo escolar en curso.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-black text-brand-secondary hover:underline"
                >
                  Consultar
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
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

        {/* ═══ Admisión ══════════════════════════════════════ */}
        <section
          id="admision"
          className="scroll-mt-24 bg-brand-primary px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ceem-yellow)]">
                Admisión
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Conoce el Centro por dentro
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Déjanos tus datos y te contactamos para agendar una visita, resolver dudas y
                explicarte el proceso de inscripción.
              </p>

              <ul className="mt-7 grid gap-3">
                {[
                  "Te respondemos el mismo día",
                  "Sin compromiso de inscripción",
                  "Puedes venir a conocer las instalaciones",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/90">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ceem-yellow)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--ceem-radius-card)] bg-white p-6 shadow-2xl sm:p-8">
              <AdmisionForm />
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
              <h2 className="mt-3 text-3xl font-black text-brand-primary sm:text-4xl">
                Estamos en San Pedro Mártir, Tlalpan
              </h2>
            </header>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
              <article className="flex flex-col gap-5 rounded-[var(--ceem-radius-card)] bg-brand-muted/50 p-7 sm:flex-row sm:p-8">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                  <MapPin className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl font-black text-brand-primary">{CONTACT.name}</h3>
                  <p className="mt-2 leading-relaxed text-brand-text/70">{CONTACT.address}</p>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-black text-brand-secondary hover:underline"
                  >
                    Ver en Google Maps
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>

              <div className="grid gap-4">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ceem-blue)] text-white">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ceem-green)] text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">WhatsApp</span>
                    <span className="block font-black text-brand-primary">
                      {CONTACT.whatsappDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={CONTACT.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[var(--ceem-radius-card)] border-2 border-brand-muted p-5 transition-colors hover:border-brand-secondary"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ceem-magenta)] text-white">
                    <Link2 className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-text/55">Redes sociales</span>
                    <span className="block font-black text-brand-primary">Todos nuestros enlaces</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-primary px-4 py-10 text-center text-sm text-white/60 sm:px-6">
        <Wordmark tone="white" className="items-center" />
        <p className="mt-3 font-black text-white">{CONTACT.name}</p>
        <p className="mt-2">{CONTACT.address}</p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} EducaMates. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
