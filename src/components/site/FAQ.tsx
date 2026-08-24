import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useBooking } from "@/context/BookingContext";

const faqs = [
  {
    question: "Apakah MUA Hapsari bisa merias ke lokasi / home service?",
    answer:
      "Tentu! Kami melayani jasa rias panggilan (home service) untuk wilayah Boyolali, Solo, Karanganyar, Klaten, dan sekitarnya. Kami akan datang ke lokasi Anda sesuai jadwal kesepakatan.",
  },
  {
    question: "Bagaimana cara booking jadwal dan konsultasi terlebih dahulu?",
    answer:
      "Anda bisa klik tombol 'Booking via WhatsApp' atau isi formulir pertanyaan di website ini. Kami menyarankan untuk melakukan booking jauh-jauh hari agar tanggal acara Anda aman tersimpan.",
  },
  {
    question: "Produk kosmetik apa yang digunakan MUA Hapsari?",
    answer:
      "Kami hanya menggunakan produk makeup original berkualitas tinggi (high-end & premium local brands) yang teruji aman, nyaman di kulit sensitif, dan tahan lama hingga belasan jam.",
  },
  {
    question: "Apakah melayani paket lengkap pengantin (termasuk busana & melati)?",
    answer:
      "Ya, kami menyediakan paket rias pengantin saja maupun paket lengkap yang meliputi busana pengantin, rias keluarga, serta peranti melati dan aksesoris.",
  },
  {
    question: "Berapa lama proses pengerjaan riasan untuk pengantin atau wisuda?",
    answer:
      "Rias pengantin biasanya membutuhkan waktu sekitar 2 hingga 2.5 jam per sesi. Sedangkan untuk rias wisuda atau party membutuhkan waktu sekitar 1 hingga 1.5 jam.",
  },
];

export function FAQ() {
  const { openBookingModal } = useBooking();

  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal" data-reveal>
            Tanya Jawab
          </span>
          <h2
            className="reveal mt-5 font-display text-4xl text-ink sm:text-5xl"
            data-reveal
            data-delay="100"
          >
            Pertanyaan Calon Customer
          </h2>
          <p
            className="reveal mt-4 text-sm text-ink-soft sm:text-base"
            data-reveal
            data-delay="150"
          >
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh calon customer kami.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl rounded-[24px] border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-10" data-reveal data-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-xl border border-border/60 px-4 py-1 transition-colors duration-200 hover:border-gold/40"
              >
                <AccordionTrigger className="font-display text-base text-ink hover:text-gold-dark hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl bg-[image:var(--gradient-blush)] p-6 text-center border border-gold/20">
            <h4 className="font-display text-lg text-ink">
              Punya Pertanyaan Lain?
            </h4>
            <p className="mt-1 text-xs text-ink-soft sm:text-sm">
              Jangan ragu untuk bertanya langsung kepada kami. Kami siap membantu konsultasi riasan Anda!
            </p>
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="btn-gold mt-4 py-2.5 px-6 text-xs sm:text-sm cursor-pointer"
            >
              Ajukan Pertanyaan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
