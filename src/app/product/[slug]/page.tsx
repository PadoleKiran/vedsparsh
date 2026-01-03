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
  const imageSrc = typeof product.images?.[0] === "string" ? (product.images?.[0] as string) : (product.images?.[0] as any)?.src;
  return (
    <main>
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-square bg-white">
              <Image src={imageSrc || "/vercel.svg"} alt={product.title} fill unoptimized className="object-contain p-3 rounded-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900">{product.title}</h1>
              <div className="mt-2 text-brand-700 text-xl font-semibold">{formatCurrency(product.price)}</div>
              <p className="mt-4 text-zinc-700">{product.description}</p>
              <AddToCart id={product.id} title={product.title} price={product.price} image={imageSrc} slug={product.slug} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
