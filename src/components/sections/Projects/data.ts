import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "wona-bride",
    title: "WONA Bride",
    description:
      "Commercial full-stack wedding dress e-commerce website developed for a real bridal salon. Features product catalog, shopping cart, Telegram order notifications, admin panel and MongoDB database.",
    image: "/projects/wona-bride.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zustand",
      "Cloudinary",
      "Telegram Bot",
    ],
    live: "https://wona-bride.com.ua",
    Featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern portfolio built with Next.js, TypeScript and reusable UI components, focused on performance, accessibility and responsive design.",
    image: "/projects/portfolio.webp",
    technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
    github: "https://github.com/Andrii-Mitko/andrii-mitko-brand",
    live: "https://andrii-mitko-brand.vercel.app/",
  },
  {
    id: "notehub-api",
    title: "NoteHub API",
    description:
      "Responsive team project with adaptive layout, interactive UI and modern frontend development practices.",
    image: "/projects/notehub.webp",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Cloudinary",
    ],
    github: "https://github.com/Andrii-Mitko/nodejs-hw/tree/05-mail-and-img",
  },
  {
    id: "stp-13021",
    title: "STP-13021",
    description:
      "Responsive commercial website created for a client with modern UI, smooth animations and interactive user experience.",
    image: "/projects/stp-13021.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://anastacia-tkachova.github.io/STP-13021/",
    github: "https://github.com/Andrii-Mitko/STP-13021",
  },
];
