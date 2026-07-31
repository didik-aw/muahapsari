import { useEffect, useState } from "react";
import heroBride from "@/assets/dok hapsari manten cewe.jpeg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 800) * 0.18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1)` }}
      >
        <div className="absolute inset-y-0 right-0 w-full md:w-[68%] lg:w-[58%]">
          <img
            src={heroBride}
            alt="Pengantin wanita dalam busana adat Jawa yang anggun karya MUA Hapsari"
            width={1920}
            height={1280}
            className="h-full w-full object-cover object-[100%_center] brightness-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="container-lux relative z-10 w-full py-32">
        <div className="max-w-2xl">
          <h1
            className="animate-fade-up mt-8 font-display text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "150ms" }}
          >
            Setiap Perempuan Berhak Menjadi{" "}
            <span className="text-gradient-gold">Versi Tercantik</span> di Hari Istimewanya
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
            style={{ animationDelay: "300ms" }}
          >
            MUA Hapsari menghadirkan sentuhan rias yang elegan, natural, dan berkelas untuk
            menemani setiap momen berharga Anda. Kami percaya bahwa setiap wanita memiliki
            pesonanya sendiri, dan tugas kami adalah menampilkan kecantikan terbaik yang membuat
            Anda semakin percaya diri.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <a href="#galeri" className="btn-outline-light">
              Lihat Galeri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
