"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "@/context/ConsultationContext";
import { portfolioProjects } from "@/lib/content";

export function Portfolio() {
  const { openModal } = useConsultation();

  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-red">
            Our Work
          </p>
          <h2 className="section-title mt-2 text-mankuu-charcoal md:mt-3">
            From Vision to Reality
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-mankuu-muted md:mt-3">
            Selected projects across Moga and Punjab — residential, commercial and Vastu-led designs.
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {portfolioProjects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={openModal}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`room-card group relative aspect-[4/5] overflow-hidden rounded-xl text-left sm:rounded-2xl ${
                i >= 4 ? "hidden md:block" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.name} - ${project.type}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs font-medium text-mankuu-gold">{project.location}</p>
                <h3 className="mt-1 text-lg font-bold text-white">{project.name}</h3>
                <p className="mt-1 text-xs text-white/80">{project.type}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Get Similar Design
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
