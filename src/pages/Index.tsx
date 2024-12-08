import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Approach } from "@/components/Approach";
import { Timeline } from "@/components/Timeline";
import { WhatYouGet } from "@/components/WhatYouGet";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Approach />
      <WhatYouGet />
      <Timeline />
    </main>
  );
};

export default Index;