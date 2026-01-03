import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Category, Product } from "@/types/catalog";

const normalizeProduct = (p: Product): Product => ({
  ...p,
  images: p.images?.map((img: any) => (typeof img === "string" ? img : img?.src)).filter(Boolean) as string[],
});

export const getCategories = async (): Promise<Category[]> => categories;
export const getCategoryBySlug = async (slug: string) => categories.find((c) => c.slug === slug);

export const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return products.filter((p) => p.categoryId === cat.id && p.active).map(normalizeProduct);
};

export const getProductBySlug = async (slug: string) => {
  const p = products.find((p) => p.slug === slug);
  return p ? normalizeProduct(p) : undefined;
};
export const getFeaturedProducts = async () =>
  products
    .filter((p) => p.active)
    .sort((a, b) => {
      const score = (x: Product) => (x.isBestSeller ? 3 : 0) + (x.isNew ? 2 : 0) + (x.discountPercent || 0) / 100;
      return score(b) - score(a);
    })
    .slice(0, 6)
    .map(normalizeProduct);
