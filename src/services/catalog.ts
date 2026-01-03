import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Category, Product } from "@/types/catalog";

export const getCategories = async (): Promise<Category[]> => categories;
export const getCategoryBySlug = async (slug: string) => categories.find((c) => c.slug === slug);

export const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return products.filter((p) => p.categoryId === cat.id && p.active);
};

export const getProductBySlug = async (slug: string) => products.find((p) => p.slug === slug);
export const getFeaturedProducts = async () => products.filter((p) => p.active).slice(0, 6);
