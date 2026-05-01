export type Award = {
  title: string;
  issuer: string;
  date?: string;
  detail?: string;
};

export const awards: Award[] = [
  {
    title: "5 Star Honours — Going Above and Beyond",
    issuer: "Shell — CC Lead Crude & Product Software Eng.",
    date: "Oct 2024",
  },
  {
    title: "5 Star Honours — Improved Quality Standard",
    issuer: "Shell — CC Lead Crude & Products Software Eng.",
    date: "Sept 2023",
  },
  {
    title: "Recognised in Shell department newsletter",
    issuer: "Trading & Supply Competency Centre",
    detail: "Highlighted for driving business value.",
  },
];
