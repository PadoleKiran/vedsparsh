"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Product } from "@/types/catalog";
import { useCart } from "@/features/cart/useCart";
import { formatCurrency } from "@/utils/format";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group rounded-lg border border-zinc-200 bg-white overflow-hidden">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-[4/3] relative">
          <Image src={product.images?.[0] || "/vercel.svg"} alt={product.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div className="p-4">
          <div className="text-sm text-zinc-500">{product.unit}</div>
          <div className="font-medium text-zinc-900">{product.title}</div>
          <div className="mt-1 text-brand-700 font-semibold">{formatCurrency(product.price)}</div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button onClick={() => add({ id: product.id, title: product.title, price: product.price, qty: 1, image: product.images?.[0], slug: product.slug })} className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
