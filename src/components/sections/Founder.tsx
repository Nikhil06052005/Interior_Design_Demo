"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founder } from "@/lib/content";

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-mankuu-cream via-amber-50/30 to-mankuu-cream" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-mankuu-gold/20 to-mankuu-red/10" />
            <div className="founder-frame relative overflow-hidden rounded-lg border-2 border-mankuu-gold bg-gradient-to-br from-amber-50 to-stone-100">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt={`${founder.name}, ${founder.role}`}
                  fill
                  className="founder-portrait object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 90% 85% at 50% 40%, transparent 50%, rgba(250,247,242,0.4) 100%)",
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-sm bg-mankuu-red px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">
              Est. Moga
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeading
              eyebrow="Meet the Founder"
              title={founder.name}
              subtitle={founder.role}
            />

            <div className="mt-8 space-y-4 text-base leading-relaxed text-mankuu-muted">
              {founder.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {founder.credentials.map((cred) => (
                <span
                  key={cred}
                  className="rounded-full border border-mankuu-gold/40 bg-mankuu-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mankuu-charcoal"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
