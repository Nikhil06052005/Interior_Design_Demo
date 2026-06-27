"use client";

import Image from "next/image";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { useConsultation } from "@/context/ConsultationContext";
import { heroImage } from "@/lib/content";

export function Hero() {
  const { openModal } = useConsultation();

  return (
    <section id="home" className="relative min-h-[58vh] pt-14 md:min-h-[75vh] lg:min-h-[88vh]">
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

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 md:gap-10 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-20">
        <div className="animate-fade-in-up max-w-xl text-center lg:text-left">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm md:px-4 md:py-1.5 md:text-xs">
            Moga, Punjab
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:mt-5 lg:text-[3.25rem] lg:leading-[1.15]">
            Best Interior Designer
            <br />
            <span className="text-mankuu-gold">in Moga, Punjab</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base lg:mt-5 lg:text-lg">
            Your Dream Home — Designed, Built, Delivered. Modular kitchens, full home
            interiors, Vastu & architecture by Manjeet Singh.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:mt-8 lg:justify-start lg:gap-6">
            <div className="text-center lg:text-left">
              <p className="text-xl font-extrabold text-white md:text-2xl">150+</p>
              <p className="text-[10px] text-white/70 md:text-xs">Homes Designed</p>
            </div>
            <div className="hidden h-8 w-px bg-white/30 sm:block" />
            <div className="text-center lg:text-left">
              <p className="text-xl font-extrabold text-white md:text-2xl">10+</p>
              <p className="text-[10px] text-white/70 md:text-xs">Years Experience</p>
            </div>
            <div className="hidden h-8 w-px bg-white/30 sm:block" />
            <div className="text-center lg:text-left">
              <p className="text-xl font-extrabold text-white md:text-2xl">Free</p>
              <p className="text-[10px] text-white/70 md:text-xs">3D Consultation</p>
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="mt-6 w-full rounded-lg bg-mankuu-red px-6 py-3.5 text-sm font-bold text-white shadow-lg lg:hidden"
          >
            Get Free Estimate
          </button>
        </div>

        <div
          className="animate-fade-in-up hidden w-full max-w-md shrink-0 lg:block"
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
