export const siteConfig = {
  name: "MANKUU",
  tagline: "Interior & Architectural Designer",
  logo: "/images/brand/logo.png",
  logoIcon: "/images/brand/logo-icon.png",
  description:
    "MANKUU by Manjeet Singh — top interior designer & architect in Moga, Punjab. Modular kitchens, full home interiors, Vastu consultation & construction. Free 3D design consultation.",
  url: "https://www.mankuuinteriors.in",
  keywords: [
    "interior designer Moga",
    "best interior designer Moga Punjab",
    "architect Moga",
    "modular kitchen Moga",
    "modular kitchen Punjab",
    "Vastu consultant Moga",
    "home interior design Moga",
    "MANKUU interior designer",
    "Manjeet Singh architect Moga",
    "full home interior Punjab",
  ],
};

export const contact = {
  owner: "Manjeet Singh",
  phone: "9814814434",
  phoneDisplay: "+91 98148 14434",
  email: "manku14434@gmail.com",
  address: "Gali No. 9, Basti Gobind Garh, Nanak Pura, Moga, Punjab 142001",
  addressShort: "Basti Gobind Garh, Moga - 142001",
  businessHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  instagram: "https://www.instagram.com/mankuu_architectural_designer",
  facebook: "https://www.facebook.com/mankuuinterior",
  linkedin: "https://in.linkedin.com/in/manjeet-singh-369589232",
  justdial:
    "https://www.justdial.com/Moga/Manku-Interior-Designer-Near-Gurudwara-Sahib-Moga-HO/9999P1636-1636-181209143421-X4K5_BZDET",
  website: "https://www.mankuuinteriors.in",
  whatsappMessage:
    "Hi MANKUU, I found your website and would like to discuss a project.",
  mapEmbed:
    "https://maps.google.com/maps?q=Basti+Gobind+Garh,+Moga,+Punjab+142001&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://maps.google.com/?q=Basti+Gobind+Garh+Moga+142001",
};

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: contact.instagram,
    handle: "@mankuu_architectural_designer",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: contact.facebook,
    handle: "Mankuu Interior & Architectural Designer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contact.linkedin,
    handle: "Manjeet Singh Manku",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/91${contact.phone}?text=${encodeURIComponent(contact.whatsappMessage)}`,
    handle: contact.phoneDisplay,
  },
  {
    id: "justdial",
    label: "JustDial",
    href: contact.justdial,
    handle: "Rated on JustDial",
  },
  {
    id: "google",
    label: "Google Maps",
    href: contact.mapLink,
    handle: "Get Directions",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Transformations", href: "#transformations" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "150+", label: "Homes Designed" },
  { value: "10+", label: "Years Experience" },
  { value: "80+", label: "Vastu Projects" },
  { value: "98%", label: "Client Satisfaction" },
];

export const roomCategories = [
  {
    id: "kitchen",
    title: "Modular Kitchens",
    subtitle: "Designed for Indian Homes",
    image: "/images/rooms/kitchen.jpg",
  },
  {
    id: "living",
    title: "Living Rooms",
    subtitle: "Spaces That Host Happy Moments",
    image: "/images/rooms/living.jpg",
  },
  {
    id: "bedroom",
    title: "Bedrooms",
    subtitle: "Comfort Meets Elegance",
    image: "/images/rooms/bedroom.jpg",
  },
  {
    id: "wardrobe",
    title: "Wardrobes & Storage",
    subtitle: "Smart, Stylish Organisation",
    image: "/images/rooms/wardrobe.jpg",
  },
];

export const whyChooseUs = [
  {
    title: "End-to-End Service",
    description:
      "From 3D design concepts to on-site execution — one team handles everything.",
    icon: "endtoend",
  },
  {
    title: "Vastu Expertise",
    description:
      "Every layout is planned with direction, harmony and positive energy in mind.",
    icon: "vastu",
  },
  {
    title: "Quality Materials",
    description:
      "Premium finishes and durable materials selected to match your taste and budget.",
    icon: "quality",
  },
  {
    title: "On-Time Delivery",
    description:
      "Structured project timelines with regular updates so your home is ready when promised.",
    icon: "delivery",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Meet Your Designer",
    description:
      "Share your ideas, floor plan and budget. We understand your vision first.",
  },
  {
    step: "02",
    title: "3D Design & Planning",
    description:
      "Get personalised 3D layouts with material options and a clear cost estimate.",
  },
  {
    step: "03",
    title: "Build & Execute",
    description:
      "Our team manages construction, interiors and finishing with quality checks.",
  },
  {
    step: "04",
    title: "Handover & Support",
    description:
      "Walk into your finished space. We stay available for post-project support.",
  },
];

export const services = [
  {
    id: "architectural",
    title: "Architectural Design",
    description:
      "Complete planning, elevations and structural design for homes and commercial spaces.",
    image: "/images/before-after/planning-before.jpg",
  },
  {
    id: "interior",
    title: "Interior Design",
    description:
      "Full-home interiors with modular kitchens, wardrobes, lighting and furnishings.",
    image: "/images/projects/living-tv-wall.jpg",
  },
  {
    id: "vastu",
    title: "Vastu Consultation",
    description:
      "Direction-aligned layouts that balance beauty, function and positive energy.",
    image: "/images/projects/kitchen-luxury-2.jpg",
  },
  {
    id: "construction",
    title: "Construction & Build",
    description:
      "Reliable civil work and turnkey execution from foundation to final finish.",
    image: "/images/projects/construction-site.jpg",
  },
];

export const founder = {
  name: "Manjeet Singh",
  role: "Founder & Principal Architect",
  credentials: ["Architect", "Vastu Consultant", "Builder"],
  bio: [
    "With over a decade of practice in Moga, Manjeet Singh founded MANKUU to bring architectural precision, interior elegance, and Vastu wisdom under one roof.",
    "From residential homes to commercial spaces, every project is guided by a hands-on approach — designing spaces that feel intentional, lasting, and deeply personal.",
  ],
};

export const portfolioProjects = [
  {
    id: 1,
    name: "Luxury Modular Kitchen",
    location: "Moga",
    type: "Modular Kitchen",
    image: "/images/projects/kitchen-luxury-1.jpg",
  },
  {
    id: 2,
    name: "Premium Kitchen Design",
    location: "Ludhiana",
    type: "Full Kitchen Interior",
    image: "/images/projects/kitchen-luxury-2.jpg",
  },
  {
    id: 3,
    name: "Living Room with TV Wall",
    location: "Moga",
    type: "Living Room Interior",
    image: "/images/projects/living-tv-wall.jpg",
  },
  {
    id: 4,
    name: "Green Cabinet Kitchen",
    location: "Bathinda",
    type: "Modular Kitchen",
    image: "/images/projects/kitchen-green.jpg",
  },
  {
    id: 5,
    name: "Sage Shaker Kitchen",
    location: "Moga",
    type: "Kitchen Renovation",
    image: "/images/projects/kitchen-sage-after.jpg",
  },
  {
    id: 6,
    name: "Marble Finish Kitchen",
    location: "Amritsar",
    type: "Luxury Kitchen",
    image: "/images/projects/kitchen-luxury-3.jpg",
  },
  {
    id: 7,
    name: "CAD Planning Project",
    location: "Moga",
    type: "Architectural Design",
    image: "/images/before-after/planning-before.jpg",
  },
  {
    id: 8,
    name: "Complete Home Interior",
    location: "Punjab",
    type: "Full Home Interior",
    image: "/images/projects/kitchen-luxury-1.jpg",
  },
];

export const projectVideos = [
  {
    id: 1,
    title: "Finished Interior Walkthrough",
    subtitle: "After MANKUU execution",
    src: "/videos/project-walkthrough-2.mp4",
    poster: "/images/projects/living-tv-wall.jpg",
  },
  {
    id: 2,
    title: "Project Planning & Raw Space",
    subtitle: "Before work begins",
    src: "/videos/project-walkthrough-1.mp4",
    poster: "/images/before-after/planning-before.jpg",
  },
];

export const featuredBeforeAfter = {
  title: "Bedroom — Modern Minimalist Makeover",
  location: "Moga",
  description:
    "From a cluttered room with worn furniture and exposed wiring to a calm, contemporary bedroom — custom floating wardrobe, tray ceiling lighting and a refined neutral palette.",
  before: "/images/before-after/bedroom-before.jpg",
  after: "/images/before-after/bedroom-after.jpg",
};

export const beforeAfterProjects = [
  {
    id: 1,
    title: "Living Room — TV Wall & Ceiling",
    location: "Moga",
    description:
      "On-site construction and structural work → finished interiors with TV wall and ceiling details.",
    before: "/images/projects/construction-site.jpg",
    after: "/images/projects/living-tv-wall.jpg",
  },
  {
    id: 2,
    title: "Living Room — TV Wall & Makeover",
    location: "Moga",
    before: "/images/before-after/living-before.jpg",
    after: "/images/before-after/living-after.jpg",
  },
  {
    id: 3,
    title: "Luxury Kitchen — Marble & Gold",
    location: "Ludhiana",
    before: "/images/before-after/planning-before.jpg",
    after: "/images/projects/kitchen-luxury-1.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    city: "Moga",
    project: "Full Home Interior",
    quote:
      "Manjeet ji ne hamara Moga wala ghar 45 din mein complete kiya — Vastu bhi perfect. Kitchen aur living room bilkul magazine jaisa lagta hai.",
    rating: 5,
  },
  {
    id: 2,
    name: "Harpreet Singh",
    city: "Ludhiana",
    project: "Modular Kitchen",
    quote:
      "Pehle purani kitchen thi, ab modular setup hai with smart storage. Budget ke andar hi sab kuch ho gaya. Highly recommend MANKUU.",
    rating: 5,
  },
  {
    id: 3,
    name: "Simran Malhotra",
    city: "Bathinda",
    project: "Vastu Consultation",
    quote:
      "Vastu ke saath design karna easy nahi tha, but Manjeet Singh ne direction aur aesthetics dono balance kiye. Ghar mein positive feel aa gayi.",
    rating: 5,
  },
  {
    id: 4,
    name: "Amit Goyal",
    city: "Amritsar",
    project: "Commercial Interior",
    quote:
      "Office space ka complete interior MANKUU ne handle kiya. On time delivery, quality materials, aur 3D design se pehle hi sab clear tha.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long does a typical home interior project take?",
    answer:
      "A full home interior usually takes 45–60 days after design approval. Kitchen-only projects can be completed in 20–30 days. We share a clear timeline before starting.",
  },
  {
    question: "Do you work outside Moga?",
    answer:
      "Yes. While our studio is in Basti Gobind Garh, Moga, we serve clients across Punjab — Ludhiana, Amritsar, Bathinda, Chandigarh and nearby cities.",
  },
  {
    question: "Is Vastu consultation included in interior design?",
    answer:
      "Vastu can be integrated into any project at no extra complexity — direction, layout and energy flow are considered in our 3D planning. Standalone Vastu consultation is also available.",
  },
  {
    question: "What is the typical cost for a full home interior?",
    answer:
      "Cost depends on home size, materials, finishes and scope of work. We share a clear, itemised estimate after your free consultation and 3D design review — no hidden charges.",
  },
  {
    question: "Do you provide 3D designs before construction?",
    answer:
      "Yes. Every project includes personalised 3D visualisations so you can see exactly how your space will look before any work begins on site.",
  },
  {
    question: "What materials and brands do you use?",
    answer:
      "We use premium plywood, laminates, hardware from trusted brands like Hettich, Ebco and Greenply — selected to match your budget without compromising durability.",
  },
];

export const projectTypes = [
  "Full Home Interior",
  "Modular Kitchen",
  "Wardrobe Design",
  "Architectural Planning",
  "Vastu Consultation",
  "Commercial Interior",
  "Full Construction",
  "Other",
];

export const heroImage = "/images/hero/main.jpg";

export const instagramPosts = [
  { id: 1, image: "/images/projects/kitchen-luxury-1.jpg", alt: "Luxury modular kitchen MANKUU Moga" },
  { id: 2, image: "/images/projects/living-tv-wall.jpg", alt: "Living room TV wall interior design" },
  { id: 3, image: "/images/projects/kitchen-sage-after.jpg", alt: "Sage green kitchen renovation Moga" },
  { id: 4, image: "/images/projects/kitchen-green.jpg", alt: "Modern green kitchen MANKUU" },
  { id: 5, image: "/images/projects/kitchen-luxury-2.jpg", alt: "Premium kitchen design Punjab" },
  { id: 6, image: "/images/projects/kitchen-luxury-3.jpg", alt: "Marble finish kitchen interior" },
];
