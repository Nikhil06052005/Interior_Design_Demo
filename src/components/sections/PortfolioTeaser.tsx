"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact, portfolioPlaceholders } from "@/lib/content";

export function PortfolioTeaser() {
  return (
    <section id="work" className="bg-mankuu-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-mankuu-charcoal md:text-4xl">
              From Vision to Reality
            </h2>
            <p className="mt-2 max-w-lg text-mankuu-muted">
              Success stories from homes we&apos;ve designed across Moga and Punjab.
            </p>
          </div>
          <span className="rounded-full bg-mankuu-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            Portfolio Coming Soon
          </span>
        </motion.div>

        <div className="relative mt-10 grid gap-5 sm:grid-cols-3">
          {portfolioPlaceholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {item.tag}
              </span>
            </motion.div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm">
            <div className="text-center px-6">
              <p className="text-xl font-bold text-mankuu-charcoal md:text-2xl">
                Full portfolio launching soon
              </p>
              <p className="mt-2 text-sm text-mankuu-muted">
                Follow us on Instagram for latest projects
              </p>
              <Link
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-mankuu-red px-6 py-3 text-sm font-bold text-white hover:bg-mankuu-red-dark"
              >
                @mankuu_architectural_designer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
