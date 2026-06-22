"use client";

import { useCallback, useState } from "react";

/**
 * useCarousel — minimal index state machine for carousels/sliders.
 *
 * Wraps around at both ends so `next` from the last slide returns to the
 * first, and `prev` from the first goes to the last.
 */
export function useCarousel(length: number) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((current) => (length === 0 ? 0 : (current + 1) % length));
  }, [length]);

  const prev = useCallback(() => {
    setIndex((current) => (length === 0 ? 0 : (current - 1 + length) % length));
  }, [length]);

  const goTo = useCallback((target: number) => {
    setIndex(() => (length === 0 ? 0 : ((target % length) + length) % length));
  }, [length]);

  return { index, next, prev, goTo } as const;
}
