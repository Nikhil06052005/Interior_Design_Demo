"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

const SLIDE_MS = 4000;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-mankuu-gold">
      {Array.from({ length: count }).map((_, j) => (
        <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  className = "",
}: {
  t: (typeof testimonials)[number];
  className?: string;
}) {
  return (
    <article className={`flex flex-col rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 ${className}`}>
      <Stars count={t.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-mankuu-muted">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-mankuu-border pt-4">
        <p className="font-bold text-mankuu-charcoal">{t.name}</p>
        <p className="text-xs text-mankuu-muted">
          {t.city} · {t.project}
        </p>
      </div>
    </article>
  );
}

function MobileTestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const t = testimonials[index];

  return (
    <div
      className="mt-6 md:hidden"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="relative min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <TestimonialCard t={t} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Review ${i + 1} of ${testimonials.length}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-mankuu-red" : "w-2 bg-mankuu-border"
            }`}
          />
        ))}
      </div>

      <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wider text-mankuu-muted">
        {index + 1} / {testimonials.length}
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-mankuu-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red">
            Client Reviews
          </p>
          <h2 className="section-title mt-2 text-mankuu-charcoal md:mt-3">
            What Our Clients Say
          </h2>
        </motion.div>

        <MobileTestimonialSlider />

        <div className="mt-6 hidden gap-5 md:grid md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
