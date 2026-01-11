import { ClipboardList, Settings, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-400" />,
      title: "Register Your Pharmacy",
      description: "Sign up and complete your profile with pharmacy details and necessary licenses."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-400" />,
      title: "Configure Inventory",
      description: "Import your current stock and set up automated reorder points for essential medicines."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-400" />,
      title: "Scale Your Business",
      description: "Use our real-time analytics to optimize your operations and increase your profit margins."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Pharmex is designed to be intuitive and powerful. Get up and running in minutes with our streamlined onboarding process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent -z-10"></div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
