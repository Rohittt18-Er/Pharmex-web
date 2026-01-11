import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            v2.0 Now Available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Empowering Pharmacies <br />
            <span className="text-blue-500">across Uttar Pradesh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            The first AI-powered pharmacy management system designed specifically for Bharat. Streamline your GST invoicing, inventory, and analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20">
                Start Functioning Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10">
                Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
    </section>
  );
}
