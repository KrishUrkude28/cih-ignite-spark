import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Code, Lightbulb, Target, Award, Clock, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 ml-auto">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  CIH 2024
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Central India Hackathon 2024
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the most exciting technology event in Central India. Two days of innovation, 
            collaboration, and creativity that will transform your ideas into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              March 15-16, 2024
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Nagpur, Maharashtra
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              ₹2L+ Prize Pool
            </Badge>
          </div>
          <Link to="/register">
            <Button variant="cta" size="xl">
              Register Your Team Now
            </Button>
          </Link>
        </div>

        {/* What is CIH Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What is Central India Hackathon?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              CIH 2024 is a premier technology event bringing together the brightest minds from across Central India. 
              It's a platform where innovation meets opportunity, and ideas transform into impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>48 Hours of Coding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Two intensive days of building, coding, and creating solutions that matter. 
                  Push your limits and discover what you can achieve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work on real-world problems across FinTech, Ed-Tech, MedTech, and SDGs. 
                  Your solutions can make a real difference.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with like-minded innovators, industry experts, and potential co-founders. 
                  Build lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Participate in CIH 2024?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just a competition, CIH 2024 is your gateway to the tech ecosystem of Central India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">For Students & Early Professionals</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Skill Development</h4>
                    <p className="text-muted-foreground">Learn new technologies, frameworks, and methodologies from industry experts and mentors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Recognition & Prizes</h4>
                    <p className="text-muted-foreground">Win exciting prizes, certificates, and recognition that can boost your career prospects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Networking Opportunities</h4>
                    <p className="text-muted-foreground">Meet potential co-founders, mentors, and industry professionals who can guide your journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">For Experienced Professionals</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Innovation Platform</h4>
                    <p className="text-muted-foreground">Test your ideas in a competitive environment and get feedback from industry experts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Tech Leadership</h4>
                    <p className="text-muted-foreground">Lead teams, mentor junior participants, and showcase your technical leadership skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Industry Recognition</h4>
                    <p className="text-muted-foreground">Gain visibility in the Central India tech ecosystem and potential career opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Details</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about the hackathon</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Schedule Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Day 1 - March 15, 2024</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>9:00 AM - Registration & Check-in</li>
                      <li>10:00 AM - Opening Ceremony</li>
                      <li>11:00 AM - Team Formation & Ideation</li>
                      <li>12:00 PM - Coding Begins</li>
                      <li>7:00 PM - Dinner & Networking</li>
                      <li>11:00 PM - Midnight Snacks</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="font-semibold">Day 2 - March 16, 2024</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>8:00 AM - Breakfast & Resume Coding</li>
                      <li>12:00 PM - Project Submission Deadline</li>
                      <li>1:00 PM - Lunch Break</li>
                      <li>2:00 PM - Project Presentations</li>
                      <li>5:00 PM - Judging & Evaluation</li>
                      <li>6:00 PM - Awards & Closing Ceremony</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-primary" />
                  What's Provided
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Meals & Refreshments</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All meals during the event</li>
                      <li>• 24/7 coffee, tea, and snacks</li>
                      <li>• Special midnight refreshments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Support</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High-speed internet connectivity</li>
                      <li>• Power outlets and charging stations</li>
                      <li>• Basic hardware components</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Swag & Certificates</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CIH 2024 t-shirts and stickers</li>
                      <li>• Participation certificates</li>
                      <li>• Winner trophies and medals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Themes Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hackathon Themes</h2>
            <p className="text-xl text-muted-foreground">Choose your domain and build solutions that matter</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">₹</span>
                </div>
                <CardTitle>FinTech</CardTitle>
                <CardDescription>Financial Technology Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Digital payments, blockchain, cryptocurrency, lending platforms, financial inclusion
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">📚</span>
                </div>
                <CardTitle>Ed-Tech</CardTitle>
                <CardDescription>Educational Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Online learning, skill development, educational games, accessibility in education
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">⚕️</span>
                </div>
                <CardTitle>MedTech</CardTitle>
                <CardDescription>Healthcare Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Telemedicine, health monitoring, medical devices, mental health solutions
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <CardTitle>SDGs</CardTitle>
                <CardDescription>Sustainable Development Goals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Climate action, clean energy, sustainable agriculture, social impact solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Innovation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on Central India's biggest hackathon. Register your team today and be part of the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="cta" size="xl">
                Register Your Team
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;