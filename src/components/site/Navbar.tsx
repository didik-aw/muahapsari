import { useEffect, useState } from "react";
import logoHapsari from "@/assets/logo-hapsari.png.asset.json";
import { WHATSAPP_LINK } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-lux grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              scrolled ? "border-gold/60 bg-blush" : "border-white/50 bg-white/10"
            }`}
          >
            <span
              className={`font-display text-lg leading-none ${scrolled ? "text-gold-dark" : "text-white"}`}
            >
              H
            </span>
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-lg tracking-wide transition-colors duration-300 sm:text-xl ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              MUA Hapsari
            </span>
            <span
              className={`hidden text-[0.6rem] tracking-[0.3em] uppercase transition-colors duration-300 sm:block ${
                scrolled ? "text-ink-soft" : "text-white/70"
              }`}
            >
              Beauty &amp; Wedding
            </span>
          </span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold shrink-0 px-5 py-3 text-xs sm:px-7 sm:text-sm"
        >
          Booking via WhatsApp
        </a>
      </nav>
    </header>
  );
}
