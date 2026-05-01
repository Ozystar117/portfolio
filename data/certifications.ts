export type Certification = {
  name: string;
  issuer: string;
  status?: "completed" | "in_progress";
  issued?: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud (Coursera)",
    status: "completed",
    issued: "Jan 2025",
    href: "https://coursera.org/account/accomplishments/records/BPIU0VPHJUEU",
  },
  {
    name: "Shell e Certified GenAI Developer",
    issuer: "Shell",
    status: "completed",
    issued: "Sept 2024",
    href: "https://www.credly.com/badges/54f3f06d-436d-4c3c-8304-815a2fbebdb2/public_url",
  },
  {
    name: "IBM AI Developer",
    issuer: "IBM",
    status: "in_progress",
  },
];
