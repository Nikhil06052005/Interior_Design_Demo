"use client";

import { useState, type FormEvent } from "react";
import { buildLeadWhatsAppUrl } from "@/lib/lead";
import { projectTypes, contact } from "@/lib/content";

interface ConsultationFormProps {
  idPrefix?: string;
  compact?: boolean;
  mini?: boolean;
  onSuccess?: () => void;
}

export function ConsultationForm({
  idPrefix = "",
  compact = false,
  mini = false,
  onSuccess,
}: ConsultationFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      project_type: String(formData.get("project_type") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      _honeypot: String(formData.get("_honeypot") || ""),
    };

    if (payload._honeypot) {
      setStatus("idle");
      return;
    }

    if (!payload.name || !payload.phone || !payload.project_type) {
      setStatus("error");
      return;
    }

    const openWhatsApp = (url: string) => {
      window.location.href = url;
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success && data.whatsappUrl) {
        setStatus("success");
        form.reset();
        onSuccess?.();
        openWhatsApp(data.whatsappUrl);
        return;
      }
    } catch {
      /* fall through to direct WhatsApp */
    }

    setStatus("success");
    form.reset();
    onSuccess?.();
    openWhatsApp(buildLeadWhatsAppUrl(payload));
  };

  const inputClass = mini
    ? "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-mankuu-red focus:bg-white focus:ring-2 focus:ring-mankuu-red/10"
    : "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-mankuu-red focus:ring-2 focus:ring-mankuu-red/10";
  const spacing = mini ? "space-y-2.5" : compact ? "space-y-3" : "space-y-4";

  return (
    <form onSubmit={handleSubmit} className={spacing}>
      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        aria-hidden
      />

      {mini ? (
        <>
          <input
            id={`${idPrefix}name`}
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your Name *"
          />
          <input
            id={`${idPrefix}phone`}
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="Mobile Number *"
          />
          <select
            id={`${idPrefix}project_type`}
            name="project_type"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select service *
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <div className={compact ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "space-y-4"}>
            <div>
              <label htmlFor={`${idPrefix}name`} className="mb-1.5 block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                id={`${idPrefix}name`}
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}phone`} className="mb-1.5 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                id={`${idPrefix}phone`}
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          <div>
            <label htmlFor={`${idPrefix}project_type`} className="mb-1.5 block text-sm font-medium text-gray-700">
              What are you looking for?
            </label>
            <select id={`${idPrefix}project_type`} name="project_type" required className={inputClass}>
              <option value="">Select a service</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          {!compact && (
            <div>
              <label htmlFor={`${idPrefix}message`} className="mb-1.5 block text-sm font-medium text-gray-700">
                Tell us about your project
              </label>
              <textarea
                id={`${idPrefix}message`}
                name="message"
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder="Floor plan, budget, timeline..."
              />
            </div>
          )}
        </>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full rounded-lg bg-mankuu-red font-semibold text-white transition-all hover:bg-mankuu-red-dark disabled:opacity-60 ${mini ? "py-2.5 text-sm" : "py-3.5 text-sm"}`}
      >
        {status === "loading" ? "Opening WhatsApp..." : "Send on WhatsApp"}
      </button>

      {status === "success" && (
        <p className="text-center text-xs font-medium text-green-600">
          WhatsApp opened — please tap <strong>Send</strong> to confirm your enquiry.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-xs font-medium text-mankuu-red">
          Something went wrong. Please call {contact.phoneDisplay} or WhatsApp us directly.
        </p>
      )}
      {!mini && (
        <p className="text-center text-[11px] text-gray-400">
          You&apos;ll be redirected to WhatsApp to send your enquiry to MANKUU.
        </p>
      )}
    </form>
  );
}
