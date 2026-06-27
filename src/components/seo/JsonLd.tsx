import { contact, founder, siteConfig } from "@/lib/content";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+91${contact.phone}`,
    email: contact.email,
    image: `${siteConfig.url}/images/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Basti Gobind Garh",
      addressLocality: "Moga",
      addressRegion: "Punjab",
      postalCode: "142001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.8167,
      longitude: 75.1711,
    },
    areaServed: ["Moga", "Ludhiana", "Amritsar", "Bathinda", "Chandigarh", "Punjab"],
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    },
    sameAs: [
      contact.instagram,
      contact.facebook,
      contact.linkedin,
      contact.justdial,
      contact.website,
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Interior Designer Moga`,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best interior designer in Moga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MANKUU by Manjeet Singh offers end-to-end interior design, architecture, Vastu consultation and construction in Moga, Punjab with 10+ years experience.",
        },
      },
      {
        "@type": "Question",
        name: "Does MANKUU provide free consultation and 3D design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MANKUU offers a free consultation with personalised 3D visualisations. A detailed cost estimate is shared after understanding your space, materials and scope.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
