"use client";

import { useConsultation } from "@/context/ConsultationContext";

export function StickyCTA() {
  const { openModal } = useConsultation();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <button
        type="button"
        onClick={openModal}
        className="w-full rounded-lg bg-mankuu-red py-3.5 text-sm font-bold text-white shadow-lg shadow-mankuu-red/20"
      >
        Book Free Consultation
      </button>
    </div>
  );
}
