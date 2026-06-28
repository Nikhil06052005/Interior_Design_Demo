import { contact } from "./content";

export interface LeadPayload {
  name: string;
  phone: string;
  project_type: string;
  message?: string;
}

export function formatLeadMessage(data: LeadPayload) {
  return [
    "Hi MANKUU! New consultation request from your website:",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.project_type}`,
    data.message?.trim() ? `Details: ${data.message.trim()}` : null,
    "",
    `Sent: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Opens visitor's WhatsApp → client chat with lead details pre-filled (works 100% in India, no API key) */
export function buildLeadWhatsAppUrl(data: LeadPayload) {
  const text = formatLeadMessage(data);
  return `https://wa.me/91${contact.phone}?text=${encodeURIComponent(text)}`;
}

export async function sendTelegramLead(data: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = `🆕 MANKUU Website Lead\n\n${formatLeadMessage(data)}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Telegram failed");
  }
}
