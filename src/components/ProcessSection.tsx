import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Users, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Understand Your Needs", desc: "We analyze your hiring goals, team structure, and growth plans with a free workplace audit.", accent: false },
  { num: "02", icon: Target, title: "Build the Hiring Strategy", desc: "We design a tailored recruitment or HR operations model for your specific requirements.", accent: false },
  { num: "03", icon: Users, title: "Source & Screen Talent", desc: "Our recruiters identify and evaluate the best candidates through deep talent networks.", accent: false },
  { num: "04", icon: Rocket, title: "Scale Your Team", desc: "We support onboarding, HR operations, and compliance as your team grows.", accent: true },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 bg-surface-2">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-tight">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">We start with a free audit at your workplace to assess your needs, then execute with precision.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Dashed line */}
          <div className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-border hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Number circle */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-bold text-sm
                  ${step.accent ? "bg-secondary/20 text-secondary border border-secondary/30" : "bg-primary/10 text-primary border border-primary/20"}
                `}>
                  {step.num}
                </div>

                <div className={`flex-1 p-6 rounded-2xl glow-card bg-card ${step.accent ? "ring-1 ring-secondary/30" : ""}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className={`w-5 h-5 ${step.accent ? "text-secondary" : "text-primary"}`} />
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {/* Watermark number */}
                <span className="absolute -left-4 top-0 text-[120px] font-extrabold text-foreground/[0.03] leading-none pointer-events-none select-none hidden lg:block">
                  {step.num}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
