export type ExperienceBullet = { text: string };

export type ExperienceSubRole = {
  title: string;
  location?: string;
  period?: string;
  bullets: ExperienceBullet[];
  tech?: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  period: string;
  role: string;
  summary?: string;
  bullets?: ExperienceBullet[];
  tech?: string[];
  subRoles?: ExperienceSubRole[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: "Goldman Sachs",
    location: "Birmingham, UK",
    period: "Aug 2025 – Present",
    role: "Software Engineer II — Compliance (Full-stack)",
    bullets: [
      {
        text: "Leading architecture and end-to-end development of an internal compliance platform serving 100+ users across 5 business units, with domain-driven data models and event-driven workflows.",
      },
      {
        text: "Modernised two legacy applications by migrating to Spring Boot, Hibernate, and React—improving maintainability and deployment reliability.",
      },
      {
        text: "Designed and delivered a production-grade Spring Boot & React application used across 5+ business units with no critical incidents since launch; availability via EKS with multiple clusters and pods.",
      },
      {
        text: "Owned production reliability across three compliance-critical applications—cut incident resolution time by ~30% and improved uptime to 99.9%.",
      },
      {
        text: "Reduced latency on three legacy endpoints from over 5 minutes to under 10 seconds.",
      },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "React",
      "Kubernetes",
      "EKS",
      "Microservices",
      "REST",
    ],
  },
  {
    company: "Shell",
    location: "London, UK",
    period: "Sept 2022 – April 2025",
    role: "Associate Software Engineer",
    subRoles: [
      {
        title: "Backend Developer — Downstream Exchange",
        bullets: [
          {
            text: "Developed and optimised backend systems for a fintech trading application associated with $25M+ annual benefits from 4B+ barrels traded—with zero downtime.",
          },
          {
            text: "Designed and built scalable APIs; improved SonarQube rating by 25% and achieved 100% test coverage on new code.",
          },
          {
            text: "Conducted 15+ code reviews and testing cycles to uphold quality across deliverables.",
          },
          {
            text: "Integrated external exchange market data to construct dynamic price curves—working with traders, BAs, and QA for end-to-end delivery.",
          },
        ],
        tech: [
          "C#",
          ".NET Core",
          "ASP.NET Core Web API",
          "SQL",
          "RabbitMQ",
          "Redis",
          "Docker",
          "Kubernetes",
          "Azure DevOps",
          "CI/CD",
        ],
      },
      {
        title: "Deployment Manager — Downstream Pricing",
        bullets: [
          {
            text: "Led multi-environment deployment cycles with strong uptime and dependency integrity across microservices.",
          },
          {
            text: "Managed 15+ successful production deployments with Product Owners, developers, and business analysts.",
          },
        ],
      },
      {
        title: "Tech Lead — Shell Intellytics (capstone)",
        bullets: [
          {
            text: "Led a team of five to deliver a GenAI-powered web application projected to improve analyst productivity by $4,000/month using Python.",
          },
          {
            text: "Recognised with a 5-star honours award from the Lead Software Engineer.",
          },
        ],
        tech: ["Python", "GenAI"],
      },
    ],
  },
  {
    company: "The Intrapreneurs Club",
    location: "London, UK",
    period: "May 2021 – Sept 2021",
    role: "Accelerator Programme Participant",
    bullets: [
      {
        text: "Participated in an accelerator focused on building high-performing, diverse tech teams and connecting professionals with strong opportunities.",
      },
    ],
  },
];
