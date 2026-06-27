"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "@/context/ConsultationContext";
import { services } from "@/lib/content";

export function EndToEndServices() {
  const { openModal } = useConsultation();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center md:mb-12"
        >
          <h2 className="section-title text-mankuu-charcoal">
            End-to-End Interior Solutions
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-mankuu-muted md:mt-3">
            Delivered seamlessly — from architectural planning to the final handover.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={openModal}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex overflow-hidden rounded-xl bg-white text-left shadow-md transition-shadow hover:shadow-xl sm:rounded-2xl"
            >
              <div className="relative h-24 w-28 shrink-0 sm:h-auto sm:w-2/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="40vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-3 sm:p-6">
                <h3 className="text-sm font-bold text-mankuu-charcoal group-hover:text-mankuu-red sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-mankuu-muted sm:mt-2 sm:line-clamp-none sm:text-sm">
                  {service.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-mankuu-red sm:mt-4 sm:text-sm">
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
