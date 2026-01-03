"use client";

import Link from "next/link";

export default function PromoStrip() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-zinc-800">
          <span className="font-medium">VedSparsh Rewards</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-zinc-600">Get 10% Off using code VED10</span>
        </div>
        <Link href="/checkout" className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1.5 text-white hover:bg-brand-700">Checkout</Link>
      </div>
    </div>
  );
}
