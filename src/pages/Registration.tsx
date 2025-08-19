import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    email: "",
    phone: "",
    college: "",
    theme: "",
    teamSize: "",
    experience: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Registration data:", formData);
  };

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
                <p className="text-xs text-muted-foreground -mt-1">Registration</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Register for CIH 2024
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join Central India's biggest hackathon and transform your ideas into reality
            </p>
            
            {/* Key Info Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">March 15-16</p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Nagpur</p>
                  <p className="text-sm text-muted-foreground">Maharashtra</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">2-4 Members</p>
                  <p className="text-sm text-muted-foreground">Per Team</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">₹2L+</p>
                  <p className="text-sm text-muted-foreground">Prize Pool</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Team Registration</CardTitle>
                  <CardDescription>
                    Fill in your team details to register for the hackathon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Team Name */}
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Team Name *</Label>
                      <Input
                        id="teamName"
                        placeholder="Enter your team name"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange("teamName", e.target.value)}
                        required
                      />
                    </div>

                    {/* Team Leader */}
                    <div className="space-y-2">
                      <Label htmlFor="teamLeader">Team Leader Name *</Label>
                      <Input
                        id="teamLeader"
                        placeholder="Enter team leader's full name"
                        value={formData.teamLeader}
                        onChange={(e) => handleInputChange("teamLeader", e.target.value)}
                        required
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="team@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* College */}
                    <div className="space-y-2">
                      <Label htmlFor="college">College/Organization *</Label>
                      <Input
                        id="college"
                        placeholder="Enter your college or organization name"
                        value={formData.college}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        required
                      />
                    </div>

                    {/* Theme and Team Size */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="theme">Preferred Theme *</Label>
                        <Select onValueChange={(value) => handleInputChange("theme", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="edtech">Ed-Tech</SelectItem>
                            <SelectItem value="medtech">MedTech</SelectItem>
                            <SelectItem value="sdgs">SDGs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size *</Label>
                        <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 Members</SelectItem>
                            <SelectItem value="3">3 Members</SelectItem>
                            <SelectItem value="4">4 Members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Idea (Optional)</Label>
                      <Textarea
                        id="description"
                        placeholder="Briefly describe your project idea or what you plan to build"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Register Team
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Registration Opens</span>
                    <Badge variant="secondary">Feb 1, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Registration Closes</span>
                    <Badge variant="secondary">March 10, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hackathon Begins</span>
                    <Badge variant="default">March 15, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Results Announced</span>
                    <Badge variant="default">March 16, 2024</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      48-hour hackathon experience
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Mentorship from industry experts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Workshops and tech talks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Networking opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Meals and refreshments
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Certificates and swag
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about registration? We're here to help!
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> register@cih2024.in</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;