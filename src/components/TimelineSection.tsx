import { CheckCircle, Clock, Users, Trophy } from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      phase: "Registration Phase",
      title: "Team Registration Opens",
      date: "January 15 - March 10, 2024",
      description: "Register your team (2-4 members) and select your preferred hackathon theme.",
      icon: Users,
      status: "active",
      details: ["Online registration", "Team formation", "Theme selection", "Eligibility verification"]
    },
    {
      phase: "Selection Phase", 
      title: "Application Review & Shortlisting",
      date: "March 11 - March 14, 2024",
      description: "Our expert panel reviews applications and selects the top teams for the hackathon.",
      icon: CheckCircle,
      status: "upcoming",
      details: ["Application review", "Team shortlisting", "Confirmation emails", "Pre-event briefing"]
    },
    {
      phase: "Hackathon Phase",
      title: "48-Hour Hackathon Event",
      date: "March 15 - March 17, 2024", 
      description: "The main event! Build your solution, present to judges, and compete for amazing prizes.",
      icon: Clock,
      status: "upcoming",
      details: ["Opening ceremony", "48hrs development", "Mentorship sessions", "Final presentations"]
    },
    {
      phase: "Results Phase",
      title: "Winners Announcement & Awards",
      date: "March 17, 2024 Evening",
      description: "Closing ceremony with results announcement and prize distribution.",
      icon: Trophy,
      status: "upcoming", 
      details: ["Final judging", "Winner selection", "Prize distribution", "Networking session"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400 bg-green-400/20";
      case "active": return "text-primary bg-primary/20";
      case "upcoming": return "text-muted-foreground bg-muted/50";
      default: return "text-muted-foreground bg-muted/50";
    }
  };

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Event <span className="bg-gradient-accent bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From registration to results - here's your complete journey through CIH 2024
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getStatusColor(event.status)} border-4 border-background`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                            {event.phase}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                          <div className="text-lg font-semibold text-accent mb-2">{event.date}</div>
                        </div>
                        {event.status === "active" && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            Active Now
                          </div>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-2">
                        {event.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Clock className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Don't Miss Out!</h3>
                <p className="text-muted-foreground">Registration closes on March 10, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;