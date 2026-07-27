/*
 * ⚠ PROVISIONAL — logotipo de CEEM pendiente.
 *
 * El cliente tiene por entregar los logos oficiales. Mientras
 * tanto NO se usa el logo de EducaMates Foundation, porque dice
 * "foundation" y este es el Centro Educativo: sería anunciar la
 * marca equivocada. Esto reconstruye en texto el bloque del
 * logotipo tal como aparece en la gráfica del cliente —
 * "CENTRO EDUCATIVO" encima de "Educa | Mates" con la barra
 * naranja — y se sustituye por el archivo real en cuanto llegue.
 */

interface WordmarkProps {
  /** Tinta del bloque; en fondos oscuros se pasa blanco. */
  readonly tone?: "navy" | "white";
  readonly className?: string;
}

export function Wordmark({ tone = "navy", className = "" }: WordmarkProps) {
  const ink = tone === "white" ? "#ffffff" : "var(--ceem-navy)";

  return (
    <span className={`inline-flex flex-col leading-none ${className}`} style={{ color: ink }}>
      <span className="text-[0.5rem] font-black uppercase tracking-[0.22em] sm:text-[0.58rem]">
        Centro Educativo
      </span>
      <span className="mt-1 inline-flex items-center gap-1.5 text-xl font-black tracking-tight sm:text-2xl">
        Educa
        <span
          aria-hidden
          className="inline-block h-[1.05em] w-[3px] rounded-full"
          style={{ backgroundColor: "var(--ceem-orange)" }}
        />
        Mates
      </span>
    </span>
  );
}
