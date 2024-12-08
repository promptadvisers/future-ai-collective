import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Hero = () => {
  const handleJoinWaitlist = () => {
    toast.success("Thanks for joining! We'll be in touch soon.");
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-primary-light via-white to-accent-light animate-gradient-x relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-6 shadow-sm">
          <span className="text-xl">🚀</span>
          <span className="text-primary font-semibold">Early AI-dopters</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-accent">
          Transform Your Business with Real-World AI Implementation
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 text-text-light max-w-3xl mx-auto leading-relaxed">
          An exclusive community for business leaders and decision-makers pioneering practical AI integration in their organizations.
        </h2>
        
        <div className="space-y-6">
          <Button
            onClick={handleJoinWaitlist}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Join the Waitlist
          </Button>
          
          <p className="text-sm md:text-base text-text-light max-w-2xl mx-auto">
            <strong className="font-semibold">Launching January 2025</strong>. We'll select 5 businesses for applications.
          </p>
        </div>
      </div>
    </section>
  );
};