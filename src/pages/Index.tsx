import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Approach } from "@/components/Approach";
import { Timeline } from "@/components/Timeline";
import { WhatYouGet } from "@/components/WhatYouGet";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleJoinWaitlist = () => {
    toast.success("Thanks for your interest! We'll review your application soon.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative">
      <Hero />
      <StatsSection />
      <Benefits />
      <Approach />
      <WhatYouGet />
      <Timeline />
      
      {/* Bottom CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-primary-light via-white to-accent-light">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Ready to Transform Your Business?
          </h2>
          <Button
            onClick={handleJoinWaitlist}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply for Early Access
          </Button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </main>
  );
};

export default Index;