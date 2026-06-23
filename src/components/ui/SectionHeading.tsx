interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-mankuu-gold" : "text-mankuu-red"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${
          light ? "text-white" : "text-mankuu-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-mankuu-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
