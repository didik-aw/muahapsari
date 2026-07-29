import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gold-dark text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,oklch(0.898_0.036_14/0.25))]" />
      <div className="container-lux relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">MUA Hapsari</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Jasa rias profesional untuk pengantin, keluarga, wisuda, dan pesta di Boyolali dan
            sekitarnya.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] text-white/70 uppercase">Alamat</h4>
          <address className="mt-4 text-sm leading-relaxed text-white/90 not-italic">
            Dk. Ngaran RT07 RW03
            <br />
            Randusari, Teras
            <br />
            Boyolali
          </address>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] text-white/70 uppercase">WhatsApp</h4>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-lg transition-opacity duration-300 hover:opacity-75"
          >
            {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/25">
        <div className="container-lux py-6 text-center text-xs text-white/80">
          Copyright © 2026 MUA Hapsari
        </div>
      </div>
    </footer>
  );
}
