import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Features } from "@/components/layout/Features";
import { Stats } from "@/components/layout/Stats";
import { HowItWorks } from "@/components/layout/HowItWorks";
import { Pricing } from "@/components/layout/Pricing";
import { FAQ } from "@/components/layout/FAQ";
import { CTA } from "@/components/layout/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
