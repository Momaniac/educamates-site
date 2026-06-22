import type { Metadata } from "next";
import type { HeaderConfig, FooterConfig } from "@educamates/ui";
import { Header, Footer } from "@educamates/ui";
import { CONTACTS, OFFICIAL_EMAIL } from "../lib/site";
import { SiteWhatsAppFAB } from "./_components/site-whatsapp-fab";
import "./globals.css";

/* ── SEO Metadata (replicated from original site) ──────────── */
export const metadata: Metadata = {
  title: "Educa Mates Foundation | Preparatoria en 6 Meses con Validez Oficial SEP",
  description:
    "Termina tu preparatoria en solo 6 meses con certificado de validez oficial ante la SEP. Acreditación por experiencia laboral. Sin examen de admisión. Inscríbete hoy.",
  authors: [{ name: "Fundación Educa Mates, AC", url: "https://educamates.edu.mx" }],
  keywords: [
    "preparatoria abierta",
    "bachillerato en 6 meses",
    "certificado SEP",
    "prepa rapida",
    "acreditacion por experiencia laboral",
    "CDMX",
    "Educa Mates Foundation",
  ],
  creator: "Educa Mates Foundation",
  publisher: "Educa Mates Foundation",
  robots: "index, follow",
  openGraph: {
    title: "Termina tu Preparatoria en 6 Meses | Educa Mates Foundation",
    description:
      "Certificado con validez oficial SEP. Acreditación por experiencia laboral. Sin examen de admisión.",
    url: "https://educamates.edu.mx/",
    siteName: "Educa Mates Foundation",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@EducaMates",
    title: "Termina tu Preparatoria en 6 Meses | Educa Mates Foundation",
    description:
      "Certificado con validez oficial SEP. Acreditación por experiencia laboral. Sin examen de admisión.",
  },
  icons: {
    icon: "/logos/LOGO_RESPONSIVE.png",
    apple: "/logos/LOGO_RESPONSIVE.png",
  },
  other: {
    "theme-color": "#0c108c",
  },
};

/* ── Header Configuration for EducaMates ───────────────────── */
const headerConfig: HeaderConfig = {
  logo: {
    src: "/logos/LOGO_SECUNDARIO.png",
    alt: "Educa Mates",
    mobileSrc: "/logos/LOGO_RESPONSIVE.png",
    width: 160,
    height: 48,
  },
  navigation: [
    { label: "Inicio", href: "/" },
    {
      label: "Nosotros",
      items: [
        { label: "Quiénes somos", href: "/nosotros/quienes-somos" },
        { label: "Nuestro equipo", href: "/nosotros/nuestro-equipo" },
      ],
    },
    {
      label: "Oferta Educativa",
      items: [
        { label: "Maternal", href: "/maternal" },
        { label: "Preescolar", href: "/preescolar" },
        { label: "Secundaria", href: "/secundaria" },
        { label: "Bachillerato", href: "/bachillerato" },
        { label: "Licenciaturas", href: "/licenciaturas" },
        { label: "Maestrías (Próximamente)", href: "/maestrias" },
        { label: "Doctorados (Próximamente)", href: "/doctorados" },
      ],
    },
    { label: "Servicios Empresas", href: "/servicios-empresas" },
    { label: "Calendario Escolar", href: "/calendario" },
    { label: "Preguntas Frecuentes", href: "/preguntas" },
    { label: "Contacto", href: "/contacto" },
  ],
  cta: {
    label: "¡Únete al equipo!",
    href: "mailto:hola@educamates.edu.mx?subject=Inter%C3%A9s%20en%20unirme%20al%20equipo%20EducaMates&body=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20oportunidades%20para%20unirme%20al%20equipo%20EducaMates.",
  },
};

/* ── Footer Configuration for EducaMates ───────────────────── */
const footerConfig: FooterConfig = {
  logo: {
    src: "/logos/LOGO_NEGATIVO.png",
    alt: "Educa Mates Foundation",
  },
  description:
    "Fundación Educa Mates, AC — Transformamos vidas a través de la educación y el desarrollo humano.",
  linkGroups: [
    {
      title: "Oferta",
      links: [
        { label: "Maternal", href: "/maternal" },
        { label: "Preescolar", href: "/preescolar" },
        { label: "Secundaria", href: "/secundaria" },
        { label: "Bachillerato", href: "/bachillerato" },
        { label: "Licenciaturas", href: "/licenciaturas" },
        { label: "Maestrías (Próximamente)", href: "/maestrias" },
        { label: "Doctorados (Próximamente)", href: "/doctorados" },
      ],
    },
    {
      title: "Institución",
      links: [
        { label: "Quiénes somos", href: "/nosotros/quienes-somos" },
        { label: "Nuestro equipo", href: "/nosotros/nuestro-equipo" },
        { label: "Servicios empresariales", href: "/servicios-empresas" },
        { label: "Calendario", href: "/calendario" },
        { label: "Preguntas Frecuentes", href: "/preguntas" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ],
  contact: {
    email: OFFICIAL_EMAIL,
    addresses: [
      {
        label: CONTACTS.foundation.name,
        street: CONTACTS.foundation.address,
        mapsHref: CONTACTS.foundation.mapsUrl,
        whatsapp: CONTACTS.foundation.whatsappDisplay,
        whatsappHref: CONTACTS.foundation.whatsappUrl,
      },
      {
        label: CONTACTS.ceem.name,
        street: CONTACTS.ceem.address,
        mapsHref: CONTACTS.ceem.mapsUrl,
        phone: CONTACTS.ceem.phone,
        phoneHref: CONTACTS.ceem.phoneHref,
        whatsapp: CONTACTS.ceem.whatsappDisplay,
        whatsappHref: CONTACTS.ceem.whatsappUrl,
      },
    ],
  },
  copyright: `© ${new Date().getFullYear()} Fundación Educa Mates, AC. Todos los derechos reservados.`,
  privacyHref: "/privacidad",
};

/* ── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-outfit antialiased selection:bg-brand-primary/10 selection:text-brand-primary">
        <Header config={headerConfig} />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer {...footerConfig} />
        <SiteWhatsAppFAB />
      </body>
    </html>
  );
}
