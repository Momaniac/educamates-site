import { GraduationCap, Star, Zap } from "lucide-react";

/**
 * Home page for Submarca A.
 *
 * A minimal page that demonstrates the multi-tenant visual difference.
 * Uses semantic Tailwind classes (bg-brand-primary, text-brand-secondary, etc.)
 * that resolve to the green/gold palette defined in this app's globals.css.
 */
export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="relative min-h-[70vh] pt-24 lg:pt-20 overflow-hidden bg-brand-primary flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

        <div className="container relative z-10 mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-brand-secondary" />
            <span className="text-white/90 text-sm font-medium">Plataforma Educativa</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Bienvenido a{" "}
            <span className="text-brand-secondary">Submarca A</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Esta página demuestra la arquitectura multi-tenant. El mismo componente
            Header de <code className="bg-white/10 px-2 py-0.5 rounded text-sm">@educamates/ui</code> se
            renderiza con una identidad visual completamente diferente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programas/alpha"
              className="inline-flex items-center justify-center bg-brand-secondary hover:bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-all"
            >
              Explorar programas
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="py-16 bg-brand-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12">
            Diferente marca, <span className="text-brand-secondary">mismo código</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Componentes compartidos",
                desc: "Header, Footer, Forms — todos vienen de @educamates/ui sin modificar una línea.",
              },
              {
                icon: Zap,
                title: "Tema independiente",
                desc: "Solo cambiando las CSS variables en globals.css, toda la UI adopta la paleta verde/dorado.",
              },
              {
                icon: Star,
                title: "Navegación propia",
                desc: "Cada submarca define su propia estructura de menú vía props, sin tocar el componente.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
