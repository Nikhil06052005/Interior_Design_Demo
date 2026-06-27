import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ConsultationModal } from "@/components/layout/ConsultationModal";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { siteConfig } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MANKUU | Best Interior Designer & Architect in Moga, Punjab",
    template: "%s | MANKUU Interior Designer Moga",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Manjeet Singh", url: siteConfig.url }],
  creator: "MANKUU Architectural Designer",
  publisher: "MANKUU",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "MANKUU | Best Interior Designer & Architect in Moga, Punjab",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "MANKUU Interior Designer",
    images: [
      {
        url: "/images/projects/living-tv-wall.jpg",
        width: 1200,
        height: 630,
        alt: "MANKUU interior design project — living room Moga Punjab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANKUU | Interior Designer Moga Punjab",
    description: siteConfig.description,
    images: ["/images/projects/living-tv-wall.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: "Interior Design",
  icons: {
    icon: [
      { url: "/images/brand/logo-icon.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/logo-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-mankuu-charcoal">
        <JsonLd />
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
