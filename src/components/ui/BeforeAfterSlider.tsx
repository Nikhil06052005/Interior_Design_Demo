"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  autoPlay?: boolean;
}

export function BeforeAfterSlider({
  before,
  after,
  alt,
  autoPlay = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromEvent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, x)));
  }, []);

  useEffect(() => {
    if (!autoPlay || dragging) return;
    const interval = setInterval(() => {
      setPosition((p) => {
        let next = p + directionRef.current * 1.2;
        if (next >= 85) directionRef.current = -1;
        if (next <= 15) directionRef.current = 1;
        return next;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [autoPlay, dragging]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-gray-200 shadow-lg"
      onMouseDown={(e) => {
        setDragging(true);
        updateFromEvent(e.clientX);
      }}
      onMouseMove={(e) => dragging && updateFromEvent(e.clientX)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => {
        setDragging(true);
        updateFromEvent(e.touches[0].clientX);
      }}
      onTouchMove={(e) => dragging && updateFromEvent(e.touches[0].clientX)}
      onTouchEnd={() => setDragging(false)}
    >
      <Image src={after} alt={`${alt} after`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full" style={{ width: containerWidth || "100%" }}>
          <Image src={before} alt={`${alt} before`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <svg className="h-5 w-5 text-mankuu-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-mankuu-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
