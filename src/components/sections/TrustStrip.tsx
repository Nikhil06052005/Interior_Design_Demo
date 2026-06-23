"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-mankuu-charcoal/10 bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-mankuu-red md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-mankuu-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
