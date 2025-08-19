import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hackathon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Central India
            </span>
            <br />
            <span className="text-foreground">Hackathon</span>
            <br />
            <span className="text-3xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              2024
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where Innovation Meets Technology in the Heart of India
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold">March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold">Nagpur, Maharashtra</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group animate-glow">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">of Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">₹5L+</div>
              <div className="text-sm text-muted-foreground">in Prizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Themes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;