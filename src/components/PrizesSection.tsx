import { Trophy, Award, Users, Briefcase, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrizesSection = () => {
  const prizes = [
    {
      rank: "1st Place",
      amount: "₹2,00,000",
      color: "primary",
      icon: Trophy,
      benefits: ["Cash Prize", "Trophy & Certificate", "Mentorship Program", "Internship Opportunities"]
    },
    {
      rank: "2nd Place", 
      amount: "₹1,50,000",
      color: "secondary",
      icon: Award,
      benefits: ["Cash Prize", "Trophy & Certificate", "Mentorship Program", "Industry Networking"]
    },
    {
      rank: "3rd Place",
      amount: "₹1,00,000", 
      color: "accent",
      icon: Star,
      benefits: ["Cash Prize", "Trophy & Certificate", "Mentorship Access", "Community Recognition"]
    }
  ];

  const specialPrizes = [
    {
      title: "Best FinTech Solution",
      prize: "₹50,000",
      sponsor: "Razorpay",
      icon: Briefcase
    },
    {
      title: "Best Ed-Tech Innovation",
      prize: "₹50,000", 
      sponsor: "BYJU'S",
      icon: Users
    },
    {
      title: "Best MedTech Solution",
      prize: "₹50,000",
      sponsor: "Apollo Hospitals",
      icon: Heart
    },
    {
      title: "Best SDG Impact",
      prize: "₹50,000",
      sponsor: "Tata Trusts",
      icon: Star
    }
  ];

  const benefits = [
    {
      title: "Mentorship Program",
      description: "6-month guided mentorship from industry experts and successful entrepreneurs",
      icon: Users
    },
    {
      title: "Internship Opportunities", 
      description: "Direct interview opportunities with our partner companies and startups",
      icon: Briefcase
    },
    {
      title: "Startup Incubation",
      description: "Fast-track entry into partner incubators and accelerator programs",
      icon: Star
    },
    {
      title: "Alumni Network",
      description: "Lifetime access to CIH alumni network for collaboration and opportunities",
      icon: Heart
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Prizes & <span className="bg-gradient-primary bg-clip-text text-transparent">Rewards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Compete for amazing cash prizes, exclusive opportunities, and recognition in Central India's tech ecosystem
            </p>
          </div>
          
          {/* Main Prizes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {prizes.map((prize, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:shadow-primary/20 border-border/50 hover:border-primary/30 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 ${getGradientClass(prize.color)} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`w-20 h-20 ${getGradientClass(prize.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <prize.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {prize.rank}
                  </CardTitle>
                  <div className="text-4xl font-black text-primary mt-2">
                    {prize.amount}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {prize.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Special Category Prizes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Special Category <span className="bg-gradient-secondary bg-clip-text text-transparent">Awards</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialPrizes.map((special, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:shadow-secondary/20 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <special.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-secondary transition-colors">
                      {special.title}
                    </h4>
                    <div className="text-2xl font-bold text-secondary mb-2">
                      {special.prize}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sponsored by <span className="font-semibold">{special.sponsor}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Additional Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              Beyond <span className="bg-gradient-accent bg-clip-text text-transparent">Cash Prizes</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 animate-slide-up"
                  style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Total Prize Pool */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
              <Trophy className="w-12 h-12 text-primary" />
              <div className="text-left">
                <h3 className="text-3xl font-black text-primary mb-2">₹7+ Lakhs</h3>
                <p className="text-lg text-muted-foreground">Total Prize Pool + Benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;