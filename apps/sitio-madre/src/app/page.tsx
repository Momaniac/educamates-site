import { Clock, BookOpen, Award, Users, Briefcase } from "lucide-react";
import {
  PartnersTicker,
  ProgramShowcase,
  BenefitsGrid,
  CertificateSection,
  ContactForm,
  buildWhatsAppUrl,
} from "@educamates/ui";
import type { Partner, Benefit, ProgramSlide, CertificateFeature, Testimonial } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../lib/site";

/* ── Content (data only — all visuals come from @educamates/ui) ── */

const partners: Partner[] = [
  { alt: "SEP", src: "/images/empresas/logoSEP.png" },
  { alt: "CONOCER", src: "/images/empresas/logoConocer.webp" },
  { alt: "CANACINTRA", src: "/images/empresas/logoCANACINTRA.png" },
  { alt: "DIF", src: "/images/empresas/logoDIF.svg" },
  { alt: "Detona Tu Arsenal", src: "/images/empresas/logoDetonaTuArsenal.png" },
  { alt: "Alma Libre", src: "/images/empresas/logoAlmaLibre.png" },
  { alt: "Claustro Doctoral", src: "/images/empresas/claustrodoctoral.png" },
];

const programSlides: ProgramSlide[] = [
  {
    image: "/images/carreras/preparatoria.webp",
    alt: "Preparatoria - Termina la prepa en solo 6 meses",
    title: "Termina la prepa en solo 6 meses",
    description:
      "Nuestro programa está diseñado para ayudarte a acreditar la preparatoria rápido, con acompañamiento y sin riesgos.",
    benefits: ["Modalidad flexible", "Acompañamiento personalizado", "Certificado oficial SEP", "Sin trámites complicados"],
    stats: [
      { icon: <Clock />, label: "6 Meses" },
      { icon: <BookOpen />, label: "Flexible" },
      { icon: <Award />, label: "Oficial SEP" },
    ],
    ctaHref: "/bachillerato",
    whatsappMessage: "Hola, me interesa información sobre el programa de Preparatoria en 6 meses",
  },
  {
    image: "/images/carreras/secundaria.webp",
    alt: "Secundaria - Certificado con validez oficial",
    title: "Secundaria en solo 6 meses",
    description:
      "Obtén tu certificado oficial de secundaria rápido y sencillo. Ideal para jóvenes y adultos que desean retomar sus estudios.",
    benefits: ["Validez oficial SEP", "A tu propio ritmo", "Asesoría constante", "Trámite garantizado"],
    stats: [
      { icon: <Clock />, label: "6 Meses" },
      { icon: <BookOpen />, label: "Intensivo" },
      { icon: <Award />, label: "Certificado SEP" },
    ],
    ctaHref: "/secundaria",
    whatsappMessage: "Hola, me interesa información sobre el programa de Secundaria",
  },
  {
    image: "/images/carreras/derecho.webp",
    alt: "Licenciatura en Derecho - Educa Mates",
    title: "Licenciatura en Derecho",
    description:
      "Formamos profesionales con alta capacidad analítica y compromiso social en el ámbito jurídico.",
    benefits: ["Modalidad mixta", "Duración de 24 meses", "RVOE DGAIR/SEP", "Inscripciones abiertas"],
    stats: [
      { icon: <Clock />, label: "24 meses" },
      { icon: <BookOpen />, label: "Mixta" },
      { icon: <Award />, label: "RVOE 20220321" },
    ],
    ctaHref: "/licenciaturas",
    whatsappMessage: "Hola, me interesa información sobre la Licenciatura en Derecho",
  },
  {
    image: "/images/carreras/administracion.webp",
    alt: "Licenciatura en Administración - Educa Mates",
    title: "Licenciatura en Administración",
    description:
      "Aprende a gestionar organizaciones con visión estratégica y liderazgo en el mundo empresarial.",
    benefits: ["Modalidad en línea", "Duración de 24 meses", "Formación integral", "RVOE DGAIR/SEP"],
    stats: [
      { icon: <Clock />, label: "24 meses" },
      { icon: <BookOpen />, label: "En línea" },
      { icon: <Award />, label: "RVOE 20171849" },
    ],
    ctaHref: "/licenciaturas",
    whatsappMessage: "Hola, me interesa información sobre la Licenciatura en Administración",
  },
  {
    image: "/images/carreras/contaduria.webp",
    alt: "Licenciatura en Contaduría - Educa Mates",
    title: "Licenciatura en Contaduría",
    description:
      "Especialízate en la gestión financiera y contable con las herramientas más actuales del mercado.",
    benefits: ["Modalidad en línea", "Duración de 24 meses", "Formación profesional", "Crecimiento personal"],
    stats: [
      { icon: <Clock />, label: "24 meses" },
      { icon: <BookOpen />, label: "En línea" },
      { icon: <Award />, label: "Formación integral" },
    ],
    ctaHref: "/licenciaturas",
    whatsappMessage: "Hola, me interesa información sobre la Licenciatura en Contaduría",
  },
  {
    image: "/images/carreras/educacion-preescolar.webp",
    alt: "Licenciatura en Educación Preescolar - Educa Mates",
    title: "Educación Preescolar",
    description:
      "Conviértete en un experto en el desarrollo infantil y forma parte del futuro educativo del país.",
    benefits: ["Modalidad presencial", "Duración de 24 meses", "Formación para la enseñanza", "Práctica profesional"],
    stats: [
      { icon: <Clock />, label: "24 meses" },
      { icon: <BookOpen />, label: "Presencial" },
      { icon: <Award />, label: "Formación integral" },
    ],
    ctaHref: "/licenciaturas",
    whatsappMessage: "Hola, me interesa información sobre la Licenciatura en Educación Preescolar",
  },
];

