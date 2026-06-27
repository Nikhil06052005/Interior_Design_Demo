"use client";

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BeforeAfterVideoPair } from "@/components/ui/BeforeAfterVideoPair";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { beforeAfterProjects, featuredBeforeAfter } from "@/lib/content";

export function BeforeAfterSection() {
  const featured = featuredBeforeAfter;

  return (
    <section id="transformations" className="bg-mankuu-charcoal py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-gold">
            Transformations
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Before & After — Real MANKUU Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            From CAD planning to finished interiors — watch the journey on video or drag the slider.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <BeforeAfterVideoPair />
          <p className="mt-4 text-center text-xs text-white/50">
            Both videos play together · Tap to pause or resume
          </p>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <BeforeAfterSlider
              before={featured.before}
              after={featured.after}
              alt={featured.title}
              autoPlay
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-sm font-semibold uppercase tracking-widest text-mankuu-gold">
              {featured.location}
            </p>
            <h3 className="mt-2 text-2xl font-bold">{featured.title}</h3>
            <p className="mt-4 leading-relaxed text-white/75">
              {featured.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                alt={project.title}
                autoPlay={false}
              />
              <p className="mt-3 text-sm font-semibold text-white">{project.title}</p>
              <p className="text-xs text-white/60">{project.location}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
