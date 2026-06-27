"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founder } from "@/lib/content";

export function Founder() {
  return (
    <section id="founder" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-mankuu-cream shadow-sm md:rounded-3xl">
          <div className="grid items-stretch lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="founder-image-wrap relative flex min-h-[280px] items-center justify-center p-4 md:min-h-[500px] md:p-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="relative h-[240px] w-full max-w-[220px] overflow-hidden rounded-xl shadow-xl ring-4 ring-white md:h-[420px] md:max-w-[340px] md:rounded-2xl"
              >
                <Image
                  src="/images/founder.jpg"
                  alt={`${founder.name}, ${founder.role}`}
                  fill
                  className="founder-portrait"
                  sizes="340px"
                  priority={false}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center p-5 md:p-12"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red"
              >
                Meet the Founder
              </motion.p>
              <h2 className="mt-2 text-2xl font-extrabold text-mankuu-charcoal md:mt-3 md:text-3xl">
                {founder.name}
              </h2>
              <p className="mt-1 text-base font-semibold text-mankuu-muted md:text-lg">
                {founder.role}
              </p>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-mankuu-muted md:mt-6 md:space-y-4 md:text-base">
                {founder.bio.map((p, idx) => (
                  <p key={idx} className={idx >= 1 ? "hidden sm:block" : undefined}>{p}</p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 md:mt-8">
                {founder.credentials.map((cred, i) => (
                  <motion.span
                    key={cred}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-mankuu-red/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-mankuu-red"
                  >
                    {cred}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
