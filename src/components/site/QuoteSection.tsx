export function QuoteSection() {
  return (
    <section className="bg-[image:var(--gradient-cream)] py-24 sm:py-32">
      <div className="container-lux">
        <blockquote
          className="reveal-zoom mx-auto max-w-4xl text-center font-display text-2xl leading-relaxed text-ink italic sm:text-3xl lg:text-4xl"
          data-reveal
        >
          <span className="mb-6 block text-4xl text-gold not-italic">&ldquo;</span>
          Karena setiap senyuman yang tulus berawal dari rasa percaya diri, dan setiap momen indah
          pantas dikenang dengan penampilan terbaik.
        </blockquote>
      </div>
    </section>
  );
}
