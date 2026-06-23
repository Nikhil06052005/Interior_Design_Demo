"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "@/context/ConsultationContext";
import { services } from "@/lib/content";

export function EndToEndServices() {
  const { openModal } = useConsultation();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-mankuu-charcoal md:text-4xl">
            End-to-End Interior Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-mankuu-muted">
            Delivered seamlessly — from architectural planning to the final handover.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={openModal}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex overflow-hidden rounded-2xl bg-white text-left shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 w-2/5 shrink-0 sm:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="40vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <h3 className="text-lg font-bold text-mankuu-charcoal group-hover:text-mankuu-red">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mankuu-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mankuu-red">
                  Get Free Estimate
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
