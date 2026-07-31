import React, { createContext, useContext, useState } from "react";
import { BookingModal } from "@/components/site/BookingModal";

interface BookingContextType {
  openBookingModal: (pkg?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Rias Pengantin");

  const openBookingModal = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        defaultPackage={selectedPackage}
      />
    </BookingContext.Provider>
  );
}
