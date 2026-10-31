export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  description: string;
  certificate?: string;
}

export const education: EducationItem[] = [
  {
    period: "2025 – 2026",
    school: "GoIT",
    degree: "Full Stack Developer",
    description:
      "Completed a comprehensive Full Stack Development program covering React, Next.js, TypeScript, Node.js, Express, MongoDB and modern web development practices.",
    certificate: "/Certificate.pdf",
  },
  {
    period: "1991 – 1995",
    school: "Mariupol Mechanical and Metallurgical College (PSTU)",
    degree: "Electrical Engineering",
    description:
      "Studied electrical engineering, automation systems and technical problem solving.",
  },
];
