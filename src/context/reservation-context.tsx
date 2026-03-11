"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
  category?: string;
}

export interface ReservationFormData {
  guests: string;
  type: string;
  time: string;
  date: string;
  fullName: string;
  email: string;
  phone: string;
  hasSpecialRequest: boolean;
  specialRequests: string;
}

interface ReservationContextType {
  reservationItems: MenuItem[];
  addToReservation: (item: MenuItem) => void;
  removeFromReservation: (itemName: string) => void;
  clearReservation: () => void;
  itemCount: number;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  formData: ReservationFormData;
  updateFormData: (data: Partial<ReservationFormData>) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [reservationItems, setReservationItems] = useState<MenuItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    guests: "2",
    type: "Lunch",
    time: "",
    date: "",
    fullName: "",
    email: "",
    phone: "",
    hasSpecialRequest: false,
    specialRequests: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("simmer_reservation_list");
    if (saved) {
      try {
        setReservationItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse reservation list", e);
      }
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(
      "simmer_reservation_list",
      JSON.stringify(reservationItems),
    );
  }, [reservationItems]);

  const addToReservation = (item: MenuItem) => {
    setReservationItems((prev) => {
      // Avoid duplicates
      if (prev.some((i) => i.name === item.name)) return prev;
      return [...prev, item];
    });
  };

  const removeFromReservation = (itemName: string) => {
    setReservationItems((prev) =>
      prev.filter((item) => item.name !== itemName),
    );
  };

  const clearReservation = () => {
    setReservationItems([]);
    setFormData({
      guests: "2",
      type: "Lunch",
      time: "",
      date: "",
      fullName: "",
      email: "",
      phone: "",
      hasSpecialRequest: false,
      specialRequests: "",
    });
  };

  const updateFormData = (data: Partial<ReservationFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const itemCount = reservationItems.length;

  return (
    <ReservationContext.Provider
      value={{
        reservationItems,
        addToReservation,
        removeFromReservation,
        clearReservation,
        itemCount,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        formData,
        updateFormData,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
