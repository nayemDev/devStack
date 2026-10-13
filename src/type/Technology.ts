
import type { IconType } from "react-icons";

export interface Technology {
  id: number;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge?: string;
  icon: IconType;
  iconColor: string;
}