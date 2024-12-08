export const Benefits = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
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
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-primary-light/5 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-dark transition-colors">{benefit.title}</h3>
                <p className="text-text-light text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};