import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Hero = () => {
  const handleJoinWaitlist = () => {
    toast.success("Thanks for your interest! We'll review your application soon.");
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-primary-light via-white to-accent-light animate-gradient-x relative overflow-hidden">
      {/* Enhanced grid background with better opacity and blur */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40" />
      
      {/* Floating orbs in background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <span className="text-2xl">🚀</span>
          <span className="text-primary font-semibold text-lg">Early AI-dopters</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-accent animate-gradient-x">
          Transform Your Business with Real-World AI Implementation
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-10 text-text-light max-w-3xl mx-auto leading-relaxed">
          An exclusive community for <span className="font-bold text-primary">vetted</span> business leaders pioneering practical AI integration in their organizations.
        </h2>
        
        <div className="space-y-8">
          <Button
            onClick={handleJoinWaitlist}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply for Early Access
          </Button>
          
          <div className="text-center space-y-2">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Launching January 2025
            </p>
            <p className="text-sm md:text-base text-text-light">
              We'll select 5 businesses for applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};