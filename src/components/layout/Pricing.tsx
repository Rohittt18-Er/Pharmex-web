import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹200",
      description: "Ideal for small pharmacies in Uttar Pradesh looking to digitize.",
      features: ["Up to 500 orders/month", "Basic Inventory", "Daily Reports", "WhatsApp Support"]
    },
    {
      name: "Professional + AI",
      price: "₹500",
      description: "Advanced features with AI for growing urban pharmacy centers.",
      isPopular: true,
      features: ["AI Inventory Prediction", "Unlimited orders", "Advanced Analytics", "Employee Management", "GST Ready Invoicing"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "The complete suite for large-scale operations and pharmacy chains.",
      features: ["Smart Customer Insights", "Multi-location support", "Dedicated Manager", "Full API Access", "Custom Integrations"]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the plan that's right for your business. All plans include 14-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col ${plan.isPopular ? 'border-blue-500/50 bg-blue-500/5' : 'bg-white/5'}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="ml-1 text-gray-400">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/10 hover:bg-white/20'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
