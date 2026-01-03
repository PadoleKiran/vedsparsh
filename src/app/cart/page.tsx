"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/useCart";
import { formatCurrency } from "@/utils/format";

export default function CartPage() {
  const { items, totals, setQty, remove, clear } = useCart();
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Cart</h1>
          {items.length === 0 ? (
            <div className="mt-8 text-zinc-600">Your cart is empty. <Link href="/categories" className="text-brand-700 hover:underline">Browse products</Link>.</div>
          ) : (
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((it) => (
                  <div key={it.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium text-zinc-900">{it.title}</div>
                      <div className="text-sm text-zinc-600">{formatCurrency(it.price)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="number" min={1} value={it.qty} onChange={(e) => setQty(it.id, Math.max(1, Number(e.target.value) || 1))} className="w-16 rounded-md border px-2 py-1" />
                      <Button variant="ghost" onClick={() => remove(it.id)}>Remove</Button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <Button variant="ghost" onClick={clear}>Clear Cart</Button>
                </div>
              </div>
              <div>
                <div className="rounded-lg border p-4 bg-zinc-50">
                  <div className="flex justify-between text-sm text-zinc-700"><span>Subtotal</span><span>{formatCurrency(totals.subtotal)}</span></div>
                  <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>Discount</span><span>-{formatCurrency(totals.discount)}</span></div>
                  <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>GST</span><span>{formatCurrency(totals.gst)}</span></div>
                  <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>Shipping</span><span>{formatCurrency(totals.shipping)}</span></div>
                  <div className="h-px bg-zinc-200 my-3" />
                  <div className="flex justify-between font-semibold text-zinc-900"><span>Total</span><span>{formatCurrency(totals.total)}</span></div>
                  <Link href="/checkout" className="mt-4 block"><Button className="w-full">Checkout</Button></Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
