import { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    id: "ghee",
    name: "Ghee",
    slug: "ghee",
    description: "Organic desi ghee crafted traditionally.",
    type: "b2c",
  },
  {
    id: "pooja",
    name: "Pooja Products",
    slug: "pooja-products",
    description: "Trusted items for spiritual rituals.",
    type: "b2c",
  },
  {
    id: "staples",
    name: "Staples",
    slug: "staples",
    description: "Atta, jaggery, wood-pressed oils and more.",
    type: "b2c",
  },
  {
    id: "b2b",
    name: "B2B Bulk Orders",
    slug: "b2b",
    description: "Bulk and partner-focused supplies.",
    type: "b2b",
  },
];
