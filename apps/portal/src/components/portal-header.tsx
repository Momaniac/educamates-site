"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { AREA_ICONS } from "./area-icons";
import type { Area } from "@/lib/areas";

interface PortalHeaderProps {
  readonly logoSrc: string;
  readonly areas: readonly Area[];
}

/*
 * Encabezado del mockup: logo a la izquierda, botón de menú a la
 * derecha. El menú abre en pantalla completa y repite las tres
 * áreas, para que el usuario pueda saltar entre marcas sin volver
 * al hero.
 */
export function PortalHeader({ logoSrc, areas }: PortalHeaderProps) {
  const [open, setOpen] = useState(false);

  /* Con el menú abierto no debe correr el fondo, y Esc lo cierra. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <a href="#top" className="shrink-0" aria-label="EducaMates Foundation — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="EducaMates Foundation"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Menu className="h-7 w-7" strokeWidth={2} />
        </button>
      </header>

      {open && (
        <div
          className="portal-veil fixed inset-0 z-50 flex flex-col backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="EducaMates Foundation"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Cerrar menú"
              autoFocus
            >
              <X className="h-7 w-7" strokeWidth={2} />
            </button>
          </div>

          <nav className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-3 overflow-y-auto px-5 pb-10 sm:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Cartera de servicios
            </p>

            {areas.map((area) => {
              const Icon = AREA_ICONS[area.id];
              const content = (
                <>
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${area.accent} 20%, transparent)`,
                      /* Aclarado para que el azul se lea sobre oscuro. */
                      color: `color-mix(in srgb, ${area.accent} 52%, #fff)`,
                    }}
                  >
                    {Icon && <Icon className="h-7 w-7" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold leading-tight text-white sm:text-xl">
                      {area.name}
                    </span>
                    <span className="block text-sm text-white/55">
                      {area.available ? area.tagline : "Próximamente"}
                    </span>
                  </span>
                  {area.available && (
                    <ArrowRight className="h-5 w-5 shrink-0 text-white/60 transition-transform group-hover:translate-x-1" />
                  )}
                </>
              );

              const shared =
                "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors";

              return area.available ? (
                <a
                  key={area.id}
                  href={area.href}
                  className={`${shared} hover:border-white/25 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50`}
                >
                  {content}
                </a>
              ) : (
                <div key={area.id} className={`${shared} opacity-55`}>
                  {content}
                </div>
              );
            })}

            <a
              href="#areas"
              onClick={() => setOpen(false)}
              className="mt-4 text-sm font-semibold text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              Conoce el ecosistema completo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
