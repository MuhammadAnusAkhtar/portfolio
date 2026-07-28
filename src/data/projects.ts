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
    gallery: [
      "/projects/lifetime-auto-repair.png",
      "/projects/lifetime-auto-repair/lar-1.png",
      "/projects/lifetime-auto-repair/lar-2.png",
      "/projects/lifetime-auto-repair/lar-3.png",
      "/projects/lifetime-auto-repair/lar-4.png",
      "/projects/lifetime-auto-repair/lar-5.png",
    ],
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
  {
    slug: "estatefinder-ui-concept",
    name: "EstateFinder — UI/UX Concept",
    category: "ui-design",
    categoryLabel: "UI/UX Design",
    image: "/projects/estatefinder-ui/estatefinder-cover.png",
    gallery: [
      "/projects/estatefinder-ui/estatefinder-cover.png",
      "/projects/estatefinder-ui/estatefinder-1-discover.png",
      "/projects/estatefinder-ui/estatefinder-2-listings.png",
      "/projects/estatefinder-ui/estatefinder-3-detail.png",
      "/projects/estatefinder-ui/estatefinder-4-profile.png",
    ],
    technologies: ["UI/UX Design", "Mobile App Design", "Design System"],
    description:
      "A self-directed mobile UI/UX concept for a real estate discovery app, designed to explore a clean, conversion-focused property browsing experience — from search to inquiry.",
    features: [
      "Discover screen with search, category filters & featured property cards",
      "Listings screen with sortable filters and a scannable card layout",
      "Property detail screen with agent contact and a WhatsApp-first CTA",
      "Saved properties & profile screen with at-a-glance activity stats",
    ],
    links: {},
  },
  {
    slug: "quickbite-ui-concept",
    name: "QuickBite — UI/UX Concept",
    category: "mobile",
    categoryLabel: "Mobile App Concept",
    image: "/projects/quickbite-ui/quickbite-cover.png",
    gallery: [
      "/projects/quickbite-ui/quickbite-cover.png",
      "/projects/quickbite-ui/quickbite-1-discover.png",
      "/projects/quickbite-ui/quickbite-2-menu.png",
      "/projects/quickbite-ui/quickbite-3-cart.png",
      "/projects/quickbite-ui/quickbite-4-tracking.png",
    ],
    technologies: ["UI/UX Design", "Mobile App Design", "Design System"],
    description:
      "A self-directed mobile UI/UX concept for a food delivery app, covering restaurant discovery, menu browsing, cart checkout, and live order tracking.",
    features: [
      "Discover screen with categories, promos & popular restaurants nearby",
      "Restaurant menu screen with category tabs and quick add-to-cart",
      "Cart & checkout with delivery address and order summary",
      "Live order tracking with delivery status timeline and rider contact",
    ],
    links: {},
  },
];
