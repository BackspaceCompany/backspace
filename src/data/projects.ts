import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Brain,
  Circle,
  Cpu,
  FileText,
  Globe,
  LayoutGrid,
  Lightbulb,
  Link2,
  Network,
  ShoppingBag,
  Smartphone,
  Store,
  Target,
  Wallet,
  Zap,
} from "lucide-react";

export type InlineSegment =
  | { type: "text"; value: string }
  | { type: "icon"; icon: string; color: string };

export type TrustedLogo = {
  name: string;
  icon: string;
};

export type ProjectAbout = {
  paragraph1: InlineSegment[];
  paragraph2: InlineSegment[];
  trustedLabel: string;
  trustedBy: TrustedLogo[];
};

export type Project = {
  id: string;
  name: string;
  letter: string;
  color: string;
  tagline: string;
  status: string;
  live: boolean;
  role: string;
  lead: string;
  href: string;
  image: string;
  bannerLabel: string;
  cardLine: string;
  about: ProjectAbout;
};

export const iconMap: Record<string, LucideIcon> = {
  chart: BarChart3,
  zap: Zap,
  file: FileText,
  target: Target,
  store: Store,
  phone: Smartphone,
  wallet: Wallet,
  bar: BarChart3,
  bag: ShoppingBag,
  globe: Globe,
  brain: Brain,
  cpu: Cpu,
  network: Network,
  bulb: Lightbulb,
  grid: LayoutGrid,
  link: Link2,
  circle: Circle,
};

