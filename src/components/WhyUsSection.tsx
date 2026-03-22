import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Puzzle, Clock } from "lucide-react";

const features = [
  { icon: Zap, title: "Startup-Focused Approach", desc: "We understand the challenges of building teams in fast-growing companies." },
  { icon: Clock, title: "Speed & Quality", desc: "Our hiring process ensures faster closures without compromising on talent quality." },
  { icon: Shield, title: "End-to-End Support", desc: "From recruitment to HR operations and compliance, we support your entire people function." },
  { icon: Puzzle, title: "Flexible Engagement Models", desc: "Choose from contingency hiring, dedicated recruitment teams, or full HR outsourcing." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-32">
            <span className="label-text text-primary mb-4 block">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold heading-tight mb-4">Why TalentAccel</h2>
            <p className="text-muted-foreground leading-relaxed">We bring a product-first mindset to talent acquisition and HR operations.</p>
            <span className="text-[120px] font-extrabold text-foreground/[0.04] leading-none block mt-4 select-none">4</span>
          </div>

          <div className="space-y-0">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`py-8 ${i < features.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
