import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dinda Ayu",
    role: "Pengantin, Boyolali",
    text: "Riasannya benar-benar natural tapi tetap mewah. Sampai malam hari makeup masih rapi dan hasil fotonya sempurna. Terima kasih MUA Hapsari!",
    initial: "D",
  },
  {
    name: "Rani Kusuma",
    role: "Wisudawati, Solo",
    text: "Pelayanannya ramah sekali, dari konsultasi sampai hari H dibimbing dengan sabar. Wajah saya terlihat segar dan tetap seperti diri sendiri.",
    initial: "R",
  },
  {
    name: "Bu Sri Wahyuni",
    role: "Rias Keluarga",
    text: "Satu keluarga dirias dengan hasil serasi dan elegan. Semua tamu memuji. Sangat profesional dan tepat waktu.",
    initial: "S",
  },
  {
    name: "Meita Prameswari",
    role: "Make Up Party",
    text: "Glamor tapi tidak berlebihan, persis seperti yang saya mau. Produknya nyaman di kulit sensitif saya.",
    initial: "M",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[image:var(--gradient-blush)] py-24 sm:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Testimoni
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            Kata Mereka Tentang Kami
          </h2>
        </div>

        <div className="reveal relative mx-auto mt-14 max-w-3xl" data-reveal data-delay="180">
          <div className="relative min-h-[26rem] sm:min-h-[21rem]">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                aria-hidden={i !== index}
                className={`absolute inset-0 flex flex-col justify-center rounded-[20px] bg-card p-6 sm:p-10 text-center shadow-[var(--shadow-soft)] transition-opacity duration-700 overflow-y-auto ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <span className="mx-auto grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blush font-display text-xl text-gold-dark ring-1 ring-gold/50">
                  {t.initial}
                </span>
                <div className="mt-3 text-gold text-sm">★★★★★</div>
                <blockquote className="mt-3 font-display text-base leading-relaxed text-ink italic sm:text-xl">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs sm:text-sm text-ink-soft">
                  <span className="block font-medium text-ink">{t.name}</span>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Testimoni ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-gold/35 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
