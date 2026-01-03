import Container from "@/components/ui/Container";

export const metadata = { title: "About VedSparsh" };

export default function AboutPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">About VedSparsh</h1>
          <p className="mt-2 text-zinc-700 max-w-3xl">VedSparsh brings the purity of Indian traditions to modern households. Our products are crafted with care, focusing on authenticity, quality, and trust. From organic desi ghee to spiritual essentials, we serve families and communities across India.</p>
        </Container>
      </section>
    </main>
  );
}
