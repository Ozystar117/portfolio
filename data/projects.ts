export type Project = {
  id: string;
  title: string;
  description?: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
  tag?: string;
  featured?: boolean;
  company?: string;
  stat?: string;
  statLabel?: string;
  embedYouTubeId?: string;
};

export const projects: Project[] = [
  {
    id: "gs-compliance-reliability",
    company: "Goldman Sachs · Compliance",
    stat: "30% faster",
    statLabel: "Incident resolution",
    title: "Owned reliability across compliance-critical apps",
    highlights: [
      "Cut incident resolution time by ~30% across 3 compliance-critical applications.",
      "Improved uptime to 99.9%.",
      "Reduced 3 legacy endpoints from over 5 minutes to under 10 seconds.",
    ],
    tag: "Reliability",
    featured: true,
  },
  {
    id: "shell-downstream-exchange",
    company: "Shell · Downstream Exchange",
    stat: "$25M+",
    statLabel: "Annual trading benefits enabled",
    title: "Backend for a fintech trading platform",
    highlights: [
      "Developed and optimised backend systems associated with $25M+ annual benefits from 4B+ barrels traded, zero downtime.",
      "100% test coverage on new code; +25% SonarQube rating.",
      "Stack: C# .NET Core, ASP.NET Core, RabbitMQ, Redis, Docker, Kubernetes, Azure DevOps.",
    ],
    tag: "Fintech",
    featured: true,
  },
  {
    id: "shell-intellytics-genai",
    company: "Shell · Intellytics (capstone)",
    stat: "$4k/month",
    statLabel: "Projected productivity uplift",
    title: "GenAI productivity app for analysts",
    highlights: [
      "Tech-led a team of 5 from discovery to stakeholder demo.",
      "Python + GenAI workflow targeted at analyst tasks.",
      "Recognised with 5-star Honours.",
    ],
    tag: "Leadership",
    featured: true,
  },
  {
    id: "ozycodes-youtube",
    company: "OzyCodes · YouTube",
    title: "Programming tutorials & insights on YouTube",
    highlights: [
      "Long-form tutorials and walkthroughs for a global developer audience.",
      "Community-focused developer education.",
    ],
    embedYouTubeId: "gGg7aOGP51M",
    links: [
      {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/@OzyCodes",
      },
    ],
    tag: "Community",
  },
];
