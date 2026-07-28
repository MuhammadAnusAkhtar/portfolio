import type { Project } from "@/types";

/**
 * Add new projects by appending to this array — every section that
 * displays projects reads from here, so nothing else needs to change.
 */
export const projects: Project[] = [
  {
    slug: "deal-one-real-estate",
    name: "Deal One Real Estate",
    category: "websites",
    categoryLabel: "Real Estate Platform",
    image: "/projects/deal-one-real-estate.png",
    gallery: [
      "/projects/deal-one-real-estate.png",
      "/projects/deal-one-real-estate/dore-2.png",
      "/projects/deal-one-real-estate/dore-3.png",
      "/projects/deal-one-real-estate/dore-4.png",
      "/projects/deal-one-real-estate/dore-5.png",
      "/projects/deal-one-real-estate/dore-6.png",
      "/projects/deal-one-real-estate/dore-7.png",
      "/projects/deal-one-real-estate/dore-8.png",
      "/projects/deal-one-real-estate/dore-9.png",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB"],
    description:
      "A property listing platform for Pakistan's real estate market — helping buyers, sellers, and investors browse, search, and inquire about plots, houses, and commercial property.",
    features: [
      "Property listings with images, pricing & location",
      "Search by property type, city & society (DHA, Bahria Town, etc.)",
      "Real-time File Rates tracker for popular societies",
      "Property posting flow for sellers & WhatsApp inquiries",
    ],
    links: {
      live: "https://dealonerealestate.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "shopit-ecommerce",
    name: "ShopIT",
    category: "websites",
    categoryLabel: "E-Commerce Website",
    image: "/projects/shopit/shopit-2.png",
    gallery: [
      "/projects/shopit/shopit-2.png",
      "/projects/shopit/shopit-4.png",
      "/projects/shopit/shopit-5.png",
      "/projects/shopit/shopit-6.png",
      "/projects/shopit/shopit-7.png",
      "/projects/shopit-ecommerce.png",
      "/projects/shopit/shopit-8.png",
      "/projects/shopit/shopit-9.png",
      "/projects/shopit/shopit-10.png",
      "/projects/shopit/shopit-11.png",
      "/projects/shopit/shopit-12.png",
      "/projects/shopit/shopit-13.png",
      "/projects/shopit/shopit-14.png",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "A full-featured e-commerce web application with a shopping storefront and a complete admin panel — product catalog, cart, checkout, and back-office management for orders, users, reviews, and customer messages.",
    features: [
      "Product browsing, detail pages & cart-to-checkout flow",
      "User authentication with role-based accounts (admin/user)",
      "Admin dashboard with live sales & orders analytics",
      "Back-office CRUD for products, orders, reviews & contact messages",
    ],
    links: {
      live: "https://shopit-frontend-sage.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "lifetime-auto-repair",
    name: "Lifetime Auto Repair",
    category: "websites",
    categoryLabel: "Business Website",
    image: "/projects/lifetime-auto-repair.png",
    technologies: ["React", "Tailwind CSS"],
    description:
      "A business website for a premium car AC and auto repair shop in Abu Dhabi, built to showcase services and convert visitors into booked appointments.",
    features: [
      "Service listings with transparent pricing",
      "Customer testimonials & trust indicators",
      "WhatsApp booking & free-estimate call-to-action",
      "Fully responsive, fast-loading design",
    ],
    links: {
      live: "https://aquamarine-bombolone-25d9e2.netlify.app/",
    },
    featured: true,
  },
  {
    slug: "mahar-hostel",
    name: "Mahar Hostel",
    category: "mobile",
    categoryLabel: "Mobile App",
    image: "/projects/mahar-hostel.svg",
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    description:
      "A hostel management app with separate Admin and Student portals — covering staff management, room availability, issue tracking, room-change requests, and PDF fee challan generation.",
    features: [
      "Dual Admin & Student portals with role-based flows",
      "Room availability management & room-change request workflow",
      "Issue reporting and resolution tracking with history",
      "PDF hostel fee challan generation, backed by Firebase",
    ],
    links: {
      github: "https://github.com/MuhammadAnusAkhtar/mahar-hostel-app",
    },
  },
  {
    slug: "nova-ai-assistant",
    name: "Nova AI Assistant",
    category: "desktop",
    categoryLabel: "Desktop App",
    image: "/projects/nova/nova-1.png",
    gallery: [
      "/projects/nova/nova-1.png",
      "/projects/nova/nova-2.png",
      "/projects/nova/nova-3.png",
    ],
    technologies: ["Flutter", "Dart", "Python", "FastAPI", "Ollama"],
    description:
      "A local-first Windows AI assistant with a frameless chat UI, a 'Hey Nova' wake-word voice mode, and a secure automation bridge that lets it open apps and send WhatsApp messages on your behalf.",
    features: [
      "Fully offline chat powered by a local Ollama LLM — no API key or cost",
      "Wake-word voice control ('Nova ...') that feeds straight into the chat pipeline",
      "Token-authenticated, localhost-only Python automation bridge (FastAPI) — seen here opening Notepad on command",
      "Persistent conversation history with markdown-rendered responses",
    ],
    links: {
      github: "https://github.com/MuhammadAnusAkhtar/nova-ai-assistant",
    },
  },
];
