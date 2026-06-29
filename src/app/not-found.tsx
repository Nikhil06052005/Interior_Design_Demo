import Link from "next/link";
import type { Metadata } from "next";
import { contact, navLinks, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-mankuu-red">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-mankuu-charcoal md:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-mankuu-muted">
        The page you&apos;re looking for doesn&apos;t exist. Explore MANKUU interior design
        services in Moga, Punjab.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-mankuu-red px-6 py-3 text-sm font-bold text-white hover:bg-mankuu-red-dark"
        >
          Back to Home
        </Link>
        <a
          href={`https://wa.me/91${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-mankuu-red px-6 py-3 text-sm font-bold text-mankuu-red hover:bg-mankuu-red hover:text-white"
        >
          WhatsApp Us
        </a>
      </div>
      <nav className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-mankuu-muted">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-mankuu-red">
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mt-8 text-xs text-mankuu-muted">{siteConfig.name} · Moga, Punjab</p>
    </section>
  );
}
