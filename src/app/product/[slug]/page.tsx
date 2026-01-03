import Image from "next/image";
import Container from "@/components/ui/Container";
import { getProductBySlug } from "@/services/catalog";
import { formatCurrency } from "@/utils/format";
import AddToCart from "@/components/product/AddToCart";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  return {
    title: product ? product.title : "Product",
    description: product?.description?.slice(0, 150),
  };
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return (
      <main>
        <Container>
          <div className="py-20 text-center text-zinc-600">Product not found.</div>
        </Container>
      </main>
    );
  }
  return (
    <main>
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image src={product.images?.[0] || "/vercel.svg"} alt={product.title} fill className="object-cover rounded-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900">{product.title}</h1>
              <div className="mt-2 text-brand-700 text-xl font-semibold">{formatCurrency(product.price)}</div>
              <p className="mt-4 text-zinc-700">{product.description}</p>
              <AddToCart id={product.id} title={product.title} price={product.price} image={product.images?.[0]} slug={product.slug} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
