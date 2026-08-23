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
    github: "https://github.com/wona-bride/wona-bride",
    Featured: true,
  },
  {
    id: "webcrafters-03",
    title: "Harmoniq — Webcrafters-03",
    description:
      "Team full-stack pet project built as a monorepo with Next.js, TypeScript, Express.js and MongoDB. Feature owner for Login, Auth State & Route Guards, including authentication flow, protected routes, API integration and backend error handling.",
    image: "/projects/webcrafters-03.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Zustand",
      "Formik",
      "Yup",
      "Express",
      "MongoDB",
      "JWT",
    ],
    live: "https://project-webcrafters-03-frontend.vercel.app/",
    github: "https://github.com/vitaliypolets/project-webcrafters-03",
    Featured: true,
  },
  {
    id: "html-css-tutorial",
    title: "HTML & CSS Tutorial",
    description:
      "Interactive HTML & CSS learning platform built with Next.js. Includes theory, practical exercises, hints and solutions, providing a structured way to learn modern web development.",
    image: "/projects/html-css-tutoria.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "SEO",
      "Responsive Design",
    ],
    live: "https://textbook-html-css.vercel.app",
    github: "https://github.com/Andrii-Mitko/textbook-html-css",
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
