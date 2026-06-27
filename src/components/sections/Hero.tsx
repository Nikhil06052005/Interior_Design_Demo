"use client";

import Image from "next/image";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { heroImage } from "@/lib/content";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroImage}
          alt="MANKUU interior design project — luxury living room and modular kitchen in Moga Punjab"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-in-up max-w-xl text-center lg:text-left">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Moga, Punjab
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Best Interior Designer
            <br />
            <span className="text-mankuu-gold">in Moga, Punjab</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            Your Dream Home — Designed, Built, Delivered. Modular kitchens, full home
            interiors, Vastu & architecture by Manjeet Singh.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold text-white">150+</p>
              <p className="text-xs text-white/70">Homes Designed</p>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold text-white">10+</p>
              <p className="text-xs text-white/70">Years Experience</p>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold text-white">Free</p>
              <p className="text-xs text-white/70">3D Consultation</p>
            </div>
          </div>
        </div>

        <div
          className="animate-fade-in-up w-full max-w-md shrink-0"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <h2 className="text-xl font-bold text-mankuu-charcoal">
              Get a Free Estimate
            </h2>
            <p className="mt-1 text-sm text-mankuu-muted">
              Share your details and get a personalised design consultation.
            </p>
            <div className="mt-5">
              <ConsultationForm idPrefix="hero-" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
