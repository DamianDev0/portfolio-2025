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
    title: "Locksmith Website",
    category: "Web Design",
    tools: "NextJS · NestJS · Tailwind CSS · TypeScript",
    image: "/projects/locksmith.png",
  },
  {
    title: "Rhythm ",
    category: "Mobile App",
    tools:
      "Three.js · React Native · CI/CD · Expo · TypeScript · Redux · NestJS",
    image: "/projects/rythym.png",
  },
  {
    title: "SmartCart",
    category: "Mobile App",
    tools:
      "Three.js · React Native · CI/CD · Expo · TypeScript · Redux · NestJS",
    image: "/projects/smart.png",
  },
  {
    title: "Wallet",
    category: "Mobile App",
    tools: "TypeScript · React Native · Redux · Git",
    image: "/projects/wallet.png",
  },
];
