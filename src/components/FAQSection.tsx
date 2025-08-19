import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in CIH 2024?",
      answer: "CIH 2024 is open to students, working professionals, entrepreneurs, and anyone passionate about technology and innovation. Teams can have 2-4 members, and at least one member should be from Maharashtra or Central India region."
    },
    {
      question: "What are the participation fees?",
      answer: "CIH 2024 is completely FREE to participate! We believe in making innovation accessible to everyone. All you need to bring is your creativity, passion, and problem-solving skills."
    },
    {
      question: "Can I participate individually or do I need a team?",
      answer: "While we encourage team participation (2-4 members) for better collaboration and diverse skills, individual participation is also allowed. We can help connect individual participants with others to form teams during the registration process."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any development tools you prefer, and most importantly, your creativity! We'll provide venue, Wi-Fi, meals, refreshments, and a collaborative environment. External hardware components are allowed but need to be declared during registration."
    },
    {
      question: "Will food and accommodation be provided?",
      answer: "Yes! We provide all meals, snacks, and refreshments throughout the 48-hour event. For outstation participants, we're partnering with local hostels and budget hotels to provide accommodation at discounted rates."
    },
    {
      question: "What technologies can we use?",
      answer: "You're free to use any programming languages, frameworks, APIs, or tools you're comfortable with. Whether it's web, mobile, AI/ML, blockchain, IoT, or hardware solutions - all approaches are welcome as long as they align with your chosen theme."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on: Innovation & Creativity (25%), Technical Excellence (25%), Problem-Solving Impact (25%), Presentation & Demo (15%), and Feasibility & Scalability (10%). Our expert judges come from various industry backgrounds."
    },
    {
      question: "What are the prizes and benefits?",
      answer: "Winners receive cash prizes totaling ₹5+ lakhs, mentorship opportunities, internship offers from partner companies, certificates, and networking opportunities. All participants get certificates of participation and access to our alumni network."
    },
    {
      question: "Is there any support for beginners?",
      answer: "Absolutely! We have dedicated mentorship sessions, technical workshops during the event, and experienced volunteers to help beginners. We encourage participation from all skill levels - what matters most is your enthusiasm to learn and create."
    },
    {
      question: "How do I register and what's the deadline?",
      answer: "Registration is open until March 10, 2024. Simply click the 'Register Now' button, fill out the form with your team details, and select your preferred theme. You'll receive a confirmation email with further instructions."
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Frequently Asked <span className="bg-gradient-accent bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Got questions? We've got answers! Find everything you need to know about CIH 2024.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl bg-muted/20 hover:bg-muted/30 transition-colors duration-300 px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-6">
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help! Reach out to us anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contact@cihnagpur.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="tel:+919876543210"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;