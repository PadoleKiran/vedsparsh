"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/useCart";

type Props = {
  id: string;
  title: string;
  price: number;
  image?: string;
  slug: string;
};

export default function AddToCart(props: Props) {
  const { add } = useCart();
  return (
    <Button
      onClick={() => add({ id: props.id, title: props.title, price: props.price, qty: 1, image: props.image, slug: props.slug })}
      className="mt-6"
    >
      Add to Cart
    </Button>
  );
}
