"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-mankuu-cream/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="#home" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-house.svg"
              alt="MANKUU logo"
              width={36}
              height={36}
              className="transition-transform group-hover:scale-105"
            />
            <div>
              <span className="font-display text-2xl font-bold tracking-wide text-mankuu-red">
                {siteConfig.name}
              </span>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-mankuu-muted sm:block">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mankuu-charcoal/80 transition-colors hover:text-mankuu-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-sm bg-mankuu-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a8181d]"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-mankuu-charcoal transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-mankuu-charcoal transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-mankuu-charcoal transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-mankuu-cream transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold text-mankuu-charcoal transition-colors hover:text-mankuu-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-sm bg-mankuu-red px-8 py-3 text-lg font-semibold text-white"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </>
  );
}
