import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BarChart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const bars = [
    { label: "Start", value: 5, height: 20 },
    { label: "3 Months", value: 15, height: 55 },
    { label: "6 Months", value: 30, height: 100 },
  ];

  return (
    <div ref={ref} className="flex items-end gap-6 h-48">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-2 flex-1">
          <span className="text-xs font-bold text-foreground">{bar.value}</span>
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: `${bar.height}%` } : {}}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-t-lg bg-gradient-to-t from-primary to-secondary"
          />
          <span className="text-[10px] text-muted-foreground font-medium mt-1">{bar.label}</span>
        </div>
      ))}
    </div>
  );
};

const OffshoreCTA = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden glow-card">
        <div className="p-10 md:p-14 bg-card">
          <span className="label-text text-secondary mb-4 block">Offshore Teams</span>
          <h2 className="text-3xl md:text-4xl font-bold heading-tight mb-4">Build High-Performance Teams in India</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            From talent sourcing to HR operations and compliance, we provide an end-to-end solution that enables companies to scale efficiently.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
            Book a Consultation
          </a>
        </div>
        <div className="p-10 md:p-14 bg-surface-2 flex items-center justify-center">
          <div className="w-full max-w-[240px]">
            <p className="label-text text-muted-foreground mb-6 text-center">Team Scaling</p>
            <BarChart />
            <p className="text-xs text-muted-foreground text-center mt-4">Engineers over time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OffshoreCTA;
