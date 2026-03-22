import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, CreditCard, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Users,
    label: "Recruitment",
    title: "Talent Acquisition",
    desc: "Permanent hiring, contract staffing, executive search, and startup hiring support with deep talent networks.",
    large: true,
  },
  {
    icon: Building2,
    label: "Offshore",
    title: "Offshore / India Team Buildout",
    desc: "Build high-quality teams in India with talent sourcing, HR setup, and compliance management.",
    large: true,
    featured: true,
  },
  {
    icon: CreditCard,
    label: "Payroll",
    title: "Payroll & Compliance",
    desc: "PF/ESIC/PT filings, labour law compliance, contractor payroll, and compliance audits.",
  },
  {
    icon: Settings,
    label: "HR Ops",
    title: "HR Advisory & Operations",
    desc: "HR policy development, HRMS implementation, performance management, and compliance advisory.",
  },
  {
    icon: Users,
    label: "Teams",
    title: "Dedicated Hiring Teams",
    desc: "Dedicated recruiter, sourcing specialist, hiring analytics, and reporting for your scaling needs.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold heading-tight">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`group glow-card rounded-2xl p-8 bg-card cursor-pointer
                ${service.large && i < 2 ? "lg:col-span-1 md:col-span-1" : ""}
                ${service.featured ? "ring-1 ring-primary/30" : ""}
              `}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-secondary/20" : "bg-primary/10"
              }`}>
                <service.icon className={`w-6 h-6 ${service.featured ? "text-secondary" : "text-primary"}`} />
              </div>
              <span className="label-text text-muted-foreground">{service.label}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
