import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EducaMates Foundation | Ecosistema educativo y de desarrollo humano",
  description:
    "EducaMates Foundation reúne sus tres áreas: Centro Educativo EducaMates, EducaMates Foundation y Alma Libre. Elige el área que quieres conocer.",
  other: {
    "theme-color": "#0c108c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-brand-primary text-white">{children}</body>
    </html>
  );
}
