"use client";

import { useState, useCallback } from "react";
import type { HeaderConfig, HeaderCTA } from "../../types/navigation";
import { DesktopNav } from "./nav-dropdown";
import { MobileMenu } from "./mobile-menu";
import { Menu, Users } from "lucide-react";

/**
 * Header — White-label navigation component.
 *
 * This is the primary demonstration of the multi-tenant pattern:
 *
 *   1. VISUAL IDENTITY is injected via `config` props (logo, nav items, CTA)
 *   2. COLOR PALETTE is resolved via CSS custom properties (--color-primary, etc.)
 *   3. COMPONENT CODE stays identical across all apps
 *
 * The same <Header /> renders completely different brands by changing
 * only the props and the CSS variables in each app's globals.css.
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │  apps/sitio-madre/globals.css    apps/submarca-a/globals.css │
 * │  --color-primary: #0c108c       --color-primary: #1a7a4c    │
 * │          ↓                               ↓                  │
 * │    ┌──────────────────────────────────────────┐              │
 * │    │   @educamates/ui  <Header config={...} />│              │
 * │    │   bg-brand-primary → resolves to :root   │              │
 * │    └──────────────────────────────────────────┘              │
 * └─────────────────────────────────────────────────────────────┘
 */
interface HeaderProps {
  readonly config: HeaderConfig;
}

function HeaderAction({ cta, mobile = false }: { readonly cta: HeaderCTA; readonly mobile?: boolean }) {
  const className = mobile
    ? "xl:hidden flex items-center gap-1.5 bg-brand-secondary text-white px-3 py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-md whitespace-nowrap"
    : "hidden xl:flex items-center gap-2 bg-brand-secondary hover:bg-brand-accent text-white px-4 2xl:px-5 py-2.5 rounded-full transition-all font-bold text-xs 2xl:text-sm hover:scale-105 shadow-lg whitespace-nowrap";
  const content = (
    <>
      {cta.icon ?? <Users className={mobile ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      {cta.label}
    </>
  );

  if (cta.href) {
    return (
      <a className={className} href={cta.href} onClick={cta.onClick}>
        {content}
      </a>
    );
  }

  if (cta.onClick) {
    return (
      <button type="button" className={className} onClick={cta.onClick}>
        {content}
      </button>
    );
  }

  return null;
}

export function Header({ config }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-brand-primary shadow-lg transition-all duration-200 ease-linear">
        <div className="container mx-auto px-4">
          <div className="flex xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto] items-center justify-between gap-2 xl:gap-3 2xl:gap-4 transition-all duration-200 ease-linear h-16 lg:h-24">

            {/* ── Logo (Desktop) ──────────────────────────────── */}
            <a
              className="hidden xl:flex items-center self-center shrink-0"
              href="/"
            >
              <img
                alt={config.logo.alt}
                loading="lazy"
                width={config.logo.width ?? 160}
                height={config.logo.height ?? 48}
                className="block object-contain w-auto h-9 2xl:h-12 max-w-[140px] 2xl:max-w-[170px]"
                style={{ color: "transparent" }}
                src={config.logo.src}
              />
            </a>

            {/* ── Logo (Mobile) ───────────────────────────────── */}
            <a className="xl:hidden flex items-center self-center shrink-0" href="/">
              <img
                alt={config.logo.alt}
                loading="eager"
                width={50}
                height={28}
                className="block object-contain w-auto h-8 max-h-[40px] transition-opacity duration-200 opacity-100"
                style={{ color: "transparent" }}
                src={config.logo.mobileSrc ?? config.logo.src}
              />
            </a>

            {/* ── Desktop Navigation ──────────────────────────── */}
            <DesktopNav items={config.navigation} />

            {/* ── Right-side actions ──────────────────────────── */}
            <div className="flex items-center self-center justify-end shrink-0 gap-2 sm:gap-4">

              {config.cta && <HeaderAction cta={config.cta} />}
              {config.cta && <HeaderAction cta={config.cta} mobile />}

              {/* Hamburger menu toggle (Mobile) */}
              <button
                type="button"
                className="xl:hidden text-white p-2"
                aria-label="Abrir menú"
                onClick={openMobileMenu}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu (Slide-in Panel) ──────────────────── */}
      <MobileMenu
        items={config.navigation}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}
