import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BeforeAfterVideoPair } from "@/components/ui/BeforeAfterVideoPair";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { beforeAfterProjects, featuredBeforeAfter } from "@/lib/content";

export function BeforeAfterSection() {
  const featured = featuredBeforeAfter;

  return (
    <section id="transformations" className="section-padding bg-mankuu-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mankuu-gold">
            Transformations
          </p>
          <h2 className="section-title mt-2 md:mt-3">
            Before & After — Real MANKUU Projects
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70 md:mt-3">
            Watch the journey on video or drag the slider.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-6 md:mt-10">
          <BeforeAfterVideoPair />
          <p className="mt-3 text-center text-xs text-white/50">
            Both videos play together · Tap to pause
          </p>
        </ScrollReveal>

        <div className="mt-8 grid items-center gap-6 md:mt-12 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <BeforeAfterSlider
              before={featured.before}
              after={featured.after}
              alt={featured.title}
              autoPlay
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-widest text-mankuu-gold md:text-sm">
              {featured.location}
            </p>
            <h3 className="mt-1 text-xl font-bold md:mt-2 md:text-2xl">{featured.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:mt-4">
              {featured.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-8">
          {beforeAfterProjects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 0.08}
              className={i >= 2 ? "hidden sm:block" : undefined}
            >
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                alt={project.title}
                autoPlay={false}
              />
              <p className="mt-2 text-sm font-semibold text-white">{project.title}</p>
              <p className="text-xs text-white/60">{project.location}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
