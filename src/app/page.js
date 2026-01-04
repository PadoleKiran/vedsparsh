import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import { getCategories, getFeaturedProducts } from "@/services/catalog";
import heroImg from "../asse/mainpage.png";
import FeatureCircle from "@/components/home/FeatureCircle";
import featGhee from "../asse/ghee.png";
import featOil from "../asse/oil.png";
import featAata from "../asse/aata image 10kg.png";
import featJaggery from "../asse/jaggery power image.png";
import ProcessSection from "@/components/home/ProcessSection";

export const metadata = {
  title: "Organic & Spiritual Essentials",
  description: "VedSparsh brings organic ghee and trusted pooja products to your home.",
};

export default async function Home() {
  const cats = await getCategories();
  const featured = await getFeaturedProducts();
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <Image src={heroImg} alt="VedSparsh main" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <Container>
            <div className="absolute inset-0 flex items-center px-4 sm:px-6">
              <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-white">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight drop-shadow-md">From Our Gaushala to Your Kitchen</h1>
                <p className="mt-3 text-white/90 max-w-xl text-sm sm:text-base">Organic desi ghee and spiritual essentials crafted with care.</p>
                <div className="mt-6 flex gap-3">
                  <Link href="/categories/ghee" className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700">Shop Pure Ghee</Link>
                  <Link href="/cart" className="inline-flex items-center rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-white">Go to Cart</Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-8 bg-brand-50">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            <FeatureCircle title="Grass-fed Cows" subtitle="Happy Cows" imageSrc={heroImg.src} />
            <FeatureCircle title="Pure Desi Ghee" subtitle="Bilona" imageSrc={featGhee.src} />
            <FeatureCircle title="Wood-Pressed Oils" subtitle="Traditional" imageSrc={featOil.src} />
            <FeatureCircle title="Khapli Atta" subtitle="Healthy" imageSrc={featAata.src} />
            <FeatureCircle title="Natural Jaggery" subtitle="Wholesome" imageSrc={featJaggery.src} />
          </div>
        </Container>
      </section>

      <ProcessSection />

      <section className="py-12">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">Shop by Category</h2>
              <p className="text-zinc-600">Organic, premium, spiritual essentials.</p>
            </div>
            <Link href="/categories" className="text-sm text-brand-700 hover:underline">View all</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cats.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-brand-50">
        <Container>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-zinc-900">Why VedSparsh</h2>
            <p className="text-zinc-600">Pure ingredients. Traditional methods. Trusted quality.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-brand-100 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
