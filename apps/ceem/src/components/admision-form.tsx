"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@educamates/ui";
import { CONTACT, NIVELES } from "@/lib/site";

/*
 * Captura de datos de admisión: nombre, teléfono y correo, que
 * fueron los tres campos que pidió el cliente en la reunión.
 *
 * ⚠ Hoy el envío abre WhatsApp con los datos ya escritos. Es un
 * mecanismo que funciona sin backend, pero NO guarda el lead en
 * ninguna parte: si el papá no pulsa "enviar" en WhatsApp, ese
 * contacto se pierde. La persistencia real (base de datos y
 * panel) es la fase 5 del plan, documentada en
 * LEADS-TECHNICAL-PROPOSAL.md.
 */
export function AdmisionForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [nivel, setNivel] = useState<string>(NIVELES[0]?.name ?? "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Hola, me interesa inscribir a mi hijo(a) en ${CONTACT.name}.`,
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${correo}`,
      `Nivel de interés: ${nivel}`,
    ].join("\n");

    window.open(
      buildWhatsAppUrl({ phone: CONTACT.whatsappNumber, message }),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const fieldClass =
    "w-full rounded-2xl border-2 border-brand-muted bg-white px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-text/40 focus:border-brand-secondary";
  const labelClass = "block text-sm font-bold text-brand-primary";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate={false}>
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre de quien nos contacta
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="Tu nombre completo"
          className={`${fieldClass} mt-1.5`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
            placeholder="55 1234 5678"
            className={`${fieldClass} mt-1.5`}
          />
        </div>

        <div>
          <label htmlFor="correo" className={labelClass}>
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className={`${fieldClass} mt-1.5`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="nivel" className={labelClass}>
          Nivel que te interesa
        </label>
        <select
          id="nivel"
          name="nivel"
          value={nivel}
          onChange={(event) => setNivel(event.target.value)}
          className={`${fieldClass} mt-1.5`}
        >
          {NIVELES.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-secondary/40"
      >
        Quiero informes
        <MessageCircle className="h-5 w-5" aria-hidden />
      </button>

      <p className="text-center text-xs leading-relaxed text-brand-text/55">
        Al enviar, se abrirá WhatsApp con tus datos listos para que confirmes el mensaje al{" "}
        {CONTACT.whatsappDisplay}.
      </p>
    </form>
  );
}
