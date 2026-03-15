import { Activity, LayoutDashboard, Link, PenTool } from "lucide-react"

export const projects = [
  {
    title: "Runtime",
    description: "A robust college community platform. Engineered with a relational database architecture to handle user authentication, post feeds, and community interactions.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    icon: LayoutDashboard,
    link: "#", // Replace with actual GitHub/Live link later
  },
  {
    title: "Cricket Prediction Engine",
    description: "A real-time multiplayer prediction game. Designed to handle concurrent state mutations and push live match data instantly to multiple clients.",
    tech: ["Node.js", "WebSockets", "React", "State Management"],
    icon: Activity,
    link: "#",
  },
  {
    title: "DrawX",
    description: "A low-latency collaborative drawing board. Implemented bidirectional communication to sync canvas paths across multiple users in real-time.",
    tech: ["React", "WebSockets", "Canvas API", "Express"],
    icon: PenTool,
    link: "#",
  },
  {
    title: "Linklytics",
    description: "A high-performance link-tracking platform. Built core CRUD APIs and a custom analytics dashboard to monitor click-through rates and referrer data.",
    tech: ["Next.js", "Tailwind CSS", "API Routes"],
    icon: Link,
    link: "#",
  }
]

// Add this below your projects array in lib/data.ts

export const techStack = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frontend Architecture",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Real-Time",
    items: ["Node.js", "Express", "WebSockets"],
  },
  {
    category: "Data & ORM",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Currently Exploring",
    items: ["Web3 Architecture", "DeFi Protocols"],
  },
]