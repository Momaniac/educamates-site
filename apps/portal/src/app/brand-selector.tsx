"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface Area {
  readonly id: string;
  readonly name: string;
  readonly short: string;
  readonly tagline: string;
  readonly image: string;
  readonly accent: string;
  readonly href: string;
  readonly available: boolean;
  /** Oferta/secciones reales del área (se muestran como chips). */
  readonly highlights?: readonly string[];
}

interface BrandSelectorProps {
  readonly slogan: string;
  readonly logoSrc: string;
  readonly areas: readonly Area[];
}

export function BrandSelector({ slogan, logoSrc, areas }: BrandSelectorProps) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-primary">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(96,128,255,0.25) 0%, rgba(12,16,140,0) 70%)",
        }}
      />

      {/* ── Encabezado paraguas EMF ──────────────────────────── */}
      <header className="relative z-10 flex flex-col items-center px-6 pt-10 text-center sm:pt-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="EducaMates Foundation"
          className="h-12 w-auto object-contain sm:h-16"
        />
        <p className="mt-5 max-w-2xl text-balance text-base font-medium leading-relaxed text-white/80 sm:text-lg">
          {slogan}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
          Elige un área para comenzar
        </p>
      </header>

      {/* ── Selector de 3 áreas (estilo consola) ─────────────── */}
      <div
        className="relative z-10 flex flex-col gap-3 p-4 sm:p-6 md:flex-1 md:flex-row md:gap-4"
        onMouseLeave={() => setFocused(null)}
      >
        {areas.map((area) => {
          const isFocused = focused === area.id;
          const isDimmed = focused !== null && !isFocused;

          const handleEnter = () => setFocused(area.id);

          const inner = (
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {/* Imagen de fondo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={area.image}
                alt=""
                aria-hidden
                className={`absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-500 ease-out ${
                  isFocused ? "scale-105" : "scale-100"
                }`}
              />

              {/* Velo de color + degradado inferior para legibilidad */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${area.accent}22 0%, rgba(8,10,60,0.35) 45%, rgba(6,8,45,0.92) 100%)`,
                }}
              />

              {/* Barra de acento superior */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 transition-[height] duration-300"
                style={{ height: isFocused ? 6 : 3, background: area.accent }}
              />

              {/* Contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                <span
                  className="mb-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: `${area.accent}` }}
                >
                  {area.available ? "Disponible" : "Próximamente"}
                </span>

                <h2 className="text-2xl font-black leading-tight text-white drop-shadow sm:text-3xl">
                  {area.short}
                </h2>
                <p className="mt-1 text-sm font-semibold text-white/85 sm:text-[15px]">
                  {area.name}
                </p>

                {/* Tagline + CTA: siempre visible en móvil; aparece al enfocar en desktop */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:max-h-0 md:opacity-0 ${
                    isFocused ? "md:max-h-80 md:opacity-100" : ""
                  }`}
                >
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                    {area.tagline}
                  </p>

                  {area.highlights && area.highlights.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {area.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {area.available ? (
                    <span
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-primary shadow-lg transition-transform group-hover/panel:scale-105"
                    >
                      Entrar
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white/70">
                      En construcción
                    </span>
                  )}
                </div>
              </div>
            </div>
          );

          const sharedClass = `group/panel relative block h-96 md:h-auto md:min-h-[440px] flex-none md:flex-1 transition-[flex-grow,opacity] duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 rounded-2xl ${
            isDimmed ? "opacity-50" : "opacity-100"
          }`;
          const flexGrow = focused === null ? 1 : isFocused ? 2.4 : 0.85;

          if (area.available) {
            return (
              <a
                key={area.id}
                href={area.href}
                className={sharedClass}
                style={{ flexGrow }}
                onMouseEnter={handleEnter}
                onFocus={handleEnter}
                aria-label={`Entrar a ${area.name}`}
              >
                {inner}
              </a>
            );
          }

          return (
            <div
              key={area.id}
              className={`${sharedClass} cursor-default`}
              style={{ flexGrow }}
              onMouseEnter={handleEnter}
              aria-label={`${area.name} — próximamente`}
            >
              {inner}
            </div>
          );
        })}
      </div>

      {/* ── Pie ──────────────────────────────────────────────── */}
      <footer className="relative z-10 px-6 pb-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} EducaMates Foundation. Todos los derechos reservados.
      </footer>
    </div>
  );
}
