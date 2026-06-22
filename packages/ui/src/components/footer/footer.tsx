import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { FooterConfig } from "../../types/theme";

/** Institutional white-label footer with quick links and differentiated sedes. */
export function Footer({
  logo,
  description,
  linkGroups,
  contact,
  copyright,
  privacyHref,
  googleMapsEmbedUrl,
}: FooterConfig) {
  return (
    <footer id="site-footer" className="bg-brand-primary text-white scroll-mt-24">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1.45fr] lg:gap-12">
          <div>
            <img
              alt={logo.alt}
              src={logo.src}
              width={180}
              height={54}
              loading="lazy"
              className="object-contain mb-4 h-12 w-auto"
              style={{ color: "transparent" }}
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">{description}</p>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/80 hover:border-brand-secondary hover:text-brand-secondary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {contact.email}
              </a>
            )}
            {googleMapsEmbedUrl && (
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video max-w-xs mt-5">
                <iframe
                  src={googleMapsEmbedUrl}
                  title="Ubicación"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-brand-secondary mb-3 text-sm uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-brand-secondary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-brand-secondary mb-3 text-sm uppercase tracking-wider">
              Sedes y contacto
            </h3>
            <ul className="space-y-3 text-sm">
              {contact.phone && (
                <li className="flex items-center gap-3 text-white/70">
                  <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                  <a href={`tel:${contact.phone}`} className="hover:text-brand-secondary transition-colors">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.addresses?.map((address) => (
                <li key={address.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white/70">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white/90 mb-1">{address.label}</span>
                      {address.mapsHref ? (
                        <a className="leading-relaxed hover:text-brand-secondary transition-colors" href={address.mapsHref} target="_blank" rel="noopener noreferrer">
                          {address.street}
                        </a>
                      ) : address.street}
                      {address.phone && (
                        <a className="mt-2 flex items-center gap-2 hover:text-brand-secondary transition-colors" href={address.phoneHref ?? `tel:${address.phone}`}>
                          <Phone className="w-3.5 h-3.5 shrink-0" /> {address.phone}
                        </a>
                      )}
                      {address.whatsapp && address.whatsappHref && (
                        <a className="mt-2 flex items-center gap-2 hover:text-brand-secondary transition-colors" href={address.whatsappHref} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-3.5 h-3.5 shrink-0" /> {address.whatsapp}
                        </a>
                      )}
                      {address.mapsHref && (
                        <a className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-secondary hover:text-white transition-colors" href={address.mapsHref} target="_blank" rel="noopener noreferrer">
                          Ver ubicación <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>{copyright}</p>
          {privacyHref && (
            <a href={privacyHref} className="hover:text-brand-secondary transition-colors">
              Aviso de privacidad
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
