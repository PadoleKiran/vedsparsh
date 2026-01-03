import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getProductBySlug } from "@/services/catalog";
import { formatCurrency } from "@/utils/format";
import { toCartItem } from "@/features/cart/types";
import { useCart } from "@/features/cart/useCart";

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
              <AddToCart slug={params.slug} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function AddToCart({ slug }: { slug: string }) {
  "use client";
  const { add } = useCart();
  return (
    <Button onClick={async () => {
      const { getProductBySlug } = await import("@/services/catalog");
      const p = await getProductBySlug(slug);
      if (p) add({ id: p.id, title: p.title, price: p.price, qty: 1, image: p.images?.[0], slug: p.slug });
    }} className="mt-6">Add to Cart</Button>
  );
}
