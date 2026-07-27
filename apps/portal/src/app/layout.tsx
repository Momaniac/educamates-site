import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EducaMates Foundation | Ecosistema educativo y de desarrollo humano",
  description:
    "EducaMates Foundation reúne sus tres áreas: Centro Educativo EducaMates, EducaMates Foundation y Alma Libre. Elige el área que quieres conocer.",
  other: {
    /*
     * Copia del primario de palette-educamates.css. Es el único
     * hex escrito a mano del portal: los metadatos de Next se
     * resuelven en el servidor y no pueden leer variables CSS.
     */
    "theme-color": "#0c108c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="portal-ink-bg antialiased text-white">{children}</body>
    </html>
  );
}
