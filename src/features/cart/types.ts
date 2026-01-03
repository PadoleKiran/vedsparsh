import { Product } from "@/types/catalog";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  image?: string;
  slug: string;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "SET_QTY"; payload: { id: string; qty: number } }
  | { type: "CLEAR" };

export const toCartItem = (p: Product): CartItem => ({
  id: p.id,
  title: p.title,
  price: p.price,
  qty: 1,
  image: p.images?.[0],
  slug: p.slug,
});
