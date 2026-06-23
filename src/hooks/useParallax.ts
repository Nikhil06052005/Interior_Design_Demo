"use client";

import { useEffect, useState } from "react";

export function useParallax() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setEnabled(!motionQuery.matches && !mobileQuery.matches);
    };

    update();
    motionQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
