export const Timeline = () => {
  const timelineItems = [
    {
      date: "Now",
      title: "Join Waitlist",
      description: "Be among the first to shape the future of AI implementation"
    },
    {
      date: "Dec 2024",
      title: "We'll Handpick 5 Applicants",
      description: "Begin hands-on refinement with selected organizations"
    },
    {
      date: "Jan 2025",
      title: "Official Launch",
      description: "Community opens to approved business leaders"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-primary">
          Timeline to Launch
        </h3>
        
        {/* Mobile view */}
        <div className="md:hidden space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-primary-light/20 p-6 rounded-2xl shadow-lg">
              <div className="text-primary font-bold mb-2">{item.date}</div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-text-light">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary transform -translate-x-1/2" />
          
          {/* Timeline items */}
          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Date bubble */}
                <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-primary flex items-center justify-center z-10 shadow-lg">
                  <span className="text-sm font-bold text-primary whitespace-nowrap px-1">{item.date}</span>
                </div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                  <div className="bg-gradient-to-br from-white to-primary-light/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-lg text-text-light">{item.description}</p>
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