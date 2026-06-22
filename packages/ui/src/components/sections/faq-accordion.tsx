"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "../../types/program";

interface FAQAccordionProps {
  readonly items: readonly FAQItem[];
  readonly heading?: string;
}

/**
 * FAQAccordion — expandable question/answer list. One panel open at a time.
 * All accents resolve through brand tokens.
 */
export function FAQAccordion({ items, heading }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {heading && (
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center mb-10">
            {heading}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-brand-muted overflow-hidden bg-brand-background/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full text-left px-5 py-4 font-medium text-brand-primary hover:bg-brand-muted/30 transition-colors"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-brand-text/80 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
