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

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide sm:mt-10 lg:hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="min-w-[75vw] shrink-0 snap-center sm:min-w-[45vw]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mankuu-red text-lg font-extrabold sm:h-16 sm:w-16 sm:rounded-2xl sm:text-xl">
                {step.step}
              </div>
              <h3 className="mt-3 text-base font-bold sm:mt-5 sm:text-lg">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:mt-2 sm:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

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
