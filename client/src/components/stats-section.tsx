import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function StatsSection() {
  const { data: waitlistData } = useQuery({
    queryKey: ["/api/waitlist/count"],
  });

  const waitlistCount = waitlistData?.count || 150;

  const stats = [
    {
      value: 500,
      label: "Projects Completed",
      color: "text-primary",
    },
    {
      value: 98,
      label: "Client Satisfaction %",
      color: "text-secondary",
    },
    {
      value: 24,
      label: "Hour Response Time",
      color: "text-accent",
    },
    {
      value: waitlistCount,
      label: "Current Waitlist",
      color: "text-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter end={stat.value} />
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
