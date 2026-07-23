import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "wona-bride",
    title: "WONA Bride",
    description:
      "Modern wedding dress e-commerce website built with Next.js, TypeScript and MongoDB.",
    image: "/projects/wona-bride.webp",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB"],
    live: "https://wona-bride.com.ua",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Personal portfolio showcasing projects, technologies and development experience.",
    image: "/projects/portfolio.webp",
    technologies: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/Andrii-Mitko/andrii-mitko-brand",
    live: "https://andrii-mitko-brand.vercel.app/",
  },
  {
    id: "notehub-api",
    title: "NoteHub API",
    description: "REST API for notes with authentication, MongoDB and Express.",
    image: "/projects/notehub.webp",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Andrii-Mitko/nodejs-hw/tree/05-mail-and-img",
  },
  {
    id: "stp-13021",
    title: "STP-13021",
    description:
      "Responsive web application built with modern frontend technologies.",
    image: "/projects/stp-13021webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://anastacia-tkachova.github.io/STP-13021/",
    github: "https://github.com/Andrii-Mitko/STP-13021",
  },
];
