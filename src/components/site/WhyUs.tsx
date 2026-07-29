const reasons = [
  { icon: "✨", title: "Natural Look", desc: "Riasan yang menyempurnakan, bukan mengubah wajah asli Anda." },
  { icon: "💎", title: "Produk Berkualitas", desc: "Kosmetik premium, aman, dan nyaman untuk semua jenis kulit." },
  { icon: "❤️", title: "Pelayanan Ramah", desc: "Kami menemani Anda dengan hangat dari konsultasi hingga acara." },
  { icon: "📸", title: "Tahan Lama & Siap Difoto", desc: "Hasil makeup flawless di kamera dan bertahan sepanjang hari." },
];

export function WhyUs() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Keunggulan
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            Kenapa Memilih MUA Hapsari
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-reveal
              data-delay={i * 120}
              className="reveal-left group text-center"
            >
              <span className="inline-grid h-20 w-20 place-items-center rounded-full bg-blush text-3xl ring-1 ring-gold/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-soft)]">
                {r.icon}
              </span>
              <h3 className="mt-6 font-display text-lg text-ink">{r.title}</h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-ink-soft">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
