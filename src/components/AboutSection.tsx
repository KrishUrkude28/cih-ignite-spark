import { Code, Users, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Innovation Hub",
      description: "Central India's premier platform for technological innovation and creative problem-solving."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Bringing together the brightest minds from across Maharashtra and Central India."
    },
    {
      icon: Lightbulb,
      title: "Real Impact",
      description: "Focus on solutions that address real-world challenges and create meaningful change."
    },
    {
      icon: Target,
      title: "Future Ready",
      description: "Preparing the next generation of tech leaders and entrepreneurs for tomorrow's challenges."
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">CIH 2024</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Central India Hackathon (CIH) is more than just a coding competition – it's a movement to establish 
              Nagpur and Central India as a thriving tech ecosystem. Our mission is to foster innovation, 
              collaboration, and entrepreneurship among the region's talented developers, designers, and visionaries.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Join the Innovation Revolution</h3>
                <p className="text-muted-foreground">
                  Be part of Central India's largest hackathon and shape the future of technology in our region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;