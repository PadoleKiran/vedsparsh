import Container from "@/components/ui/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import { getCategories } from "@/services/catalog";
import ChipsRow from "@/components/ui/ChipsRow";

export const metadata = {
  title: "Categories",
  description: "Explore our organic ghee, pooja products, and B2B offerings.",
};

export default async function CategoriesPage() {
  const cats = await getCategories();
  const chips = [{ label: "All", href: "/categories", active: true }, ...cats.map((c) => ({ label: c.name, href: `/categories/${c.slug}` }))];
  return (
    <main>
      <section className="py-10">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-brand-700">Welcome to VedSparsh!</h1>
            <p className="text-zinc-600 mt-1">You're one step closer to purity</p>
          </div>
          <div className="mt-6">
            <ChipsRow items={chips} />
          </div>
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
