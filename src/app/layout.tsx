import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ConsultationModal } from "@/components/layout/ConsultationModal";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { siteConfig } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Complete Home Interiors in Moga`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Complete Home Interiors in Moga`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-mankuu-charcoal">
        <ConsultationProvider>
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConsultationModal />
          <StickyCTA />
        </ConsultationProvider>
      </body>
    </html>
  );
}
