export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "C#", ".NET", "Kotlin", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Hibernate",
      "ASP.NET Core",
      "REST",
      "Microservices",
      "Multi-threading",
      "Event-driven design",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "WPF"],
  },
  {
    category: "Messaging & caching",
    items: ["Kafka", "RabbitMQ", "Redis"],
  },
  {
    category: "Data",
    items: ["MS SQL", "PostgreSQL", "MongoDB", "DB2"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "AWS EKS", "Azure DevOps", "CI/CD", "Git"],
  },
];
