export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  certifications: "certifications",
  awards: "awards",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

export const NAV_ITEMS: { id: keyof typeof SECTION_IDS; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "awards", label: "Awards" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];
