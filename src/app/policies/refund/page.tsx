import Container from "@/components/ui/Container";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Refund Policy</h1>
          <p className="mt-2 text-zinc-700 max-w-3xl">Refunds and returns are subject to product condition, timelines, and proof of purchase. Detailed policy to be finalized with the client.</p>
        </Container>
      </section>
    </main>
  );
}
