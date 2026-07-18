"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Floating back-to-top button. Appears once the hero (`#top`) has scrolled out
 * of view, via IntersectionObserver — no scroll listener needed. Client-side
 * for the observer and click handler.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-default bg-card-bg/90 text-fg-muted shadow-[0_8px_24px_-12px_rgba(32,29,23,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-accent-fg hover:text-accent-fg ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden className="h-5 w-5" />
    </button>
  );
}
