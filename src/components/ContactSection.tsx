import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Venue Location",
      details: ["VNIT Convention Center", "Visvesvaraya National Institute of Technology", "South Ambazari Road, Nagpur, Maharashtra 440010"],
      link: "https://maps.google.com"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["General: contact@cihnagpur.com", "Sponsorship: sponsors@cihnagpur.com", "Support: support@cihnagpur.com"],
      link: "mailto:contact@cihnagpur.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109", "Mon-Fri: 9:00 AM - 6:00 PM"],
      link: "tel:+919876543210"
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Twitter, url: "#", name: "Twitter" },
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Facebook, url: "#", name: "Facebook" }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground hover:text-foreground transition-colors">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media */}
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-muted hover:bg-primary/20 rounded-xl flex items-center justify-center hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                  />
                </div>
                <Button variant="cta" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Registration CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="text-3xl font-bold">Ready to Join CIH 2024?</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Don't wait! Registration closes soon. Secure your spot in Central India's biggest hackathon.
              </p>
              <Button variant="cta" size="lg" className="animate-glow">
                Register Your Team Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border/50 mt-20 pt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  Central India Hackathon
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Empowering innovation and fostering technological excellence in Central India. 
                  Join us in building the future, one hack at a time.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-lg flex items-center justify-center hover:text-primary transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About CIH</a></li>
                  <li><a href="#themes" className="text-muted-foreground hover:text-primary transition-colors">Themes</a></li>
                  <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</a></li>
                  <li><a href="#speakers" className="text-muted-foreground hover:text-primary transition-colors">Speakers</a></li>
                  <li><a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">Prizes</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Code of Conduct</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 Central India Hackathon. All rights reserved. Made with ❤️ in Nagpur.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;