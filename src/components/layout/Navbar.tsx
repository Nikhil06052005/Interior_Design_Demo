"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsultation } from "@/context/ConsultationContext";
import { contact, navLinks, siteConfig } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useConsultation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="#home" className="flex items-center gap-2.5">
            <Image src="/images/logo-house.svg" alt="MANKUU" width={32} height={32} />
            <span className="text-xl font-extrabold tracking-tight text-mankuu-red">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-mankuu-red"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:+91${contact.phone}`}
              className="text-sm font-semibold text-gray-700 hover:text-mankuu-red"
            >
              {contact.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg bg-mankuu-red px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-mankuu-red/20 transition-all hover:bg-mankuu-red-dark hover:shadow-lg"
            >
              Book Free Consultation
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`h-0.5 w-6 bg-gray-800 transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-gray-800 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-gray-800 transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-gray-800 hover:text-mankuu-red"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="mt-4 rounded-lg bg-mankuu-red px-8 py-3 text-lg font-bold text-white"
          >
            Book Free Consultation
          </button>
        </nav>
      </div>
    </>
  );
}
