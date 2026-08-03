"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { CONTACT, NAV } from "@/lib/site";

/*
 * Cabecera del kínder: blanca, redondeada y con el CTA de
 * admisión siempre a la vista, que es la conversión que pidió el
 * cliente. En móvil el menú baja como panel.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  /* Con el panel abierto el fondo no debe correr, y Esc cierra. */
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label={`${CONTACT.name} — inicio`}>
          {/* Ancho contenido: el logotipo es muy apaisado (2.6:1) y
              por encima de ~190px empuja la navegación fuera en las
              pantallas medias. */}
          <Wordmark priority className="w-[142px] sm:w-[178px]" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-brand-primary transition-colors hover:bg-brand-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 rounded-full border-2 border-brand-muted px-4 py-2 text-sm font-bold text-brand-primary transition-colors hover:border-brand-secondary sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {CONTACT.phone}
          </a>

          <a
            href="#admision"
            className="hidden rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 lg:inline-block"
          >
            Inscríbete
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-brand-primary transition-colors hover:bg-brand-muted lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Wordmark className="w-[142px] sm:w-[178px]" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-brand-primary transition-colors hover:bg-brand-muted"
              aria-label="Cerrar menú"
              autoFocus
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-4 pt-4 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-brand-muted/60 px-5 py-4 text-lg font-bold text-brand-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admision"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand-secondary px-5 py-4 text-center text-lg font-bold text-white shadow-md"
            >
              Inscríbete
            </a>
            <a
              href={CONTACT.phoneHref}
              className="mt-1 rounded-full border-2 border-brand-muted px-5 py-4 text-center text-lg font-bold text-brand-primary"
            >
              {CONTACT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
