"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ConsultationContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(null);
const LOADER_KEY = "mankuu-intro-seen";
const AUTO_OPEN_DELAY_MS = 10000;

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (hasAutoOpened) return;

    let timer: ReturnType<typeof setTimeout>;

    const scheduleOpen = () => {
      timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, AUTO_OPEN_DELAY_MS);
    };

    if (sessionStorage.getItem(LOADER_KEY) === "1") {
      scheduleOpen();
    } else {
      const onLoaderDone = () => scheduleOpen();
      window.addEventListener("mankuu:loader-done", onLoaderDone, { once: true });
      return () => {
        window.removeEventListener("mankuu:loader-done", onLoaderDone);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  return (
    <ConsultationContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return ctx;
}
