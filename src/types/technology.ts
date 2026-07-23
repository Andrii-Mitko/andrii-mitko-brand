import { IconType } from "react-icons";

export type TechnologyCategory = "frontend" | "backend" | "database" | "tools";

export type Technology = {
  id: string;
  name: string;
  icon: IconType;
  category: TechnologyCategory;
};
