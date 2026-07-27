/*
 * Iconografía de las tres áreas, dibujada a mano en SVG para
 * reproducir el mockup del cliente: trazo blanco fino, sin
 * relleno, con la misma retícula de 48×48 en las tres. Ninguna
 * librería de iconos trae estas combinaciones (birrete sobre
 * libro, grupo con estrella, paloma dentro de corazón).
 */

interface AreaIconProps {
  readonly className?: string;
}

const BASE_PROPS = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Centro Educativo EducaMates — birrete sobre libro abierto. */
function GraduationBookIcon({ className }: AreaIconProps) {
  return (
    <svg {...BASE_PROPS} className={className}>
      {/* Birrete */}
      <path d="M24 6 8.5 12 24 18l15.5-6L24 6Z" />
      <path d="M36 14.5v5.5" />
      <circle cx="36" cy="21.2" r="1.2" />
      {/* Libro abierto */}
      <path d="M8 26c5.3-2.6 10.7-2.6 16 0 5.3-2.6 10.7-2.6 16 0v14c-5.3-2.6-10.7-2.6-16 0-5.3-2.6-10.7-2.6-16 0V26Z" />
      <path d="M24 26v14" />
    </svg>
  );
}

/** EducaMates Foundation — comunidad que se eleva, con estrella. */
function CommunityStarIcon({ className }: AreaIconProps) {
  return (
    <svg {...BASE_PROPS} className={className}>
      {/* Estrella */}
      <path d="m24 5 1.9 3.9 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6L24 5Z" />
      {/* Figura central con brazos en alto */}
      <circle cx="24" cy="21.5" r="3.1" />
      <path d="M24 25v7" />
      <path d="m24 26.5-5.6-4.8M24 26.5l5.6-4.8" />
      <path d="m24 32-3.6 6M24 32l3.6 6" />
      {/* Figuras laterales */}
      <circle cx="12.4" cy="25.6" r="2.7" />
      <path d="M12.4 29v6" />
      <path d="m12.4 30.2-4.6-3.4M12.4 30.2l4.4-2.6" />
      <path d="m12.4 35-3 5M12.4 35l3 5" />
      <circle cx="35.6" cy="25.6" r="2.7" />
      <path d="M35.6 29v6" />
      <path d="m35.6 30.2 4.6-3.4M35.6 30.2l-4.4-2.6" />
      <path d="m35.6 35 3 5M35.6 35l-3 5" />
    </svg>
  );
}

/** Alma Libre — paloma dentro de un corazón. */
function DoveHeartIcon({ className }: AreaIconProps) {
  return (
    <svg {...BASE_PROPS} className={className}>
      {/* Corazón */}
      <path d="M24 42s-15-9.1-15-19a8.4 8.4 0 0 1 15-5.3A8.4 8.4 0 0 1 39 23c0 9.9-15 19-15 19Z" />
      {/* Paloma */}
      <path d="M15.6 29.2c3.7.5 6.9-.9 9.6-4" />
      <path d="M19.9 32.4c-.5-4.8 1.4-8.6 5.7-11.3 2-1.3 4.2-1.6 6.2-1" />
      <path d="M31.8 20.1c1 .5 1.8 1.4 2.3 2.5l2.9-.3-2 2.3c.2 3.3-1.5 6.2-4.5 7.9-3.3 1.9-7.3 1.7-11.1-.1" />
      <circle cx="32.4" cy="22.6" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Mapa id de área → icono. Vive aquí (y no en los datos) porque
 * `page.tsx` es un Server Component y no puede pasar componentes
 * como props al selector, que sí es cliente.
 */
export const AREA_ICONS: Record<string, (props: AreaIconProps) => React.ReactElement> = {
  ceem: GraduationBookIcon,
  emf: CommunityStarIcon,
  almalibre: DoveHeartIcon,
};