export const projects: Project[] = [
  {
    id: "claveira",
    name: "Claveira",
    letter: "C",
    color: "#1d2b4f",
    tagline: "The system of record for the agent era.",
    status: "Active",
    live: true,
    role: "founder · 2025 — present · claveira.com",
    lead: "The agent-operable system of record. Versioned claims, drift detection, and one command centre over the tools where your company's truth already lives.",
    href: "/projects/claveira",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    bannerLabel: "Agent infrastructure",
    cardLine: "The system of record for the agent era.",
    about: {
      paragraph1: [
        { type: "text", value: "Claveira is an agent-operable " },
        { type: "icon", icon: "chart", color: "#6366f1" },
        { type: "text", value: " system of record designed to help teams understand their company's truth more quickly, accurately, and measurably. " },
        { type: "icon", icon: "zap", color: "#8b5cf6" },
      ],
      paragraph2: [
        { type: "text", value: "With versioned claims, real-time drift detection " },
        { type: "icon", icon: "file", color: "#eab308" },
        { type: "text", value: ", and a unified command centre over your existing tools, Claveira ensures you always have full visibility into your " },
        { type: "icon", icon: "target", color: "#22c55e" },
        { type: "text", value: " records, permissions, and operational state." },
      ],
      trustedLabel: "Built alongside teams at",
      trustedBy: [
        { name: "Akaragi", icon: "store" },
        { name: "Ivory Roots", icon: "bag" },
        { name: "FREEDOM", icon: "brain" },
        { name: "Backspace", icon: "circle" },
      ],
    },
  },
  {
    id: "akaragi",
    name: "Akaragi",
    letter: "A",
    color: "#0f7b4d",
    tagline: "The operating system for informal commerce — online and offline.",
    status: "Active",
    live: true,
    role: "founder · 2026 — present · akaragi.com · Abidjan / Paris",
    lead: "Carnet and POS offline, mobile-money storefronts and WhatsApp ordering online, retail intelligence on top.",
    href: "/projects/akaragi",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=900&auto=format&fit=crop&q=80",
    bannerLabel: "Informal commerce",
    cardLine: "The operating system for informal commerce — online and offline.",
    about: {
      paragraph1: [
        { type: "text", value: "Akaragi is an operating system for informal commerce " },
        { type: "icon", icon: "store", color: "#0f7b4d" },
        { type: "text", value: " built to help merchants sell online and offline with equal fluency. " },
        { type: "icon", icon: "phone", color: "#3b82f6" },
      ],
      paragraph2: [
        { type: "text", value: "With a digital carnet, mobile-money storefronts " },
        { type: "icon", icon: "wallet", color: "#eab308" },
        { type: "text", value: ", and WhatsApp order intake, Akaragi ensures traders always have full visibility into their " },
        { type: "icon", icon: "bar", color: "#8b5cf6" },
        { type: "text", value: " sales, credit, and inventory." },
      ],
      trustedLabel: "Powering commerce for",
      trustedBy: [
        { name: "Ivory Roots", icon: "bag" },
        { name: "Claveira", icon: "grid" },
        { name: "Backspace", icon: "circle" },
        { name: "Abidjan", icon: "globe" },
      ],
    },
  },
  {
    id: "ivoryroots",
    name: "Ivory Roots",
    letter: "IR",
    color: "#b3401f",
    tagline: "Proof-of-concept storefront running on Akaragi infrastructure.",
    status: "POC",
    live: false,
    role: "founder · 2026 — present",
    lead: "Lifestyle commerce for the Ivorian market, built entirely on Akaragi infrastructure as its first live proof-of-concept.",
    href: "/projects/ivoryroots",
    image: "https://images.unsplash.com/photo-1441986300917-64676bd600d8?w=900&auto=format&fit=crop&q=80",
    bannerLabel: "Live storefront",
    cardLine: "Proof-of-concept storefront running on Akaragi infrastructure.",
    about: {
      paragraph1: [
        { type: "text", value: "Ivory Roots is a lifestyle commerce brand " },
        { type: "icon", icon: "bag", color: "#b3401f" },
        { type: "text", value: " running entirely on Akaragi infrastructure as its first live proof-of-concept. " },
        { type: "icon", icon: "store", color: "#0f7b4d" },
      ],
      paragraph2: [
        { type: "text", value: "With curated product drops, mobile checkout " },
        { type: "icon", icon: "wallet", color: "#eab308" },
        { type: "text", value: ", and local delivery workflows, Ivory Roots shows what Akaragi enables for Ivorian " },
        { type: "icon", icon: "globe", color: "#3b82f6" },
        { type: "text", value: " retail at scale." },
      ],
      trustedLabel: "Built on infrastructure from",
      trustedBy: [
        { name: "Akaragi", icon: "store" },
        { name: "Backspace", icon: "circle" },
        { name: "Claveira", icon: "grid" },
        { name: "Abidjan", icon: "globe" },
      ],
    },
  },
  {
    id: "freedom",
    name: "FREEDOM",
    letter: "F",
    color: "#6b3fa0",
    tagline: "Independent ML research — efficient reasoning architectures.",
    status: "Research",
    live: false,
    role: "principal investigator · 2026 · paper in progress",
    lead: "Research program on sparse, efficient reasoning architectures.",
    href: "/projects/freedom",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80",
    bannerLabel: "ML research",
    cardLine: "Independent ML research — efficient reasoning architectures.",
    about: {
      paragraph1: [
        { type: "text", value: "FREEDOM is a research program on sparse, efficient reasoning " },
        { type: "icon", icon: "brain", color: "#6b3fa0" },
        { type: "text", value: " architectures for the next generation of AI systems. " },
        { type: "icon", icon: "cpu", color: "#6366f1" },
      ],
      paragraph2: [
        { type: "text", value: "With rigorous benchmarking, novel sparse topologies " },
        { type: "icon", icon: "network", color: "#22c55e" },
        { type: "text", value: ", and open publication, FREEDOM aims to push the frontier of " },
        { type: "icon", icon: "bulb", color: "#eab308" },
        { type: "text", value: " efficient inference and agentic reasoning." },
      ],
      trustedLabel: "Research within",
      trustedBy: [
        { name: "Backspace", icon: "circle" },
        { name: "Claveira", icon: "grid" },
        { name: "Akaragi", icon: "store" },
        { name: "Paris", icon: "globe" },
      ],
    },
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
