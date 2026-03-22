import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Placements Made" },
  { value: 50, suffix: "+", label: "Companies Served" },
  { value: 40, suffix: "%", label: "Faster Time-to-Hire" },
  { value: 15, suffix: "+", label: "Industries Covered" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-5xl md:text-7xl font-extrabold tabular-nums text-foreground">
        {count}{suffix}
      </div>
      <div className="label-text text-muted-foreground mt-3">{stats.find(s => s.value === target)?.label}</div>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-20 md:py-28 border-y border-border bg-surface-2">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div key={i} className={`${i > 0 ? "md:border-l md:border-border" : ""}`}>
            <Counter target={stat.value} suffix={stat.suffix} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
