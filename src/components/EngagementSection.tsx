import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const models = [
  {
    name: "Contingency Hiring",
    tagline: "Success-based hiring",
    items: ["Pay only on successful hire", "Individual role filling", "Quick turnaround", "No upfront fees"],
    popular: false,
  },
  {
    name: "Dedicated Recruiter",
    tagline: "Your extended hiring arm",
    items: ["Dedicated recruitment team", "Sourcing specialist included", "Hiring analytics & reporting", "Scalable capacity"],
    popular: true,
  },
  {
    name: "RPO",
    tagline: "Complete hiring management",
    items: ["Full recruitment process", "Employer branding support", "HR operations & payroll", "Compliance management"],
    popular: false,
  },
];

const EngagementSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-surface-2">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Models</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-tight">Engagement Models</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`glow-card rounded-2xl p-8 bg-card relative
                ${model.popular ? "ring-2 ring-primary/40 md:-mt-4 md:mb-0 md:pb-10" : ""}
              `}
            >
              {model.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{model.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{model.tagline}</p>
              <ul className="space-y-3">
                {model.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm group">
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition-all
                ${model.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border hover:bg-muted/50"
                }
              `}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
