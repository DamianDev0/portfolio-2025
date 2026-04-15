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
      "Full-stack CRM managing Tesla charger electricians across the US. Coordinates appointments, processes payments with Stripe, and today serves 1,050+ electricians with 2,000+ job requests flowing through it.",
    tools:
      "NestJS · PostgreSQL · Stripe · Next.js · TypeScript · Gemini · Twilio",
    image: "/projects/charge.png",
  },
  {
    title: "Payroll",
    category: "Enterprise Platform",
    description:
      "Complete payroll module built end-to-end as senior fullstack. The backend runs on C# and .NET handling salary calculations, tax rules and payment scheduling, while the Next.js frontend gives HR a clean flow for managing employees and running payrolls.",
    tools: "C# · .NET · Next.js · PostgreSQL · TypeScript",
    image: "/projects/payroll.png",
  },
  {
    title: "Form-Helper",
    category: "AI SaaS",
    description:
      "Platform that helps immigrants complete US official paperwork faster. AI pre-fills and validates documents, reducing hours of manual work to minutes. Built as a Turborepo monorepo with shared packages for UI, validation and domain logic.",
    tools: "Next.js · NestJS · Turborepo · TypeScript · AI · PostgreSQL",
    image: "/projects/form-helper.png",
  },
  {
    title: "Airduct",
    category: "Crm",
    description:
      "Service platform for HVAC repair technicians. Keeps scheduling, customer coordination and payments in one flow, working across several regions without breaking a sweat.",
    tools: "NestJS · Next.js · PostgreSQL · AWS · Payarc",
    image: "/projects/airduct01.png",
  },
  {
    title: "Locksmith Website",
    category: "Web Platform",
    description:
      "On-demand locksmith dispatch. Finds the nearest available locksmith by geolocation, sends an SMS, and charges the service fee the moment the job is accepted.",
    tools: "Next.js · NestJS · TypeScript · Payarc · Twilio",
    image: "/projects/locksmith.png",
  },
  {
    title: "Credit Cards Library",
    category: "Open Source",
    description:
      "An npm package I published with a modern, responsive credit card UI component. Drop it into any web project and it just works.",
    tools: "Vite · TypeScript · Atomic Design",
    image: "/projects/credit-card.png",
  },
  {
    title: "SmartCart",
    category: "Mobile App",
    description:
      "Shopping assistant that logs in with biometrics, categorizes purchases and uses AI to nudge users toward smarter spending. Small app, a lot of personality.",
    tools: "React Native · NestJS · Gemini · Redux · Atomic Design",
    image: "/projects/smart.png",
  },
  {
    title: "Wallet",
    category: "Mobile App",
    description:
      "Personal finance app for tracking daily, weekly and monthly expenses. Savings pockets, budgets, and analytics clean enough that you actually want to open the app.",
    tools: "React Native · NestJS · PostgreSQL · Redux · TypeScript",
    image: "/projects/wallet.png",
  },
  {
    title: "Rhythm",
    category: "Mobile App",
    description:
      "Habit tracker with challenges, streaks and exportable stats. Built to help people stay consistent without the app feeling like a chore itself.",
    tools: "React Native · NestJS · PostgreSQL · Redux · Jest · CI/CD",
    image: "/projects/rythym.png",
  },
];
