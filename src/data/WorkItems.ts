export interface WorkItem {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  link?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Crm Platform",
    category: "Fintech Experience",
    description:
      "Full-stack CRM for managing Tesla charger electricians across the US. Coordinates appointments, processes payments via Stripe, and currently serves nearly 1,000 electricians with over 2,000 job requests.",
    tools:
      "NestJS · PostgreSQL · Stripe · Next.js · TypeScript · Gemini · Twilio",
    image: "/projects/charge.png",
  },
  {
    title: "Airduct",
    category: "Crm",
    description:
      "Service management platform for HVAC repair technicians, streamlining job scheduling, customer coordination, and payment processing across multiple regions.",
    tools: "NestJS · Next.js · PostgreSQL · AWS · Payarc",
    image: "/projects/airduct01.png",
  },
  {
    title: "Credit Cards Library",
    category: "Open Source",
    description:
      "Published npm package providing a modern, responsive credit card UI component for seamless integration into any web project.",
    tools: "Vite · TypeScript · Atomic Design",
    image: "/projects/credit-card.png",
  },
  {
    title: "Locksmith Website",
    category: "Web Platform",
    description:
      "On-demand locksmith dispatch system. Detects the nearest available locksmith via geolocation, sends SMS notifications, and processes a service fee upon job acceptance.",
    tools: "Next.js · NestJS · TypeScript · Payarc · Twilio",
    image: "/projects/locksmith.png",
  },
  {
    title: "Rhythm",
    category: "Mobile App",
    description:
      "Habit tracking app with challenges, streak monitoring, and exportable statistics to help users build consistent daily routines.",
    tools: "React Native · NestJS · PostgreSQL · Redux · Jest · CI/CD",
    image: "/projects/rythym.png",
  },
  {
    title: "SmartCart",
    category: "Mobile App",
    description:
      "Smart shopping assistant with biometric authentication, purchase categorization, and AI-powered recommendations to optimize spending habits.",
    tools: "React Native · NestJS · Gemini · Redux · Atomic Design",
    image: "/projects/smart.png",
  },
  {
    title: "Wallet",
    category: "Mobile App",
    description:
      "Personal finance app for tracking daily, weekly, and monthly expenses with savings pockets, budgeting tools, and detailed spending analytics.",
    tools: "React Native · NestJS · PostgreSQL · Redux · TypeScript",
    image: "/projects/wallet.png",
  },
];
