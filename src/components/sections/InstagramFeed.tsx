"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact, instagramPosts } from "@/lib/content";

export function InstagramFeed() {
  return (
    <section className="section-padding border-t border-mankuu-border bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red">
              Follow Us
            </p>
            <h2 className="section-title mt-2 text-mankuu-charcoal md:mt-3">
              Latest on Instagram
            </h2>
          </div>
          <Link
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-mankuu-red px-4 py-2 text-xs font-semibold text-mankuu-red transition-colors hover:bg-mankuu-red hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
          >
            @mankuu_architectural_designer
          </Link>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative aspect-square overflow-hidden rounded-lg ${
                i >= 4 ? "hidden sm:block" : ""
              }`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="200px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <svg className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
