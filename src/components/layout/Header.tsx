"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { useCart } from "@/features/cart/useCart";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md ${active ? "text-brand-700" : "text-zinc-700 hover:text-brand-700"}`}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-zinc-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-wide text-brand-700">VedSparsh</Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="/" label="Home" />
            <NavLink href="/categories" label="Categories" />
            <NavLink href="/b2b" label="B2B" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/cart" className="text-sm font-medium text-zinc-700 hover:text-brand-700">
              Cart {count > 0 && <span className="ml-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-600 px-2 text-xs text-white">{count}</span>}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
