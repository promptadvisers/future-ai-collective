import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  value: number;
  label: string;
  duration?: number;
}

const StatItem = ({ value, label, duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {count}+
        </span>
        <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <p className="text-text-light text-lg md:text-xl text-center">{label}</p>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      value: 1500,
      label: "Calls guiding AI implementation",
    },
    {
      value: 500,
      label: "Generative AI projects delivered",
    },
    {
      value: 100,
      label: "Professionals trained to leverage AI",
    },
    {
      value: 5,
      label: "Generative AI domains covered",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-light via-white to-accent-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Our Track Record
        </h2>
        <p className="text-xl text-text-light text-center mb-12">
          Since November 2022
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};