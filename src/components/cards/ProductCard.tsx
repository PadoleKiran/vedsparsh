"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Product } from "@/types/catalog";
import { useCart } from "@/features/cart/useCart";
import { formatCurrency } from "@/utils/format";
import Badge from "@/components/ui/Badge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fallbackImg from "../../asse/ghee.png";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const router = useRouter();
  const showMrp = product.mrp && product.mrp > product.price;
  const [src, setSrc] = useState<any>(product.images?.[0] || fallbackImg);
  useEffect(() => {
    setSrc(product.images?.[0] || fallbackImg);
  }, [product]);
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white overflow-hidden">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block">
          <div className="aspect-[4/3] relative">
            <Image src={src} alt={product.title} fill unoptimized className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" onError={() => setSrc(fallbackImg)} />
          </div>
        </Link>
        {product.discountPercent ? (
          <div className="absolute left-3 top-3">
            <Badge color="green">{product.discountPercent}% Off</Badge>
          </div>
        ) : null}
        {product.isNew ? (
          <div className="absolute right-3 top-3">
            <Badge color="blue">New Launch</Badge>
          </div>
        ) : product.isBestSeller ? (
          <div className="absolute right-3 top-3">
            <Badge color="gray">Best Seller</Badge>
          </div>
        ) : null}
      </div>
      <div className="p-4">
        {product.unit && <div className="text-xs text-zinc-500">{product.unit}</div>}
        <Link href={`/product/${product.slug}`} className="font-medium text-zinc-900 line-clamp-2">
          {product.title}
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-brand-700 font-semibold">{formatCurrency(product.price)}</div>
          {showMrp && <div className="text-sm text-zinc-500 line-through">{formatCurrency(product.mrp as number)}</div>}
        </div>
        {product.couponText && (
          <div className="mt-1 text-sm text-emerald-700">{product.couponText}</div>
        )}
        {product.saveText && (
          <div className="text-xs text-zinc-600">{product.saveText}</div>
        )}
      </div>
      <div className="p-4 pt-0 flex gap-2">
        <Button onClick={() => add({ id: product.id, title: product.title, price: product.price, qty: 1, image: product.images?.[0], slug: product.slug })} className="w-1/2">Add to cart</Button>
        <Button variant="secondary" onClick={() => { add({ id: product.id, title: product.title, price: product.price, qty: 1, image: product.images?.[0], slug: product.slug }); router.push("/checkout"); }} className="w-1/2">Buy now</Button>
      </div>
    </div>
  );
}
