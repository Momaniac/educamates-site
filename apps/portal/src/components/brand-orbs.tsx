"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import type { Area } from "@/lib/areas";

interface BrandOrbsProps {
  readonly areas: readonly Area[];
}

/*
 * Selector principal: tres discos flotando sobre el piso
 * reflectante. Desde que el cliente entregó los logotipos
 * (17-ago), cada disco es un círculo blanco con el borde del color
 * de su marca y el logotipo dentro — antes llevaban icono y texto
 * provisionales.
 *
 * El nombre de la marca baja como pie de foto bajo el disco: el
 * logo multicolor de CEEM, por ejemplo, necesita el texto cerca
 * para quien no lo conozca todavía.
 */
export function BrandOrbs({ areas }: BrandOrbsProps) {
  return (
    <ul className="relative z-10 mx-auto flex w-full max-w-4xl items-start justify-center gap-3 px-4 sm:gap-6 sm:px-6 md:gap-10">
      {areas.map((area, index) => {
        /* El disco central va un punto más grande, como en el mockup. */
        const featured = index === 1;

        const style = {
          "--accent": area.accent,
          animationDelay: `${index * 1.1}s`,
        } as CSSProperties;

        const face = (
          <div
            className={`orb-disc orb-brand orb-face relative flex aspect-square w-full flex-col items-center justify-center rounded-full p-[13%] text-center sm:p-[15%] ${
              featured ? "sm:scale-105" : ""
            }`}
          >
            {/*
             * Logo dentro del círculo blanco. contain para que el
             * arte completo respire sin importar su proporción
             * (el de CEEM es apaisado, el de EMF cuadrado).
             */}
            <Image
              src={area.logo}
              alt=""
              width={area.logoWidth}
              height={area.logoHeight}
              className="h-full w-full object-contain"
            />

            {area.available ? null : (
              <span className="absolute inset-x-0 bottom-[9%] text-[clamp(0.5rem,1.6vw,0.72rem)] font-bold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--accent)_75%,#1c1c4a)]">
                Próximamente
              </span>
            )}
          </div>
        );

        /* Reflejo en el piso: copia volteada, difuminada y recortada. */
        const mirror = (
          <div className="orb-mirror mt-1 aspect-[5/2] w-full overflow-hidden" aria-hidden>
            <div className="orb-disc orb-brand aspect-square w-full rounded-full" />
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
            className={`flex min-w-0 max-w-[min(14.5rem,25vh)] flex-1 flex-col items-center ${
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

            {/* Nombre de la marca bajo el disco, siempre visible. */}
            <span className="mt-2 text-center text-[10px] font-semibold leading-tight text-white/70 sm:text-[11px]">
              {area.short === area.name ? area.name : `${area.short} · ${area.name}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
