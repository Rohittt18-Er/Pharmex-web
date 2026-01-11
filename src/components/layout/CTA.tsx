import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden text-center">
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to transform your <span className="text-blue-200">pharmacy?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of pharmacies worldwide that trust Pharmex to power their daily operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register">
                <Button size="lg" className="h-16 px-10 text-xl bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl border-white/30 bg-white/10 text-white hover:bg-white/20">
                  Contact Sales <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-blue-200 text-sm font-medium">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
