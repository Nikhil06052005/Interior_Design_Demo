interface ComingSoonBadgeProps {
  label?: string;
}

export function ComingSoonBadge({ label = "Coming Soon" }: ComingSoonBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-mankuu-gold/40 bg-mankuu-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-mankuu-gold">
      {label}
    </span>
  );
}
