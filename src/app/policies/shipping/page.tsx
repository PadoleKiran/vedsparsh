import Container from "@/components/ui/Container";

export const metadata = { title: "Shipping Policy" };

export default function ShippingPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Shipping Policy</h1>
          <p className="mt-2 text-zinc-700 max-w-3xl">We ship across India. Typical delivery is 3-7 business days. Detailed policy including shipping charges and coverage to be finalized with the client.</p>
        </Container>
      </section>
    </main>
  );
}
