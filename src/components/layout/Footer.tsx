import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-sm text-zinc-700">
          <div>
            <div className="text-base font-semibold text-brand-700">VedSparsh</div>
            <p className="mt-2">Organic, premium, spiritual. Trusted products for your home and rituals.</p>
          </div>
          <div>
            <div className="font-medium mb-2">Shop</div>
            <ul className="space-y-1">
              <li><Link href="/categories" className="hover:text-brand-700">Categories</Link></li>
              <li><Link href="/b2b" className="hover:text-brand-700">B2B</Link></li>
              <li><Link href="/cart" className="hover:text-brand-700">Cart</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Company</div>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-brand-700">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-700">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Policies</div>
            <ul className="space-y-1">
              <li><Link href="/policies/privacy" className="hover:text-brand-700">Privacy</Link></li>
              <li><Link href="/policies/terms" className="hover:text-brand-700">Terms</Link></li>
              <li><Link href="/policies/refund" className="hover:text-brand-700">Refund</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-brand-700">Shipping</Link></li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-xs text-zinc-500">© {new Date().getFullYear()} VedSparsh. All rights reserved.</div>
      </Container>
    </footer>
  );
}
