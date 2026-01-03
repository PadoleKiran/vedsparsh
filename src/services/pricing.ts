import { CartItem } from "@/features/cart/types";

export type PriceOptions = {
  gstRate?: number;
  shippingFlat?: number;
  discountRate?: number;
};

export type PriceBreakdown = {
  subtotal: number;
  gst: number;
  shipping: number;
  discount: number;
  total: number;
};

export const computePriceBreakdown = (
  items: CartItem[],
  opts: PriceOptions = {}
): PriceBreakdown => {
  const { gstRate = 0.05, shippingFlat = 49, discountRate = 0 } = opts;
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = Math.round(subtotal * discountRate);
  const gst = Math.round((subtotal - discount) * gstRate);
  const shipping = subtotal > 999 ? 0 : shippingFlat;
  const total = Math.max(0, subtotal - discount + gst + shipping);
  return { subtotal, gst, shipping, discount, total };
};
