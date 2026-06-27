"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "@/context/ConsultationContext";
import { roomCategories } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function RoomCategories() {
  const { openModal } = useConsultation();

  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red">
            End-to-End Interiors
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-mankuu-charcoal md:text-4xl">
            Designed for Every Room
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-mankuu-muted">
            Browse our interior solutions for kitchens, living rooms, bedrooms and more.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {roomCategories.map((room) => (
            <motion.button
              key={room.id}
              type="button"
              variants={card}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
              className="room-card group relative aspect-[3/4] overflow-hidden rounded-2xl text-left"
            >
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />
              <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 p-5">
                <motion.p
                  className="text-xs font-semibold uppercase tracking-wider text-mankuu-gold"
                  initial={false}
                >
                  {room.subtitle}
                </motion.p>
                <h3 className="mt-1 text-lg font-bold text-white">{room.title}</h3>
                <span className="mt-2 inline-flex translate-y-2 items-center gap-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Get Estimate
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
