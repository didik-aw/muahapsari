import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "@/lib/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export function BookingModal({ isOpen, onClose, defaultPackage = "Rias Pengantin" }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    if (defaultPackage) setSelectedPackage(defaultPackage);
  }, [defaultPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let formattedDate = eventDate;
    if (eventDate) {
      try {
        formattedDate = new Date(eventDate).toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch {
        formattedDate = eventDate;
      }
    }

    const message = `Halo MUA Hapsari, saya ingin melakukan booking jadwal dengan rincian berikut:

📌 *Nama*: ${name}
📱 *Nomor HP*: ${phone}
🏠 *Alamat/Lokasi Acara*: ${address}
💄 *Paket Jasa*: ${selectedPackage}
📅 *Tanggal Acara*: ${formattedDate}

Apakah jadwal pada tanggal tersebut masih tersedia? Terima kasih!`;

    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const fullNumber = cleanNumber.startsWith("0") ? "62" + cleanNumber.slice(1) : cleanNumber;
    const waUrl = `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[24px] border border-gold/30 bg-background p-6 shadow-[var(--shadow-lift)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-border/50 text-ink-soft transition-colors hover:bg-gold hover:text-white"
          aria-label="Tutup modal"
        >
          ✕
        </button>

        <div className="text-center sm:text-left">
          <span className="eyebrow">Formulir Booking</span>
          <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Booking Jadwal MUA Hapsari
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
            Isi data di bawah ini untuk mengecek ketersediaan tanggal dan paket jasa via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              placeholder="Masukkan nama Anda..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-1.5">
              Nomor HP / WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 081234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-1.5">
              Alamat Lengkap / Lokasi Acara
            </label>
            <textarea
              required
              rows={2}
              placeholder="Contoh: Dk. Ngaran RT07 RW03, Teras, Boyolali"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-1.5">
                Paket Jasa
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-3 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
              >
                <option value="Rias Pengantin">Rias Pengantin</option>
                <option value="Rias Keluarga">Rias Keluarga</option>
                <option value="Rias Wisuda">Rias Wisuda</option>
                <option value="Make Up Party">Make Up Party</option>
                <option value="Paket Custom / Lainnya">Paket Custom / Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-1.5">
                Tanggal Acara
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-3 py-3 text-sm text-ink outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-gold w-full mt-6 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Kirim via WhatsApp</span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
