const services = [
  { icon: "👰", title: "Rias Pengantin", desc: "Riasan istimewa yang anggun dan tahan seharian untuk hari pernikahan Anda." },
  { icon: "👨‍👩‍👧", title: "Rias Keluarga", desc: "Tampilan serasi dan elegan untuk keluarga besar di acara sakral." },
  { icon: "🎓", title: "Rias Wisuda", desc: "Riasan segar dan natural agar foto kelulusan Anda selalu memesona." },
  { icon: "💄", title: "Make Up Party", desc: "Sentuhan glamor lembut untuk pesta, engagement, dan acara malam." },
];

export function Services() {
  return (
    <section id="layanan" className="bg-[image:var(--gradient-blush)] py-24 sm:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Layanan
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            Rangkaian Layanan Kami
          </h2>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-delay={i * 120}
              className="reveal group rounded-[20px] border border-border/70 bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:bg-[image:var(--gradient-cream)] hover:shadow-[var(--shadow-lift)]"
            >
              <span className="inline-grid h-16 w-16 place-items-center rounded-full bg-blush text-2xl ring-1 ring-gold/40 transition-all duration-300 group-hover:bg-white group-hover:ring-gold">
                {s.icon}
              </span>
              <h3 className="mt-6 font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-dark">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