const benefits: Benefit[] = [
  { icon: Clock, title: "Programas rápidos y claros", description: "Termina en tiempo récord" },
  { icon: Users, title: "Acompañamiento humano", description: "Asesoría personalizada" },
  { icon: Briefcase, title: "Procesos transparentes", description: "Sin costos ocultos" },
  { icon: Award, title: "Validez oficial SEP", description: "Certificado reconocido" },
];

const certificateFeatures: CertificateFeature[] = [
  { title: "Validez oficial SEP", description: "Certificado con reconocimiento nacional", accent: "primary" },
  { title: "Proceso transparente", description: "Sin trámites complejos ni costos ocultos", accent: "secondary" },
  { title: "Seguridad garantizada", description: "Institución registrada y confiable", accent: "primary" },
];

const testimonials: Testimonial[] = [
  { text: "Terminé mi bachillerato en 6 meses. Excelente acompañamiento.", name: "Ana P." },
  { text: "Profesionales y accesibles. Convalidación muy rápida.", name: "Carlos M." },
  { text: "Recomendado. Buen trato y trámites claros.", name: "María G." },
];

/**
 * Home page for EducaMates (Sitio Madre).
 *
 * All reusable sections come from @educamates/ui and are driven by the data
 * above. Media is served from local /public assets (migrated from the
 * previous provider's project). Zero hardcoded colors.
 */
