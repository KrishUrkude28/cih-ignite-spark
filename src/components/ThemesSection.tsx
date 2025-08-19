import { CreditCard, GraduationCap, Heart, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ThemesSection = () => {
  const themes = [
    {
      icon: CreditCard,
      title: "FinTech",
      subtitle: "Financial Innovation",
      description: "Revolutionize banking, payments, lending, and financial services with cutting-edge technology solutions.",
      color: "primary",
      examples: ["Digital Banking", "Cryptocurrency", "Payment Solutions", "InsurTech"]
    },
    {
      icon: GraduationCap,
      title: "Ed-Tech",
      subtitle: "Education Technology",
      description: "Transform learning experiences through innovative educational platforms, tools, and methodologies.",
      color: "secondary",
      examples: ["E-Learning Platforms", "Virtual Classrooms", "Skill Assessment", "AR/VR Learning"]
    },
    {
      icon: Heart,
      title: "MedTech",
      subtitle: "Healthcare Innovation",
      description: "Develop solutions that improve healthcare delivery, patient outcomes, and medical accessibility.",
      color: "accent",
      examples: ["Telemedicine", "Health Monitoring", "Medical AI", "Digital Therapeutics"]
    },
    {
      icon: Leaf,
      title: "SDGs",
      subtitle: "Sustainable Development",
      description: "Create impactful solutions addressing UN Sustainable Development Goals for a better world.",
      color: "primary",
      examples: ["Climate Action", "Clean Energy", "Zero Hunger", "Quality Education"]
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-primary";
      case "secondary": return "bg-gradient-secondary";
      case "accent": return "bg-gradient-accent";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Hackathon <span className="bg-gradient-secondary bg-clip-text text-transparent">Themes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your domain and build solutions that matter. Each theme offers unique challenges 
              and opportunities to create real-world impact.
            </p>
          </div>
          
          {/* Themes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:shadow-primary/20 border-border/50 hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${getGradientClass(theme.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <theme.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {theme.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {theme.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {theme.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                      Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {theme.examples.map((example, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Can't decide? You can combine themes or propose your own innovative approach!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent rounded-full text-accent-foreground font-semibold animate-pulse-slow">
              <span>🚀</span>
              <span>Cross-domain solutions are encouraged!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;