import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">Contact Us</h1>
          <p className="text-zinc-600 mt-1">We usually reply within 1-2 business days.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full Name" className="rounded-md border px-3 py-2" />
            <input required type="email" placeholder="Email" className="rounded-md border px-3 py-2" />
            <input required type="tel" placeholder="Phone" className="rounded-md border px-3 py-2 sm:col-span-2" />
            <textarea placeholder="Your message" className="rounded-md border px-3 py-2 sm:col-span-2 min-h-32" />
            <Button type="submit" className="sm:col-span-2">Send Message</Button>
          </form>
        </Container>
      </section>
    </main>
  );
}
