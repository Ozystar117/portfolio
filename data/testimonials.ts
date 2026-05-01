export type Testimonial = {
  author: string;
  /** Shown in the link text (job title / role). */
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const testimonials: Testimonial[] = [
  {
    author: "Tim Hughes",
    title: "a Lead Software Engineer @ Shell",
    href: "https://www.linkedin.com/in/timhughes45",
    image: "/images/testimonials/tim _rec.png",
    alt: "LinkedIn recommendation screenshot from Tim Hughes",
  },
  {
    author: "Marcial Garza",
    title: "a Senior Tech Lead @ Shell",
    href: "https://www.linkedin.com/in/marcial-garza-2194a0",
    image: "/images/testimonials/marcial_rec.png",
    alt: "LinkedIn recommendation screenshot from Marcial Garza",
  },
];
