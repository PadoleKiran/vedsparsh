import type { StaticImageData } from "next/image";
export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  type: "b2c" | "b2b";
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  mrp?: number;
  categoryId: string;
  unit?: string;
  attributes?: Record<string, string | number>;
  images?: Array<string | StaticImageData>;
  tags?: string[];
  active: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  discountPercent?: number;
  couponText?: string;
  saveText?: string;
};
