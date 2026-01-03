import Container from "@/components/ui/Container";
import ProductCard from "@/components/cards/ProductCard";
import { getCategoryBySlug, getProductsByCategory } from "@/services/catalog";

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
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">{cat?.name || "Category"}</h1>
          {cat?.description && <p className="text-zinc-600 mt-1">{cat.description}</p>}
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
