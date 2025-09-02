import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramBenefits from "@/components/ProgramBenefits";
import HowItWorks from "@/components/HowItWorks";
import ProjectTypes from "@/components/ProjectTypes";
import ReferralCalculator from "@/components/ReferralCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProgramBenefits />
      <HowItWorks />
      <ProjectTypes />
      <ReferralCalculator />
      <Testimonials />
      <FAQ />
      <ApplyForm />
      <Footer />
    </div>
  );
};

export default Index;
