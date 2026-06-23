"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useConsultation } from "@/context/ConsultationContext";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { contact } from "@/lib/content";

export function ConsultationModal() {
  const { isOpen, closeModal } = useConsultation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-backdrop absolute inset-0"
            onClick={closeModal}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 26, stiffness: 380 }}
            className="relative z-10 w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-mankuu-red px-5 py-4 text-white">
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                Free Consultation
              </p>
              <h2 className="mt-0.5 text-lg font-bold leading-tight">
                Meet Our Designer
              </h2>
              <p className="mt-1 text-xs text-white/85">
                {contact.owner} · 3D designs & quote
              </p>
            </div>

            <div className="px-5 py-4">
              <ConsultationForm
                idPrefix="modal-"
                mini
                onSuccess={() => setTimeout(closeModal, 1800)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
