import { IAttributes, ICategories } from "@/types";

export const CATEGORIES: ICategories = {
  // Main categories
  main: ["Electronics", "Fashion", "Home & Living"],

  // Second level categories
  Electronics: ["Computers", "Phones", "Audio"],
  Fashion: ["Clothing", "Shoes", "Accessories"],
  "Home & Living": ["Furniture", "Decor", "Kitchen"],

  // Third level categories
  Computers: ["Laptops", "Desktops", "Tablets"],
  Phones: ["Smartphones", "Basic Phones", "Accessories"],
  Audio: ["Headphones", "Speakers", "Microphones"],

  Clothing: ["Shirts", "Pants", "Dresses"],
  Shoes: ["Sneakers", "Boots", "Sandals"],
  Accessories: ["Bags", "Watches", "Jewelry"],

  Furniture: ["Chairs", "Tables", "Beds"],
  Decor: ["Wall Art", "Lighting", "Rugs"],
  Kitchen: ["Cookware", "Appliances", "Utensils"],
};

export const ATTRIBUTES: IAttributes = {
  common: [
    "Brand",
    "Price Range",
    "Rating",
    "Availability",
    "Discount",
    "Color",
    "Material",
    "Warranty",
    "Shipping Time",
    "Return Policy",
  ],
};
