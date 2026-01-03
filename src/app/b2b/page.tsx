import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = { title: "B2B Bulk Orders" };

export default function B2BPage() {
  return (
    <main>
      <section className="py-10">
        <Container>
          <h1 className="text-2xl font-semibold text-zinc-900">B2B Bulk Orders</h1>
          <p className="text-zinc-600 mt-1">Partners, restaurants, and distributors can submit requirements here.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Company Name" className="rounded-md border px-3 py-2 sm:col-span-2" />
            <input required placeholder="Contact Person" className="rounded-md border px-3 py-2" />
            <input required type="tel" placeholder="Phone" className="rounded-md border px-3 py-2" />
            <input required type="email" placeholder="Email" className="rounded-md border px-3 py-2 sm:col-span-2" />
            <textarea placeholder="Requirements (quantities, products, delivery timeline)" className="rounded-md border px-3 py-2 sm:col-span-2 min-h-32" />
            <Button type="submit" className="sm:col-span-2">Submit Enquiry</Button>
          </form>
        </Container>
      </section>
    </main>
  );
}
