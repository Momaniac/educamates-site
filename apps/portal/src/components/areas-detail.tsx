import type { CSSProperties } from "react";
import { ArrowRight, Check } from "lucide-react";
import { AREA_ICONS } from "./area-icons";
import type { Area } from "@/lib/areas";

interface AreasDetailProps {
  readonly slogan: string;
  readonly areas: readonly Area[];
}

/*
 * Lo que hay al bajar del hero: el destino que promete la flecha
 * de scroll. Detalla qué encontrará el usuario en cada área antes
 * de salir del portal hacia el sitio de la marca.
 */
export function AreasDetail({ slogan, areas }: AreasDetailProps) {
  return (
    <section
      id="areas"
      className="portal-panel-bg relative z-10 scroll-mt-8 border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            El ecosistema
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            Tres áreas, un mismo propósito
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-white/65 sm:text-lg">
            {slogan}
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {areas.map((area) => {
            const Icon = AREA_ICONS[area.id];
            const style = { "--accent": area.accent } as CSSProperties;
            /*
             * Los detalles finos (palomitas, icono) van en una
             * versión aclarada del color: el azul corporativo a
             * tamaño de icono no se lee sobre el fondo oscuro.
             */
            const accentOnDark = `color-mix(in srgb, ${area.accent} 52%, #fff)`;
            /* Fondo del chip del icono. Con color-mix en vez de
               concatenar alfa en hex, porque el acento llega como
               referencia a un token, no como #rrggbb. */
            const accentWash = `color-mix(in srgb, ${area.accent} 18%, transparent)`;

            return (
              <article
                key={area.id}
                style={style}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20"
              >
                <div
                  aria-hidden
                  className="h-1.5 w-full"
                  style={{ backgroundColor: area.accent }}
                />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: accentWash, color: accentOnDark }}
                  >
                    {Icon && <Icon className="h-8 w-8" />}
                  </span>

                  <h3 className="mt-5 text-xl font-extrabold leading-tight text-white">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{area.tagline}</p>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Lo que encontrarás
                  </p>
                  <ul className="mt-3 flex-1 space-y-2">
                    {area.contents.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                        <Check
                          aria-hidden
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: accentOnDark }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {area.available ? (
                    <a
                      href={area.href}
                      /*
                       * Azul primario sobre coral: es el par de la
                       * marca y da 5.6:1 de contraste. El blanco
                       * sobre coral no llega al mínimo legible.
                       */
                      className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold text-[var(--color-primary)] transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      style={{ backgroundColor: area.accent }}
                    >
                      Entrar a {area.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="mt-7 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white/50">
                      Próximamente
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
