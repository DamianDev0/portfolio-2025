
export interface WorkItem {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Crm Platform",
    category: "Fintech Experience",
    tools: "Next.js · TypeScript · NestJS · Redux · Tailwind CSS",
    image: "/projects/charge.png",
  },
  {
    title: "Creative Studio Site",
    category: "Web Design",
    tools: "React · GSAP · Headless CMS",
    image: "/projects/locksmith.png",
  },
  {
    title: "Immersive Product Tour",
    category: "Interactive Experience",
    tools: "Three.js · React · Motion",
    image: "/projects/rythym.png",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Product Design",
    tools: "Next.js · Radix UI · Recharts",
    image: "/projects/smart.png",
  },
  {
    title: "Portfolio Generator",
    category: "Side Project",
    tools: "TypeScript · Tailwind CSS · Vite",
    image: "/projects/wallet.png",
  },
];
