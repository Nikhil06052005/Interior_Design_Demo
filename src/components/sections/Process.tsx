"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="section-padding bg-mankuu-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-gold">
            How It Works
          </p>
          <h2 className="section-title mt-2 md:mt-3">
            From Design to Move-In
          </h2>
        </motion.div>

        {/* Phone — vertical timeline, saare steps ek saath clear dikhen */}
        <div className="mt-6 md:hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-4 pb-5 last:pb-0"
            >
              {i < processSteps.length - 1 && (
                <span
                  className="absolute left-[1.375rem] top-12 bottom-0 w-px bg-gradient-to-b from-mankuu-red/60 to-white/15"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mankuu-red text-sm font-extrabold shadow-lg shadow-mankuu-red/30">
                {step.step}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-base font-bold leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet — 2 column grid */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 lg:hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mankuu-red text-lg font-extrabold">
                {step.step}
              </div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop — horizontal row */}
        <div className="mt-14 hidden lg:flex">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-1 items-start"
            >
              <div className="min-w-0 flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mankuu-red text-xl font-extrabold">
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <div
                  className="mx-6 mt-8 h-px shrink-0 flex-1 bg-white/20"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
