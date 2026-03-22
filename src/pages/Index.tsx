import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyUsSection from "@/components/WhyUsSection";
import EngagementSection from "@/components/EngagementSection";
import OffshoreCTA from "@/components/OffshoreCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <ProcessSection />
    <IndustriesSection />
    <CaseStudiesSection />
    <WhyUsSection />
    <EngagementSection />
    <OffshoreCTA />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
