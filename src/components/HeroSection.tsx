import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const sectors = ["SaaS", "AI/ML", "FinTech", "Telecom", "Electronics", "GCCs", "Startups", "Product"];

const HeroSection = () => {
  const words = [
    { text: "Build Teams.", gradient: false },
    { text: "Move Fast.", gradient: false },
    { text: "Scale Without Limits.", gradient: true },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dark:dot-grid dot-grid-light">
      {/* Ambient orbs */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-secondary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[840px] mx-auto text-center px-6 pt-32 pb-16">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="label-text text-primary">Hiring Partners for India's Fastest-Growing Startups</span>
        </motion.div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold heading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              className={`block ${word.gradient ? "gradient-text" : ""}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-lg text-muted-foreground max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          TalentAccel partners with startups and growing companies to build high-performing teams, streamline HR operations, and ensure compliance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold animate-shimmer text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a Hiring Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-border hover:bg-muted/50 transition-all"
          >
            Explore Our Services
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="text-xs text-muted-foreground"
        >
          Join 50+ companies already scaling with TalentAccel
        </motion.p>
      </div>

      {/* Marquee ticker */}
      <div className="w-full border-t border-border py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...sectors, ...sectors, ...sectors, ...sectors].map((s, i) => (
            <span key={i} className="mx-6 text-sm font-medium text-muted-foreground">
              {s} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
