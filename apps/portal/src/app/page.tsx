import { ChevronDown } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { PortalHeader } from "@/components/portal-header";
import { BrandOrbs } from "@/components/brand-orbs";
import { AreasDetail } from "@/components/areas-detail";

/*
 * Recorte del logo negativo: el original es cuadrado y el 75% es
 * aire transparente, así que a cualquier altura razonable se veía
 * diminuto. `logo-portal.png` es el mismo arte sin ese margen.
 */
const LOGO_SRC = "/logos/logo-portal.png";
const SLOGAN = "Transformamos vidas a través de la educación y el desarrollo humano.";

export default function PortalPage() {
  return (
    <main id="top">
      {/* ═══ Hero: escenario nocturno con los tres orbes ═══════ */}
      <section className="portal-stage relative flex min-h-[100svh] flex-col overflow-hidden">
        {/*
         * Auroras del fondo. Son manchas difuminadas que se
         * desplazan muy lento; sustituyen a la imagen de fondo del
         * mockup para que la escena escale sin pixelarse.
         */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="portal-aurora absolute -left-[15%] top-[8%] h-[55vh] w-[70vw] rounded-full bg-[var(--color-intermediate)]/[0.16] blur-[110px]" />
          <div
            className="portal-aurora absolute -right-[10%] top-[-5%] h-[45vh] w-[55vw] rounded-full bg-[var(--color-primary)]/25 blur-[120px]"
            style={{ animationDelay: "-8s" }}
          />
          <div
            className="portal-aurora absolute bottom-[-10%] left-[20%] h-[45vh] w-[60vw] rounded-full bg-[var(--color-intermediate)]/[0.13] blur-[130px]"
            style={{ animationDelay: "-14s" }}
          />
        </div>

        <PortalHeader logoSrc={LOGO_SRC} areas={AREAS} />

        {/* ── Título monumental ──────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col justify-center pb-4 pt-20 sm:pt-24">
          <header className="px-5 text-center sm:px-8">
            {/*
             * El tamaño mira el ancho y el alto a la vez: en un
             * portátil de 720 px de alto un título dimensionado
             * solo por ancho empujaba los orbes fuera de la vista.
             */}
            <h1 className="text-balance text-[clamp(2.25rem,min(10.5vw,12vh),6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]">
              EducaMates
              <br />
              Foundation
            </h1>

            {/* La línea y el subtítulo llevan el coral y el durazno
                de la marca: son los dos únicos cálidos del hero y
                bastan para que el conjunto lea EducaMates. */}
            <div
              aria-hidden
              className="mx-auto mt-6 h-[2px] w-40 sm:w-56"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--portal-line), transparent)",
              }}
            />

            <p className="mt-5 text-[clamp(0.75rem,2.6vw,1.15rem)] font-medium uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Cartera de servicios
            </p>
          </header>

          {/* ── Los tres orbes ───────────────────────────────── */}
          <div className="relative mt-8 sm:mt-12">
            {/* Piso reflectante bajo los discos */}
            <div
              aria-hidden
              className="portal-floor pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44"
            />
            <BrandOrbs areas={AREAS} />
          </div>
        </div>

        {/* ── Invitación a bajar ─────────────────────────────── */}
        <a
          href="#areas"
          aria-label="Ver el ecosistema completo"
          className="relative z-10 mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white/80 transition-colors hover:border-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <ChevronDown className="animate-scroll-cue h-5 w-5" />
        </a>
      </section>

      {/* ═══ Detalle de las tres áreas ═════════════════════════ */}
      <AreasDetail slogan={SLOGAN} areas={AREAS} />

      <footer className="portal-ink-bg px-5 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} EducaMates Foundation. Todos los derechos reservados.
      </footer>
    </main>
  );
}
