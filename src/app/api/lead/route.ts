import { NextResponse } from "next/server";
import { buildLeadWhatsAppUrl, sendTelegramLead } from "@/lib/lead";

interface ConsultationPayload {
  name?: string;
  phone?: string;
  project_type?: string;
  message?: string;
  _honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationPayload;

    if (body._honeypot?.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const project_type = body.project_type?.trim();

    if (!name || !phone || !project_type) {
      return NextResponse.json(
        { success: false, message: "Name, phone and service are required." },
        { status: 400 }
      );
    }

    const lead = {
      name,
      phone,
      project_type,
      message: body.message?.trim(),
    };

    try {
      await sendTelegramLead(lead);
    } catch {
      /* WhatsApp redirect still works without Telegram */
    }

    return NextResponse.json({
      success: true,
      whatsappUrl: buildLeadWhatsAppUrl(lead),
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Could not process your request." },
      { status: 500 }
    );
  }
}
