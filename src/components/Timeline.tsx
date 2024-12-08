export const Timeline = () => {
  const timelineItems = [
    {
      date: "Now",
      title: "Join Waitlist",
      description: "Be among the first to shape the future of AI implementation"
    },
    {
      date: "Dec 2024",
      title: "Select 5 Businesses",
      description: "Begin hands-on refinement with selected organizations"
    },
    {
      date: "Jan 2025",
      title: "Official Launch",
      description: "Community opens to approved business leaders"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary">
          Timeline to Launch
        </h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary" />
          
          {/* Timeline items */}
          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Date bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-primary flex items-center justify-center z-10 shadow-lg">
                  <span className="text-sm font-bold text-primary">{item.date}</span>
                </div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                  <div className="bg-gradient-to-br from-white to-primary-light/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-text-light text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};