"use client";

import Container from "@/components/ui/Container";
import FeatureCircle from "./FeatureCircle";
import hero from "../../asse/mainpage.png";
import ghee from "../../asse/ghee.png";

function Arrow() {
  return (
    <div className="hidden sm:flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-600/70">
        <path d="M5 12h12" />
        <path d="M13 8l4 4-4 4" />
      </svg>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="py-10 bg-brand-50">
      <Container>
        <h2 className="text-center text-2xl font-semibold text-brand-700">Our Traditional Process</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <FeatureCircle title="Grass-fed Desi Cows" imageSrc={hero.src} />
          <Arrow />
          <FeatureCircle title="Fresh Milk Collection" icon="drop" />
          <Arrow />
          <FeatureCircle title="Hand-Churned Curd" icon="sparkles" />
          <Arrow />
          <FeatureCircle title="Slow-Heated Wisdom" imageSrc={ghee.src} />
        </div>
      </Container>
    </section>
  );
}
