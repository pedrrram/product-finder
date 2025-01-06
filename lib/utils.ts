import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Categories {
  main?: string;
  second?: string;
  third?: string;
}

export const getBreadcrumbs = (categories: Categories) => {
  const crumbs = [];
  if (categories.main) crumbs.push(categories.main);
  if (categories?.second) crumbs.push(categories.second);
  if (categories?.third) crumbs.push(categories.third);
  return crumbs.join(" > ");
};
