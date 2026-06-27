"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

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

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 ${
                i >= 2 ? "hidden sm:flex" : ""
              }`}
            >
              <div className="flex gap-0.5 text-mankuu-gold">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-mankuu-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-mankuu-border pt-4">
                <p className="font-bold text-mankuu-charcoal">{t.name}</p>
                <p className="text-xs text-mankuu-muted">
                  {t.city} · {t.project}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
