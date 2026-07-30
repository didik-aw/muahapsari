import { useEffect, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4Asset from "@/assets/gallery-4.jpg.asset.json";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Riasan pengantin natural glam dengan veil" },
  { src: g2, alt: "Proses make up di studio oleh MUA Hapsari" },
  { src: g3, alt: "Riasan wisuda yang segar dan elegan" },
  { src: g4, alt: "Make up party dengan sentuhan glamor lembut" },
  { src: g5, alt: "Riasan pengantin adat dengan aksesori emas" },
  { src: g6, alt: "Rias keluarga serasi di acara pernikahan" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="galeri" className="bg-background py-24 sm:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Galeri
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            Momen Cantik Mereka
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.alt}
              type="button"
              onClick={() => setActive(i)}
              data-reveal
              data-delay={(i % 3) * 120}
              className="reveal-zoom group relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-rose/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-left text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {p.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[88vh] w-auto rounded-[20px] shadow-[var(--shadow-lift)]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Tutup galeri"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/40 text-xl text-white transition-colors duration-300 hover:bg-white/15"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
