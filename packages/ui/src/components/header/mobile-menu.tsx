"use client";

import { useState, useCallback, useEffect } from "react";
import type { NavItem, NavDropdown } from "../../types/navigation";
import { isNavDropdown } from "../../types/navigation";
import { X, ChevronDown } from "lucide-react";

/**
 * MobileMenu — Full-screen slide-in menu for mobile viewports.
 *
 * Renders all nav items vertically with collapsible dropdown sections.
 * Uses semantic brand colors so it adapts to any app's theme automatically.
 */
interface MobileMenuProps {
  readonly items: readonly NavItem[];
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  // Close menu on ESC key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = useCallback((label: string) => {
    setExpandedDropdown((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[105] transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-4 border-b border-brand-muted">
          <span className="text-brand-primary font-bold text-lg">Menú</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-brand-primary hover:bg-brand-muted rounded-lg transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-65px)]">
          <ul className="space-y-1">
            {items.map((item) => {
              if (isNavDropdown(item)) {
                const isExpanded = expandedDropdown === item.label;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-brand-primary font-medium rounded-lg hover:bg-brand-background transition-colors"
                      aria-expanded={isExpanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <a
                            href={subItem.href}
                            onClick={onClose}
                            className="block pl-8 pr-4 py-2.5 text-sm text-brand-text hover:text-brand-secondary hover:bg-brand-background rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-brand-primary font-medium rounded-lg hover:bg-brand-background transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
