function FloralCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 196C4 120 40 60 120 24"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M28 196C28 132 62 84 132 52"
        stroke="var(--rose)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="120" cy="24" r="7" stroke="var(--gold)" strokeWidth="1.2" />
      <circle cx="120" cy="24" r="2.4" fill="var(--rose)" />
      <circle cx="132" cy="52" r="4.5" stroke="var(--rose)" strokeWidth="1" />
      <path d="M74 84c14-8 24-4 30 8-14 6-24 3-30-8Z" stroke="var(--gold)" strokeWidth="1.1" />
      <path d="M44 130c13-9 23-6 29 6-13 7-23 5-29-6Z" stroke="var(--rose)" strokeWidth="1" />
    </svg>
  );
}

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <FloralCorner className="pointer-events-none absolute -top-6 left-0 h-40 w-40 rotate-180 opacity-70 sm:h-56 sm:w-56" />
      <FloralCorner className="pointer-events-none absolute right-0 -bottom-6 h-40 w-40 opacity-70 sm:h-56 sm:w-56" />

      <div className="container-lux relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Tentang Kami
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            MUA Hapsari
          </h2>
          <span
            className="reveal mx-auto mt-6 block h-px w-24 bg-[image:var(--gradient-gold)]"
            data-reveal
            data-delay="180"
          />

          <div
            className="reveal mt-9 space-y-6 text-sm leading-loose text-ink-soft sm:text-base"
            data-reveal
            data-delay="240"
          >
            <p>
              Bagi kami, merias bukan sekadar mempercantik wajah. Kami ingin menghadirkan rasa
              percaya diri, kebahagiaan, dan kenangan yang akan selalu dikenang sepanjang hidup.
            </p>
            <p>
              Setiap wajah memiliki karakter yang unik, sehingga setiap sentuhan makeup kami dibuat
              secara personal agar hasilnya tetap natural, elegan, tahan lama, dan memancarkan
              kecantikan alami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
