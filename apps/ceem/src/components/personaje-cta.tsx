import type { CSSProperties } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@educamates/ui";
import { CONTACT, type Promocion } from "@/lib/site";

/*
 * [OFICIAL 17-ago-2026] Personaje de CEEM con globo de diálogo que
 * abre WhatsApp con el mensaje ya escrito.
 *
 * Es la petición de "Promociones" del correo, que la primera vez se
 * resolvió mal: el cliente pidió personajes con mensajes llamativos
 * "a lo largo del sitio" y se hizo UNA sección con las cinco
 * tarjetas juntas. Ahora cada mensaje vive junto al contenido que
 * responde — las becas en Admisión, los horarios junto a los
 * horarios — que es donde el papá ya tiene la duda.
 *
 * El personaje va `aria-hidden`: es decoración. El nombre accesible
 * del enlace sale del texto del globo, que es el mensaje real.
 */
interface PersonajeCTAProps {
  readonly promo: Promocion;
  /** De qué lado queda el personaje. Se alterna a lo largo del sitio. */
  readonly lado?: "izquierda" | "derecha";
  readonly className?: string;
}

export function PersonajeCTA({ promo, lado = "izquierda", className = "" }: PersonajeCTAProps) {
  const personajeALaDerecha = lado === "derecha";

  return (
    <a
      href={buildWhatsAppUrl({ phone: CONTACT.whatsappNumber, message: promo.whatsappMensaje })}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mx-auto flex w-full max-w-xl items-center gap-3 sm:w-fit sm:gap-5 ${
        personajeALaDerecha ? "flex-row-reverse" : ""
      } ${className}`}
    >
      <Image
        src={promo.ilustracion}
        alt=""
        aria-hidden
        width={200}
        height={240}
        className="soft-bounce h-24 w-auto shrink-0 object-contain sm:h-32"
      />
      <span
        className={`globo ${
          personajeALaDerecha ? "globo-derecha" : "globo-izquierda"
        } min-w-0 flex-1 px-5 py-4 transition-transform sm:flex-none duration-300 group-hover:scale-[1.03] sm:px-6 sm:py-5`}
        style={{ "--globo-color": promo.color } as CSSProperties}
      >
        <span className="block text-base font-black leading-snug text-brand-primary sm:text-lg">
          {promo.mensaje}
        </span>
        <span
          className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide"
          style={{ color: promo.color }}
        >
          <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Escríbenos por WhatsApp
        </span>
      </span>
    </a>
  );
}
