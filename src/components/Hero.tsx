import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Hero = () => {
  const handleJoinWaitlist = () => {
    toast.success("Thanks for joining! We'll be in touch soon.");
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-primary-light via-white to-accent-light animate-gradient-x">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Early AI-dopters 🚀
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">
          Transform Your Business with Real-World AI Implementation
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-text-light">
          Join a private community of forward-thinking leaders refining how they use AI—together.
        </p>
        <Button
          onClick={handleJoinWaitlist}
          size="lg"
          className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6"
        >
          Join the Waitlist
        </Button>
        <p className="mt-6 text-sm text-text-light">
          Launching January 2025. We're selecting 5 businesses to receive hands-on AI roadmap guidance before launch.
        </p>
      </div>
    </section>
  );
};