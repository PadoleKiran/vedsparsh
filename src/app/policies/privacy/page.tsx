import Container from "@/components/ui/Container";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Privacy Policy</h1>
          <p className="mt-2 text-zinc-700 max-w-3xl">We respect your privacy. This page will outline how we collect, use, and safeguard your information. Detailed content to be finalized with the client.</p>
        </Container>
      </section>
    </main>
  );
}
