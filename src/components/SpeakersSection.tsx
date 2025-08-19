import { Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Sharma",
      title: "Chief Technology Officer",
      company: "TechMahindra",
      image: speaker1,
      bio: "15+ years in enterprise technology and digital transformation. Leading AI/ML initiatives across multiple industries.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Priya Desai", 
      title: "Founder & CEO",
      company: "InnovateEd Solutions",
      image: speaker2,
      bio: "EdTech entrepreneur and angel investor. Built and scaled multiple successful startups in the education technology space.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Amit Patel",
      title: "Director of Engineering",
      company: "Razorpay",
      image: speaker1,
      bio: "FinTech expert with deep experience in payment systems, financial APIs, and blockchain technology.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Sneha Kumar",
      title: "Head of Innovation",
      company: "Apollo Hospitals",
      image: speaker2,
      bio: "Healthcare technology leader driving digital health initiatives and telemedicine solutions across India.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const judges = [
    {
      name: "Vikram Singh",
      title: "Partner",
      company: "Sequoia Capital India",
      expertise: "Startup Ecosystem & Venture Capital"
    },
    {
      name: "Meera Joshi",
      title: "VP Engineering",
      company: "Flipkart",
      expertise: "Product Development & Scaling"
    },
    {
      name: "Dr. Rahul Gupta",
      title: "Research Director",
      company: "Microsoft Research India",
      expertise: "AI/ML & Research Innovation"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Speakers Section */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Keynote <span className="bg-gradient-primary bg-clip-text text-transparent">Speakers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Learn from industry leaders and visionaries who are shaping the future of technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:shadow-primary/10 border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{speaker.title}</p>
                    <p className="text-muted-foreground font-medium mb-4">{speaker.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {speaker.bio}
                    </p>
                    
                    <div className="flex justify-center gap-3">
                      <a 
                        href={speaker.linkedin} 
                        className="w-8 h-8 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={speaker.twitter}
                        className="w-8 h-8 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Judges Section */}
          <div>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Expert <span className="bg-gradient-secondary bg-clip-text text-transparent">Judges</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your projects will be evaluated by seasoned professionals and industry experts
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {judges.map((judge, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-foreground">
                      {judge.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
                  <p className="text-secondary font-semibold mb-1">{judge.title}</p>
                  <p className="text-muted-foreground font-medium mb-3">{judge.company}</p>
                  <p className="text-sm text-muted-foreground">{judge.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;