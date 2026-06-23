"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useParallax } from "@/hooks/useParallax";

const cards = [
  {
    label: "Living",
    color: "from-amber-100 to-amber-50",
    rotate: -8,
    z: 1,
    offset: { x: -20, y: 0 },
  },
  {
    label: "Kitchen",
    color: "from-stone-200 to-stone-100",
    rotate: 4,
    z: 2,
    offset: { x: 30, y: -30 },
  },
  {
    label: "Bedroom",
    color: "from-neutral-200 to-neutral-100",
    rotate: -2,
    z: 3,
    offset: { x: 0, y: -60 },
  },
];

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const parallaxEnabled = useParallax();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!parallaxEnabled || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    sceneRef.current.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (sceneRef.current) {
      sceneRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden blueprint-grid pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mankuu-cream via-mankuu-cream to-amber-50/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-20 pt-12 lg:flex-row lg:gap-16 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-mankuu-red">
            Moga, Punjab
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.1] text-mankuu-charcoal md:text-6xl lg:text-7xl">
            Spaces That{" "}
            <span className="text-mankuu-red">Inspire</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-mankuu-muted lg:mx-0 md:text-lg">
            Architectural design, refined interiors, Vastu consultation, and
            complete construction — crafted with precision by MANKUU.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button href="#contact">Book Free Consultation</Button>
            <Button href="#work" variant="outline">
              View Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <div
            className="hero-3d-scene relative h-[380px] w-full max-w-md md:h-[440px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={sceneRef}
              className="relative h-full w-full transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cards.map((card, i) => (
                <div
                  key={card.label}
                  className={`hero-card absolute left-1/2 top-1/2 h-56 w-44 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-mankuu-charcoal/10 bg-gradient-to-br ${card.color} shadow-xl md:h-64 md:w-52`}
                  style={{
                    transform: `translate(calc(-50% + ${card.offset.x}px), calc(-50% + ${card.offset.y}px)) rotateZ(${card.rotate}deg)`,
                    zIndex: card.z,
                  }}
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="h-20 rounded bg-mankuu-charcoal/5" />
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 rounded bg-mankuu-charcoal/10" />
                      <div className="h-2 w-1/2 rounded bg-mankuu-charcoal/10" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-mankuu-muted">
                      {card.label}
                    </span>
                  </div>
                  {i === 2 && (
                    <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mankuu-gold text-xs font-bold text-white shadow-lg">
                      3D
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <a href="#services" aria-label="Scroll down" className="text-mankuu-muted">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
