"use client";

import { CartProvider } from "@/features/cart/cart-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