export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="relative min-h-screen pt-24 lg:pt-20 overflow-hidden bg-brand-primary">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster="/videos/3209298-uhd_3840_2160_25fps-0.webp"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-80 z-10"
            style={{ willChange: "opacity" }}
            aria-hidden="true"
          >
            <source src="/videos/3209298-uhd_3840_2160_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/videos/3209298-mobile-720p.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-secondary/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 z-0" />
        <div className="absolute bottom-20 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl translate-x-1/4 z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-primary/80 via-brand-primary/40 to-brand-primary/60 lg:bg-gradient-to-r lg:from-brand-primary/90 lg:via-brand-primary/60 lg:to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="container relative z-20 mx-auto px-4 py-4 lg:py-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 items-center min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)]">
            <div className="text-center lg:text-left z-20 w-full lg:pl-12 xl:pl-24 lg:col-span-8 xl:col-span-7">
              {/* Mobile logo */}
              <div className="flex items-center justify-center lg:justify-start mb-4 lg:hidden">
                <img
                  alt="Educa Mates Foundation"
                  width={150}
                  height={45}
                  className="object-contain"
                  style={{ color: "transparent" }}
                  src="/logos/LOGO_SECUNDARIO.png"
                />
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.1] mb-3 md:mb-4 drop-shadow-lg">
                <span className="block">¡Hazlo</span>
                <span className="block">Ahora!</span>
              </h1>

              <div className="space-y-0.5 mb-4 md:mb-8">
                <p className="text-white text-base md:text-2xl lg:text-3xl font-medium tracking-wide">
                  Da el primer paso y
                </p>
                <p className="text-white text-base md:text-2xl lg:text-3xl font-medium tracking-wide">
                  termina tu
                </p>
              </div>

              <div className="mb-5 md:mb-8 flex justify-center lg:justify-start">
                <div className="border-l-4 lg:border-l-0 lg:border-b-4 border-brand-secondary px-4 lg:px-0 lg:pb-2">
                  <span className="text-white text-lg md:text-3xl uppercase font-black tracking-[0.2em]">
                    PREPARATORIA
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2">
                <a
                  href={buildWhatsAppUrl({ phone: WHATSAPP_NUMBER, message: "¡Hola! Me interesa el curso de ingreso a Preparatoria" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-secondary hover:bg-brand-accent text-white px-6 py-3 md:px-10 md:py-5 rounded-md text-base md:text-xl font-bold transition-all transform hover:scale-105 shadow-xl uppercase tracking-wider"
                >
                  Quiero información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Ticker ────────────────────────────────── */}
      <PartnersTicker partners={partners} />

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-brand-secondary font-bold uppercase tracking-wider mb-3">Fundación Educa Mates, AC</p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Transformamos vidas a través de la educación y el desarrollo humano.</h2>
          <p className="text-brand-text/85 text-base md:text-lg leading-relaxed mb-4">En Educamates Foundation somos una fundación comprometida con la formación académica, profesional y humana de jóvenes, adultos, empresas y organizaciones sociales. Nuestro propósito es desarrollar el potencial de las personas mediante un modelo educativo innovador que impulse el aprendizaje continuo, el liderazgo y el crecimiento integral.</p>
          <p className="text-brand-text/85 text-base md:text-lg leading-relaxed">Acompañamos a nuestros alumnos, líderes y equipos de trabajo en la construcción de un mejor futuro a través de programas educativos flexibles y accesibles.</p>
        </div>
      </section>

      {/* ── Program Showcase (carousel + per-slide info) ───── */}
      <ProgramShowcase slides={programSlides} whatsappNumber={WHATSAPP_NUMBER} />

      {/* ── Benefits Grid ──────────────────────────────────── */}
      <BenefitsGrid
        heading="Por qué estudiar con nosotros"
        subheading="En Educa Mates Foundation te ofrecemos la mejor experiencia educativa"
        benefits={benefits}
      />

      {/* ── Certificate + Testimonials Section ─────────────── */}
      <CertificateSection
        heading={<>Certificado <span className="text-brand-secondary">oficial</span></>}
        badgeText={<>¡No arriesgues <span className="text-brand-secondary font-bold">tu dinero!</span></>}
        features={certificateFeatures}
        testimonials={testimonials}
      />

      {/* ── Contact CTA Section ────────────────────────────── */}
      <section className="bg-brand-primary text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="lg:pr-12 order-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">¿Tienes dudas? Solicita informes</h3>
              <p className="mb-2 text-base text-white/80">
                Completa el formulario para preparar tu mensaje y continuar la conversación por WhatsApp.
              </p>
            </div>
            <div className="w-full order-2">
              <ContactForm whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
