import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { siteConfig } from "@/lib/content";

const ConsultationModal = dynamic(
  () => import("@/components/layout/ConsultationModal").then((m) => m.ConsultationModal)
);
const StickyCTA = dynamic(
  () => import("@/components/layout/StickyCTA").then((m) => m.StickyCTA)
);

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "MANKUU | Best Interior Designer & Architect in Moga, Punjab",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "MANKUU Interior Designer",
    images: [
      {
        url: "/images/hero/main.jpg",
        width: 1200,
        height: 630,
        alt: "MANKUU luxury interior design — best interior designer in Moga Punjab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANKUU | Best Interior Designer in Moga, Punjab",
    description: siteConfig.description,
    images: ["/images/hero/main.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {
    google: "x5_Gw1feOv-X8zRi02DdG5ouKOtV7GnccXVc_OQ9Iwo",
  },
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
        <SiteLoader />
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
