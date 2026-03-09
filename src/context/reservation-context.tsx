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

interface ReservationContextType {
  reservationItems: MenuItem[];
  addToReservation: (item: MenuItem) => void;
  removeFromReservation: (itemName: string) => void;
  clearReservation: () => void;
  itemCount: number;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [reservationItems, setReservationItems] = useState<MenuItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

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
