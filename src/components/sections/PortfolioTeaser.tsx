"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComingSoonBadge } from "@/components/ui/ComingSoonBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, portfolioPlaceholders } from "@/lib/content";

export function PortfolioTeaser() {
  return (
    <section id="work" className="bg-mankuu-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Selected Projects"
            subtitle="A glimpse into the spaces we create — full portfolio launching soon."
            light
          />
          <ComingSoonBadge label="Portfolio On The Way" />
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioPlaceholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-mankuu-charcoal/40 transition-opacity group-hover:bg-mankuu-charcoal/30" />
            </motion.div>
          ))}

          <div className="glass-overlay absolute inset-0 flex flex-col items-center justify-center rounded-lg text-center">
            <p className="font-display text-2xl font-semibold text-mankuu-charcoal md:text-3xl">
              Portfolio launching soon
            </p>
            <p className="mt-3 max-w-md px-4 text-sm text-mankuu-muted">
              Follow us on Instagram for the latest projects and behind-the-scenes
              updates.
            </p>
            <Link
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-mankuu-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a8181d]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @mankuu_architectural_designer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
