import Image from "next/image";

/*
 * Lockup de logotipos pedido por el cliente (correo 17-ago-2026):
 * al inicio de la página, EducaMates Foundation como logo principal
 * y de mayor tamaño, y los otros tres en tamaño menor — al pasar el
 * cursor o seleccionarlos aparece el nombre de cada marca.
 *
 * Los tres menores enlazan a su sitio dentro del ecosistema; el
 * nombre aparece como tooltip y como texto bajo el logo en pantallas
 * de toque (donde no hay hover), siempre visible a partir de sm.
 */
const MARCAS = [
  {
    nombre: "Centro Educativo EducaMates",
    logo: "/marcas/logo-ceem.png",
    href: "https://educamates-site-ceem.vercel.app",
    width: 794,
    height: 306,
  },
  {
    nombre: "EducaMates Foundation",
    logo: "/marcas/logo-emf-cuadro.png",
    href: "https://educamates-site-emf.vercel.app",
    width: 480,
    height: 480,
  },
  {
    nombre: "Alma Libre",
    logo: "/marcas/logo-almalibre.png",
    href: "",
    width: 3008,
    height: 1408,
  },
] as const;

export function BrandLockup() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-5 px-5 sm:mt-10">
      {/*
       * El logo principal. Sobre el escenario nocturno va en
       * negativo: el original es multicolor y de fondo claro, así
       * que se apoya en una pastilla translúcida para no perder
       * contraste con las auroras.
       */}
      <div className="flex items-center justify-center">
        <Image
          src="/logos/logo-portal.png"
          alt="EducaMates Foundation"
          width={220}
          height={220}
          priority
          className="h-16 w-auto object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:h-20"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {MARCAS.map((marca) => {
          const body = (
            <>
              <Image
                src={marca.logo}
                alt=""
                width={marca.width > 800 ? 160 : 120}
                height={marca.height > 800 ? 120 : 60}
                className="h-9 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100 sm:h-10"
              />
              {/*
               * El nombre al hover: en pantallas de toque no existe,
               * así que también se muestra al enfocar y, como
               * respaldo, en la etiqueta aria.
               */}
              <span className="pointer-events-none absolute -bottom-5 left-1/2 w-max max-w-[9rem] -translate-x-1/2 text-center text-[0.6rem] font-bold uppercase tracking-widest text-white/0 transition-colors group-hover:text-white/85 group-focus-visible:text-white/85 sm:text-[0.65rem]">
                {marca.nombre}
              </span>
            </>
          );

          const shared =
            "group relative flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

          return marca.href ? (
            <a
              key={marca.nombre}
              href={marca.href}
              className={`${shared} hover:border-white/25 hover:bg-white/[0.09]`}
              aria-label={marca.nombre}
            >
              {body}
            </a>
          ) : (
            <div
              key={marca.nombre}
              className={`${shared} opacity-60`}
              role="img"
              aria-label={`${marca.nombre} — próximamente`}
            >
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
}
