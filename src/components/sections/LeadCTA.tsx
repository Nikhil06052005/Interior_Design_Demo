"use client";

import { motion } from "framer-motion";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { contact } from "@/lib/content";

export function LeadCTA() {
  const whatsappUrl = `https://wa.me/91${contact.phone}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-mankuu-charcoal">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center p-8 md:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-gold">
                Get Started Today
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Confused Between Styles, Layouts & Costs?
              </h2>
              <p className="mt-4 text-white/75">
                Meet a designer who&apos;ll bring it all together — completely free.
                Get 3D designs and a personalised quote for your home.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:+91${contact.phone}`}
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-semibold">{contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span>{contact.email}</span>
                </a>
                <p className="flex items-center gap-3 text-white/90">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </span>
                  <span>{contact.address}</span>
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1fb855]"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12"
            >
              <h3 className="text-xl font-bold text-mankuu-charcoal">
                Book Your Free Consultation
              </h3>
              <p className="mt-1 text-sm text-mankuu-muted">
                We&apos;ll reach out within 24 hours.
              </p>
              <div className="mt-6">
                <ConsultationForm idPrefix="contact-" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
