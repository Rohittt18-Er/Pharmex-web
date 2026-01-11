export function FAQ() {
  const faqs = [
    {
      question: "Is Pharmex GST compliant?",
      answer: "Yes, Pharmex is fully GST compliant. You can generate HSN-coded invoices and export reports compatible with Tally and other accounting software used in India."
    },
    {
      question: "Can I manage scheduled drugs safely?",
      answer: "Absolutely. Our system follows Indian drug regulations, allowing you to track H1 and Schedule X medicine sales with automated mandate logging."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Yes, Pharmex is built with a mobile-first approach. You can access your dashboard and manage operations from any smartphone or tablet via a web browser."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 technical support via chat and email for all plans. Professional and Enterprise plans also include phone support and dedicated account management."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about Pharmex. Can't find the answer you're looking for? Reach out to our team.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
