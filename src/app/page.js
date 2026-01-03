import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import { getCategories, getFeaturedProducts } from "@/services/catalog";

export const metadata = {
  title: "Organic & Spiritual Essentials",
  description: "VedSparsh brings organic ghee and trusted pooja products to your home.",
};

export default async function Home() {
  const cats = await getCategories();
  const featured = await getFeaturedProducts();
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">Pure. Traditional. Trusted.</h1>
              <p className="mt-3 text-zinc-700">Organic desi ghee and spiritual essentials crafted with care for Indian households.</p>
              <div className="mt-6 flex gap-3">
                <Link href="/categories" className="inline-flex items-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700">Shop Now</Link>
                <Link href="/b2b" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-100">B2B Enquiries</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1498654077810-12f82342376b?w=1600&q=80&auto=format&fit=crop" alt="VedSparsh" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">Shop by Category</h2>
              <p className="text-zinc-600">Organic, premium, spiritual essentials.</p>
            </div>
            <Link href="/categories" className="text-sm text-brand-700 hover:underline">View all</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cats.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-zinc-50">
        <Container>
          <h2 className="text-2xl font-semibold text-zinc-900">Featured Products</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
