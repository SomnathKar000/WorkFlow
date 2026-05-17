import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <main className="content-container">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </main>
  );
};

export default Home;
