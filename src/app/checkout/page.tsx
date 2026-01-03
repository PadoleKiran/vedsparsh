"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/useCart";
import { formatCurrency } from "@/utils/format";

export default function CheckoutPage() {
  const { items, totals } = useCart();
  const [payment, setPayment] = useState<"cod" | "online">("cod");

  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Checkout</h1>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="rounded-md border px-3 py-2" />
                <input required type="tel" placeholder="Phone" className="rounded-md border px-3 py-2" />
                <input required type="email" placeholder="Email" className="rounded-md border px-3 py-2 sm:col-span-2" />
                <input required placeholder="Address Line 1" className="rounded-md border px-3 py-2 sm:col-span-2" />
                <input placeholder="Address Line 2" className="rounded-md border px-3 py-2 sm:col-span-2" />
                <input required placeholder="City" className="rounded-md border px-3 py-2" />
                <input required placeholder="State" className="rounded-md border px-3 py-2" />
                <input required placeholder="Pincode" className="rounded-md border px-3 py-2" />
              </div>
              <div className="rounded-lg border p-4">
                <div className="font-medium text-zinc-900">Payment Method</div>
                <div className="mt-2 flex gap-4">
                  <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name="pay" checked={payment === "cod"} onChange={() => setPayment("cod")} /> Cash on Delivery</label>
                  <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name="pay" checked={payment === "online"} onChange={() => setPayment("online")} /> Online (Razorpay)</label>
                </div>
              </div>
              <Button type="submit">Place Order</Button>
            </form>
            <div>
              <div className="rounded-lg border p-4 bg-zinc-50">
                <div className="font-medium text-zinc-900">Order Summary</div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                  {items.map((it) => (
                    <li key={it.id} className="flex justify-between"><span>{it.title} × {it.qty}</span><span>{formatCurrency(it.price * it.qty)}</span></li>
                  ))}
                </ul>
                <div className="h-px bg-zinc-200 my-3" />
                <div className="flex justify-between text-sm text-zinc-700"><span>Subtotal</span><span>{formatCurrency(totals.subtotal)}</span></div>
                <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>Discount</span><span>-{formatCurrency(totals.discount)}</span></div>
                <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>GST</span><span>{formatCurrency(totals.gst)}</span></div>
                <div className="flex justify-between text-sm text-zinc-700 mt-1"><span>Shipping</span><span>{formatCurrency(totals.shipping)}</span></div>
                <div className="h-px bg-zinc-200 my-3" />
                <div className="flex justify-between font-semibold text-zinc-900"><span>Total</span><span>{formatCurrency(totals.total)}</span></div>
                <div className="text-xs text-zinc-600 mt-2">Payment selected: {payment === "cod" ? "Cash on Delivery" : "Online (Razorpay)"}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
