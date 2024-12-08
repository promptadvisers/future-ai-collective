import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Approach } from "@/components/Approach";
import { Timeline } from "@/components/Timeline";
import { Testimonial } from "@/components/Testimonial";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Approach />
      <Timeline />
      <Testimonial />
    </main>
  );
};

export default Index;