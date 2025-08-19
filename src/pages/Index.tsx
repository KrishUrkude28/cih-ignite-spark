import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import TimelineSection from "@/components/TimelineSection";
import SpeakersSection from "@/components/SpeakersSection";
import PrizesSection from "@/components/PrizesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="themes">
        <ThemesSection />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="prizes">
        <PrizesSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
