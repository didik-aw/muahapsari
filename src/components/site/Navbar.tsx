import { useEffect, useState } from "react";
import hapsariSymbol from "@/assets/hapsari-symbol.png";
import { useBooking } from "@/context/BookingContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openBookingModal } = useBooking();

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
          <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gold/60 shadow-sm">
            <img
              src={hapsariSymbol}
              alt="Logo MUA Hapsari"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
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

        <button
          type="button"
          onClick={() => openBookingModal()}
          className="btn-gold shrink-0 px-5 py-3 text-xs sm:px-7 sm:text-sm cursor-pointer"
        >
          Booking via WhatsApp
        </button>
      </nav>
    </header>
  );
}
