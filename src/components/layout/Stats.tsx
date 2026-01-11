export function Stats() {
  const stats = [
    { label: "Partnering across UP", value: "Upcoming" },
    { label: "Onboarding Now", value: "Live" },
    { label: "Made for Bharat", value: "100%" },
    { label: "Support (Hindi/Eng)", value: "24/7" },
  ];

  return (
    <section className="py-20 bg-blue-600/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
