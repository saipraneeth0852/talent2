import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Landmark, Radio, Cpu, Rocket } from "lucide-react";

const industries = [
  { icon: Code2, name: "SaaS & Product", roles: "120+" },
  { icon: Brain, name: "AI / Data Science", roles: "80+" },
  { icon: Landmark, name: "FinTech", roles: "60+" },
  { icon: Radio, name: "Telecom & Networking", roles: "45+" },
  { icon: Cpu, name: "Electronics & Hardware", roles: "35+" },
  { icon: Rocket, name: "Startups & GCCs", roles: "90+" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Sectors</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-tight">Industries We Support</h2>
          <p className="text-muted-foreground mt-4">We specialize in hiring for high-growth sectors.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group glow-card rounded-2xl p-6 bg-card text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                <ind.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{ind.name}</h3>
              <span className="text-xs text-muted-foreground">{ind.roles} roles filled</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
