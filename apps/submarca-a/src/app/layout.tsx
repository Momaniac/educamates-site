import type { Metadata } from "next";
import type { HeaderConfig, FooterConfig } from "@educamates/ui";
import { Header, Footer, WhatsAppFAB } from "@educamates/ui";
import "./globals.css";

const WHATSAPP_NUMBER = "5215512345678";

/* ── SEO Metadata for Submarca A ───────────────────────────── */
export const metadata: Metadata = {
  title: "Submarca A | Plataforma Educativa",
  description: "Submarca A — Demostración de la arquitectura multi-tenant del ecosistema EducaMates.",
  other: {
    "theme-color": "#0f5132",
  },
};

/* ── Header Configuration for Submarca A ───────────────────── */
/*
 * NOTE: This is the SAME <Header /> component from @educamates/ui.
 * The only differences are:
 *   1. Different config props (logo, nav items, CTA)
 *   2. Different CSS variables in globals.css (green/gold palette)
 *
 * Result: A completely different-looking header, zero code changes.
 */
const headerConfig: HeaderConfig = {
  logo: {
    src: "/logos/submarca-a-logo.svg",
    alt: "Submarca A",
    width: 140,
    height: 40,
  },
  navigation: [
    { label: "Inicio", href: "/" },
    {
      label: "Programas",
      items: [
        { label: "Programa Alpha", href: "/programas/alpha" },
        { label: "Programa Beta", href: "/programas/beta" },
        { label: "Programa Gamma", href: "/programas/gamma" },
      ],
    },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
  cta: {
    label: "Inscríbete",
  },
};

/* ── Footer Configuration for Submarca A ───────────────────── */
/* SAME <Footer /> from @educamates/ui — only the data and CSS vars differ. */
const footerConfig: FooterConfig = {
  logo: {
    src: "/logos/submarca-a-logo.svg",
    alt: "Submarca A",
  },
  description:
    "Submarca A — Demostración de la arquitectura multi-tenant. Mismo código, identidad visual propia.",
  linkGroups: [
    {
      title: "Programas",
      links: [
        { label: "Programa Alpha", href: "/programas/alpha" },
        { label: "Programa Beta", href: "/programas/beta" },
        { label: "Programa Gamma", href: "/programas/gamma" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ],
  contact: {
    email: "hola@submarca-a.com",
  },
  copyright: `© ${new Date().getFullYear()} Submarca A. Todos los derechos reservados.`,
};

/* ── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased selection:bg-brand-primary/10 selection:text-brand-primary">
        <Header config={headerConfig} />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer {...footerConfig} />
        <WhatsAppFAB phone={WHATSAPP_NUMBER} message="¡Hola! Quiero más información." />
      </body>
    </html>
  );
}
