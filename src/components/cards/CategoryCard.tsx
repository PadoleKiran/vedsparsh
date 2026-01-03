import Link from "next/link";
import { Category } from "@/types/catalog";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`} className="block rounded-lg border border-zinc-200 p-5 bg-white hover:shadow-sm transition">
      <div className="text-sm text-zinc-500 uppercase tracking-wide">{category.type === "b2b" ? "B2B" : "Category"}</div>
      <div className="mt-1 text-lg font-semibold text-zinc-900">{category.name}</div>
      {category.description && <p className="mt-1 text-zinc-600 text-sm">{category.description}</p>}
    </Link>
  );
}
