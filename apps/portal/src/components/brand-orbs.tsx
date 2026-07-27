"use client";

import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { AREA_ICONS } from "./area-icons";
import type { Area } from "@/lib/areas";

interface BrandOrbsProps {
  readonly areas: readonly Area[];
}

/*
 * Selector principal: tres discos de cristal flotando sobre el
 * piso reflectante, tal como los pidió el cliente.
 *
 * Responsive: las tres siempre se ven a la vez (esa es la idea
 * del portal), pero en móvil el disco lleva el nombre corto y el
 * nombre completo baja como pie de foto, que a 100 px de ancho el
 * nombre largo sería ilegible.
 */
export function BrandOrbs({ areas }: BrandOrbsProps) {
  return (
    <ul className="relative z-10 mx-auto flex w-full max-w-4xl items-start justify-center gap-3 px-4 sm:gap-6 sm:px-6 md:gap-10">
      {areas.map((area, index) => {
        const Icon = AREA_ICONS[area.id];
        /* El disco central va un punto más grande, como en el mockup. */
        const featured = index === 1;

        const style = {
          "--accent": area.accent,
          animationDelay: `${index * 1.1}s`,
        } as CSSProperties;

        const face = (
          <div
            className={`orb-disc orb-face relative flex aspect-square w-full flex-col items-center justify-center rounded-full px-2 text-center sm:px-4 ${
              featured ? "sm:scale-105" : ""
            }`}
          >
            {Icon && (
              <Icon className="mb-1.5 h-[26%] w-[26%] text-white sm:mb-2.5" />
            )}

            {/* La sombra mantiene legible el texto blanco tanto sobre
                el coral como sobre los azules del sistema. */}
            <span className="text-[clamp(0.56rem,2.1vw,1.05rem)] font-bold uppercase leading-[1.15] tracking-wide text-white [text-shadow:0_1px_10px_rgba(3,4,32,0.6)]">
              {/* Nombre corto en móvil, completo a partir de sm. */}
              <span className="sm:hidden">{area.short}</span>
              <span className="hidden sm:inline">{area.name}</span>
            </span>

            {area.available ? (
              <ArrowRight
                aria-hidden
                className="mt-1.5 h-[13%] w-[13%] text-white transition-transform duration-300 group-hover:translate-x-1 sm:mt-3"
              />
            ) : (
              <span className="mt-1.5 text-[clamp(0.42rem,1.5vw,0.7rem)] font-semibold uppercase tracking-[0.16em] text-white/85 [text-shadow:0_1px_8px_rgba(3,4,32,0.6)] sm:mt-3">
                Próximamente
              </span>
            )}
          </div>
        );

        /* Reflejo en el piso: copia volteada, difuminada y recortada. */
        const mirror = (
          <div className="orb-mirror mt-1 aspect-[5/2] w-full overflow-hidden" aria-hidden>
            <div className="orb-disc aspect-square w-full rounded-full" />
          </div>
        );

        const body = (
          <>
            <div className="orb-floating" style={{ animationDelay: style.animationDelay }}>
              {face}
            </div>
            {mirror}
          </>
        );

        return (
          <li
            key={area.id}
            /*
             * El tope de ancho mira también el alto de la ventana:
             * sin él, en portátiles de pantalla baja los discos
             * crecían hasta empujar la flecha de scroll fuera.
             */
            className={`flex min-w-0 max-w-[min(13.5rem,24vh)] flex-1 flex-col items-center ${
              area.available ? "" : "orb-soon"
            }`}
            style={style}
          >
            {area.available ? (
              <a
                href={area.href}
                className="orb-link group block w-full rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                aria-label={`Entrar a ${area.name}`}
              >
                {body}
              </a>
            ) : (
              <div
                className="orb-link block w-full cursor-default"
                aria-label={`${area.name} — próximamente`}
              >
                {body}
              </div>
            )}

            {/* Nombre completo bajo el disco: solo hace falta en móvil. */}
            <span className="mt-2 text-center text-[10px] font-semibold leading-tight text-white/55 sm:hidden">
              {area.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
