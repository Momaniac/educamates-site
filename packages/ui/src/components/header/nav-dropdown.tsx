"use client";

import { useState } from "react";
import type { NavItem, NavDropdown as NavDropdownType } from "../../types/navigation";
import { isNavDropdown } from "../../types/navigation";
import { ChevronDown } from "lucide-react";

/**
 * NavDropdownMenu — A single dropdown menu item for the desktop navbar.
 *
 * Renders a button with a chevron that reveals a dropdown panel on hover.
 * All colors are semantic (brand-primary, brand-secondary, brand-background)
 * so the dropdown automatically adapts to whatever theme is active.
 */
interface NavDropdownProps {
  readonly dropdown: NavDropdownType;
}

export function NavDropdownMenu({ dropdown }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-white hover:text-brand-secondary transition-colors font-medium text-[13px] 2xl:text-sm leading-none whitespace-nowrap"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        {dropdown.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-full left-0 pt-2 transition-all duration-150 z-50`}
      >
        <div className="bg-white rounded-md shadow-xl py-2 min-w-[230px]" role="menu">
          {dropdown.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-brand-primary hover:bg-brand-background hover:text-brand-secondary transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * DesktopNav — Renders the full horizontal navigation for xl+ screens.
 */
interface DesktopNavProps {
  readonly items: readonly NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className="hidden xl:flex min-w-0 flex-nowrap items-center justify-center gap-x-3 2xl:gap-x-5">
      {items.map((item) => {
        if (isNavDropdown(item)) {
          return <NavDropdownMenu key={item.label} dropdown={item} />;
        }
        return (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center text-white hover:text-brand-secondary transition-colors font-medium text-[13px] 2xl:text-sm leading-none whitespace-nowrap"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
