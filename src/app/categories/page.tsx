import Container from "@/components/ui/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import { getCategories } from "@/services/catalog";

export const metadata = {
  title: "Categories",
  description: "Explore our organic ghee, pooja products, and B2B offerings.",
};

export default async function CategoriesPage() {
  const cats = await getCategories();
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Shop by Category</h1>
          <p className="text-zinc-600 mt-1">Organic, premium, spiritual essentials.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cats.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
