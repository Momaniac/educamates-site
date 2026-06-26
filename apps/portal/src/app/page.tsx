import { BrandSelector, type Area } from "./brand-selector";
import { DOMAINS } from "@/lib/domains";

/*
 * Las tres áreas hermanas del ecosistema. El destino de cada una
 * vive en la librería de dominios (src/lib/domains.ts): si el
 * dominio tiene valor, la tarjeta está disponible; si está vacío,
 * se muestra como "Próximamente".
 */
const AREAS: readonly Area[] = [
  {
    id: "ceem",
    name: "Centro Educativo EducaMates",
    short: "CEEM",
    tagline: "Educación desde maternal hasta preescolar, con enfoque integral, STEM e inglés diario.",
    image: "/images/bg-ceem.webp",
    accent: "#f59e0b",
    href: DOMAINS.ceem,
    available: DOMAINS.ceem !== "",
  },
  {
    id: "emf",
    name: "EducaMates Foundation",
    short: "EMF",
    // Descripción auténtica extraída del sitio ya desarrollado (sitio-madre).
    tagline:
      "Formación académica, profesional y humana para jóvenes, adultos y organizaciones.",
    image: "/images/bg-emf.webp",
    accent: "#2563eb",
    href: DOMAINS.emf,
    available: DOMAINS.emf !== "",
    // Oferta real del sitio EMF ya construido.
    highlights: [
      "Bachillerato y Secundaria en 6 meses",
      "Licenciaturas con RVOE",
      "Servicios empresariales",
      "Quiénes somos y equipo",
    ],
  },
  {
    id: "almalibre",
    name: "Alma Libre",
    short: "Alma Libre",
    tagline: "Consultoría, Detona y desarrollo humano. Coaching y sesiones uno a uno.",
    image: "/images/bg-almalibre.webp",
    accent: "#14b8a6",
    href: DOMAINS.almalibre,
    available: DOMAINS.almalibre !== "",
  },
];

export default function PortalPage() {
  return (
    <BrandSelector
      slogan="Transformamos vidas a través de la educación y el desarrollo humano."
      logoSrc="/logos/LOGO_NEGATIVO.png"
      areas={AREAS}
    />
  );
}
