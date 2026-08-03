import type { Metadata } from "next";
import "./globals.css";
import { SEP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Centro Educativo EducaMates | Kínder incorporado a la SEP en Tlalpan",
  description:
    `Prematernal, maternal y preescolar desde los 45 días de nacidos. Inglés diario, programa STEM, grupos reducidos, comedor y horario extendido en San Pedro Mártir, Tlalpan. ${SEP.incorporacion}, CCT ${SEP.claves[0].value}.`,
  other: {
    /* Copia del primario de palette-ceem.css: los metadatos de
       Next se resuelven en el servidor y no leen variables CSS.
       Es el marino oficial del logotipo (ago 2026). */
    "theme-color": "#002884",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white text-brand-text antialiased">{children}</body>
    </html>
  );
}
