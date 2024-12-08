export const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "📊",
              title: "Actionable AI Roadmaps",
              description: "Strategic implementation plans tailored for decision-makers"
            },
            {
              icon: "🤝",
              title: "Trusted Peer Network",
              description: "Connect with fellow business leaders driving AI innovation"
            },
            {
              icon: "💡",
              title: "Expert Guidance",
              description: "Direct access to proven AI integration strategies"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-text-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};