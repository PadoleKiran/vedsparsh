import Container from "@/components/ui/Container";
import ProductCard from "@/components/cards/ProductCard";
import { getCategoryBySlug, getProductsByCategory } from "@/services/catalog";
import { getCategories } from "@/services/catalog";
import ChipsRow from "@/components/ui/ChipsRow";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = await getCategoryBySlug(params.slug);
  return {
    title: cat ? `${cat.name}` : "Category",
    description: cat?.description || "Browse products",
  };
}

export default async function CategoryListing({ params }: { params: { slug: string } }) {
  const cat = await getCategoryBySlug(params.slug);
  const products = await getProductsByCategory(params.slug);
  const cats = await getCategories();
  const chips = [{ label: "All", href: "/categories" }, ...cats.map((c) => ({ label: c.name, href: `/categories/${c.slug}`, active: c.slug === params.slug }))];
  return (
    <main>
      <section className="py-10">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-brand-700">{cat?.name || "Category"}</h1>
            {cat?.description && <p className="text-zinc-600 mt-1">{cat.description}</p>}
          </div>
          <div className="mt-6">
            <ChipsRow items={chips} />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
