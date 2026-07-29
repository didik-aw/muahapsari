import { WHATSAPP_LINK } from "@/lib/site";

export function CallToAction() {
  return (
    <section className="bg-[image:var(--gradient-gold)] py-24 sm:py-32">
      <div className="container-lux text-center">
        <h2 className="reveal mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl" data-reveal>
          Siap Tampil Cantik di Momen Istimewa Anda?
        </h2>
        <p
          className="reveal mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base"
          data-reveal
          data-delay="120"
        >
          Percayakan momen spesial Anda kepada MUA Hapsari. Kami siap menghadirkan riasan yang
          elegan, natural, dan berkesan untuk setiap acara penting dalam hidup Anda.
        </p>
        <div className="reveal mt-10" data-reveal data-delay="240">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-medium text-gold-dark shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-1 hover:bg-cream"
          >
            Booking via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
