"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-b border-mankuu-border bg-mankuu-cream py-5 md:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 md:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="text-2xl font-extrabold text-mankuu-red md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-mankuu-muted md:mt-1 md:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
