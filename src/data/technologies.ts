import type { Technology } from "@/types/technology";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const technologies: Technology[] = [
  {
    id: "html5",
    name: "HTML5",
    icon: FaHtml5,
    category: "frontend",
  },
  {
    id: "css3",
    name: "CSS3",
    icon: FaCss3Alt,
    category: "frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    category: "frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
  },
  {
    id: "react",
    name: "React",
    icon: FaReact,
    category: "frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: FaNodeJs,
    category: "backend",
  },
  {
    id: "express",
    name: "Express",
    icon: SiExpress,
    category: "backend",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    category: "database",
  },
  {
    id: "git",
    name: "Git",
    icon: FaGitAlt,
    category: "tools",
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    category: "tools",
  },
  {
    id: "docker",
    name: "Docker",
    icon: FaDocker,
    category: "tools",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: VscVscode,
    category: "tools",
  },
  {
    id: "figma",
    name: "Figma",
    icon: SiFigma,
    category: "tools",
  },
];
