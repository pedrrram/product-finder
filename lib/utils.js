import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getBreadcrumbs = (categories) => {
  const crumbs = [];
  if (categories.main) crumbs.push(categories.main);
  if (categories.second) crumbs.push(categories.second);
  if (categories.third) crumbs.push(categories.third);
  return crumbs.join(" > ");
};
