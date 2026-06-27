import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

interface BrandLogoProps {
  href?: string;
  linked?: boolean;
  className?: string;
  priority?: boolean;
  variant?: "full" | "icon";
}

export function BrandLogo({
  href = "#home",
  linked = true,
  className = "h-11 w-auto object-contain",
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  const src = variant === "icon" ? siteConfig.logoIcon : siteConfig.logo;
  const width = variant === "icon" ? 44 : 160;
  const height = variant === "icon" ? 44 : 56;
  const alt = `${siteConfig.name} ${siteConfig.tagline} — Moga, Punjab`;

  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );

  if (!linked) return image;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {image}
    </Link>
  );
}
