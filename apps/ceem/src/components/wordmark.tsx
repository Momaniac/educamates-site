import Image from "next/image";
import { LOGO } from "@/lib/site";

/*
 * Logotipo oficial de CEEM. Sustituye al bloque de texto que lo
 * reconstruía a mano mientras el cliente no había entregado el
 * archivo; llegó el 3-ago-2026.
 *
 * El logotipo es multicolor y lleva una estela punteada negra, así
 * que no existe versión en negativo: sobre fondos oscuros no se
 * lee. En vez de recolorearlo — que sería alterar la marca — el
 * modo `chip` lo apoya sobre una pastilla blanca, que es como se
 * usa en las propias piezas del cliente.
 *
 * El tamaño se da con clases de ancho y no con un prop numérico,
 * para que una sola imagen sirva en todos los breakpoints en vez
 * de montar dos y descargarlas las dos.
 */

interface WordmarkProps {
  /**
   * `plain` sobre fondo claro; `chip` sobre fondo oscuro, con la
   * pastilla blanca detrás.
   */
  readonly variant?: "plain" | "chip";
  /** Clases de ancho para la imagen. El alto sale de la proporción. */
  readonly className?: string;
  readonly priority?: boolean;
}

export function Wordmark({
  variant = "plain",
  className = "w-[150px] sm:w-[190px]",
  priority = false,
}: WordmarkProps) {
  const logo = (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      sizes="(max-width: 640px) 150px, 260px"
      className={`h-auto ${className}`}
    />
  );

  if (variant === "chip") {
    return (
      <span className="inline-flex items-center justify-center rounded-[var(--ceem-radius-card)] bg-white px-6 py-5">
        {logo}
      </span>
    );
  }

  return logo;
}
