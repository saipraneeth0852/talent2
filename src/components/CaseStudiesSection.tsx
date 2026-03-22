import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    title: "Scaling a SaaS Startup",
    context: "A fast-growing SaaS company needed to double their engineering team in record time.",
    metrics: [
      { value: "15", label: "Engineers Hired" },
      { value: "2 mo", label: "Time to Fill" },
      { value: "40%", label: "Faster Hiring" },
    ],
    color: "primary",
  },
  {
    title: "Building an Offshore Engineering Team",
    context: "A US-based company wanted to establish a dedicated India engineering center from scratch.",
    metrics: [
      { value: "25", label: "Team Members" },
      { value: "10 wk", label: "Time to Build" },
      { value: "100%", label: "Retention Rate" },
    ],
    color: "secondary",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-surface-2">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Results</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-tight">Case Studies</h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={`glow-card rounded-2xl p-8 md:p-10 bg-card flex flex-col md:flex-row gap-8 items-start
                border-l-4 ${c.color === "secondary" ? "border-l-secondary" : "border-l-primary"}
              `}
            >
              <div className="flex-1">
                <span className="label-text text-muted-foreground">Case Study {i + 1}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.context}</p>
              </div>
              <div className="flex gap-8 md:gap-10 shrink-0">
                {c.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
