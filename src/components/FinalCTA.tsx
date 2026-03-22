import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold heading-tight gradient-text mb-6"
        >
          Ready to accelerate?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-lg mx-auto mb-10"
        >
          Let's build your team faster. Book a free hiring consultation with our talent experts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:hr@talentaccel.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold animate-shimmer text-primary-foreground"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:hr@talentaccel.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-border hover:bg-muted/50 transition-all"
          >
            Talk to Our Experts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
