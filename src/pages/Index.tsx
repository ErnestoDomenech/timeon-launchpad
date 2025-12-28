import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import CredibilitySection from "@/components/CredibilitySection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TimeOn - Control Horario Legal desde WhatsApp | Sin Apps, Sin Formación</title>
        <meta
          name="description"
          content="Control horario legal desde WhatsApp para PYMEs. Sin instalar apps, sin formación, con adopción inmediata. Cumple la normativa española de forma sencilla."
        />
        <meta
          name="keywords"
          content="control horario, fichaje WhatsApp, registro jornada laboral, normativa control horario España, PYME, autónomos"
        />
        <link rel="canonical" href="https://timeon.es" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <DifferentiatorSection />
          <CredibilitySection />
          <OfferSection />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
