import { Product } from "@/types/catalog";

export const products: Product[] = [
  {
    id: "ghee-500",
    title: "Organic Desi Ghee 500ml",
    slug: "organic-desi-ghee-500ml",
    description: "Traditional bilona churned desi cow ghee, rich aroma and purity.",
    price: 749,
    categoryId: "ghee",
    unit: "500 ml",
    images: [
      "https://images.unsplash.com/photo-1587049352869-7f097120d3a1?w=1200&q=80&auto=format&fit=crop",
    ],
    active: true,
  },
  {
    id: "ghee-1000",
    title: "Organic Desi Ghee 1L",
    slug: "organic-desi-ghee-1l",
    description: "Authentic A2 desi ghee ideal for families.",
    price: 1399,
    categoryId: "ghee",
    unit: "1 L",
    images: [
      "https://images.unsplash.com/photo-1546549039-49f3d43863b1?w=1200&q=80&auto=format&fit=crop",
    ],
    active: true,
  },
  {
    id: "pooja-agarbatti",
    title: "Natural Agarbatti",
    slug: "natural-agarbatti",
    description: "Hand-rolled incense sticks with natural ingredients.",
    price: 149,
    categoryId: "pooja",
    unit: "pack",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
    ],
    active: true,
  },
  {
    id: "pooja-diya",
    title: "Brass Diya",
    slug: "brass-diya",
    description: "Traditional brass diya for daily pooja.",
    price: 299,
    categoryId: "pooja",
    images: [
      "https://images.unsplash.com/photo-1602786121739-cdcb2a957c8f?w=1200&q=80&auto=format&fit=crop",
    ],
    active: true,
  },
  {
    id: "b2b-ghee-bulk",
    title: "Ghee Bulk (B2B)",
    slug: "ghee-bulk-b2b",
    description: "Bulk supply of premium ghee for restaurants and partners.",
    price: 599,
    categoryId: "b2b",
    unit: "per kg (MOQ applies)",
    images: [
      "https://images.unsplash.com/photo-1498654077810-12f82342376b?w=1200&q=80&auto=format&fit=crop",
    ],
    active: true,
  },
];
