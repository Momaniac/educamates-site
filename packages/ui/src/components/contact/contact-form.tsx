"use client";

import { useCallback, useState } from "react";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../common/icons";
import type { ContactFormConfig } from "../../types/contact";

/**
 * ContactForm — lead form that opens a pre-filled WhatsApp chat on submit.
 *
 * Fully theme-driven: inputs, focus rings and the submit button all use
 * semantic brand tokens, so the form adopts each tenant's palette.
 */
export function ContactForm({
  whatsappNumber,
  programs,
  heading = "Solicita informes",
  defaultProgram = "",
  whatsappNumbersByProgram,
}: ContactFormConfig) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [program, setProgram] = useState(defaultProgram);
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const lines = [
        `¡Hola! Soy ${name || "un interesado"}.`,
        email ? `Mi correo: ${email}.` : "",
        program ? `Me interesa: ${program}.` : "Me interesa recibir información.",
        message ? message : "",
        whatsapp ? `Mi WhatsApp: ${whatsapp}.` : "",
        `Origen: ${window.location.pathname}.`,
      ].filter(Boolean);
      const destination = whatsappNumbersByProgram?.[program] ?? whatsappNumber;
      const url = buildWhatsAppUrl({ phone: destination, message: lines.join(" ") });
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [name, email, whatsapp, program, message, whatsappNumber, whatsappNumbersByProgram],
  );

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-brand-muted bg-white text-brand-text placeholder-brand-text/40 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all";

  return (
    <div className="bg-white rounded-2xl border border-brand-muted p-5 md:p-7 shadow-sm">
      <h2 className="text-xl font-bold text-brand-primary mb-5">{heading}</h2>
      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cf-email" className="block text-brand-text font-medium mb-1.5">
            Correo electrónico
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <label htmlFor="cf-nombre" className="block text-brand-text font-medium mb-1.5">
            Nombre completo
          </label>
          <input
            id="cf-nombre"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="cf-whatsapp" className="block text-brand-text font-medium mb-1.5">
            WhatsApp
          </label>
          <input
            id="cf-whatsapp"
            type="tel"
            required
            autoComplete="tel"
            minLength={10}
            pattern="[0-9+() -]{10,20}"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={inputClasses}
            placeholder="55 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="cf-programa" className="block text-brand-text font-medium mb-1.5">
            Programa de interés
          </label>
          <select
            id="cf-programa"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className={inputClasses}
          >
            <option value="">Selecciona un programa</option>
            {programs.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="cf-mensaje" className="block text-brand-text font-medium mb-1.5">
            Mensaje (opcional)
          </label>
          <textarea
            id="cf-mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClasses}
            placeholder="Escribe tu mensaje"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 w-full bg-brand-secondary hover:bg-brand-accent text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Continuar en WhatsApp
        </button>
        <p className="md:col-span-2 text-xs leading-relaxed text-brand-text/60 text-center">
          Al continuar se abrirá WhatsApp para que revises y envíes tu mensaje.
        </p>
      </form>
    </div>
  );
}
