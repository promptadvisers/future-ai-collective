import { Check, Target, Users, FileCode, BookOpen, Brain, Network } from "lucide-react";

export const WhatYouGet = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized AI Roadmaps",
      description: "Get tailored guidance to align AI solutions with your unique business goals."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Coaching & Feedback",
      description: "Access monthly calls with Mark Kashef and select advisors who provide direct, actionable insights."
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Exclusive Content & Tools",
      description: "Tap into a curated library of proprietary templates, ROI calculators, and automation frameworks available only to members."
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Implementation Blueprints",
      description: "Follow step-by-step workflows and proven processes from businesses already thriving with AI."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Peer Insights",
      description: "Connect with forward-thinking CEOs, founders, and decision-makers sharing real-world lessons—not just theory."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Professional Networking",
      description: "Build valuable connections with like-minded professionals, fostering collaboration and knowledge sharing in the AI implementation space."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-light/20 to-accent-light/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-accent">
            What You'll Get Inside Our Community
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Experience hands-on support, exclusive tools, and real-world insights designed to help you master AI implementation and drive tangible business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/5"
            >
              <div className="mb-6 text-primary group-hover:text-accent transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-dark transition-colors">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-text-light max-w-4xl mx-auto italic">
          All of these resources, conversations, and frameworks are built to help you implement AI more effectively, accelerate your business growth, and stay ahead of the curve.
        </p>
      </div>
    </section>
  );
};