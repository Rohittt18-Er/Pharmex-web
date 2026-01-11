import { Card, CardContent } from "@/components/ui/Card";
import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:border-blue-500/40 transition-colors group">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Compliant</h3>
              <p className="text-gray-400">Enterprise-grade security with full HIPAA compliance and automated audit trails.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-purple-500/40 transition-colors group">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Sync</h3>
              <p className="text-gray-400">Instant synchronization across all devices with zero latency. Always up to date.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-emerald-500/40 transition-colors group">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <BarChart3 className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-400">Deep insights into sales, inventory turnover, and staff performance.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
