"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, projectTypes } from "@/lib/content";

export function LeadCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const whatsappUrl = `https://wa.me/91${contact.phone}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Transform Your Space" subtitle="Tell us about your project and we will reach out within 24 hours for a free consultation." />
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mankuu-red/10 text-mankuu-red">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mankuu-charcoal">Phone</p>
                  <a href={`tel:+91${contact.phone}`} className="text-mankuu-muted transition-colors hover:text-mankuu-red">{contact.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mankuu-red/10 text-mankuu-red">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mankuu-charcoal">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-mankuu-muted transition-colors hover:text-mankuu-red">{contact.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mankuu-red/10 text-mankuu-red">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mankuu-charcoal">Studio</p>
                  <p className="text-mankuu-muted">{contact.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-10"><Button href={whatsappUrl} variant="secondary">Chat on WhatsApp</Button></div>
          </div>
          <div className="rounded-lg border border-mankuu-charcoal/10 bg-white p-8 shadow-lg shadow-mankuu-charcoal/5">
            <h3 className="font-display text-2xl font-semibold text-mankuu-charcoal">Request a Consultation</h3>
            <p className="mt-2 text-sm text-mankuu-muted">Fill in your details and we will get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input type="hidden" name="subject" value="New Lead from MANKUU Website" />
              <input type="hidden" name="from_name" value="MANKUU Website" />
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mankuu-charcoal">Your Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-sm border border-mankuu-charcoal/15 bg-mankuu-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-mankuu-red" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-mankuu-charcoal">Phone Number</label>
                <input id="phone" name="phone" type="tel" required className="w-full rounded-sm border border-mankuu-charcoal/15 bg-mankuu-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-mankuu-red" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label htmlFor="project_type" className="mb-1.5 block text-sm font-medium text-mankuu-charcoal">Project Type</label>
                <select id="project_type" name="project_type" required className="w-full rounded-sm border border-mankuu-charcoal/15 bg-mankuu-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-mankuu-red">
                  <option value="">Select a service</option>
                  {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-mankuu-charcoal">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full resize-none rounded-sm border border-mankuu-charcoal/15 bg-mankuu-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-mankuu-red" placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" className="w-full" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send Inquiry"}</Button>
              {status === "success" && <p className="text-center text-sm font-medium text-green-600">Thank you! We will be in touch within 24 hours.</p>}
              {status === "error" && <p className="text-center text-sm font-medium text-mankuu-red">Something went wrong. Please call us or use WhatsApp instead.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
