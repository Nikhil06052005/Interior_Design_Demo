import { contact, faqs, founder, siteConfig } from "@/lib/content";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: "MANKUU Architectural Designer",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    image: `${siteConfig.url}/images/hero/main.jpg`,
    description: siteConfig.description,
    telephone: `+91${contact.phone}`,
    email: contact.email,
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
      contact.mapLink,
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: `${siteConfig.name} — Interior Designer Moga`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+91${contact.phone}`,
    email: contact.email,
    image: `${siteConfig.url}/images/hero/main.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gali No. 9, Basti Gobind Garh, Nanak Pura",
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
    areaServed: [
      { "@type": "City", name: "Moga" },
      { "@type": "City", name: "Ludhiana" },
      { "@type": "City", name: "Amritsar" },
      { "@type": "City", name: "Bathinda" },
      { "@type": "State", name: "Punjab" },
    ],
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: `${siteConfig.name} — Interior Designer Moga`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemas = [
    { ...organization, "@id": `${siteConfig.url}/#organization` },
    localBusiness,
    website,
    faqPage,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
